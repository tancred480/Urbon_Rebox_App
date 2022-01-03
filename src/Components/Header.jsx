import React,{ useEffect,useState } from "react";
import {useTranslation} from "react-i18next";
import {InputLabel,MenuItem,FormControl,Select} from "@material-ui/core"

function Header() {
  const { i18n } = useTranslation();
 
 const [language,SetLanguage] = useState("en");
  
  useEffect(()=>{
    i18n.changeLanguage(language);
  },[language]);

  return (
    <div className="header">
      <img src="logo.png" height={80} width={80} />
      
      <FormControl variant="standard" style={{flexDirection:"row"}}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={language}
          onChange={(e)=>SetLanguage(e.target.value)}
          label="Select Language"
        >
          <MenuItem value="en">
            <em>English</em>
          </MenuItem>
          <MenuItem value="hi">Hindi</MenuItem>
          <MenuItem value="ta">Tamil</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Header;
