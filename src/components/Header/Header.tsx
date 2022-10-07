import { CabecalhoContainer, Logo } from "./Header.style";

const Header = () => {
  return (
    <CabecalhoContainer>
      <div>
        <Logo src="/images/logopng.png" />
      </div>
      <p>Trabalhamos com desenvolvimento de sistemas web</p>
    </CabecalhoContainer>
  );
};

export default Header;
