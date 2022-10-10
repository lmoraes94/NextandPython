import type { NextPage } from "next";
import List from "../src/components/list/List";
import { Box } from "@mui/material";
import { Professionals } from "../src/@types/Professionals";
const Home: NextPage = () => {
  const professionals: Professionals[] = [
    {
      id: 1,
      name: "Dev 1",
      photo: "https://github.com/lmoraes94.png",
      description: "Descrição do profissional 1",
      value_hour: 50,
    },
    {
      id: 2,
      name: "Dev 2",
      photo: "https://github.com/guilherme.png",
      description: "Descrição do profissional 2",
      value_hour: 200,
    },
    {
      id: 3,
      name: "Dev 3",
      photo: "https://github.com/antonio.png",
      description: "Descrição do profissional 3",
      value_hour: 180,
    },
    {
      id: 4,
      name: "Dev 4",
      photo: "https://github.com/jose.png",
      description: "Descrição do profissional 4",
      value_hour: 100,
    },
    {
      id: 5,
      name: "Dev 5",
      photo: "https://github.com/marcos.png",
      description: "Descrição do profissional 5",
      value_hour: 250,
    },
    {
      id: 6,
      name: "Dev 6",
      photo: "https://github.com/pedro.png",
      description: "Descrição do profissional 6",
      value_hour: 300,
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "secondary.main",
        }}
      >
        <List professionals={professionals}></List>
      </Box>
    </>
  );
};

export default Home;
