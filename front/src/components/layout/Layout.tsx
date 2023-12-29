import { SideBar } from "./SideBar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SideBar />

      <main
        className={`flex min-h-screen flex-col  justify-between ml-[16%]  `}
      >
        {children}
      </main>
    </>
  );
};
