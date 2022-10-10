import { Button } from "@mui/material";
import { Professionals } from "../../@types/Professionals";
import {
  Description,
  Info,
  ItemList,
  ListStyle,
  Name,
  Photo,
  Value,
  EmptyList,
} from "./List.style";

interface ListProps {
  professionals: Professionals[];
}

const List = (props: ListProps) => {
  return (
    <div>
      {props.professionals.length === 0 ? (
        <EmptyList>NÃO HÁ ROFISSIONAIS CADASTRADOS</EmptyList>
      ) : (
        <>
          <ListStyle>
            {props.professionals.map((teacher) => (
              <ItemList key={teacher.id}>
                <Photo src={teacher.photo}></Photo>
                <Info>
                  <Name>{teacher.name}</Name>
                  <Value>
                    {teacher.value_hour.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}
                  </Value>
                  <Description>{teacher.description}</Description>
                  <Button sx={{ width: "70%" }}>
                    Contratar {teacher.name}
                  </Button>
                </Info>
              </ItemList>
            ))}
          </ListStyle>
        </>
      )}
    </div>
  );
};

export default List;
