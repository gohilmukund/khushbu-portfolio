/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"

const icons = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  arrowUp: {
    shape: (
      <React.Fragment>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />
        {` `}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </React.Fragment>
    ),
    viewBox: `0 0 30 42`,
  },
  upDown: {
    shape: (
      <React.Fragment>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </React.Fragment>
    ),
    viewBox: `0 0 30 44.58`,
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
  cross: {
    shape: (
      <path
        strokeWidth="3px"
        d="M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
      />
    ),
    viewBox: `0 0 100 100`,
  },
  keyy: {
    shape: (
      <path
        d="M1150 4721c-207-28-386-161-473-351-34-74-57-157-57-206 0-20 8-11 33 37 81 158 281 232 450 169 109-41 205-154 254-300 17-52 18-130 21-1637l2-1583h64c117 0 279 40 419 103l67 30v1469l28-7c100-25 277-211 422-443 85-138 159-271 348-622 282-525 360-648 502-790 101-101 200-170 313-215 187-77 429-97 608-51 290 74 540 275 673 543 76 152 114 348 100 512l-7 86-13-81c-48-297-251-506-557-571-98-21-280-13-360 16-138 49-274 146-419 300-105 111-200 233-408 521-90 124-190 259-224 300-95 117-253 276-341 343-153 115-339 186-502 190-45 1-79 4-75 8 4 3 39 13 77 23 95 24 273 111 372 182 102 74 247 202 473 419 199 191 249 232 341 274 127 60 235 63 346 10 145-69 234-256 195-404-10-37-10-39 5-20 59 75 113 265 120 420 10 220-30 342-146 446-92 82-197 122-321 122-130 0-268-55-391-157-55-45-316-338-1016-1143l-143-164v708c0 455-4 740-11 798-31 251-132 457-281 576-131 104-330 161-488 140z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
    ),
    viewBox: `0 0 512 512`,
  },
  mobile: {
    shape: (
      <path
        d="M360 5370c-105-14-197-70-254-154-71-105-66 97-66-2516C40 81 34 292 107 183c39-59 127-123 194-142 33-9 317-11 1179-9l1135 3 57 28c75 37 134 98 172 177l31 65 3 2375c2 2638 8 2428-64 2536-37 56-111 112-184 141-42 17-117 18-1130 19-597 1-1110-2-1140-6zm1338-339c8-5 12-21 10-37l-3-29h-490l-3 29c-2 16 2 32 10 37 7 5 114 9 238 9s231-4 238-9zm932-2331V790H290v3820h2340V2700zM1516 627c146-38 215-193 147-328-86-168-320-168-405 0-68 133 0 289 142 327 58 16 57 16 116 1z"
        transform="matrix(.1 0 0 -.1 0 542)"
      />
    ),
    viewBox: `0 0 291 542`,
  },
  pc: {
    shape: (
      <path
        d="M1150 7560c-148-5-184-10-231-28-77-31-144-76-210-143-84-85-107-119-123-185-37-143-38-253-43-2791l-5-2493H-1l6-82c16-196 56-319 145-451 71-105 162-181 301-252l107-55h2260c1242 0 2373-3 2514-7l254-6 11-316c12-356 13-363 99-492 48-72 145-169 197-196 85-43 114-46 571-50 488-5 1402 11 1541 27 50 6 119 20 155 32 58 18 75 31 161 117 158 159 168 195 176 594l6 287h56c31 1 196 5 366 9 264 8 318 12 366 28 213 72 409 296 479 545 11 40 23 117 27 171l6 97h-543v2468c-1 1357-5 2536-10 2621-8 150-10 156-46 230-56 112-158 211-291 279l-101 52-3744-2c-2058-1-3822-4-3918-8zm3814-184c45-19 86-80 86-129 0-134-162-201-251-104-61 67-60 143 3 204 47 44 102 54 162 29zm3844-2818l-3-2333-152-3-151-3-5 1103c-5 1170-7 1216-53 1317-36 80-157 195-261 249l-81 42H5987l-85-48c-106-59-167-113-221-196-78-120-73-29-84-1313l-10-1153H1000v4670h7810l-2-2332zm-2308 110c62-32 85-68 84-129-1-85-74-155-153-146-108 12-171 124-123 217 19 36 88 80 127 80 11 0 41-10 65-22zm796-25c102-73 77-233-40-264-22-6-122-11-223-11-166 0-186 2-216 21-38 23-77 87-77 125 0 61 49 128 106 146 16 5 117 8 224 7 184-2 197-3 226-24zm752-520c110-6 114-7 125-32 14-30 18-3200 4-3263-7-35-11-37-55-45-61-10-2092-10-2153 0-39 7-48 12-54 35-11 40-17 2747-8 3034 6 164 13 252 20 259 18 18 610 28 1358 23 358-2 701-7 763-11zM7136 635c93-39 134-100 134-200-1-141-86-235-213-235-173 0-282 170-208 324 51 104 182 155 287 111z"
        transform="matrix(.1 0 0 -.1 0 758)"
      />
    ),
    viewBox: `0 0 981 758`,
  },
  mail: {
    shape: (
      <React.Fragment>
        <path
          // fill="#FF4848"
          d="M19.283 49.713v9.625a6.038 6.038 0 006.038 6.038h52.482a6.038 6.038 0 006.038-6.038V24.504a6.038 6.038 0 00-6.038-6.038H25.321a6.038 6.038 0 00-6.038 6.038v25.209z"
          transform="matrix(2.33 0 0 2.33 -1.167 -1.167)"
        />
        <path
          // fill="#FF4848"
          d="M24.085 43.342H7.142a1.42 1.42 0 110-2.842h16.943a1.42 1.42 0 110 2.842zM11.839 33.41H1.421a1.42 1.42 0 110-2.842h10.418a1.42 1.42 0 110 2.842zM11.839 53.275H4.162a1.421 1.421 0 010-2.842h7.677a1.421 1.421 0 010 2.842z"
          transform="matrix(2.33 0 0 2.33 -1.167 -1.167)"
        />
        <path
          fill="#000"
          d="M82.541 71.534H30.058c-4.113 0-7.459-3.346-7.459-7.459V54.45a1.42 1.42 0 112.842 0v9.625a4.623 4.623 0 004.617 4.617h52.483a4.623 4.623 0 004.617-4.617V29.241a4.622 4.622 0 00-4.617-4.617H30.058a4.622 4.622 0 00-4.617 4.617v9.51a1.42 1.42 0 11-2.842 0v-9.51c0-4.113 3.346-7.459 7.459-7.459h52.483c4.112 0 7.459 3.346 7.459 7.459v34.834c0 4.112-3.346 7.459-7.459 7.459z"
          transform="matrix(2.33 0 0 2.33 -1.167 -1.167)"
        />
        <path
          fill="#000"
          d="M56.299 54.238c-.344 0-.689-.125-.96-.374l-23.7-21.743a1.422 1.422 0 011.921-2.095l22.739 20.862L79.04 30.027a1.422 1.422 0 011.921 2.095L57.259 53.864a1.417 1.417 0 01-.96.374z"
          transform="matrix(2.33 0 0 2.33 -1.167 -1.167)"
        />
        <path
          fill="#000"
          d="M32.6 63.663a1.42 1.42 0 01-.961-2.469L48.626 45.61a1.422 1.422 0 011.921 2.095L33.56 63.29a1.421 1.421 0 01-.96.373zM80 63.663c-.343 0-.687-.124-.96-.374L62.053 47.705a1.422 1.422 0 011.921-2.095L80.96 61.195a1.422 1.422 0 01-.96 2.468zM28.822 48.079H11.879a1.42 1.42 0 110-2.842h16.943a1.42 1.42 0 110 2.842zM16.576 38.147H6.158a1.42 1.42 0 110-2.842h10.418a1.42 1.42 0 110 2.842zM16.576 58.012H8.899a1.421 1.421 0 010-2.842h7.677a1.421 1.421 0 010 2.842z"
          transform="matrix(2.33 0 0 2.33 -1.167 -1.167)"
        />
    </React.Fragment>
    ),
    viewBox: `0 0 200 200`,
  },
  linkedin: {
    shape: (
      <React.Fragment>
        <path
          fill="#069"
          d="M0 6.447C0 2.887 2.978 0 6.651 0h76.698C87.022 0 90 2.887 90 6.447v77.106C90 87.114 87.022 90 83.349 90H6.651C2.978 90 0 87.114 0 83.553V6.447z"
          transform="matrix(2.33 0 0 2.33 -1.167 -1.167)"
        />
        <path
          fill="#FFF"
          d="M20.485 29.151c4.74 0 7.691-3.121 7.691-7.021-.088-3.988-2.95-7.022-7.601-7.022-4.65 0-7.69 3.034-7.69 7.022 0 3.9 2.95 7.021 7.512 7.021h.088zM27.282 75.339v-40.64H13.688v40.64h13.594zM34.804 75.339h13.594V52.644c0-1.215.088-2.428.447-3.296.983-2.427 3.219-4.94 6.975-4.94 4.919 0 6.887 3.727 6.887 9.19v21.741h13.592V52.037c0-12.483-6.706-18.291-15.65-18.291-7.333 0-10.553 4.073-12.342 6.847h.091v-5.894H34.804c.178 3.814 0 40.64 0 40.64z"
          transform="matrix(2.33 0 0 2.33 -1.167 -1.167)"
        />
      </React.Fragment>
    ),
    viewBox: `0 0 210 210`,
  },
  insta: {
    shape: (
      <g
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="1"
        opacity="1"
        transform="matrix(2.33 0 0 2.33 -1.167 -1.167)"
      >
        <linearGradient
          id="SVGID_0"
          x1="7.553"
          x2="82.447"
          y1="9.553"
          y2="84.448"
          gradientTransform="matrix(1 0 0 -1 0 92)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFD600"></stop>
          <stop offset="50%" stopColor="#FF0100"></stop>
          <stop offset="100%" stopColor="#D800B9"></stop>
        </linearGradient>
        <path
          fill="url(#SVGID_0)"
          d="M89.729 26.447c-.219-4.79-.98-8.061-2.092-10.923a22.062 22.062 0 00-5.19-7.971 22.058 22.058 0 00-7.971-5.192C71.614 1.25 68.343.49 63.553.272 58.754.053 57.221 0 45 0S31.246.053 26.447.271c-4.79.219-8.061.98-10.923 2.092a22.062 22.062 0 00-7.971 5.19 22.054 22.054 0 00-5.192 7.97C1.25 18.386.49 21.657.272 26.446.052 31.246 0 32.779 0 45c0 12.222.052 13.755.272 18.554.218 4.789.979 8.061 2.092 10.923a22.058 22.058 0 005.19 7.97 22.04 22.04 0 007.971 5.19c2.862 1.113 6.133 1.873 10.923 2.092 4.799.219 6.332.271 18.553.271s13.754-.051 18.553-.271c4.79-.219 8.061-.979 10.923-2.092a23.003 23.003 0 0013.16-13.16c1.113-2.863 1.873-6.134 2.092-10.923.219-4.8.271-6.333.271-18.554 0-12.221-.052-13.754-.271-18.553zm-8.1 36.738c-.2 4.388-.933 6.77-1.549 8.356a14.902 14.902 0 01-8.54 8.54c-1.585.616-3.968 1.349-8.356 1.549-4.744.217-6.168.262-18.184.262-12.017 0-13.44-.045-18.184-.262-4.387-.2-6.77-.933-8.356-1.549a13.954 13.954 0 01-5.174-3.367 13.946 13.946 0 01-3.367-5.174c-.616-1.585-1.349-3.968-1.549-8.356-.216-4.745-.262-6.168-.262-18.184 0-12.016.046-13.439.262-18.184.201-4.388.933-6.77 1.549-8.356a13.95 13.95 0 013.367-5.175 13.935 13.935 0 015.175-3.366c1.585-.617 3.968-1.349 8.356-1.55 4.744-.215 6.167-.261 18.183-.261h-.001c12.016 0 13.439.046 18.184.263 4.388.2 6.77.933 8.356 1.549a13.964 13.964 0 015.174 3.366 13.935 13.935 0 013.366 5.175c.617 1.585 1.35 3.968 1.55 8.356.216 4.745.262 6.168.262 18.184 0 12.016-.045 13.438-.262 18.184z"
        />
        <linearGradient
          id="SVGID_1"
          x1="28.66"
          x2="61.339"
          y1="30.66"
          y2="63.34"
          gradientTransform="matrix(1 0 0 -1 0 92)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FF6400"></stop>
          <stop offset="50%" stopColor="#FF0100"></stop>
          <stop offset="100%" stopColor="#FD0056"></stop>
        </linearGradient>
        <path
          fill="url(#SVGID_1)"
          d="M44.999 21.892c-12.762 0-23.108 10.346-23.108 23.108s10.346 23.108 23.108 23.108c12.763 0 23.108-10.346 23.108-23.108S57.762 21.892 44.999 21.892zm0 38.108C36.716 59.999 30 53.284 30 45c0-8.284 6.715-15 15-15 8.284.001 15 6.716 15 15 0 8.284-6.716 15-15.001 15z"
        />
        <linearGradient
          id="SVGID_2"
          x1="65.202"
          x2="72.839"
          y1="67.202"
          y2="74.839"
          gradientTransform="matrix(1 0 0 -1 0 92)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F30072"></stop>
          <stop offset="100%" stopColor="#E50097"></stop>
        </linearGradient>
        <path
          fill="url(#SVGID_2)"
          d="M74.421 20.979a5.4 5.4 0 11-10.8 0 5.4 5.4 0 0110.8 0z"
        />
      </g>
    ),
    viewBox: `0 0 210 210`,
  },
  whatsapp: {
    shape: (
      <g
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="1"
        opacity="1"
        transform="matrix(2.33 0 0 2.33 -1.167 -1.167)"
      >
        <circle cx="45" cy="45" r="45" fill="#2AB540"></circle>
        <path
          fill="#FFF"
          d="M16.138 44.738a28.911 28.911 0 003.869 14.485l-4.112 15.013 15.365-4.029a28.958 28.958 0 0013.85 3.527h.012c15.973 0 28.976-12.999 28.983-28.974.003-7.742-3.01-15.022-8.481-20.498-5.472-5.476-12.749-8.494-20.502-8.497-15.976 0-28.977 12.997-28.984 28.973m9.15 13.728l-.574-.911a24.013 24.013 0 01-3.683-12.816c.005-13.278 10.811-24.081 24.099-24.081a23.937 23.937 0 0117.031 7.062 23.942 23.942 0 017.05 17.037c-.006 13.279-10.812 24.083-24.09 24.083h-.009a24.071 24.071 0 01-12.261-3.357l-.88-.522-9.118 2.391 2.435-8.886zm19.834 15.268s-.001 0 0 0"
        />
        <path
          fill="#FFF"
          d="M37.878 32.624c-.543-1.206-1.113-1.23-1.63-1.251-.422-.018-.905-.017-1.388-.017-.483 0-1.268.181-1.931.906-.664.725-2.535 2.477-2.535 6.039 0 3.563 2.595 7.006 2.957 7.49.362.483 5.01 8.028 12.37 10.931 6.118 2.412 7.362 1.933 8.69 1.812 1.328-.121 4.285-1.751 4.888-3.442.604-1.691.604-3.14.423-3.443-.181-.302-.664-.483-1.388-.845-.724-.362-4.285-2.114-4.948-2.356-.664-.241-1.147-.362-1.63.363-.483.724-1.87 2.355-2.292 2.838-.422.484-.845.544-1.569.182-.724-.363-3.057-1.127-5.824-3.594-2.153-1.92-3.606-4.29-4.029-5.015-.422-.724-.045-1.116.318-1.477.325-.324.724-.846 1.087-1.268.361-.423.482-.725.723-1.208.242-.483.121-.906-.06-1.269-.181-.363-1.588-3.944-2.232-5.376"
        />
      </g>
    ),
    viewBox: `0 0 210 210`,
  },
  download: {
    shape: (
      <React.Fragment>
        <path
          fill="#E2E2E2"
          d="M86.554 26.164v58.519A5.317 5.317 0 0181.237 90H22.076a5.317 5.317 0 01-5.317-5.317V5.317A5.317 5.317 0 0122.076 0h38.315c8.269.135 26.163 16.011 26.163 26.164z"
          transform="matrix(2.33 0 0 2.33 -1.167 -1.167)"
        />
        <path
          fill="#F15642"
          d="M16.833 21.859H57.1a5.827 5.827 0 015.827 5.827v18.341a5.827 5.827 0 01-5.827 5.827H9.273a5.827 5.827 0 01-5.827-5.827V16.032"
          transform="matrix(2.33 0 0 2.33 -1.167 -1.167)"
        />
        <path
          fill="#BE4030"
          d="M3.446 16.032a5.827 5.827 0 005.827 5.827h7.56V10.552h-7.56a5.827 5.827 0 00-5.827 5.827"
          transform="matrix(2.33 0 0 2.33 -1.167 -1.167)"
        />
        <path
          fill="#B7B7B7"
          d="M60.391 0h6.662c2.826 0 5.536 1.123 7.534 3.121l8.847 8.847a10.655 10.655 0 013.121 7.534v6.662a6.19 6.19 0 00-6.19-6.19h-7.866a5.917 5.917 0 01-5.917-5.917V6.191A6.192 6.192 0 0060.391 0z"
          transform="matrix(2.33 0 0 2.33 -1.167 -1.167)"
        />
        <path
          fill="#FFF"
          d="M20.708 27.68h-5.489a1.5 1.5 0 00-1.5 1.5v15.331a1.5 1.5 0 103 0V39.78h3.989a4.127 4.127 0 004.122-4.121v-3.858a4.128 4.128 0 00-4.122-4.121zm1.121 7.979c0 .618-.503 1.121-1.122 1.121h-3.989v-6.1h3.989c.619 0 1.122.503 1.122 1.121v3.858zM34.554 27.68h-5.22a1.5 1.5 0 00-1.5 1.5v15.332a1.5 1.5 0 001.5 1.5h5.22a4.396 4.396 0 004.391-4.391v-9.55a4.396 4.396 0 00-4.391-4.391zm1.391 13.941c0 .767-.624 1.391-1.391 1.391h-3.72V30.68h3.72c.767 0 1.391.624 1.391 1.391v9.55zM51.841 27.68h-8.11a1.5 1.5 0 00-1.5 1.5v15.332a1.5 1.5 0 103 0v-6.166h3.812a1.5 1.5 0 100-3H45.23V30.68h6.61a1.5 1.5 0 00.001-3z"
          transform="matrix(2.33 0 0 2.33 -1.167 -1.167)"
        />
        <path
          fill="#B7B7B7"
          d="M45.142 72.219a1.5 1.5 0 00-2.122 0l-5.248 5.248V61.825a1.5 1.5 0 10-3 0v15.642l-5.248-5.248a1.5 1.5 0 10-2.121 2.121l6.323 6.323a3.565 3.565 0 002.243 1.024 1.522 1.522 0 00.608 0 3.568 3.568 0 002.243-1.024l6.323-6.323a1.502 1.502 0 00-.001-2.121z"
          transform="matrix(2.33 0 0 2.33 -1.167 -1.167)"
        />
      </React.Fragment>
    ),
    viewBox: `0 0 210 210`,
  }
}

type IconType = "triangle" | "circle" | "arrowUp" | "upDown" | "box" | "hexa" | "cross" | "keyy" | "pc" | "mobile" | "mail" | "linkedin" | "insta" | "download" | "whatsapp"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const SVG = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

export default SVG
