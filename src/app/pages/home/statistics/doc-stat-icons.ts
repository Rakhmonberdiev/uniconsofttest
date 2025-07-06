export interface DocumentStaticsModel {
  type: keyof typeof docsvgIcons;
  count: number;
}
export const documentTypeLabels: Record<string, string> = {
  President: 'Prezident hujjatlari',
  MinisterCabinet: 'Vazirlar Mahkamasi hujjatlari',
  GovernmentCommission: 'Hukumat komissiyasi',
  Internal: 'Ichki hujjatlar',
  Audit: "Audit ko'rsatma va takliflar",
};
export const docsvgIcons = {
  President: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_646_121)">
<path opacity="0.5" d="M18.3788 15.9087L17.6111 23.2957L6.38885 23.2958L5.62119 15.9087" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.4399 15.9087H4.05582V11.5485H19.9442V15.9087H13.5601" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.4147 11.5485V8.13866L18.2928 7.67068" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5853 11.5485V8.13866L5.70724 7.67068" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17.4688C12.8616 17.4688 13.5601 16.7704 13.5601 15.9087C13.5601 15.0471 12.8616 14.3487 12 14.3487C11.1384 14.3487 10.4399 15.0471 10.4399 15.9087C10.4399 16.7704 11.1384 17.4688 12 17.4688Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5.3852C13.103 5.3852 13.9972 4.49107 13.9972 3.38809V2.70131C13.9972 1.59518 13.0981 0.699688 11.9919 0.704195C10.8921 0.708654 10.0029 1.60147 10.0029 2.70131V3.38809C10.0029 4.49103 10.897 5.3852 12 5.3852Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.5">
<path d="M15.3149 11.5484V8.74046C15.3149 6.9093 13.8304 5.4248 11.9993 5.4248C10.1681 5.4248 8.68359 6.9093 8.68359 8.74046V11.5484" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5.38477V8.72253" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_646_121">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

`,
  MinisterCabinet: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 19H3.5C2.67157 19 2 19.6716 2 20.5C2 21.3284 2.67157 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5C22 19.6716 21.3284 19 20.5 19Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 6.39682C22 7.28223 21.2822 8 20.3968 8H3.60317C2.71777 8 2 7.28223 2 6.39682V6.39682C2 5.70126 2.44853 5.08504 3.11043 4.87125L11.3853 2.19855C11.7849 2.06947 12.2151 2.06947 12.6147 2.19855L20.8896 4.87125C21.5515 5.08504 22 5.70126 22 6.39682V6.39682Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.5" d="M14 5H10" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.5" d="M9.95053 19V17.778L10.7445 16.5558H13.2538L14.0477 17.778V19M14.0477 8V9.22201L13.2538 10.4442H10.7445L9.95053 9.22201V8M13.2547 10.4451V16.5559M10.7454 16.5559V10.4451M3 19V17.778L3.7939 16.5558M3.7939 16.5558H6.30322M3.7939 16.5558L3.79307 10.4451M6.30322 16.5558L7.09717 17.778V19M6.30322 16.5558L6.30239 10.4451M7.09717 8V9.22201L6.30322 10.4442H3.7939L3 9.22201V8M16.9028 19V17.778L17.6968 16.5558H20.2061L21 17.778V19M21 8V9.22201L20.2061 10.4442H17.6968L16.9028 9.22201V8M20.207 10.4451V16.5559M17.6977 16.5559V10.4451" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`,
  GovernmentCommission: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_646_141)">
<path d="M23 23H1V16C1 14.3431 2.34315 13 4 13H20C21.6569 13 23 14.3431 23 16V23Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 16H23" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.5" d="M5 23V16" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.5" d="M8 23V16" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.5" d="M19 23V16" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.5" d="M16 23V16" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.5" d="M11 23V16" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.5" d="M13 23V16" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.5" d="M5 13V11.1842C5 10.5302 5.6716 10 6.5 10C7.3284 10 8 10.5302 8 11.1842" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.5" d="M16 11.1842C16 10.5302 16.6716 10 17.5 10C18.3284 10 19 10.5302 19 11.1842V13" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 13V10.1722C8 7.86793 9.79084 6 12 6C14.2092 6 16 7.86793 16 10.1722V13" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 11H16" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V1H15V3.5H12" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_646_141">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

`,
  Internal: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3116 12.6473L20.8293 10.7154C21.4335 8.46034 21.7356 7.3328 21.5081 6.35703C21.3285 5.58657 20.9244 4.88668 20.347 4.34587C19.6157 3.66095 18.4881 3.35883 16.2331 2.75458C13.978 2.15033 12.8504 1.84821 11.8747 2.07573C11.1042 2.25537 10.4043 2.65945 9.86351 3.23687C9.27709 3.86298 8.97128 4.77957 8.51621 6.44561C8.43979 6.7254 8.35915 7.02633 8.27227 7.35057L8.27222 7.35077L7.75458 9.28263C7.15033 11.5377 6.84821 12.6652 7.07573 13.641C7.25537 14.4115 7.65945 15.1114 8.23687 15.6522C8.96815 16.3371 10.0957 16.6392 12.3508 17.2435L12.3508 17.2435C14.3834 17.7881 15.4999 18.0873 16.415 17.9744C16.5152 17.9621 16.6129 17.9448 16.7092 17.9223C17.4796 17.7427 18.1795 17.3386 18.7203 16.7612C19.4052 16.0299 19.7074 14.9024 20.3116 12.6473Z" stroke="white" stroke-width="1.5"/>
<path opacity="0.5" d="M16.415 17.9741C16.2065 18.6126 15.8399 19.1902 15.347 19.6519C14.6157 20.3368 13.4881 20.6389 11.2331 21.2432C8.97798 21.8474 7.85044 22.1495 6.87466 21.922C6.10421 21.7424 5.40432 21.3383 4.86351 20.7609C4.17859 20.0296 3.87647 18.9021 3.27222 16.647L2.75458 14.7151C2.15033 12.46 1.84821 11.3325 2.07573 10.3567C2.25537 9.58627 2.65945 8.88638 3.23687 8.34557C3.96815 7.66065 5.09569 7.35853 7.35077 6.75428C7.77741 6.63996 8.16368 6.53646 8.51621 6.44531" stroke="white" stroke-width="1.5"/>
<path d="M11.7769 10L16.6065 11.2941" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path opacity="0.5" d="M11 12.8977L13.8978 13.6742" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>

`,
  Audit: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M16 4.00174C18.175 4.01385 19.3529 4.1103 20.1213 4.87868C21 5.75736 21 7.17157 21 10V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H9C6.17157 22 4.75736 22 3.87868 21.1213C3 20.2426 3 18.8284 3 16V10C3 7.17157 3 5.75736 3.87868 4.87868C4.64706 4.1103 5.82497 4.01385 8 4.00174" stroke="white" stroke-width="1.5"/>
<path d="M10.5 14L17 14" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 14H7.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 10.5H7.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 17.5H7.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10.5 10.5H17" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10.5 17.5H17" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z" stroke="white" stroke-width="1.5"/>
</svg>
`,
};
