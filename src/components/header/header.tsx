import React, { ReactElement, ReactNode } from "react";
import { Box, Flex, Img, Spacer } from "@chakra-ui/react";
import { FaCloudSun, FaNewspaper, FaEarthEurope, FaMountain } from "react-icons/fa6";
import { IoMdPersonAdd, IoMdMenu } from "react-icons/io";
import { LuWaves } from "react-icons/lu";
import styles from "@/styles/Header.module.css";

interface IconBoxProps {
  icon: ReactElement;
  children: ReactNode;
}

const IconBox = ({ children, icon }: IconBoxProps) => (
  <Box p={2} style={{ display: "flex", alignItems: "center" }}>
    {React.cloneElement(icon, { style: { marginRight: "8px" } })}
    {children}
  </Box>
);
const Navbar = () => {
  return (
    <Box>
      <Flex marginBottom="10px" marginTop="10px" alignItems="center">
        <Spacer />
        <Box width="90px" height="90px" bg="red.400">
          <img src="/images/LOGO_MF.png" alt="Mon image" />
        </Box>
        <Box marginLeft="10px" width="90px" height="90px">
          <img src="/images/Rep.png" alt="Mon image" />
        </Box>
        <Spacer />
        <Box p={4} bg="red.400">
          Box 1
        </Box>
        <Spacer />
        <Box p={4} bg="red.400">
          Box 1
        </Box>
        <Spacer />
        <Box p={4} >
        <img src="/images/minimap.png" alt="Image 1" style={{ width: "60px" }} />
        </Box>
        <Box p={4} >
        <img src="/images/minimap.png" alt="Image 1" style={{width: "60px" }} />
        </Box>
        <Box p={4} bg="red.400">
        <img src="https://example.com/image1.jpg" alt="Image 1" style={{ width: "100%" }} />
        </Box>
        <Spacer />
      </Flex>


      {/* CLIMAT */}
      <Flex alignItems="center" style={{ color: "#003661" }}>
        <Spacer />
        <IconBox icon={<FaCloudSun />}>PREVISIONS</IconBox>
        <Spacer />
        <IconBox icon={<LuWaves />}>METEO MARINE</IconBox>
        <Spacer />
        <IconBox icon={<FaMountain />}>METEO MONTAGNE</IconBox>
        <Spacer />
        <IconBox icon={<FaEarthEurope />}>CLIMAT</IconBox>
        <Spacer />
        <IconBox icon={<FaNewspaper />}>ACTU & DOSSIER</IconBox>
        <Spacer />
        <IconBox icon={<IoMdPersonAdd />}>NOS SERVICES</IconBox>
        <Spacer />
        <IconBox icon={<IoMdMenu />} children={undefined} />
        <Spacer />
      </Flex>
    </Box>
  );
};

export default Navbar;



