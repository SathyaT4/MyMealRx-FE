import PropTypes from "prop-types";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
// import { useMaterialUIController } from "context";
// Custom styles for the SidenavItem
import { item, itemContent, itemArrow } from "./styles/sidenavItem"; // Adjust path as needed

// Material Dashboard 2 PRO React contexts


function SidenavItem({ name, active, children, open, ...rest }) {
  // const [controller] = useMaterialUIController();
  // const { miniSidenav, transparentSidenav, whiteSidenav, darkMode } = controller;

  return (
    <>
      <ListItem
        {...rest}
        component="li"
        sx={(theme) => item(theme)} // Applying updated item styles with orange gradient
      >
        <MDBox
          sx={(theme) => itemContent(theme)} // Applying updated content styles with white text
        >
          <ListItemText primary={name} />
          {children && (
            <Icon
              component="i"
              sx={(theme) => itemArrow(theme)} // Applying updated arrow styles with white color
            >
              expand_less
            </Icon>
          )}
        </MDBox>
      </ListItem>
      {children && (
        <Collapse in={open} timeout="auto" unmountOnExit {...rest}>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of SidenavItem
SidenavItem.defaultProps = {
  active: false,
  children: false,
  open: false,
};

// Typechecking props for the SidenavItem
SidenavItem.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.node,
  open: PropTypes.bool,
};

export default SidenavItem;
