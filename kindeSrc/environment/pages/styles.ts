// CSS Variables configuration
const kindeVariables = {
  baseFontFamily:
    "Instrument Sans, -apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, Segoe UI, Roboto, sans-serif",
  controlSelectTextBorderRadius: "1rem",
  buttonPrimaryBackgroundColor: "#C1AFEF",
  buttonPrimaryColor: "#f5f5f5",
  buttonBorderRadius: "1rem",
  buttonSecondaryBackgroundColor: "#2B2B2B",
  buttonSecondaryBorderWidth: "1px",
  buttonSecondaryBorderColor: "#2B2B2B",
  buttonSecondaryBorderStyle: "solid",
  buttonSecondaryBorderRadius: "1rem",
} as const;

export const generateCSSVariables = (): string => `
  @font-face {
    font-family: Instrument Sans;
    src: url(https://asset.kindedemo.com/evolve-ai/InstrumentSans-VariableFont_wdth,wght.ttf);
  }

  :root {
    --kinde-base-font-family: ${kindeVariables.baseFontFamily};
    --kinde-control-select-text-border-radius: ${kindeVariables.controlSelectTextBorderRadius};
    --kinde-button-primary-background-color: ${kindeVariables.buttonPrimaryBackgroundColor};
    --kinde-button-primary-color: ${kindeVariables.buttonPrimaryColor};
    --kinde-button-border-radius: ${kindeVariables.buttonBorderRadius};
    --kinde-button-secondary-border-width: ${kindeVariables.buttonSecondaryBorderWidth};
    --kinde-button-secondary-border-style: ${kindeVariables.buttonSecondaryBorderStyle};
    --kinde-button-secondary-border-radius: ${kindeVariables.buttonSecondaryBorderRadius};
    --kinde-control-label-color: #fff;
    --kinde-button-font-weight: 700;
    --kinde-control-select-text-border-color: #636363;
  }

  [data-kinde-control-label] {
    font-weight: 700;
  }

  [data-kinde-choice-separator] { 
    color: #ABABAB;
  }

  [data-kinde-button-variant=primary] { 
    background: linear-gradient(90deg, #467BE6 30.32%, #212581 100%);
  }


  .kinde-branding a {
    color: #fff;
  }


  .footer {
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }

  .terms {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .footer a {
    font-weight: 700;
    color: #fff;
    text-decoration: none;
  }

  .image-header {
    height: 150px;
    background: url(https://asset.kindedemo.com/orbit/aac433a14500955ae1c8641e71da2076.jpeg) no-repeat center center;
    background-size: cover;
  }

  @media (min-width: 768px) { 
    .image-header {
      height: 200px;
      margin-bottom: 1.5rem;
    }

    .footer {
      flex-direction: row;
      justify-content: space-between;
    }
  
  }
`;
