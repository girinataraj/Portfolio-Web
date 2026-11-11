// Original, approved OBSIDIAN signal geometry. Decorative; text alternatives in SignalField.
export function SignalArt() {
  return (
    <svg className="architecture-field" viewBox="0 0 760 700" fill="none">
      <defs>
        <linearGradient
          id="orbit"
          x1="115"
          y1="470"
          x2="640"
          y2="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#263a45" />
          <stop offset=".45" stopColor="#69909e" />
          <stop offset=".7" stopColor="#92e9ff" />
          <stop offset="1" stopColor="#19303b" />
        </linearGradient>
        <linearGradient
          id="facet-a"
          x1="280"
          y1="230"
          x2="460"
          y2="490"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43515e" />
          <stop offset=".43" stopColor="#171f28" />
          <stop offset="1" stopColor="#090d13" />
        </linearGradient>
        <linearGradient
          id="facet-b"
          x1="365"
          y1="270"
          x2="500"
          y2="430"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1b2c3a" />
          <stop offset=".6" stopColor="#0a1018" />
          <stop offset="1" stopColor="#345566" />
        </linearGradient>
        <linearGradient
          id="facet-c"
          x1="385"
          y1="200"
          x2="370"
          y2="470"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8295a6" />
          <stop offset=".22" stopColor="#364957" />
          <stop offset=".6" stopColor="#1b2832" />
          <stop offset="1" stopColor="#577c8c" />
        </linearGradient>
        <linearGradient
          id="edge"
          x1="290"
          y1="210"
          x2="460"
          y2="470"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#c7e9f1" />
          <stop offset=".4" stopColor="#577284" />
          <stop offset=".7" stopColor="#82e4ff" />
          <stop offset="1" stopColor="#293d4b" />
        </linearGradient>
        <radialGradient id="aura">
          <stop stopColor="#52c9ff" stopOpacity=".19" />
          <stop offset=".6" stopColor="#2b72a4" stopOpacity=".05" />
          <stop offset="1" stopColor="#080a0d" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="floor">
          <stop stopColor="#7ee5ff" stopOpacity=".18" />
          <stop offset="1" stopColor="#7ee5ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="390" cy="350" rx="330" ry="320" fill="url(#aura)" />
      <g className="field-grid" stroke="#6c99b1" strokeWidth=".6" opacity=".12">
        <path d="M65 514 389 327 711 514M126 550 450 363M187 585 510 398M248 620 571 434M309 655 632 469M65 514 389 701M126 479 450 666M187 444 510 631M248 409 571 596M309 374 632 561" />
      </g>
      <ellipse cx="389" cy="525" rx="185" ry="49" fill="url(#floor)" />
      <g className="orbits" stroke="url(#orbit)" strokeWidth="1">
        <ellipse
          cx="385"
          cy="354"
          rx="290"
          ry="110"
          transform="rotate(-26 385 354)"
          opacity=".56"
        />
        <ellipse
          cx="385"
          cy="354"
          rx="268"
          ry="100"
          transform="rotate(57 385 354)"
          opacity=".36"
        />
        <ellipse
          cx="385"
          cy="354"
          rx="262"
          ry="88"
          transform="rotate(8 385 354)"
          opacity=".21"
          strokeDasharray="2 7"
        />
        <ellipse
          cx="385"
          cy="354"
          rx="314"
          ry="134"
          transform="rotate(-26 385 354)"
          opacity=".1"
        />
      </g>
      <g className="signal-traces" stroke="#91e7ff" strokeWidth="1.5">
        <path
          className="trace trace-interface"
          d="M146 379 245 326 332 361 385 339"
        />
        <path
          className="trace trace-services"
          d="M579 200 508 239 436 294 385 339"
        />
        <path
          className="trace trace-intelligence"
          d="M596 468 510 420 438 386 385 339"
        />
      </g>
      <g className="core">
        <path
          d="m388 184 106 79-24 164-114 70-89-88 20-144Z"
          fill="url(#facet-a)"
          stroke="#596c7a"
          strokeWidth=".8"
        />
        <path d="m388 184-8 143-113 82 20-144Z" fill="url(#facet-c)" />
        <path d="m388 184 106 79-114 64Z" fill="#46535d" />
        <path d="m494 263-24 164-90-100Z" fill="url(#facet-b)" />
        <path d="m380 327 90 100-114 70Z" fill="#111c26" />
        <path d="m380 327-24 170-89-88Z" fill="#253642" />
        <path
          d="m388 184-8 143-24 170m-89-88 113-82 114-64m-114 64 90 100"
          stroke="url(#edge)"
          strokeWidth="1"
          opacity=".9"
        />
        <path
          className="core-seam"
          d="m388 184-8 143-24 170"
          stroke="#a9efff"
          strokeWidth="2"
        />
        <path
          d="m304 268 47-27m-54 44 22-13m97 131 22 24"
          stroke="#a0b0bc"
          strokeWidth=".7"
          opacity=".5"
        />
      </g>
      <g className="system-state state-interface">
        <path
          className="state-path"
          pathLength="1"
          d="M146 379 218 339 295 339 385 339"
        />
        <g
          className="interface-plane"
          transform="matrix(.94 -.22 .25 .92 175 260)"
        >
          <rect className="state-surface" width="190" height="142" rx="5" />
          <path className="state-rule" d="M0 29H190" />
          <circle className="state-dot" cx="16" cy="15" r="3" />
          <path className="state-rule" d="M29 15H85" />
          <rect
            className="state-card"
            x="14"
            y="43"
            width="71"
            height="51"
            rx="3"
          />
          <path className="state-rule" d="M98 48H173M98 62H154M98 77H164" />
          <rect
            className="state-highlight"
            x="14"
            y="108"
            width="93"
            height="20"
            rx="3"
          />
          <path className="state-cursor" d="m127 92 5 31 8-10 13-2Z" />
        </g>
        <circle className="state-focus" cx="146" cy="379" r="25" />
        <path
          className="state-path state-return"
          pathLength="1"
          d="M385 375 327 435 232 435 146 393"
        />
      </g>
      <g className="system-state state-services">
        <path
          className="state-path"
          pathLength="1"
          d="M579 200 508 240 385 339 590 323M385 339 488 460 573 460M385 339 249 414 185 414"
        />
        <g className="service-node" transform="translate(536 169)">
          <rect className="state-surface" width="106" height="64" rx="5" />
          <path className="state-rule" d="M17 21H88M17 34H64M17 47H77" />
          <circle className="state-dot" cx="90" cy="47" r="3" />
        </g>
        <g className="service-node" transform="translate(548 290)">
          <rect className="state-surface" width="106" height="64" rx="5" />
          <path className="state-rule" d="M17 21H88M17 34H64M17 47H77" />
          <circle className="state-dot" cx="90" cy="47" r="3" />
        </g>
        <g className="service-node" transform="translate(522 429)">
          <rect className="state-surface" width="106" height="64" rx="5" />
          <path className="state-rule" d="M17 21H88M17 34H64M17 47H77" />
          <circle className="state-dot" cx="90" cy="47" r="3" />
        </g>
        <g transform="translate(135 385)">
          <path
            className="state-surface"
            d="m0 12 48-22 48 22-48 22Zm0 18 48 22 48-22M0 48l48 22 48-22"
          />
        </g>
        <circle className="state-hub" cx="385" cy="339" r="35" />
        <path className="state-hub-cross" d="M369 339h32m-16-16v32" />
      </g>
      <g className="system-state state-intelligence">
        <path
          className="state-path"
          pathLength="1"
          d="M182 288 293 288 385 339M286 187 339 239 385 339M514 210 456 270 385 339M385 339 494 395 595 395"
        />
        <g className="source-fragment" transform="translate(147 246)">
          <path className="state-surface" d="M0 0h52l18 18v65H0Z" />
          <path
            className="state-rule"
            d="M52 0v18h18M14 34h42M14 47h42M14 60h26"
          />
        </g>
        <g className="source-fragment" transform="translate(255 145)">
          <path className="state-surface" d="M0 0h52l18 18v65H0Z" />
          <path
            className="state-rule"
            d="M52 0v18h18M14 34h42M14 47h42M14 60h26"
          />
        </g>
        <g className="source-fragment" transform="translate(481 168)">
          <path className="state-surface" d="M0 0h52l18 18v65H0Z" />
          <path
            className="state-rule"
            d="M52 0v18h18M14 34h42M14 47h42M14 60h26"
          />
        </g>
        <circle className="retrieval-lens" cx="385" cy="339" r="77" />
        <circle
          className="retrieval-lens lens-inner"
          cx="385"
          cy="339"
          r="60"
        />
        <circle className="retrieval-point" cx="385" cy="339" r="6" />
        <g className="answer-plane" transform="translate(544 362)">
          <rect className="state-surface" width="112" height="78" rx="5" />
          <path className="state-rule" d="M16 23H94M16 37H77M16 51H88" />
          <path className="state-check" d="m77 64 5 5 12-13" />
        </g>
      </g>
      <g className="field-node node-interface">
        <circle cx="146" cy="379" r="16" />
        <circle cx="146" cy="379" r="4" />
        <path d="M146 402v28h-64" />
      </g>
      <g className="field-node node-services">
        <circle cx="579" cy="200" r="16" />
        <circle cx="579" cy="200" r="4" />
        <path d="M579 176v-30h-37" />
      </g>
      <g className="field-node node-intelligence">
        <circle cx="596" cy="468" r="16" />
        <circle cx="596" cy="468" r="4" />
        <path d="M596 491v25h-30" />
      </g>
      <g fill="#8da6b9" opacity=".65">
        <circle cx="240" cy="166" r="1.5" />
        <circle cx="637" cy="338" r="1.5" />
        <circle cx="176" cy="252" r="1" />
        <circle cx="470" cy="100" r="1" />
        <path
          d="M107 291h8m-4-4v8M635 571h8m-4-4v8M338 120h6m-3-3v6"
          stroke="#8da6b9"
          strokeWidth=".7"
        />
      </g>
      <circle className="signal-particle particle-a" r="2.5" fill="#b9f3ff" />
      <circle className="signal-particle particle-b" r="2" fill="#8bafff" />
    </svg>
  );
}
