import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    (window as any).ClarityIcons.add({
      'bffl-trophy': TROPHY,
      'bffl-second': SECOND,
      'bffl-third': THIRD,
      'bffl-wreck': WRECK
    });
  }

  nothing() {
    alert('it doesn\'t do anything yet...get off my case...');
  }
}

/* Only SVGs Below */
const TROPHY = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 461.241 461.241" style="enable-background:new 0 0 461.241 461.241;" xml:space="preserve">
<path style="fill:#E5C400;" d="M170.3,193.523c-63.212-24.946-89.854-71.038-101.074-105.311
c-12.078-36.895-9.286-67.745-9.161-69.04l0.871-9.041h74.375v20H79.726c0.099,10.976,1.485,30.743,8.742,52.572
c14.479,43.552,44.482,74.578,89.174,92.216L170.3,193.523z"/>
<path style="opacity:0.4;fill:#5B5B5F;enable-background:new    ;" d="M170.3,193.523c-63.212-24.946-89.854-71.038-101.074-105.311
c-12.078-36.895-9.286-67.745-9.161-69.04l0.871-9.041h74.375v20H79.726c0.099,10.976,1.485,30.743,8.742,52.572
c14.479,43.552,44.482,74.578,89.174,92.216L170.3,193.523z"/>
<rect x="213.658" y="214.612" style="fill:#E5C400;" width="33.926" height="85.673"/>
<path style="fill:#E5C400;" d="M316.344,334.479H144.897v-7.395c0-14.8,11.998-26.798,26.798-26.798h117.851
c14.8,0,26.798,11.998,26.798,26.798L316.344,334.479L316.344,334.479z"/>
<rect x="123.228" y="334.479" style="fill:#D8D9DD;" width="214.785" height="105.905"/>
<rect x="148.441" y="359.692" style="fill:#FFFFFF;" width="164.358" height="55.475"/>
<rect x="111.805" y="435.566" style="fill:#59595A;" width="237.63" height="25.675"/>
<rect x="213.658" y="214.612" style="opacity:0.4;fill:#5B5B5F;enable-background:new    ;" width="33.926" height="22.604"/>
<path style="fill:#E5C400;" d="M401.176,19.173l-0.871-9.041h-54.179c0.072-3.485,0.11-6.874,0.11-10.132
C298.438,0,230.62,0,230.62,0s-67.818,0-115.615,0c0,77.692,19.344,224.599,115.615,224.599c29.033,0,51.06-13.373,67.68-34.167
c57.929-25.52,82.942-69.313,93.715-102.22C404.093,51.318,401.301,20.468,401.176,19.173z M373.008,81.99
c-10.267,31.362-28.544,56.266-54.516,74.405c17.133-38.413,24.48-86.494,26.832-126.264h36.21
C381.449,40.945,380.101,60.323,373.008,81.99z"/>
<path style="opacity:0.4;fill:#5B5B5F;enable-background:new    ;" d="M316.344,334.479H144.897v-7.395
c0-14.8,11.998-26.798,26.798-26.798h117.851c14.8,0,26.798,11.998,26.798,26.798L316.344,334.479L316.344,334.479z"/>
<path style="opacity:0.3;fill:#5B5B5F;enable-background:new    ;" d="M401.176,19.173l-0.871-9.041h-54.179
c0.072-3.485,0.11-6.874,0.11-10.132C298.438,0,230.62,0,230.62,0v461.241h118.815v-25.675h-11.423V334.479h-21.669v-7.395
c0-14.8-11.998-26.798-26.798-26.798h-41.963v-77.32c20.863-4.153,37.5-15.997,50.717-32.533
c57.929-25.52,82.942-69.313,93.715-102.22C404.093,51.318,401.301,20.468,401.176,19.173z M373.008,81.99
c-10.267,31.362-28.544,56.266-54.516,74.405c17.133-38.413,24.48-86.494,26.832-126.264h36.21
C381.449,40.945,380.101,60.323,373.008,81.99z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;

