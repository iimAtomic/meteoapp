import React, { ReactElement, ReactNode } from "react";
import { Box, Flex, Img, Spacer } from "@chakra-ui/react";
import { FaCloudSun, FaNewspaper, FaEarthEurope, FaMountain, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { IoMdPersonAdd, IoMdMenu } from "react-icons/io";
import { LuWaves } from "react-icons/lu";
import styles from "@/styles/Header.module.css";
import SearchBar from "../searchBar/search";



const mediaQuery = `@media screen and (max-width: 768px) {
  .flex1,
  .flex2 {
    display: none;
  }
  .flex3{
    display: flex;
  }
}`

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

<style>{mediaQuery}</style>
 {/* FLEX 1*/}
      <Flex className="flex1" marginBottom="10px" marginTop="10px" alignItems="center">
        <Spacer />
        <Box width="90px" height="90px" bg="red.400">
          <img src="/images/LOGO_MF.png" alt="Mon image" />
        </Box>
        <Box marginLeft="10px" width="90px" height="90px">
          <img src="/images/Rep.png" alt="Mon image" />
        </Box>
        <Spacer />
        <Box p={4}>
        <SearchBar onSearch={(query: string) => {}} />
        </Box>
        <Spacer />
        <Box  style={{display: "flex", alignItems: "center", width: "150px", justifyContent: "space-around" }}>
        <FaFacebookF /> <FaTwitter /> <FaLinkedin />
        </Box>
        <Spacer />
        <Box p={4} >
        <img src="/images/minimap.png" alt="Image 1" style={{ width: "60px" }} />
        </Box>
        <Box p={4} >
        <img src="/images/minimap.png" alt="Image 1" style={{width: "60px" }} />
        </Box>
        <Spacer />
      </Flex>

      <Box className="flex3"  display="none" >
        <div style={{backgroundColor:'#a0a0eb' , width:'100%', height:'65px' , alignItems: 'center' , justifyContent:'space-around', display:'flex'}}>
            <img src="/images/LOGO_MF.png" alt="Mon image" style={{width:'60px', height:'60px'}}/>
            <img src="/images/Rep.png" alt="Mon image" style={{width:'60px', height:'60px'}}/>
        </div>
        </Box>
      <Box className="flex3" p={4} display="none" >
        <SearchBar onSearch={(query: string) => {}} />
        </Box>


      {/* FLEX 2*/}
      <Flex className="flex2" alignItems="center">
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



