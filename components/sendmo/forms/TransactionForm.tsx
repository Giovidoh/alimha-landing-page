"use client";

import { useMemo, useState, ReactNode, CSSProperties } from "react";
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

const TransactionForm = (props: TransactionFormProps) => {
    const {
        disableSubmit = false,
        className,
        setMessage,
        translations,
    } = props;

    const [isSubmitting, setSubmitting] = useState<boolean>(false);

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
    } = useForm<TransactionFormSchema>({
        resolver: zodResolver(validationSchema),
    });

    const onSubmit = async (values: TransactionFormSchema) => {
        setSubmitting(true);
        console.log(values);
        setSubmitting(false);
    };

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
                                    type="text"
                                    className="col-span-2 rounded-r-none"
                                    placeholder={
                                        translations.transactionForm.input1
                                            .placeholder
                                    }
                                    autoComplete="off"
                                    {...field}
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
                                    onChange={(option) =>
                                        field.onChange(option?.dialCode)
                                    }
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
                                    onChange={(option) =>
                                        field.onChange(option?.dialCode)
                                    }
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
