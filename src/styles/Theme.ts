import { css, CSSObject, FlattenSimpleInterpolation, SimpleInterpolation } from "styled-components";

export const theme = {
    body: '#202020',
    text: '#fff',
    bodyRgba: '32,32,32',
    textRgba: '255,255,255',

    gray: '#bebebe', //gray shade(影)
    // px	サイズを絶対値指定する
    // %	サイズを相対値値指定する(親要素基準)
    // em	サイズを相対値値指定する(親要素基準)
    // rem	サイズを相対値値指定する(ルート要素基準)
    fontxs: '0.75em',
    fontsm: '0.875em',
    fontmd: '1em',
    fontlg: '1.25em',
    fontxl: '2em',
    font2xl: '3em',
    font3xl: '5em',
    font4xl: '10em',

    navHeight: '5rem',

    base: (
        base: CSSObject | TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
        ): FlattenSimpleInterpolation => css`
            ${css(base, ...interpolations)}
        `,
        sm: (
            sm: CSSObject | TemplateStringsArray,
            ...interpolations: SimpleInterpolation[]
        ): FlattenSimpleInterpolation => css`
            @media (min-width: 640px) {
            ${css(sm, ...interpolations)}
            }
        `,
        md: (
            md: CSSObject | TemplateStringsArray,
            ...interpolations: SimpleInterpolation[]
        ): FlattenSimpleInterpolation => css`
            @media (min-width: 768px) {
            ${css(md, ...interpolations)}
            }
        `,
        lg: (
            lg: CSSObject | TemplateStringsArray,
            ...interpolations: SimpleInterpolation[]
        ): FlattenSimpleInterpolation => css`
            @media (min-width: 1024px) {
            ${css(lg, ...interpolations)}
            }
        `,
        xl: (
            xl: CSSObject | TemplateStringsArray,
            ...interpolations: SimpleInterpolation[]
        ): FlattenSimpleInterpolation => css`
            @media (min-width: 1280px) {
            ${css(xl, ...interpolations)}
            }
        `,
    };