import Image from "next/image";

export default function LogoCloud() {
  const schools = [
    {
      name: "Transistor",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
    },
    {
      name: "Reform",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
    },
    {
      name: "Tuple",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
    },
    {
      name: "Savvycal",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
    },
    {
      name: "Statamic",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-gray-900">
          Trusted by Schools Across the Country
        </h2>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {schools.map((school, i) => (
            <Image
              key={i}
              alt={school.name}
              src={school.src}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-span-2 lg:col-span-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
