import { useEffect } from "react";

const Vitrine = () => {
  useEffect(() => {
    // Prevent scroll on main page
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";

    // Ensure badge stays fixed at bottom
    const badgeElement = document.getElementById("montesite-footer-badge");
    if (badgeElement) {
      badgeElement.style.position = "fixed";
      badgeElement.style.bottom = "0";
      badgeElement.style.left = "0";
      badgeElement.style.width = "100%";
      badgeElement.style.height = "63px";
      badgeElement.style.zIndex = "10";
    }

    // Cleanup function
    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      document.documentElement.style.height = "auto";
      document.body.style.height = "auto";
    };
  }, []);

  return (
    <div className="fixed top-20 bottom-[63px] left-0 right-0 w-full h-[calc(100vh-143px)] overflow-hidden">
        <iframe
          src="https://padariakroning.egestor.com.br/vitrine/"
          className="w-full h-full border-0"
          title="Vitrine de Produtos Kroning"
          style={{
            overflow: "auto",
          }}
        />
    </div>
  );
};

export default Vitrine;
