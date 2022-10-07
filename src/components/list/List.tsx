import { Button } from "@mui/material";
import {
  Description,
  Info,
  ItemList,
  ListStyle,
  Name,
  Photo,
  Value,
} from "./List.style";

const List = () => {
  return (
    <>
      <ListStyle>
        <ItemList>
          <Photo src="https://github.com/lmoraes94.png"></Photo>
          <Info>
            <Name>Leonardo</Name>
            <Value>R$100,00/Hora</Value>
            <Description>Desenvolvedor Jr</Description>
            <Button>Contratar</Button>
          </Info>
        </ItemList>
      </ListStyle>
    </>
  );
};

export default List;
