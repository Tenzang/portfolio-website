import deepMerge from 'deepmerge';
import { createTheme, responsiveFontSizes, ThemeOptions, Theme } from '@material-ui/core/styles';

const makeTheme = (variant: ThemeOptions): Theme => {
    const common = {
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    '*::-webkit-scrollbar': {
                        width: '0.5rem'
                    },
                    '*::-webkit-scrollbar-thumb': {
                        background: '#888'
                    },
                    '*::-webkit-scrollbar-thumb:hover': {
                        background: '#555'
                    }
                }
            }
        },
        typography: {
            fontFamily: ['Montserrat'],
            h1: {
                fontSize: 70
            },
            h2: {
                fontSize: 40
            },
            h3: {
                fontSize: 30
            },
            h4: {
                fontSize: 25
            },
            h5: {
                fontSize: 15
            }
        }
    };
    const theme = createTheme(deepMerge(common, variant));
    return responsiveFontSizes(theme);
};

const light: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#1582e8'
        },
        secondary: {
            main: '#000'
        },
        error: {
            main: '#f03e3e'
        },
        warning: {
            main: '#f0a04f'
        },
        info: {
            main: '#709ecc'
        },
        success: {
            main: '#4fe054'
        },
        text: {
            primary: '#343a40',
            secondary: '#2e3133',
            hint: '#363c42',
            disabled: '#48494a'
        },
        background: {
            default: '#f2f2f2',
            paper: '#dce3f2'
        }
    }
};

const dark: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#FCFCFA'
        },
        secondary: {
            main: '#0b1e26'
        },
        error: {
            main: '#870505'
        },
        warning: {
            main: '#964c00'
        },
        info: {
            main: '#09539c'
        },
        success: {
            main: '#034d06'
        },
        text: {
            primary: '#fcfcfa',
            secondary: '#e4e7eb',
            hint: '#bbbcbd',
            disabled: '#ccc'
        },
        background: {
            default: '#16151A',
            paper: '#808080'
        }
    }
};

const themes: { [key: string]: Theme } = {
    light: makeTheme(light),
    dark: makeTheme(dark)
};

export const themeCookie = 'clthmvar';

export default themes;
