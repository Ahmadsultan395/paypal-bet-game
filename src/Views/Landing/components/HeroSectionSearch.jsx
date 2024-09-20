import React, { useState } from "react";
import {
  Tab,
  Tabs,
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  styled,
  Stack,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledTextField = styled(TextField)({
  backgroundColor: "white",
  borderRadius: "5px",
  "& .MuiInputBase-input": {
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent ",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
});

const StyledSelect = styled(Select)({
  backgroundColor: "white",
  borderRadius: "5px",
  outline: "none",
  color: "black",
  "& .MuiSelect-icon": {
    color: "black",
  },
});

const StyledButton = styled(Button)({
  backgroundColor: "#2579e1",
  borderRadius: "5px",
  padding: "0.4rem 2rem",
  borderColor: "transparent",
  color: "white",
  "&:hover": {
    backgroundColor: "#2579e1",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HeroSectionSearch() {
  const navigate = useNavigate()
  const [value, setValue] = useState(0);
  const [registration, setRegistration] = useState("");
  const [dimension, setDimension] = useState("");
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const handleSearch = () => {
  navigate('/search-results')
  };

  return (
    <Box sx={{ width: "100%", padding: { xs: "0.5rem", sm: "1rem" } }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="custom tabs example"
        sx={{
          "& .MuiTabs-indicator": { display: "none" },
        }}
      >
        <Tab
          label="Registration No."
          {...a11yProps(0)}
          sx={{
            textTransform:'none',

            marginRight: "1rem",
            borderRadius: "5px 5px 0px 0px",
'&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: 'white',
          },
          '&:not(.Mui-selected)': {
            backgroundColor: 'grey',
            color: 'black',
          },
            "&:hover": {
              backgroundColor:
                value === 0 ? theme.palette.primary.main : "darkgrey",
            },
          }}
        />
        <Tab
          label="Dimensions"
          {...a11yProps(1)}
          sx={{
            marginRight: "1rem",
            textTransform:'none',

            borderRadius: "5px 5px 0px 0px",
'&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: 'white',
          },
          '&:not(.Mui-selected)': {
            backgroundColor: 'grey',
            color: 'black',
          },
            "&:hover": {
              backgroundColor:
                value === 0 ? theme.palette.primary.main : "darkgrey",
            },

          }}
        />
        <Tab
          label="Car Model"
          {...a11yProps(2)}
          sx={{
            textTransform:'none',
            borderRadius: "5px 5px 0px 0px",
'&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: 'white',
          },
          '&:not(.Mui-selected)': {
            backgroundColor: 'grey',
            color: 'black',
          },
            "&:hover": {
              backgroundColor:
                value === 0 ? theme.palette.primary.main : "darkgrey",
            },

          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
          sx={{
            backgroundColor: "white",
            borderRadius: "0px 5px 5px 5px",
            padding: { xs: "0.5rem", sm: "1rem" },
          }}
        >
          <StyledTextField
            fullWidth
            size="small"
            value={registration}
            onChange={(e) => setRegistration(e.target.value)}
            placeholder="Please Type Registration Number"
          />
          <StyledSelect
            value={dimension}
            onChange={(e) => setDimension(e.target.value)}
            displayEmpty
            fullWidth
            size="small"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              Select Dimension
            </MenuItem>
            <MenuItem value={10}>10"</MenuItem>
            <MenuItem value={20}>20"</MenuItem>
            <MenuItem value={30}>30"</MenuItem>
          </StyledSelect>
          <StyledButton onClick={handleSearch}>Search</StyledButton>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
          sx={{
            backgroundColor: "white",
            borderRadius: "0px 5px 5px 5px",
            padding: { xs: "0.5rem", sm: "1rem" },
          }}
        >
          <StyledSelect
            value={dimension}
            onChange={(e) => setDimension(e.target.value)}
            displayEmpty
            fullWidth
            size="small"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              Select Dimension
            </MenuItem>
            <MenuItem value={10}>10"</MenuItem>
            <MenuItem value={20}>20"</MenuItem>
            <MenuItem value={30}>30"</MenuItem>
          </StyledSelect>

          <StyledSelect
            value={dimension}
            onChange={(e) => setDimension(e.target.value)}
            displayEmpty
            fullWidth
            size="small"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              Select Dimension
            </MenuItem>
            <MenuItem value={10}>10"</MenuItem>
            <MenuItem value={20}>20"</MenuItem>
            <MenuItem value={30}>30"</MenuItem>
          </StyledSelect>
          <StyledButton onClick={handleSearch}>Search</StyledButton>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
          sx={{
            backgroundColor: "white",
            borderRadius: "0px 5px 5px 5px",
            padding: { xs: "0.5rem", sm: "1rem" },
          }}
        >
          <StyledSelect
            value={dimension}
            onChange={(e) => setDimension(e.target.value)}
            displayEmpty
            fullWidth
            size="small"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              Select Dimension
            </MenuItem>
            <MenuItem value={10}>10"</MenuItem>
            <MenuItem value={20}>20"</MenuItem>
            <MenuItem value={30}>30"</MenuItem>
          </StyledSelect>

          <StyledSelect
            value={dimension}
            onChange={(e) => setDimension(e.target.value)}
            displayEmpty
            fullWidth
            size="small"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              Select Dimension
            </MenuItem>
            <MenuItem value={10}>10"</MenuItem>
            <MenuItem value={20}>20"</MenuItem>
            <MenuItem value={30}>30"</MenuItem>
          </StyledSelect>

          <StyledSelect
            value={dimension}
            onChange={(e) => setDimension(e.target.value)}
            displayEmpty
            fullWidth
            size="small"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              Select Dimension
            </MenuItem>
            <MenuItem value={10}>10"</MenuItem>
            <MenuItem value={20}>20"</MenuItem>
            <MenuItem value={30}>30"</MenuItem>
          </StyledSelect>

          <StyledButton onClick={handleSearch}>Search</StyledButton>
        </Stack>
      </TabPanel>
    </Box>
  );
}
