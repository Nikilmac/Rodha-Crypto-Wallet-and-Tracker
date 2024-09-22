import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";

const ToggleComponents = ({ priceType, handlePriceTypeChange }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1.5rem",
      }}
    >
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={(e, newValue) => handlePriceTypeChange(newValue)}
        sx={{
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid var(--blue) !important",
            borderColor: "unset",
          },
          "& .MuiToggleButton-root": {
            color: "white",
          },
          "& .Mui-selected": {
            color: "white",
            backgroundColor: "rgba(58, 128, 233, 0.1) !important",
          },
        }}
      >
        <ToggleButton value="prices">Prices</ToggleButton>
        <ToggleButton value="market_caps">Market Cap</ToggleButton>
        <ToggleButton value="total_volumes">Total Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default ToggleComponents;