const SECOND = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 502 502" style="enable-background:new 0 0 502 502;" xml:space="preserve">
<g>
<g>
 <g>
   <path d="M167.312,136.527c2.564,0,5.128-0.98,7.082-2.939c3.899-3.911,3.89-10.242-0.021-14.142L57.505,2.919
     c-3.911-3.9-10.243-3.891-14.142,0.021c-3.899,3.912-3.89,10.242,0.021,14.142l116.867,116.527
     C162.203,135.555,164.757,136.527,167.312,136.527z"/>
   <path d="M408.127,38.946L307.611,139.462v-7.638c0-5.522-4.477-10-10-10h-93.222c-5.523,0-10,4.478-10,10v55.086
     c0,3.097,1.435,6.02,3.886,7.913l6.516,5.035c-27.465,8.611-52.233,24.844-71.207,46.975
     C109.606,274.799,96.4,310.515,96.4,347.401C96.4,432.647,165.753,502,251,502s154.6-69.354,154.6-154.6
     c0-36.886-13.206-72.602-37.184-100.567c-18.975-22.13-43.743-38.364-71.207-46.975l6.516-5.035
     c2.451-1.894,3.886-4.816,3.886-7.913v-19.163L422.269,53.089c3.905-3.905,3.905-10.237,0-14.143
     C418.364,35.042,412.032,35.042,408.127,38.946z M214.389,141.824h73.222V182L251,210.29L214.389,182V141.824z M385.6,347.401
     c0,74.219-60.381,134.6-134.6,134.6s-134.6-60.381-134.6-134.6c0-64.821,45.347-119.685,108.437-132.052l20.049,15.492
     c3.601,2.783,8.628,2.783,12.229,0l20.049-15.492C340.254,227.715,385.6,282.579,385.6,347.401z"/>
   <path d="M458.634,2.937c-3.9-3.908-10.232-3.916-14.142-0.016l-9.555,9.534c-3.909,3.901-3.917,10.232-0.015,14.143
     c1.953,1.957,4.516,2.937,7.079,2.937c2.556,0,5.111-0.974,7.063-2.921l9.555-9.534C462.528,13.178,462.535,6.847,458.634,2.937z
     "/>
   <path d="M195.64,420.094c-22.738-17.414-35.779-43.806-35.779-72.405c0-5.522-4.477-10-10-10c-5.523,0-10,4.478-10,10
     c0,34.875,15.898,67.054,43.618,88.284c1.814,1.389,3.952,2.062,6.073,2.062c3.005,0,5.978-1.35,7.946-3.921
     C200.857,429.73,200.024,423.452,195.64,420.094z"/>
   <path d="M153.452,319.064c1.229,0.497,2.498,0.732,3.746,0.732c3.955,0,7.7-2.362,9.274-6.253
     c3.971-9.818,9.591-18.812,16.704-26.728c3.691-4.108,3.353-10.432-0.756-14.122c-4.109-3.692-10.432-3.353-14.122,0.755
     c-8.669,9.65-15.522,20.617-20.367,32.595C145.86,311.163,148.332,316.992,153.452,319.064z"/>
   <path d="M253.568,289.59c-25.678,0-46.568,20.891-46.568,46.568c0,5.522,4.477,10,10,10s10-4.478,10-10
     c0-14.649,11.918-26.568,26.568-26.568c0.414,0,0.825,0.01,1.224,0.027c7.984,0.359,14.509,5.104,17.454,12.691
     c2.378,6.129,2.422,15.176-4.587,22.185l-51.436,51.436c-2.86,2.86-3.715,7.161-2.167,10.898
     c1.548,3.736,5.194,6.173,9.239,6.173h63.246c5.523,0,10-4.478,10-10c0-5.522-4.477-10-10-10h-39.104l34.365-34.364
     c11.551-11.552,15.034-28.244,9.089-43.563c-5.811-14.973-19.298-24.72-35.208-25.437
     C254.982,289.606,254.277,289.59,253.568,289.59z"/>
 </g>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;

