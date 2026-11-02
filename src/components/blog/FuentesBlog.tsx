// Tipografías del blog según la maqueta: League Spartan (títulos) y Open Sans
// (texto). React las lleva al <head> y solo se descargan al entrar al blog.
export default function FuentesBlog() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@600;700;800&family=Open+Sans:wght@400;600;700&display=swap"
        precedence="default"
      />
    </>
  );
}
