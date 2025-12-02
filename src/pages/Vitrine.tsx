import { useEffect } from "react";

const Vitrine = () => {
  useEffect(() => {
    // Prevent scroll on main page
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";

    // Cleanup function
    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      document.documentElement.style.height = "auto";
      document.body.style.height = "auto";
    };
  }, []);

  return (
    <div className="fixed top-20 bottom-0 left-0 right-0 w-full overflow-hidden flex flex-col" style={{ height: 'calc(100dvh - 80px)' }}>
        {/* Observação sobre valores */}
        <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-xs sm:text-sm">
          <p>
            <strong>Atenção:</strong> Os valores exibidos são para retirada no mercado. Para entregas, consulte o valor com seu vendedor.
          </p>
        </div>
        <iframe
          src="https://padariakroning.egestor.com.br/vitrine/"
          className="w-full flex-1 border-0"
          title="Vitrine de Produtos Kroning"
          style={{
            overflow: "auto",
          }}
        />
    </div>
  );
};

export default Vitrine;
