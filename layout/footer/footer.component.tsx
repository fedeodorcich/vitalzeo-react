export type FooterProps = {
  className: string;
}
const FooterComponent = ({className}:FooterProps) => {
  return (
    <footer className={className+" py-10"}>
        <div className="container mx-auto px-10">
            <p className="text-white text-regular">&copy; 2023 vitalZEO. Todos los derechos reservados.</p>
        </div>
    </footer>
  );
};

export default FooterComponent;
