"use client";

import { useMemo, useState, ReactNode, CSSProperties, useEffect } from "react";
import { Button } from "@/components/template/components/ui/Button";
import { FormItem, Form } from "@/components/template/components/ui/Form";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/template/components/ui/Input";
import { z } from "zod";
import { ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { components, ControlProps, OptionProps } from "react-select";
import { Avatar } from "@/components/template/components/ui/Avatar";
import Select, {
    Option as DefaultOption,
} from "@/components/template/components/ui/Select";
import { countryList } from "@/components/template/constants/countries.constant";
import NumericInput from "@/components/template/components/shared/NumericInput";
import { paymentMethods } from "@/components/template/constants/paymentMethods.constant";

interface CommonProps {
    id?: string;
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
}

interface TransactionFormProps extends CommonProps {
    disableSubmit?: boolean;
    setMessage?: (message: string) => void;
    translations?: any;
}

type TransactionFormSchema = {
    amount: number;
    senderDialCode: string;
    senderPhoneNumber: string;
    senderPaymentMethod: string;
    receiverDialCode: string;
    receiverPhoneNumber: string;
    receiverPaymentMethod: string;
};

type CountryOption = {
    label: string;
    dialCode: string;
    value: string;
};

type PaymentMethodOption = {
    label: string;
    value: string;
};

const CustomSelectOption = (
    props: OptionProps<CountryOption> & { variant: "country" | "phone" }
) => {
    return (
        <DefaultOption<CountryOption>
            {...props}
            customLabel={(data, label) => (
                <span className="flex items-center gap-2">
                    <Avatar
                        shape="circle"
                        size={20}
                        src={`/assets/countries/${data.value}.png`}
                    />
                    {props.variant === "country" && <span>{label}</span>}
                    {props.variant === "phone" && <span>{data.dialCode}</span>}
                </span>
            )}
        />
    );
};

const CustomPaymentMethodOption = (props: OptionProps<PaymentMethodOption>) => {
    return (
        <DefaultOption<PaymentMethodOption>
            {...props}
            customLabel={(data, label) => (
                <span className="flex items-center gap-2">
                    <Avatar
                        shape="circle"
                        size={20}
                        src={`/assets/payment-methods/${data.value}.png`}
                    />
                    <span>{label}</span>
                </span>
            )}
        />
    );
};

const { Control } = components;

const CustomControl = ({ children, ...props }: ControlProps<CountryOption>) => {
    const selected = props.getValue()[0];
    return (
        <Control {...props}>
            {selected && (
                <Avatar
                    className="ltr:ml-4 rtl:mr-4"
                    shape="circle"
                    size={20}
                    src={`/assets/countries/${selected.value}.png`}
                />
            )}
            {children}
        </Control>
    );
};

const CustomPaymentMethodControl = ({
    children,
    ...props
}: ControlProps<PaymentMethodOption>) => {
    const selected = props.getValue()[0];
    return (
        <Control {...props}>
            {" "}
            {selected && (
                <Avatar
                    className="ltr:ml-4 rtl:mr-4"
                    shape="circle"
                    size={20}
                    src={`/assets/payment-methods/${selected.value}.png`}
                />
            )}
            {children}
        </Control>
    );
};

const TransactionForm = (props: TransactionFormProps) => {
    const {
        disableSubmit = false,
        className,
        setMessage,
        translations,
    } = props;

    const [isSubmitting, setSubmitting] = useState<boolean>(false);

    const [senderCountry, setSenderCountry] = useState<CountryOption | null>(
        null
    );

    const [receiverCountry, setReceiverCountry] =
        useState<CountryOption | null>(null);

    const dialCodeList = useMemo(() => {
        const newCountryList: Array<CountryOption> = JSON.parse(
            JSON.stringify(countryList)
        );

        return newCountryList.map((country) => {
            // Get only burkina faso, guinea, senegal and togo
            if (
                country.value === "BF" ||
                country.value === "GN" ||
                country.value === "SN" ||
                country.value === "TG"
            ) {
                country.label = country.dialCode;
                return country;
            }
        });
    }, []);

    // Get payment methods for sender and receiver
    const senderPaymentMethodsList = useMemo(() => {
        if (!senderCountry) return [];
        const newPaymentMethods: Array<PaymentMethodOption> =
            paymentMethods[senderCountry?.value as keyof typeof paymentMethods];
        return newPaymentMethods.map((method) => ({
            label: method.label,
            value: method.value,
        }));
    }, [senderCountry]);

    const receiverPaymentMethodsList = useMemo(() => {
        if (!receiverCountry) return [];
        const newPaymentMethods: Array<PaymentMethodOption> =
            paymentMethods[
                receiverCountry?.value as keyof typeof paymentMethods
            ];
        return newPaymentMethods.map((method) => ({
            label: method.label,
            value: method.value,
        }));
    }, [receiverCountry]);
    // End Get payment methods for sender and receiver

    const validationSchema: ZodType<TransactionFormSchema> = z.object({
        amount: z.number({
            required_error:
                translations.transactionForm.transactionFormErrorMessages
                    .amount,
        }),
        senderDialCode: z.string({
            required_error: "Please select your country code",
        }),
        senderPhoneNumber: z.string({
            required_error: "Please input your mobile number",
        }),
        senderPaymentMethod: z.string({
            required_error: "Please select a payment method",
        }),
        receiverDialCode: z.string({
            required_error: "Please select your country code",
        }),
        receiverPhoneNumber: z.string({
            required_error: "Please input your mobile number",
        }),
        receiverPaymentMethod: z.string({
            required_error: "Please select a payment method",
        }),
    });

    const {
        handleSubmit,
        formState: { errors },
        control,
        setValue,
    } = useForm<TransactionFormSchema>({
        resolver: zodResolver(validationSchema),
    });

    const onSubmit = async (values: TransactionFormSchema) => {
        setSubmitting(true);
        console.log(values);
        setSubmitting(false);
    };

    // Set sender & receiver payment method to the first payment method in the list
    useEffect(() => {
        setValue("senderPaymentMethod", senderPaymentMethodsList[0]?.value);
    }, [senderCountry, senderPaymentMethodsList, setValue]);

    useEffect(() => {
        setValue("receiverPaymentMethod", receiverPaymentMethodsList[0]?.value);
    }, [receiverCountry, receiverPaymentMethodsList, setValue]);
    // End Set sender & receiver payment method to the first payment method in the list

    return (
        <div className={className}>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
            >
                <FormItem
                    label={translations.transactionForm.input1.title}
                    invalid={Boolean(errors.amount)}
                    errorMessage={errors.amount?.message}
                >
                    <Controller
                        name="amount"
                        control={control}
                        render={({ field }) => (
                            <div className="grid grid-cols-3 w-full">
                                <Input
                                    type="number"
                                    className="col-span-2 rounded-r-none"
                                    placeholder={
                                        translations.transactionForm.input1
                                            .placeholder
                                    }
                                    autoComplete="off"
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(Number(e.target.value));
                                    }}
                                />
                                <div className="flex items-center justify-center text-sm text-white bg-primary-deep w-full h-full rounded-r-md">
                                    Fcfa
                                </div>
                            </div>
                        )}
                    />
                </FormItem>

                <div className="flex items-end gap-4 w-full">
                    <FormItem
                        invalid={
                            Boolean(errors.senderPhoneNumber) ||
                            Boolean(errors.senderDialCode)
                        }
                    >
                        <label className="form-label mb-2">
                            {translations.transactionForm.input2.title}
                        </label>
                        <Controller
                            name="senderDialCode"
                            control={control}
                            render={({ field }) => (
                                <Select<CountryOption>
                                    options={dialCodeList.filter(
                                        (option) => option !== undefined
                                    )}
                                    {...field}
                                    className="w-[150px]"
                                    components={{
                                        Option: (props) => (
                                            <CustomSelectOption
                                                variant="phone"
                                                {...(props as OptionProps<CountryOption>)}
                                            />
                                        ),
                                        Control: CustomControl,
                                    }}
                                    placeholder=""
                                    value={
                                        dialCodeList.filter(
                                            (option) =>
                                                option?.dialCode === field.value
                                        )[0]
                                    }
                                    onChange={(option) => {
                                        field.onChange(option?.dialCode);
                                        setSenderCountry(option);
                                    }}
                                />
                            )}
                        />
                    </FormItem>
                    <FormItem
                        className="w-full"
                        invalid={
                            Boolean(errors.senderPhoneNumber) ||
                            Boolean(errors.senderDialCode)
                        }
                        errorMessage={errors.senderPhoneNumber?.message}
                    >
                        <Controller
                            name="senderPhoneNumber"
                            control={control}
                            render={({ field }) => (
                                <NumericInput
                                    autoComplete="off"
                                    placeholder={
                                        translations.transactionForm.input2
                                            .placeholder
                                    }
                                    value={field.value}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                />
                            )}
                        />
                    </FormItem>
                    <FormItem
                        invalid={
                            Boolean(errors.senderPhoneNumber) ||
                            Boolean(errors.senderDialCode)
                        }
                    >
                        <Controller
                            name="senderPaymentMethod"
                            control={control}
                            render={({ field }) => (
                                <Select<PaymentMethodOption>
                                    options={senderPaymentMethodsList.filter(
                                        (option) => option !== undefined
                                    )}
                                    {...field}
                                    className="w-[150px]"
                                    components={{
                                        Option: CustomPaymentMethodOption,
                                        Control: CustomPaymentMethodControl,
                                    }}
                                    placeholder=""
                                    value={
                                        senderPaymentMethodsList.filter(
                                            (option) =>
                                                option?.value === field.value
                                        )[0]
                                    }
                                    onChange={(option) => {
                                        field.onChange(option?.value);
                                    }}
                                />
                            )}
                        />
                    </FormItem>
                </div>

                <div className="flex items-end gap-4 w-full">
                    <FormItem
                        invalid={
                            Boolean(errors.receiverPhoneNumber) ||
                            Boolean(errors.receiverDialCode)
                        }
                    >
                        <label className="form-label mb-2">
                            {translations.transactionForm.input3.title}
                        </label>
                        <Controller
                            name="receiverDialCode"
                            control={control}
                            render={({ field }) => (
                                <Select<CountryOption>
                                    options={dialCodeList.filter(
                                        (option) => option !== undefined
                                    )}
                                    {...field}
                                    className="w-[150px]"
                                    components={{
                                        Option: (props) => (
                                            <CustomSelectOption
                                                variant="phone"
                                                {...(props as OptionProps<CountryOption>)}
                                            />
                                        ),
                                        Control: CustomControl,
                                    }}
                                    placeholder=""
                                    value={
                                        dialCodeList.filter(
                                            (option) =>
                                                option?.dialCode === field.value
                                        )[0]
                                    }
                                    onChange={(option) => {
                                        field.onChange(option?.dialCode);
                                        setReceiverCountry(option);
                                    }}
                                />
                            )}
                        />
                    </FormItem>
                    <FormItem
                        className="w-full"
                        invalid={
                            Boolean(errors.receiverPhoneNumber) ||
                            Boolean(errors.receiverDialCode)
                        }
                        errorMessage={errors.receiverPhoneNumber?.message}
                    >
                        <Controller
                            name="receiverPhoneNumber"
                            control={control}
                            render={({ field }) => (
                                <NumericInput
                                    autoComplete="off"
                                    placeholder={
                                        translations.transactionForm.input3
                                            .placeholder
                                    }
                                    value={field.value}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                />
                            )}
                        />
                    </FormItem>
                    <FormItem
                        invalid={
                            Boolean(errors.senderPhoneNumber) ||
                            Boolean(errors.senderDialCode)
                        }
                    >
                        <Controller
                            name="receiverPaymentMethod"
                            control={control}
                            render={({ field }) => (
                                <Select<PaymentMethodOption>
                                    options={receiverPaymentMethodsList.filter(
                                        (option) => option !== undefined
                                    )}
                                    {...field}
                                    className="w-[150px]"
                                    components={{
                                        Option: CustomPaymentMethodOption,
                                        Control: CustomPaymentMethodControl,
                                    }}
                                    placeholder=""
                                    value={
                                        receiverPaymentMethodsList.filter(
                                            (option) =>
                                                option?.value === field.value
                                        )[0]
                                    }
                                    onChange={(option) => {
                                        field.onChange(option?.value);
                                    }}
                                />
                            )}
                        />
                    </FormItem>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        {
                            translations.transactionForm
                                .transactionFormExchangeDetails.exchangeRate
                        }{" "}
                        : 1%
                    </div>
                    <div>
                        {
                            translations.transactionForm
                                .transactionFormExchangeDetails.receivedAmount
                        }{" "}
                        : 100000 Fcfa
                    </div>
                </div>

                <Button
                    block
                    loading={isSubmitting}
                    variant="solid"
                    type="submit"
                    className="mt-10"
                >
                    {isSubmitting
                        ? translations.transactionForm.loadingCta
                        : translations.transactionForm.cta}
                </Button>
            </Form>
        </div>
    );
};

export default TransactionForm;