const THIRD = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 502 502" style="enable-background:new 0 0 502 502;" xml:space="preserve">
<g>
<g>
 <g>
   <path d="M167.312,136.527c2.564,0,5.128-0.98,7.082-2.939c3.899-3.911,3.89-10.242-0.021-14.142L57.505,2.919
     c-3.911-3.9-10.242-3.891-14.142,0.021c-3.899,3.911-3.89,10.242,0.021,14.142l116.867,116.527
     C162.203,135.555,164.757,136.527,167.312,136.527z"/>
   <path d="M408.127,38.946L307.611,139.462v-7.638c0-5.522-4.477-10-10-10h-93.222c-5.523,0-10,4.478-10,10v55.086
     c0,3.097,1.435,6.02,3.886,7.913l6.516,5.035c-27.465,8.611-52.233,24.844-71.207,46.975
     C109.606,274.799,96.4,310.515,96.4,347.401C96.4,432.647,165.753,502,251,502s154.6-69.354,154.6-154.6
     c0-36.886-13.206-72.602-37.184-100.567c-18.975-22.13-43.743-38.364-71.207-46.975l6.516-5.035
     c2.451-1.894,3.886-4.816,3.886-7.913v-19.163L422.269,53.089c3.905-3.905,3.905-10.237,0-14.143
     C418.364,35.042,412.032,35.042,408.127,38.946z M214.389,141.824h73.222V182L251,210.29L214.389,182V141.824z M385.6,347.401
     c0,74.219-60.381,134.6-134.6,134.6s-134.6-60.381-134.6-134.6c0-64.821,45.347-119.685,108.437-132.052l20.049,15.492
     c3.601,2.783,8.628,2.783,12.229,0l20.049-15.492C340.254,227.715,385.6,282.579,385.6,347.401z"/>
   <path d="M458.634,2.937c-3.9-3.908-10.232-3.916-14.142-0.016l-9.555,9.534c-3.909,3.901-3.917,10.232-0.015,14.143
     c1.953,1.957,4.516,2.937,7.079,2.937c2.556,0,5.111-0.974,7.063-2.921l9.555-9.534C462.528,13.178,462.535,6.847,458.634,2.937z
     "/>
   <path d="M195.64,420.094c-22.738-17.414-35.779-43.806-35.779-72.405c0-5.522-4.477-10-10-10c-5.523,0-10,4.478-10,10
     c0,34.875,15.898,67.054,43.618,88.284c1.814,1.389,3.952,2.062,6.073,2.062c3.005,0,5.978-1.35,7.946-3.921
     C200.857,429.73,200.024,423.452,195.64,420.094z"/>
   <path d="M153.452,319.064c1.229,0.497,2.498,0.732,3.746,0.732c3.955,0,7.7-2.362,9.274-6.253
     c3.971-9.818,9.591-18.812,16.704-26.728c3.691-4.108,3.353-10.432-0.756-14.122c-4.109-3.692-10.432-3.353-14.122,0.755
     c-8.669,9.65-15.522,20.617-20.367,32.595C145.86,311.163,148.332,316.992,153.452,319.064z"/>
   <path d="M287.73,324.731c0-20.253-16.477-36.73-36.73-36.73c-20.253,0-36.73,16.477-36.73,36.73c0,5.522,4.477,10,10,10
     s10-4.478,10-10c0-9.226,7.505-16.73,16.73-16.73c9.225,0,16.73,7.505,16.73,16.73c0,9.123-7.349,16.27-16.73,16.27
     c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10c9.381,0,16.73,7.146,16.73,16.27c0,9.226-7.505,16.73-16.73,16.73
     c-9.225,0-16.73-7.505-16.73-16.73c0-5.522-4.477-10-10-10s-10,4.478-10,10c0,20.253,16.477,36.73,36.73,36.73
     s36.73-16.478,36.73-36.73c0-10.325-4.393-19.658-11.43-26.27C283.337,344.39,287.73,335.057,287.73,324.731z"/>
 </g>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;

const WRECK = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
<g>
 <path d="M330.405,265.891c-0.968-2.992-3.556-5.174-6.669-5.626l-41.68-6.057l-18.641-37.771
   c-1.393-2.822-4.267-4.608-7.413-4.608c-3.147,0-6.02,1.787-7.413,4.608l-18.641,37.771l-41.681,6.057
   c-3.114,0.452-5.702,2.633-6.674,5.626c-0.972,2.992-0.161,6.278,2.091,8.474l30.161,29.4l-7.12,41.514
   c-0.531,3.101,0.744,6.235,3.289,8.085c2.545,1.848,5.919,2.093,8.705,0.629l37.281-19.601l37.281,19.601
   c1.21,0.636,2.531,0.949,3.846,0.949c1.715,0,3.42-0.532,4.86-1.579c2.546-1.85,3.821-4.983,3.288-8.085l-7.12-41.514
   l30.161-29.399C330.567,272.168,331.377,268.883,330.405,265.891z M283.503,294.96c-1.949,1.899-2.837,4.636-2.376,7.318
   l5.024,29.288l-26.302-13.828c-2.409-1.265-5.285-1.265-7.693,0l-26.302,13.828l5.023-29.289c0.461-2.682-0.429-5.417-2.376-7.316
   l-21.279-20.741l29.407-4.273c2.693-0.391,5.021-2.082,6.224-4.522l13.152-26.647l13.152,26.647
   c1.205,2.439,3.531,4.131,6.224,4.522l29.406,4.273L283.503,294.96z"/>
