const icons = {
  html: `<svg viewBox="0 0 512 512">
          <polygon fill="#E44D26" points="107.644,470.877 74.633,100.62 437.367,100.62 404.321,470.819 255.778,512 			"/>
          <polygon fill="#F16529" points="256,480.523 376.03,447.246 404.27,130.894 256,130.894 			"/>
          <polygon fill="#EBEBEB" points="256,268.217 195.91,268.217 191.76,221.716 256,221.716 256,176.305 255.843,176.305 142.132,176.305 143.219,188.488 154.38,313.627 256,313.627"/>
          <polygon fill="#EBEBEB" points="256,386.153 255.801,386.206 205.227,372.55 201.994,336.333 177.419,336.333 156.409,336.333 162.771,407.634 255.791,433.457 256,433.399"/>
          <path d="M108.382,0h23.077v22.8h21.11V0h23.078v69.044H152.57v-23.12h-21.11v23.12h-23.077V0z"/>
          <path d="M205.994,22.896h-20.316V0h63.72v22.896h-20.325v46.148h-23.078V22.896z"/>
          <path d="M259.511,0h24.063l14.802,24.26L313.163,0h24.072v69.044h-22.982V34.822l-15.877,24.549h-0.397l-15.888-24.549v34.222h-22.58V0z"/>
          <path d="M348.72,0h23.084v46.222h32.453v22.822H348.72V0z"/>
          <polygon fill="#FFFFFF" points="255.843,268.217 255.843,313.627 311.761,313.627 306.49,372.521 255.843,386.191 255.843,433.435 348.937,407.634 349.62,399.962 360.291,280.411 361.399,268.217 349.162,268.217"/>
          <polygon fill="#FFFFFF" points="255.843,176.305 255.843,204.509 255.843,221.605 255.843,221.716 365.385,221.716 365.385,221.716 365.531,221.716 366.442,211.509 368.511,188.488 369.597,176.305"/>
        </svg>`,
  javascript: `<svg viewBox="0 0 630 630">
                <rect width="630" height="630" fill="#f7df1e"/>
                <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
              </svg>`,
  css: `<svg viewBox="-50 0 485 550">
          <g
            inkscape:label="Calque 1"
            inkscape:groupmode="layer"
            id="layer1"
            transform="translate(-193.633,-276.3622)">
            <g
               id="g3013"
               transform="translate(119,276.3622)">
              <polygon
                 id="polygon2989"
                 points="437.367,100.62 404.321,470.819 255.778,512 107.644,470.877 74.633,100.62 "
                 style="fill:#264de4" />
              <polygon
                 id="polygon2991"
                 points="376.03,447.246 404.27,130.894 256,130.894 256,480.523 "
                 style="fill:#2965f1" />
              <polygon
                 id="polygon2993"
                 points="150.31,268.217 154.38,313.627 256,313.627 256,268.217 "
                 style="fill:#ebebeb" />
              <polygon
                 id="polygon2995"
                 points="256,176.305 255.843,176.305 142.132,176.305 146.26,221.716 256,221.716 "
                 style="fill:#ebebeb" />
              <polygon
                 id="polygon2997"
                 points="256,433.399 256,386.153 255.801,386.206 205.227,372.55 201.994,336.333 177.419,336.333 156.409,336.333 162.771,407.634 255.791,433.457 "
                 style="fill:#ebebeb" />
              <path
                 id="path2999"
                 d="m 160,0 55,0 0,23 -32,0 0,23 32,0 0,23 -55,0 z"
                 inkscape:connector-curvature="0" />
              <path
                 id="path3001"
                 d="m 226,0 55,0 0,20 -32,0 0,4 32,0 0,46 -55,0 0,-21 32,0 0,-4 -32,0 z"
                 inkscape:connector-curvature="0" />
              <path
                 id="path3003"
                 d="m 292,0 55,0 0,20 -32,0 0,4 32,0 0,46 -55,0 0,-21 32,0 0,-4 -32,0 z"
                 inkscape:connector-curvature="0" />
              <polygon
                 id="polygon3005"
                 points="311.761,313.627 306.49,372.521 255.843,386.191 255.843,433.435 348.937,407.634 349.62,399.962 360.291,280.411 361.399,268.217 369.597,176.305 255.843,176.305 255.843,221.716 319.831,221.716 315.699,268.217 255.843,268.217 255.843,313.627 "
                 style="fill:#ffffff" />
            </g>
          </g>
        </svg>`
};

const getIcon = lang => {
  return !!lang && icons[lang.toLowerCase()];
};
