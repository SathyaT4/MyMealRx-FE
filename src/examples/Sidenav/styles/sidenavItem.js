function item(theme) {
  const { transitions } = theme;

  return {
    pl: 3,
    mt: 0.375,
    mb: 0.3,
    width: "100%",
    borderRadius: "1px",
    cursor: "pointer",
    background: "#f5f5dc", // Orange gradient for all items
    transition: transitions.create("background-color", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.sharp,
    }),

    "&:hover, &:focus": {
      background: "rgba(255,152,0,0.8)", // Lighter orange hover effect
    },
  };
}

function itemContent(theme) {
  const { typography } = theme;
  const { size, fontWeightRegular } = typography;

  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    fontWeight: fontWeightRegular,
    fontSize: size.sm,
    color: "black", // White text for visibility on orange gradient
  };
}

function itemArrow(theme) {
  const { transitions } = theme;

  return {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#FFFFFF", // White arrow for visibility
    transition: transitions.create(["transform"], {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.shorter,
    }),
    transform: "rotate(0)",

    "&[data-state='open']": {
      transform: "rotate(180deg)", // Rotate when open
    },
  };
}

export { item, itemContent, itemArrow };