</g>
</g>
<g>
<g>
 <path d="M117.121,217.987c33.705,0,65.351-20.995,77.226-54.533c1.523-4.304-0.73-9.028-5.034-10.551
   c-20.5-7.259-42.59-6.136-62.245,3.143c4.982-6.532,10.445-12.813,16.411-18.778c3.228-3.228,3.228-8.463,0-11.69
   c-3.229-3.228-8.463-3.228-11.691,0c-4.26,4.26-8.275,8.673-12.075,13.207c-0.905-24.555-12.766-48.449-34.287-63.764
   c-3.721-2.647-8.882-1.777-11.528,1.942c-12.675,17.812-17.656,39.493-14.024,61.05c3.362,19.95,13.737,37.571,29.379,50.136
   c-2.717,6.294-5.091,12.701-7.139,19.191c-1.621-3.626-3.514-7.161-5.679-10.577c-11.708-18.462-29.904-31.26-51.236-36.037
   c-2.137-0.479-4.382-0.088-6.233,1.086c-1.852,1.174-3.16,3.036-3.64,5.175c-9.518,42.504,16.059,84.824,57.447,96.585
   c-0.208,8.763,0.162,17.534,1.085,26.258c-1.917-1.704-3.917-3.334-6.01-4.873C50.233,272.01,28.636,266.698,7.02,269.996
   c-4.514,0.689-7.613,4.906-6.924,9.419c3.299,21.611,14.817,40.643,32.432,53.59c14.203,10.44,30.997,15.916,48.299,15.916
   c2.769,0,5.552-0.154,8.338-0.436c3.38,7.855,7.279,15.539,11.701,22.997c-25.575-8.2-54.672-3.717-76.953,14.529
   c-3.531,2.893-4.051,8.101-1.158,11.634c13.85,16.913,33.458,27.421,55.212,29.587c2.765,0.276,5.519,0.411,8.26,0.411
   c16.883,0,33.172-5.19,47.004-14.972c9.305,9.122,19.464,17.358,30.241,24.474c1.402,0.926,2.984,1.369,4.548,1.369
   c2.684,0,5.316-1.306,6.906-3.712c2.515-3.81,1.466-8.938-2.343-11.454c-10.407-6.871-20.199-14.871-29.104-23.775
   c-19.915-19.915-34.333-43.273-43.279-68.172c39.254-15.129,61.092-58.205,49.077-99.297c-1.281-4.381-5.87-6.894-10.254-5.615
   c-20.983,6.135-38.32,20.075-48.819,39.25c-0.334,0.61-0.636,1.23-0.953,1.846c0.078-17.587,2.63-35.164,7.666-52.158
   C103.639,217.152,110.419,217.987,117.121,217.987z M72.406,246.079c-27.378-10.17-44.775-37.605-42.299-66.706
   c13.329,4.931,24.624,14.034,32.364,26.241C70.211,217.821,73.631,231.921,72.406,246.079z M42.32,319.684
   c-11.646-8.561-19.953-20.455-23.956-34.09c0.351-0.005,0.701-0.009,1.052-0.009c28.775,0,54.426,19.115,62.592,46.79
   C67.797,332.611,53.966,328.245,42.32,319.684z M79.606,410.78c-14.383-1.432-27.59-7.434-37.983-17.127
   c24.886-15.284,57.212-12.067,78.598,7.826C108.121,408.931,93.987,412.21,79.606,410.78z M104.705,273.678
   c6.942-12.678,17.63-22.487,30.614-28.264c4.338,28.881-11.263,57.377-37.932,69.282
   C95.258,300.646,97.765,286.356,104.705,273.678z M133.876,171.105c13.047-6.224,27.455-7.928,41.364-5.018
   c-13.375,25.963-42.692,39.953-71.291,34.009C110.441,187.453,120.831,177.33,133.876,171.105z M76.176,135.265
   c-2.402-14.254-0.085-28.575,6.534-41.151c21.291,19.99,26.689,52.025,13.123,77.889C85.459,162.29,78.577,149.518,76.176,135.265
   z"/>
