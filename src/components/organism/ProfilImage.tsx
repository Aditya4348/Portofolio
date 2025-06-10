export default function ProfilImage({ Profil }: { Profil?: string }) {
    return (
        <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 p-1 shadow-2xl transform -rotate-8">
            <div className="w-full h-full rounded-3xl bg-dark-primary flex items-center justify-center overflow-hidden transform rotate-8">
                <img
                    src={`/assets/${Profil || "placeholder.svg"}`}
                    alt="Profile"
                    width={400}
                    height={400}
                    className="rounded-3xl object-cover w-full h-full"
                    loading="lazy"
                />
            </div>
        </div>
    )
}
