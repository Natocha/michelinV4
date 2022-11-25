import React, { useState, useMemo } from "react";
import { Navbar, Button, Link, Text, useTheme, Image, Dropdown } from "@nextui-org/react";



const NavbarCustom = () => {
  const [languaje, setLanguaje] = useState(["en"]);

  const selectedValue = useMemo(
    () => Array.from(languaje).join(", "),
    [languaje]
  );

  return (
    <Navbar id="navbar-custom" shouldHideOnScroll variant="sticky" classname="navbar">
      <Navbar.Content hideIn="xs" variant="underline" css ={{maxH: "50px"}}>
          
          <Image
          src="/icons/telefono.svg"
          alt="icono-telefono"
          width= {16}
          height= {16}
        />
        <Navbar.Link href="tel:(237) 681-812-255" css={{gap: "10px"}}>(237) 681-812-255</Navbar.Link>
          
          <Image
          src="/icons/email.svg"
          alt="icono-email"
          width= {16}
          height= {16}
        />
        <Navbar.Link isActive href="mailto:fildineesoe@gmail.com" css={{gap: "10px"}}>fildineesoe@gmail.com</Navbar.Link>
         
          <Image    
          src="/icons/ubicacion.svg"
          alt="icono-ubicacion"
          width= {16}
          height= {16}
        />
        <Navbar.Link href="#map" css={{gap: "10px"}}>Cologne, Germany</Navbar.Link>
      </Navbar.Content>

      <Navbar.Content hideIn="xs" variant="underline">
        <Dropdown onChange={(e) => console.log(e)}>
          <Dropdown.Button color={"warning"} bordered>
            {selectedValue == "en"?"English": "Español"}
          </Dropdown.Button>
          <Dropdown.Menu 
            aria-label="Static Actions"
            disallowEmplySelection
            selectionMode="single"
            selectedkeys={languaje}
            onSelectionChange={setLanguaje}
            css={{
              bg: "linear-gradient(to right, #F66C00, #83400C)",
            }} 
          >
              <Dropdown.Item key="en">English</Dropdown.Item>
              <Dropdown.Item key="es">Español</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
    </Navbar>
  )
}

export default NavbarCustom;