</g>
</g>
<g>
<g>
 <path d="M431.173,348.921c17.301,0,34.098-5.477,48.299-15.916c17.614-12.948,29.134-31.979,32.432-53.591
   c0.689-4.513-2.412-8.729-6.924-9.419c-25.062-3.827-49.249,4.205-66.843,19.889c0.926-8.743,1.299-17.533,1.09-26.314
   c19.369-5.49,35.834-17.737,46.701-34.875c11.707-18.462,15.523-40.378,10.747-61.71c-0.996-4.456-5.417-7.256-9.872-6.261
   c-21.332,4.776-39.529,17.575-51.235,36.037c-2.166,3.416-4.058,6.952-5.68,10.578c-2.047-6.49-4.422-12.897-7.139-19.192
   c33.464-26.915,40.574-75.749,15.356-111.186c-1.271-1.787-3.199-2.995-5.361-3.358c-2.164-0.368-4.38,0.144-6.167,1.416
   c-17.812,12.675-29.621,31.528-33.254,53.086c-0.597,3.547-0.939,7.096-1.075,10.632c-3.788-4.518-7.79-8.915-12.036-13.16
   c-3.228-3.228-8.462-3.229-11.691,0c-3.228,3.228-3.228,8.463,0,11.69c5.966,5.966,11.429,12.246,16.41,18.778
   c-19.653-9.278-41.744-10.403-62.243-3.143c-4.304,1.523-6.557,6.247-5.034,10.551c11.875,33.541,43.517,54.533,77.226,54.533
   c6.698,0,13.48-0.834,20.203-2.559c5.044,17.019,7.595,34.625,7.667,52.239c-9.911-19.278-27.374-34.628-49.771-41.177
   c-4.383-1.282-8.972,1.233-10.254,5.615c-6.136,20.983-3.734,43.099,6.765,62.274c9.39,17.15,24.261,30.094,42.308,37.03
   c-8.947,24.897-23.365,48.252-43.277,68.166c-8.901,8.903-18.695,16.901-29.104,23.775c-3.809,2.516-4.859,7.644-2.343,11.454
   c1.589,2.407,4.223,3.712,6.906,3.712c1.564,0,3.146-0.443,4.548-1.369c10.782-7.119,20.941-15.355,30.246-24.478
   c14.195,10.022,30.677,14.933,47.078,14.933c23.71,0,47.236-10.223,63.396-29.955c1.389-1.696,2.047-3.875,1.83-6.057
   c-0.217-2.181-1.292-4.187-2.988-5.577c-16.914-13.85-38.21-20.282-59.962-18.119c-5.83,0.581-11.497,1.779-16.949,3.519
   c4.404-7.435,8.29-15.095,11.659-22.926C425.621,348.768,428.403,348.921,431.173,348.921z M481.901,179.379
   c1.223,14.158-2.195,28.257-9.935,40.464c-7.741,12.207-19.036,21.31-32.364,26.241
   C437.126,216.984,454.523,189.548,481.901,179.379z M493.63,285.593c-8.268,28.009-34.446,47.221-63.634,46.776
   C438.264,304.36,464.425,285.112,493.63,285.593z M336.761,166.087c13.909-2.911,28.315-1.205,41.361,5.018
   c13.046,6.223,23.437,16.348,29.928,28.99C379.444,206.033,350.135,192.05,336.761,166.087z M416.162,172.002
   c-6.62-12.576-8.936-26.897-6.534-41.151c2.402-14.253,9.283-27.025,19.657-36.738
   C442.851,119.976,437.453,152.012,416.162,172.002z M429.763,384.343c14.389-1.432,28.515,1.848,40.615,9.302
   c-21.385,19.89-53.713,23.109-78.598,7.826C402.173,391.777,415.38,385.776,429.763,384.343z M414.607,314.7
   c-12.985-5.776-23.672-15.585-30.614-28.263c-6.942-12.678-9.447-26.968-7.319-41.019
   C403.343,257.323,418.945,285.819,414.607,314.7z"/>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;
