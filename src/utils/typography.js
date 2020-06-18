import Typography from 'typography';
// import moragaTheme from 'typography-theme-moraga'
// import oceanBeachTheme from 'typography-theme-ocean-beach'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.53,
  scaleRatio: 2,
  paragraphSpacing: 1.2,
  headerFontFamily: [
    'Ubuntu',
  ],
  headerWeight: 900,
  bodyWeight: 400,
  bodyFontFamily: ['Gill Sans'],
});

// const typography = new Typography(moragaTheme)

// const typography = new Typography(oceanBeachTheme)

export default typography;
