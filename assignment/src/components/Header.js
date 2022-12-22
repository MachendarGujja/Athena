import './Header.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import Badge from "@mui/material/Badge";
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
// import InputLabel from '@mui/material/InputLabel';
import { CartData } from '../Context';
import SearchIcon from '@mui/icons-material/Search';
export default function Header(){
    const {
      main:{
          cart,button,search
      },dispatchMain} = CartData();
      console.log(search)
    return(
      <div className="head-main">
        <div className="head-nav">
            <div className="head-nav-in">
            <Link to='/consult' onClick={()=>dispatchMain({type:'CLEAR_SEARCH'})} style={{display:'flex',alignItems:'center',marginRight:40,marginLeft:80}}><div style={{width:25,height:25,borderRadius:3,border:'1px solid white',margin:0}}></div><Button className='card-top' style={{color:'white'}}>Consult a Doctor</Button></Link>
            <Link to='/order' onClick={()=>dispatchMain({type:'CLEAR_SEARCH'})} style={{display:'flex',alignItems:'center',marginRight:40}}><div style={{width:25,height:25,borderRadius:3,border:'1px solid white',margin:0}}></div><Button className='card-top' style={{color:'white'}}>Order Medicine</Button></Link>
            <Link to='/' onClick={()=>dispatchMain({type:'CLEAR_SEARCH'})} style={{display:'flex',alignItems:'center'}}><div style={{width:25,height:25,borderRadius:3,border:'1px solid white',margin:0}}></div><Button className='card-top' style={{color:'white'}}>Book for Diagnostic</Button></Link>
            </div>
            <div className="head-nav-ins">
                <FacebookIcon style={{color:'white',fontSize:16,marginLeft:15}}/>
                <YouTubeIcon style={{color:'white',fontSize:16,marginLeft:15}}/>
                <TwitterIcon style={{color:'white',marginRight:90,fontSize:16,marginLeft:15}}/>
            </div>
        </div>
        <div className="head-log">
            <Link to='/' onClick={()=>dispatchMain({type:'CLEAR_SEARCH'})}><h1>Logo</h1></Link>
            <div>
            <Button variant="outlined">Login|Signup</Button>
            <Link to='/cart' onClick={()=>dispatchMain({type:'CLEAR_SEARCH'})}>
            <Badge style={{cursor:'pointer',marginLeft:60}}   color="secondary" badgeContent={cart.length}>
          <AddShoppingCartTwoToneIcon  style={{color:'black'}} titleAccess='Cart'/>{" "}
        </Badge>
        </Link>
            </div>
        </div>
        <div className="head-search">
            <div style={{display:'flex'}}>
                {/* <div >
            <LocationOnIcon style={{height:37,width:27}} className='loc'/>
                </div> */}
                <div>
            <Autocomplete 
      id="country-select-demo"
      sx={{
        width: { sm: 100, md: 230 },
        // fontSize:{md:15},
        "& .MuiInputBase-root": {
            height: 40
        }
    }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
        
      )}
    />
    </div>
            </div>
            <div style={{display:'flex'}}>
            <FormControl fullWidth sx={{ m: 1,width:800,backgroundColor:'white',
            "& .MuiInputBase-root": {
                height: 40
            }
            }}
            onChange={(e)=>(button===true && search.length === 0)?(dispatchMain({type:'BTN'})):dispatchMain({type:'SEARCH',payload:e.target.value})} value={search}  className='in-css' type="text" placeholder="Search Items...">
          {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
            // label="Amount"
          />
        </FormControl>
        <Button onClick={()=>dispatchMain({type:"BTN"})} style={{width:100,marginTop:10,height:35}} variant="contained" color="success">
                Search
                </Button>
            </div>
        </div>
      </div>
    )
  }

  const countries = [
    { code: 'HN', label: 'Honduras', phone: '504' },
    { code: 'HR', label: 'Croatia', phone: '385' },
    { code: 'HT', label: 'Haiti', phone: '509' },
    { code: 'HU', label: 'Hungary', phone: '36' },
    { code: 'ID', label: 'Indonesia', phone: '62' },
    { code: 'IE', label: 'Ireland', phone: '353' },
    { code: 'IL', label: 'Israel', phone: '972' },
    { code: 'IM', label: 'Isle of Man', phone: '44' },
    { code: 'IN', label: 'India', phone: '91' },
    {
      code: 'IO',
      label: 'British Indian Ocean Territory',
      phone: '246',
    },
   
    { code: 'KR', label: 'Korea, Republic of', phone: '82' },
    { code: 'KW', label: 'Kuwait', phone: '965' },
    { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
    { code: 'KZ', label: 'Kazakhstan', phone: '7' },
    {
      code: 'LA',
      label: "Lao People's Democratic Republic",
      phone: '856',
    },
    { code: 'LB', label: 'Lebanon', phone: '961' },
    { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
    { code: 'LI', label: 'Liechtenstein', phone: '423' },
    { code: 'LK', label: 'Sri Lanka', phone: '94' },
    { code: 'LR', label: 'Liberia', phone: '231' },
    { code: 'LS', label: 'Lesotho', phone: '266' },
    { code: 'LT', label: 'Lithuania', phone: '370' },
    { code: 'LU', label: 'Luxembourg', phone: '352' },
    { code: 'LV', label: 'Latvia', phone: '371' },
    { code: 'LY', label: 'Libya', phone: '218' },
    { code: 'MA', label: 'Morocco', phone: '212' },
    { code: 'MC', label: 'Monaco', phone: '377' },
    {
      code: 'MD',
      label: 'Moldova, Republic of',
      phone: '373',
    },
    { code: 'ME', label: 'Montenegro', phone: '382' },
    {
      code: 'US',
      label: 'United States',
      phone: '1',
      suggested: true,
    },
    { code: 'ZM', label: 'Zambia', phone: '260' },
    { code: 'ZW', label: 'Zimbabwe', phone: '263' },
  ];