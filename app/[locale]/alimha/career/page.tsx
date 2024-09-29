import CareerForm from "@/components/alimha/forms/CareerForm";

export default function Page() {
    return (
        <main className="w-full h-fit pt-32 pb-20">
            <section className="flex justify-center w-full h-full">
                <div className="flex flex-col gap-4 bg-white border w-full sm:w-2/3 md:w-1/2 lg:w-1/2 2xl:w-1/3 h-fit p-5 rounded-3xl shadow-md">
                    <div className="bg-primary-blue w-full h-[300px] rounded-2xl"></div>
                    <div className="flex flex-col gap-4">
                        <p className="text-[#333333] text-sm lg:text-base min-[1200px]:text-lg">
                            Veuillez remplir ce formulaire si vous souhaitez
                            postuler chez Alimha.
                        </p>
                        <CareerForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
