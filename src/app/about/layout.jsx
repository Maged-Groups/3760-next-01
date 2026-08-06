import AboutNavigation from "@/components/organisms/AboutNavigation";

export const metadata = {
  title: "About our project",
  description: "This is the about page of our project",
};

export default function AboutLayout({children}) {
  return <div className="bg-red-900 text-white h-screen">
    <AboutNavigation />
    {children}
    </div>;
}
