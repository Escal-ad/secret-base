const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/harbor-scope-detail-171htpWI.js","assets/pixel_harbor-DgeyQUUF.js","assets/index-D-VKWf7I.js","assets/index-CzAqu4Ou.css","assets/three.core-CQEiG4z1.js","assets/pixel_harbor-Cp4IVIDa.css","assets/harbor-map-bake-lIBdklXA.js"])))=>i.map(i=>d[i]);
import{$ as e,$t as t,A as n,An as r,B as i,Bn as a,C as o,D as s,Dn as c,E as l,En as u,F as d,Fn as f,G as p,Gn as m,H as h,Hn as g,I as _,In as v,J as y,Jt as b,K as x,Kt as S,L as C,Ln as w,M as T,Mn as E,N as D,Nn as ee,O as te,On as ne,Pn as O,Q as k,Qt as re,R as A,Rn as ie,S as ae,Sn as oe,T as j,Tn as se,U as ce,Un as le,V as M,Vn as ue,W as de,Wn as N,X as P,Xt as fe,Y as F,Yt as pe,Z as me,_ as he,_n as ge,a as _e,at as ve,b as ye,bn as be,cn as xe,ct as Se,d as I,dt as Ce,en as we,et as Te,f as Ee,fn as De,g as Oe,gn as ke,gt as Ae,h as je,hn as Me,ht as Ne,i as Pe,it as Fe,j as Ie,jn as Le,k as Re,kn as L,l as ze,ln as Be,lt as Ve,m as He,mn as Ue,n as R,nt as We,o as Ge,on as Ke,ot as qe,p as z,pn as Je,q as B,qt as Ye,r as V,rt as Xe,sn as Ze,st as Qe,tn as $e,tt as et,u as tt,un as nt,v as rt,vn as it,w as at,wn as ot,x as st,y as ct,yn as lt,zn as ut}from"./three.core-CQEiG4z1.js";import{A as dt,C as ft,D as pt,E as mt,G as H,I as ht,K as gt,L as _t,M as U,N as W,P as vt,S as yt,T as G,V as K,W as bt,_ as q,a as xt,b as J,c as St,d as Ct,f as wt,g as Tt,h as Et,j as Dt,k as Y,l as Ot,m as kt,n as At,o as jt,p as Mt,s as Nt,t as Pt,u as Ft,v as It,w as Lt,x as Rt,y as zt}from"./index-D-VKWf7I.js";import{a as Bt,c as Vt,i as X,l as Ht,n as Ut,o as Wt,r as Gt,s as Kt,t as qt,u as Jt}from"./pixel_harbor-DgeyQUUF.js";function Yt(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Xt(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new I(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new B}},envmap:{envMap:{value:null},envMapRotation:{value:new B},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new B}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new B}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new B},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new B},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new B},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new B}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new B}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new B}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new I(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new I(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0},uvTransform:{value:new B}},sprite:{diffuse:{value:new I(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}}},Zt={basic:{uniforms:g([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:g([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new I(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:g([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new I(0)},specular:{value:new I(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:g([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new I(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:g([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new I(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:g([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:g([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:g([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:g([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:g([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:g([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new B},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new B}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:g([Q.common,Q.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:g([Q.lights,Q.fog,{color:{value:new I(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};Zt.physical={uniforms:g([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new B},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new B},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new B},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new B},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new B},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new B},sheen:{value:0},sheenColor:{value:new I(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new B},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new B},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new B},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new B},attenuationDistance:{value:0},attenuationColor:{value:new I(0)},specularColor:{value:new I(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new B},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new B},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new B}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var Qt={r:0,b:0,g:0},$t=new y,en=new B;en.set(-1,0,0,0,1,0,0,0,1);function tn(e,t,n,r,i,o){let s=new I(0),c=i===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function h(t){let r=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),r=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?n.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,o),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let i=m(n);i&&i.isCubeTexture?(u===void 0&&(u=new F(new Pe(1,1,1),new Be({name:`BackgroundCubeMaterial`,uniforms:O(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=i,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($t.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(en),u.material.toneMapped=Ee.getTransfer(i.colorSpace)!==Ze,(d!==i||f!==i.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=i,f=i.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):i&&i.isTexture&&(l===void 0&&(l=new F(new Se(2,2),new Be({name:`BackgroundMaterial`,uniforms:O(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=i,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=Ee.getTransfer(i.colorSpace)!==Ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),l.material.uniforms.uvTransform.value.copy(i.matrix),(d!==i||f!==i.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=i,f=i.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,r){t.getRGB(Qt,a(e)),n.buffers.color.setClear(Qt.r,Qt.g,Qt.b,r,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function nn(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function rn(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function an(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(N(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&N(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&N(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function on(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Qe,s=new B,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var sn=class extends E{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Oe(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Pe(5,5,5),i=new Be({name:`CubemapFromEquirect`,uniforms:O(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new F(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=M),new He(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},cn=256,ln=3,un=20,dn=256,fn=16,pn=3,mn=new L,hn=new I,gn=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new He(1,10,null),this._boxMesh=new F(new Pe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=mn}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(hn));let h=new He(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(cn,ie(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?cn:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=_n(e,!1,!1),n=Math.log2(e)-ln;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=_n(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cn()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Sn()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=yn(),this._integrationMaterial=bn());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/fn);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-pn)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(dn*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=xn());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function _n(e,t,n){return new sn(e,{minFilter:h,generateMipmaps:t,type:_,colorSpace:de,depthBuffer:n})}function vn(e,t,n){return new Be({name:e,uniforms:t,vertexShader:Z.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function yn(){return vn(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${dn}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function bn(){return vn(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:fn}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xn(){return vn(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${un}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Sn(){return vn(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Cn(){return vn(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function wn(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new sn(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new gn(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new gn(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Tn(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&m(`WebGLRenderer: `+e+` extension not supported.`),t}}}function En(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?it:ge)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Dn(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function On(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:w(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function kn(e,t,i){let a=new WeakMap,o=new r;function s(r,s,c){let l=r.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=u===void 0?0:u.length,f=a.get(s);if(f===void 0||f.count!==d){f!==void 0&&f.texture.dispose();let e=s.morphAttributes.position!==void 0,r=s.morphAttributes.normal!==void 0,i=s.morphAttributes.color!==void 0,c=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],u=s.morphAttributes.color||[],p=0;e===!0&&(p=1),r===!0&&(p=2),i===!0&&(p=3);let m=s.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*d),_=new ct(g,m,h,d);_.type=n,_.needsUpdate=!0;let v=p*4;for(let t=0;t<d;t++){let n=c[t],a=l[t],s=u[t],d=m*h*4*t;for(let t=0;t<n.count;t++){let c=t*v;e===!0&&(o.fromBufferAttribute(n,t),g[d+c+0]=o.x,g[d+c+1]=o.y,g[d+c+2]=o.z,g[d+c+3]=0),r===!0&&(o.fromBufferAttribute(a,t),g[d+c+4]=o.x,g[d+c+5]=o.y,g[d+c+6]=o.z,g[d+c+7]=0),i===!0&&(o.fromBufferAttribute(s,t),g[d+c+8]=o.x,g[d+c+9]=o.y,g[d+c+10]=o.z,g[d+c+11]=s.itemSize===4?o.w:1)}}f={count:d,texture:_,size:new ne(m,h)},a.set(s,f);function y(){_.dispose(),a.delete(s),s.removeEventListener(`dispose`,y)}s.addEventListener(`dispose`,y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(e,`morphTexture`,r.morphTexture,i);else{let t=0;for(let e=0;e<l.length;e++)t+=l[e];let n=s.morphTargetsRelative?1:1-t;c.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),c.getUniforms().setValue(e,`morphTargetInfluences`,l)}c.getUniforms().setValue(e,`morphTargetsTexture`,f.texture,i),c.getUniforms().setValue(e,`morphTargetsTextureSize`,f.size)}return{update:s}}function An(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var jn={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Mn(e,t,n,r,i,a){let s=new E(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,l=null,u=null,d=new Ge;d.setAttribute(`position`,new Re([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute(`uv`,new Re([0,2,0,0,2,0],2));let f=new b({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new F(d,f),m=new ve(-1,1,1,-1,0,1),h=null,g=null,v=!1,y,x=null,S=[],C=!1;this.setSize=function(e,t){s.setSize(e,t),c!==null&&c.setSize(e,t),l!==null&&l.setSize(e,t);for(let n=0;n<S.length;n++){let r=S[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){S=e,C=S.length>0&&S[0].isRenderPass===!0;let t=s.width,n=s.height;S.length>0&&c===null&&(c=new E(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),l=new E(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&S.some(e=>e.needsDepthTexture===!0);r!==(s.depthTexture!==null)&&(r===!0&&u===null&&(u=new o(t,n),a===!0&&(u.format=ae,u.type=oe)),s.dispose(),s.depthTexture=r?u:null,s.resolveDepthBuffer=r,s.storeMultisampledDepthBuffer=r);for(let e=0;e<S.length;e++){let i=S[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(u)}},this.begin=function(e,t){if(v||e.toneMapping===0&&S.length===0)return!1;if(x=t,t!==null){let e=t.width,n=t.height;(s.width!==e||s.height!==n)&&this.setSize(e,n)}return C===!1&&e.setRenderTarget(s),y=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return C},this.end=function(e,t){e.toneMapping=y,v=!0;let n=s,r=c;for(let i=0;i<S.length;i++){let a=S[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===c?l:c))}if(h!==e.outputColorSpace||g!==e.toneMapping){h=e.outputColorSpace,g=e.toneMapping,f.defines={},Ee.getTransfer(h)===`srgb`&&(f.defines.SRGB_TRANSFER=``);let t=jn[g];t&&(f.defines[t]=``),f.needsUpdate=!0}f.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(x),e.render(p,m),x=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.dispose(),c!==null&&c.dispose(),l!==null&&l.dispose(),d.dispose(),f.dispose()}}var Nn=new Me,Pn=new o(1,1),Fn=new je(1),In=new ct,Ln=new rt,Rn=new Oe,zn=[],Bn=[],Vn=new Float32Array(16),Hn=new Float32Array(9),Un=new Float32Array(4);function Wn(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=zn[i];if(a===void 0&&(a=new Float32Array(i),zn[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Gn(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Kn(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function qn(e,t){let n=Bn[t];n===void 0&&(n=new Int32Array(t),Bn[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Jn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Yn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gn(n,t))return;e.uniform2fv(this.addr,t),Kn(n,t)}}function Xn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Gn(n,t))return;e.uniform3fv(this.addr,t),Kn(n,t)}}function Zn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gn(n,t))return;e.uniform4fv(this.addr,t),Kn(n,t)}}function Qn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Kn(n,t)}else{if(Gn(n,r))return;Un.set(r),e.uniformMatrix2fv(this.addr,!1,Un),Kn(n,r)}}function $n(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Kn(n,t)}else{if(Gn(n,r))return;Hn.set(r),e.uniformMatrix3fv(this.addr,!1,Hn),Kn(n,r)}}function er(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Kn(n,t)}else{if(Gn(n,r))return;Vn.set(r),e.uniformMatrix4fv(this.addr,!1,Vn),Kn(n,r)}}function tr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function nr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gn(n,t))return;e.uniform2iv(this.addr,t),Kn(n,t)}}function rr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Gn(n,t))return;e.uniform3iv(this.addr,t),Kn(n,t)}}function ir(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gn(n,t))return;e.uniform4iv(this.addr,t),Kn(n,t)}}function ar(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function or(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gn(n,t))return;e.uniform2uiv(this.addr,t),Kn(n,t)}}function sr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Gn(n,t))return;e.uniform3uiv(this.addr,t),Kn(n,t)}}function cr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gn(n,t))return;e.uniform4uiv(this.addr,t),Kn(n,t)}}function lr(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function ur(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?lr(Pn):Nn,n.setTexture2D(t||a,i)}function dr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ln,i)}function fr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?lr(Fn):Rn,n.setTextureCube(t||a,i)}function pr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||In,i)}function mr(e){switch(e){case 5126:return Jn;case 35664:return Yn;case 35665:return Xn;case 35666:return Zn;case 35674:return Qn;case 35675:return $n;case 35676:return er;case 5124:case 35670:return tr;case 35667:case 35671:return nr;case 35668:case 35672:return rr;case 35669:case 35673:return ir;case 5125:return ar;case 36294:return or;case 36295:return sr;case 36296:return cr;case 35678:case 36198:case 36298:case 36306:case 35682:return ur;case 35679:case 36299:case 36307:return dr;case 35680:case 36300:case 36308:case 36293:return fr;case 36289:case 36303:case 36311:case 36292:return pr}}function hr(e,t){e.uniform1fv(this.addr,t)}function gr(e,t){let n=Wn(t,this.size,2);e.uniform2fv(this.addr,n)}function _r(e,t){let n=Wn(t,this.size,3);e.uniform3fv(this.addr,n)}function vr(e,t){let n=Wn(t,this.size,4);e.uniform4fv(this.addr,n)}function yr(e,t){let n=Wn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function br(e,t){let n=Wn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function xr(e,t){let n=Wn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Sr(e,t){e.uniform1iv(this.addr,t)}function Cr(e,t){e.uniform2iv(this.addr,t)}function wr(e,t){e.uniform3iv(this.addr,t)}function Tr(e,t){e.uniform4iv(this.addr,t)}function Er(e,t){e.uniform1uiv(this.addr,t)}function Dr(e,t){e.uniform2uiv(this.addr,t)}function Or(e,t){e.uniform3uiv(this.addr,t)}function kr(e,t){e.uniform4uiv(this.addr,t)}function Ar(e,t,n){let r=this.cache,i=t.length,a=qn(n,i);Gn(r,a)||(e.uniform1iv(this.addr,a),Kn(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?lr(Pn):Nn;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function jr(e,t,n){let r=this.cache,i=t.length,a=qn(n,i);Gn(r,a)||(e.uniform1iv(this.addr,a),Kn(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ln,a[e])}function Mr(e,t,n){let r=this.cache,i=t.length,a=qn(n,i);Gn(r,a)||(e.uniform1iv(this.addr,a),Kn(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?lr(Fn):Rn;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Nr(e,t,n){let r=this.cache,i=t.length,a=qn(n,i);Gn(r,a)||(e.uniform1iv(this.addr,a),Kn(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||In,a[e])}function Pr(e){switch(e){case 5126:return hr;case 35664:return gr;case 35665:return _r;case 35666:return vr;case 35674:return yr;case 35675:return br;case 35676:return xr;case 5124:case 35670:return Sr;case 35667:case 35671:return Cr;case 35668:case 35672:return wr;case 35669:case 35673:return Tr;case 5125:return Er;case 36294:return Dr;case 36295:return Or;case 36296:return kr;case 35678:case 36198:case 36298:case 36306:case 35682:return Ar;case 35679:case 36299:case 36307:return jr;case 35680:case 36300:case 36308:case 36293:return Mr;case 36289:case 36303:case 36311:case 36292:return Nr}}var Fr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mr(t.type)}},Ir=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pr(t.type)}},Lr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Rr=/(\w+)(\])?(\[|\.)?/g;function zr(e,t){e.seq.push(t),e.map[t.id]=t}function Br(e,t,n){let r=e.name,i=r.length;for(Rr.lastIndex=0;;){let a=Rr.exec(r),o=Rr.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){zr(n,l===void 0?new Fr(s,e,t):new Ir(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Lr(s),zr(n,e)),n=e}}}var Vr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Br(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Hr(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ur=37297,Wr=0;function Gr(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Kr=new B;function qr(e){Ee._getMatrix(Kr,Ee.workingColorSpace,e);let t=`mat3( ${Kr.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(e)){case p:return[t,`LinearTransferOETF`];case Ze:return[t,`sRGBTransferOETF`];default:return N(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Jr(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Gr(e.getShaderSource(t),r)}return i}function Yr(e,t){let n=qr(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Xr={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Zr(e,t){let n=Xr[t];return n===void 0?(N(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Qr=new L;function $r(){return Ee.getLuminanceCoefficients(Qr),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Qr.x.toFixed(4)}, ${Qr.y.toFixed(4)}, ${Qr.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ei(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ri).join(`
`)}function ti(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ni(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ri(e){return e!==``}function ii(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ai(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var oi=/^[ \t]*#include +<([\w\d./]+)>/gm;function si(e){return e.replace(oi,ci)}function ci(e,t){let n=Z[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return si(n)}var li=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ui(e){return e.replace(li,di)}function di(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function fi(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var pi={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function mi(e){return pi[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var hi={302:`ENVMAP_MODE_REFRACTION`};function gi(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:hi[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var _i={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function vi(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:_i[e.combine]||`ENVMAP_BLENDING_NONE`}function yi(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=mi(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=gi(n),d=vi(n),f=ei(n),p=ti(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(ri).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(ri).join(`
`),g.length>0&&(g+=`
`)):(h=[fi(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ri).join(`
`),g=[fi(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:Zr(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,Yr(`linearToOutputTexel`,n.outputColorSpace),$r(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ri).join(`
`)),o=si(o),o=ii(o,n),o=ai(o,n),s=si(s),s=ii(s,n),s=ai(s,n),o=ui(o),s=ui(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Hr(i,i.VERTEX_SHADER,v),x=Hr(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Jr(i,b,`vertex`),n=Jr(i,x,`fragment`);w(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):N(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Vr(i,m),T=ni(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let T;this.getAttributes=function(){return T===void 0&&S(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(m,Ur)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Wr++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var bi=0,xi=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Si(e),t.set(e,n)),n}},Si=class{constructor(e){this.id=bi++,this.code=e,this.usedTimes=0}};function Ci(e){return e===1030||e===37490||e===36285}function wi(e,t,n,r,a,o){let s=new i,c=new xi,l=new Set,u=[],d=new Map,f=r.logarithmicDepthBuffer,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return l.add(e),e===0?`uv`:`uv${e}`}function h(i,a,s,u,d,h){let g=u.fog,_=d.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=p[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&N(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,ee,te;if(x){let e=Zt[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=c.getVertexShaderStage(i),t=c.getFragmentShaderStage(i);c.update(i,e,t),ee=e.id,te=t.id}let ne=e.getRenderTarget(),O=e.state.buffers.depth.getReversed(),k=d.isInstancedMesh===!0,re=d.isBatchedMesh===!0,A=!!i.map,ie=!!i.matcap,ae=!!b,oe=ae&&b.isPMREMTexture===!0,j=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,M=!!i.displacementMap,ue=!!i.emissiveMap,de=!!i.metalnessMap,P=!!i.roughnessMap,fe=i.anisotropy>0,F=i.clearcoat>0,pe=i.diffuseRoughness>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=fe&&!!i.anisotropyMap,be=F&&!!i.clearcoatMap,xe=F&&!!i.clearcoatNormalMap,Se=F&&!!i.clearcoatRoughnessMap,I=pe&&!!i.diffuseRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,De=_e&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ve&&!!i.transmissionMap,Me=ve&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,Ie=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Re=e.toneMapping);let L=oe?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,ze={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:te,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:re,batchingColor:re&&d._colorsTexture!==null,instancing:k,instancingColor:k&&d.instanceColor!==null,instancingMorph:k&&d.morphTexture!==null,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ee.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:A,matcap:ie,envMap:ae,envMapMode:ae&&b.mapping,envMapPMREM:oe,envMapMaxLod:oe?L.length-1:null,envMapSize:oe?L[0].width:null,aoMap:j,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:M,emissiveMap:ue,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&Ci(i.normalMap.format),metalnessMap:de,roughnessMap:P,anisotropy:fe,anisotropyMap:ye,clearcoat:F,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,diffuseRoughness:pe,diffuseRoughnessMap:I,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ve,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:Ie,combine:i.combine,mapUv:A&&m(i.map.channel),aoMapUv:j&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:M&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:de&&m(i.metalnessMap.channel),roughnessMapUv:P&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:I&&m(i.diffuseRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:ke&&m(i.specularColorMap.channel),specularIntensityMapUv:Ae&&m(i.specularIntensityMap.channel),transmissionMapUv:je&&m(i.transmissionMap.channel),thicknessMapUv:Me&&m(i.thicknessMap.channel),alphaMapUv:Pe&&m(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(le||fe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:d.isPoints===!0&&!!_.attributes.uv&&(A||Pe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:O,skinning:d.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:a.sun.length,numDirLights:a.directional.length,numPointLights:a.point.length,numSpotLights:a.spot.length,numSpotLightMaps:a.spotLightMap.length,numRectAreaLights:a.rectArea.length,numHemiLights:a.hemi.length,numSunLightShadows:a.sunShadowMap.length,numDirLightShadows:a.directionalShadowMap.length,numPointLightShadows:a.pointShadowMap.length,numSpotLightShadows:a.spotShadowMap.length,numSpotLightShadowsWithMaps:a.numSpotLightShadowsWithMaps,numLightProbes:a.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&s.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:A&&i.map.isVideoTexture===!0&&Ee.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.retroreflection&&s.enable(24),t.diffuseRoughness&&s.enable(25),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),t.packedNormalMap&&s.enable(22),t.vertexNormals&&s.enable(23),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),t.numLightProbeGrids>0&&s.enable(22),t.hasPositionAttribute&&s.enable(23),e.push(s.mask)}function y(e){let t=p[e.type],n;if(t){let e=Zt[t];n=lt.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=d.get(n);return r===void 0?(r=new yi(e,n,t,a),u.push(r),d.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function S(e){c.remove(e)}function C(){c.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:u,dispose:C}}function Ti(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ei(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Di(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Oi(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Ei),r.length>1&&r.sort(t||Di),i.length>1&&i.sort(t||Di)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ki(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Oi,e.set(t,[i])):n>=r.length?(i=new Oi,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ai(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new L,color:new I};break;case`SpotLight`:n={position:new L,direction:new L,color:new I,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new L,color:new I,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new L,skyColor:new I,groundColor:new I};break;case`RectAreaLight`:n={color:new I,position:new L,halfWidth:new L,halfHeight:new L}}return e[t.id]=n,n}}}function ji(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Mi=0;function Ni(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Pi(e){let t=new Ai,n=ji(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new L);let i=new L,a=new y,o=new y;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Ni);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Mi++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Fi(e){let t=new Pi(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Ii(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Fi(e),t.set(n,[a])):r>=i.length?(a=new Fi(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Li=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ri=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zi=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Bi=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Vi=new y,Hi=new L,Ui=new L;function Wi(e,t,i){let a=new T,s=new ne,c=new ne,l=new r,u=new me,d=new k,f={},p=i.maxTextureSize,m={0:1,1:0,2:2},h=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:Li,fragmentShader:Ri}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let v=new Ge;v.setAttribute(`position`,new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new F(v,h),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let x=this.type;this.render=function(t,r,i){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||t.length===0)return;this.type===2&&(N(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=x!==this.type;h&&r.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],f=d.shadow;if(f===void 0){N(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;s.copy(f.mapSize);let g=f.getFrameExtents();s.multiply(g),c.copy(f.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(c.x=Math.floor(p/g.x),s.x=c.x*g.x,f.mapSize.x=c.x),s.y>p&&(c.y=Math.floor(p/g.y),s.y=c.y*g.y,f.mapSize.y=c.y));let v=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=v,f.map===null||h===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(d.isPointLight){N(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new E(s.x,s.y,{format:S,type:_,minFilter:M,magFilter:M,generateMipmaps:!1}),f.map.texture.name=d.name+`.shadowMap`,f.map.depthTexture=new o(s.x,s.y,n),f.map.depthTexture.name=d.name+`.shadowMapDepth`,f.map.depthTexture.format=st,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=et,f.map.depthTexture.magFilter=et}else d.isPointLight?(f.map=new sn(s.x),f.map.depthTexture=new je(s.x,ot)):(f.map=new E(s.x,s.y),f.map.depthTexture=new o(s.x,s.y,ot)),f.map.depthTexture.name=d.name+`.shadowMap`,f.map.depthTexture.format=st,this.type===1?(f.map.depthTexture.compareFunction=v?518:515,f.map.depthTexture.minFilter=M,f.map.depthTexture.magFilter=M):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=et,f.map.depthTexture.magFilter=et);f.camera.updateProjectionMatrix()}f.map.isWebGLCubeRenderTarget!==!0&&(f.map.width!==s.x||f.map.height!==s.y)&&f.map.setSize(s.x,s.y);let y=f.map.isWebGLCubeRenderTarget?6:f.getViewportCount();d.isPointLight!==!0&&f.updateMatrices(d,i);let b=f.camera.layers.mask&4294967294?f.camera.layers:i.layers;for(let t=0;t<y;t++){let n=f.getCamera(t);if(d.isPointLight){let e=f.camera,n=f.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Hi.setFromMatrixPosition(d.matrixWorld),e.position.copy(Hi),Ui.copy(e.position),Ui.add(zi[t]),e.up.copy(Bi[t]),e.lookAt(Ui),e.updateMatrixWorld(),n.makeTranslation(-Hi.x,-Hi.y,-Hi.z),Vi.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(Vi,e.coordinateSystem,e.reversedDepth)}if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);l.set(c.x*n.x,c.y*n.y,c.x*n.z,c.y*n.w),m.viewport(l)}a=f.getFrustum(t),D(r,i,n,d,b,this.type)}f.isPointLightShadow!==!0&&this.type===3&&C(f,i),f.needsUpdate=!1}x=this.type,b.needsUpdate=!1,e.setRenderTarget(u,d,f)};function C(n,r){let i=t.update(y);h.defines.VSM_SAMPLES!==n.blurSamples&&(h.defines.VSM_SAMPLES=n.blurSamples,g.defines.VSM_SAMPLES=n.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),n.mapPass===null?n.mapPass=new E(s.x,s.y,{format:S,type:_}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),h.uniforms.shadow_pass.value=n.map.depthTexture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,h,y,null),g.uniforms.shadow_pass.value=n.mapPass.texture,g.uniforms.resolution.value.set(n.map.width,n.map.height),g.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,g,y,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?d:u,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=f[e];r===void 0&&(r={},f[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,ee)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?m[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function D(n,r,i,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(a))){n.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,n.matrixWorld);let a=t.update(n),s=n.material;if(Array.isArray(s)){let t=a.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,i,a,t,u),e.renderBufferDirect(i,null,a,t,n,u),n.onAfterShadow(e,n,r,i,a,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,i,a,t,null),e.renderBufferDirect(i,null,a,t,n,null),n.onAfterShadow(e,n,r,i,a,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)D(l[e],r,i,o,s,c)}function ee(e){e.target.removeEventListener(`dispose`,ee);for(let t in f){let n=f[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Gi(e,t){function n(){let t=!1,n=new r,i=null,a=new r(0,0,0,0);return{setMask:function(n){i!==n&&!t&&(e.colorMask(n,n,n,n),i=n)},setLocked:function(e){t=e},setClear:function(t,r,i,o,s){s===!0&&(t*=o,r*=o,i*=o),n.set(t,r,i,o),a.equals(n)===!1&&(e.clearColor(t,r,i,o),a.copy(n))},reset:function(){t=!1,i=null,a.set(-1,0,0,0)}}}function i(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=we[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function a(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let o=new n,s=new i,c=new a,l={},u=new WeakMap,d={},f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,T=null,E=new I(0,0,0),D=0,ee=!1,te=null,ne=null,O=null,k=null,re=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,ae=0,oe=e.getParameter(e.VERSION);oe.indexOf(`WebGL`)===-1?oe.indexOf(`OpenGL ES`)!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),ie=ae>=2):(ae=parseFloat(/^WebGL (\d)/.exec(oe)[1]),ie=ae>=1);let j=null,se={},ce=e.getParameter(e.SCISSOR_BOX),le=e.getParameter(e.VIEWPORT),M=new r().fromArray(ce),ue=new r().fromArray(le);function de(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let N={};N[e.TEXTURE_2D]=de(e.TEXTURE_2D,e.TEXTURE_2D,1),N[e.TEXTURE_CUBE_MAP]=de(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[e.TEXTURE_2D_ARRAY]=de(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),N[e.TEXTURE_3D]=de(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),c.setClear(0),P(e.DEPTH_TEST),s.setFunc(3),ye(!1),be(1),P(e.CULL_FACE),_e(0);function P(t){d[t]!==!0&&(e.enable(t),d[t]=!0)}function fe(t){d[t]!==!1&&(e.disable(t),d[t]=!1)}function F(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=h,i=!1;if(t){r=m.get(n),r===void 0&&(r=[],m.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return g!==t&&(e.useProgram(t),g=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)_===!0&&(fe(e.BLEND),_=!1);else if(_===!1&&(P(e.BLEND),_=!0),t!==5){if(t!==v||u!==ee){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:w(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:w(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:w(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:w(`WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,T=null,E.set(0,0,0),D=0,v=t,ee=u}}else a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(he[n],he[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==T)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),b=r,x=i,C=o,T=s),(c.equals(E)===!1||l!==D)&&(e.blendColor(c.r,c.g,c.b,l),E.copy(c),D=l),v=t,ee=!1}function ve(t,n){t.side===2?fe(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),s.setFunc(t.depthFunc),s.setTest(t.depthTest),s.setMask(t.depthWrite),o.setMask(t.colorWrite);let i=t.stencilWrite;c.setTest(i),i&&(c.setMask(t.stencilWriteMask),c.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),c.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){te!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),te=t)}function be(t){t===0?fe(e.CULL_FACE):(P(e.CULL_FACE),t!==ne&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ne=t}function xe(t){t!==O&&(ie&&e.lineWidth(t),O=t)}function Se(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(k!==n||re!==r)&&(k=n,re=r,s.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function Ce(t){t?P(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+A-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+A-1:j);let i=se[r];i===void 0&&(i={type:void 0,texture:void 0},se[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||N[t]),i.type=t,i.texture=n)}function De(){let t=se[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){w(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){w(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){w(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){w(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){w(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){w(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){w(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){w(`WebGLState:`,e)}}function Ie(){try{e.texImage2D(...arguments)}catch(e){w(`WebGLState:`,e)}}function Le(){try{e.texImage3D(...arguments)}catch(e){w(`WebGLState:`,e)}}function Re(t){return f[t]===void 0?e.getParameter(t):f[t]}function L(t,n){f[t]!==n&&(e.pixelStorei(t,n),f[t]=n)}function ze(t){M.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),M.copy(t))}function Be(t){ue.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ue.copy(t))}function Ve(t,n){let r=u.get(n);r===void 0&&(r=new WeakMap,u.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function He(t,n,r){let i=u.get(n).get(t);l[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),l[i]=r)}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},f={},j=null,se={},p={},l={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,T=null,E=new I(0,0,0),D=0,ee=!1,te=null,ne=null,O=null,k=null,re=null,M.set(0,0,e.canvas.width,e.canvas.height),ue.set(0,0,e.canvas.width,e.canvas.height),o.reset(),s.reset(),c.reset()}return{buffers:{color:o,depth:s,stencil:c},enable:P,disable:fe,bindFramebuffer:F,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:Ie,texImage3D:Le,pixelStorei:L,getParameter:Re,updateUBOMapping:Ve,uniformBlockBinding:He,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:ze,viewport:Be,reset:Ue}}function Ki(e,n,r,i,a,o,s){let c=n.has(`WEBGL_multisampled_render_to_texture`)?n.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ne,d=new WeakMap,f=new Set,m,g=new WeakMap,_=new Set,y=new FinalizationRegistry(e=>_.delete(e)),b=!1;try{b=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function x(e,t){return b?new OffscreenCanvas(e,t):v(`canvas`)}function S(e,t,n){let r=1,i=Ve(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);m===void 0&&(m=x(n,a));let o=t?x(n,a):m;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),N(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&N(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function C(e){return e.generateMipmaps}function T(t){e.generateMipmap(t)}function E(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function D(t,r,i,a,o,s=!1){if(t!==null){if(e[t]!==void 0)return e[t];N(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let c;a&&(c=n.get(`EXT_texture_norm16`),c||N(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?p:Ee.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&n.get(`EXT_color_buffer_float`),l}function ee(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,N(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function te(e,t){return C(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function O(e){let t=new WeakRef(e);i.get(e).__ref=t,_.add(t),y.register(e,t,t)}function k(e){let t=i.get(e).__ref;t!==void 0&&(_.delete(t),y.unregister(t))}function re(e){ie(e.target)}function A(e){oe(e.target)}function ie(e){e.removeEventListener(`dispose`,re),k(e),se(e),e.isVideoTexture&&d.delete(e),e.isHTMLTexture&&f.delete(e)}function oe(e){e.removeEventListener(`dispose`,A),k(e),ue(e)}function j(){for(let e of _){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?oe(t):ie(t))}_.clear(),f.clear()}function se(e){let t=i.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=g.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&le(e),Object.keys(r).length===0&&g.delete(n)}i.remove(e)}function le(t){let n=i.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,a=g.get(r);delete a[n.__cacheKey],s.memory.textures--}function ue(t){let n=i.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let r=t.depthTexture;if(r&&r.renderTarget===t&&ie(r),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=i.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),s.memory.textures--),i.remove(a[t])}i.remove(t)}let de=0;function P(){de=0}function fe(){return de}function F(e){de=e}function pe(){let e=de;return e>=a.maxTextures&&N(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+a.maxTextures),de+=1,e}function me(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function he(t,n){let a=i.get(t);if(t.isVideoTexture&&ze(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)N(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)N(`WebGLRenderer: Texture marked for update but image is incomplete`);else{De(a,t,n);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);r.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+n)}function ge(t,n){let a=i.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?De(a,t,n):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),r.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+n))}function _e(t,n){let a=i.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?De(a,t,n):r.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+n)}function ve(t,n){let a=i.get(t);t.version>0&&a.__version!==t.version?Oe(a,t,n):r.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+n)}let ye={[t]:e.REPEAT,[tt]:e.CLAMP_TO_EDGE,[Te]:e.MIRRORED_REPEAT},be={[et]:e.NEAREST,[Xe]:e.NEAREST_MIPMAP_NEAREST,[We]:e.NEAREST_MIPMAP_LINEAR,[M]:e.LINEAR,[ce]:e.LINEAR_MIPMAP_NEAREST,[h]:e.LINEAR_MIPMAP_LINEAR},xe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Se(t,r){if(r.type===1015&&n.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&N(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,ye[r.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,ye[r.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,ye[r.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,be[r.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,be[r.minFilter]),r.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,xe[r.compareFunction])),n.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&n.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||i.get(r).__currentAnisotropy){let o=n.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,a.getMaxAnisotropy())),i.get(r).__currentAnisotropy=r.anisotropy}}}function I(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,re),O(n));let i=n.source,a=g.get(i);a===void 0&&(a={},g.set(i,a));let o=me(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&le(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function Ce(e,t,n){return Math.floor(Math.floor(e/n)/t)}function we(t,n,i,a){let o=t.updateRanges;if(o.length===0)r.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,i,a,n.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],r=o[e],i=t.start+t.count,a=Ce(r.start,n.width,4),c=Ce(t.start,n.width,4);r.start<=i+1&&a===c&&Ce(r.start+r.count-1,n.width,4)===a?t.count=Math.max(t.count,r.start+r.count-t.start):(++s,o[s]=r)}o.length=s+1;let c=r.getParameter(e.UNPACK_ROW_LENGTH),l=r.getParameter(e.UNPACK_SKIP_PIXELS),u=r.getParameter(e.UNPACK_SKIP_ROWS);r.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%n.width,d=Math.floor(c/n.width),f=l;r.pixelStorei(e.UNPACK_SKIP_PIXELS,u),r.pixelStorei(e.UNPACK_SKIP_ROWS,d),r.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,n.data)}t.clearUpdateRanges(),r.pixelStorei(e.UNPACK_ROW_LENGTH,c),r.pixelStorei(e.UNPACK_SKIP_PIXELS,l),r.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function De(t,n,s){let c=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(c=e.TEXTURE_3D);let l=I(t,n),u=n.source;r.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=i.get(u);if(u.version!==d.__version||l===!0){if(r.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Ee.getPrimaries(Ee.workingColorSpace),i=n.colorSpace===``?null:Ee.getPrimaries(n.colorSpace),a=n.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;r.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),r.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),r.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}r.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=S(n.image,!1,a.maxTextureSize);t=Be(n,t);let i=o.convert(n.format,n.colorSpace),p=o.convert(n.type),m=D(n.internalFormat,i,p,n.normalized,n.colorSpace,n.isVideoTexture);Se(c,n);let h,g=n.mipmaps,_=n.isVideoTexture!==!0,v=d.__version===void 0||l===!0,y=u.dataReady,b=te(n,t);if(n.isDepthTexture)m=ee(n.format===ae,n.type),v&&(_?r.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):r.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,i,p,null));else if(n.isDataTexture){if(g.length>0){_&&v&&r.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,n=g.length;t<n;t++)h=g[t],_?y&&r.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,i,p,h.data):r.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,i,p,h.data);n.generateMipmaps=!1}else _?(v&&r.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height),y&&we(n,t,i,p)):r.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,i,p,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){_&&v&&r.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,g[0].width,g[0].height,t.depth);for(let a=0,o=g.length;a<o;a++)if(h=g[a],n.format!==1023){if(i!==null){if(_){if(y){if(n.layerUpdates.size>0){let t=ut(h.width,h.height,n.format,n.type);for(let o of n.layerUpdates){let n=h.data.subarray(o*t/h.data.BYTES_PER_ELEMENT,(o+1)*t/h.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,o,h.width,h.height,1,i,n)}}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,h.width,h.height,t.depth,i,h.data)}}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,a,m,h.width,h.height,t.depth,0,h.data,0,0)}else N(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?y&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,h.width,h.height,t.depth,i,p,h.data):r.texImage3D(e.TEXTURE_2D_ARRAY,a,m,h.width,h.height,t.depth,0,i,p,h.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{_&&v&&r.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,a=g.length;t<a;t++)h=g[t],n.format===1023?_?y&&r.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,i,p,h.data):r.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,i,p,h.data):i===null?N(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?y&&r.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,i,h.data):r.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(n.isDataArrayTexture){if(_){if(v&&r.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,t.width,t.height,t.depth),y){if(n.layerUpdates.size>0){let a=ut(t.width,t.height,n.format,n.type);for(let o of n.layerUpdates){let n=t.data.subarray(o*a/t.data.BYTES_PER_ELEMENT,(o+1)*a/t.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,i,p,n)}n.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,i,p,t.data)}}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,i,p,t.data)}else if(n.isData3DTexture)_?(v&&r.texStorage3D(e.TEXTURE_3D,b,m,t.width,t.height,t.depth),y&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,i,p,t.data)):r.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,i,p,t.data);else if(n.isFramebufferTexture){if(v){if(_)r.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height);else{let n=t.width,a=t.height;for(let t=0;t<b;t++)r.texImage2D(e.TEXTURE_2D,t,m,n,a,0,i,p,null),n>>=1,a>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),f.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of f)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&v){let t=Ve(g[0]);r.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height)}for(let t=0,n=g.length;t<n;t++)h=g[t],_?y&&r.texSubImage2D(e.TEXTURE_2D,t,0,0,i,p,h):r.texImage2D(e.TEXTURE_2D,t,m,i,p,h);n.generateMipmaps=!1}else if(_){if(v){let n=Ve(t);r.texStorage2D(e.TEXTURE_2D,b,m,n.width,n.height)}y&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,i,p,t)}else r.texImage2D(e.TEXTURE_2D,0,m,i,p,t);C(n)&&n.mipmapsAutoUpdate===!0&&T(c),d.__version=u.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Oe(t,n,s){if(n.image.length!==6)return;let c=I(t,n),l=n.source;r.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=i.get(l);if(l.version!==u.__version||c===!0){r.activeTexture(e.TEXTURE0+s);let t=Ee.getPrimaries(Ee.workingColorSpace),i=n.colorSpace===``?null:Ee.getPrimaries(n.colorSpace),d=n.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;r.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),r.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),r.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),r.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=n.isCompressedTexture||n.image[0].isCompressedTexture,p=n.image[0]&&n.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=S(n.image[e],!0,a.maxCubemapSize):m[e]=p?n.image[e].image:n.image[e],m[e]=Be(n,m[e]);let h=m[0],g=o.convert(n.format,n.colorSpace),_=o.convert(n.type),v=D(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,w=te(n,h);Se(e.TEXTURE_CUBE_MAP,n);let E;if(n.isDepthTexture){if(v=ee(n.format===ae,n.type),b){if(y)r.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(f){y&&b&&r.texStorage2D(e.TEXTURE_CUBE_MAP,w,v,h.width,h.height);for(let t=0;t<6;t++){E=m[t].mipmaps;for(let i=0;i<E.length;i++){let a=E[i];n.format===1023?y?x&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,_,a.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,g,_,a.data):g===null?N(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,a.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,a.data)}}}else{if(E=n.mipmaps,y&&b){E.length>0&&w++;let t=Ve(m[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,w,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let n=0;n<E.length;n++){let i=E[n].image[t].image;y?x&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,i.width,i.height,g,_,i.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let n=0;n<E.length;n++){let i=E[n];y?x&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,i.image[t]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,i.image[t])}}}C(n)&&n.mipmapsAutoUpdate===!0&&T(e.TEXTURE_CUBE_MAP),u.__version=l.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function ke(t,n,a,s,l,u){let d=o.convert(a.format,a.colorSpace),f=o.convert(a.type),p=D(a.internalFormat,d,f,a.normalized,a.colorSpace),m=i.get(n),h=i.get(a);if(h.__renderTarget=n,!m.__hasExternalTextures){let t=Math.max(1,n.width>>u),i=Math.max(1,n.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?r.texImage3D(l,u,p,t,i,n.depth,0,d,f,null):r.texImage2D(l,u,p,t,i,0,d,f,null)}r.bindFramebuffer(e.FRAMEBUFFER,t),L(n)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,h.__webglTexture,0,Re(n)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,h.__webglTexture,u),r.bindFramebuffer(e.FRAMEBUFFER,null)}function Ae(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=ee(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],s=o.convert(a.format,a.colorSpace),l=o.convert(a.type),u=D(a.internalFormat,s,l,a.normalized,a.colorSpace);L(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function je(t,n,a){let o=n.isWebGLCubeRenderTarget===!0;if(r.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let s=i.get(n.depthTexture);s.__renderTarget=n;let l=o?n.depthTexture.image[0]:n.depthTexture.image;s.__webglTexture&&l.width===n.width&&l.height===n.height||(l.width=n.width,l.height=n.height,n.depthTexture.needsUpdate=!0),o?ve(n.depthTexture,0):he(n.depthTexture,0);let u=s.__webglTexture,d=Re(n),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)L(n)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(n.depthTexture.format===1027)L(n)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Me(t){let n=i.get(t),a=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)je(n.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?je(n.__webglFramebuffer[0],t,0):je(n.__webglFramebuffer,t,0)}else if(a){n.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(r.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[i]),n.__webglDepthbuffer[i]===void 0)n.__webglDepthbuffer[i]=e.createRenderbuffer(),Ae(n.__webglDepthbuffer[i],t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[i];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?r.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):r.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Ae(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}r.bindFramebuffer(e.FRAMEBUFFER,null)}function Ne(t,n,r){let a=i.get(t);n!==void 0&&ke(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&Me(t)}function Pe(t){let n=t.texture,a=i.get(t),c=i.get(n);t.addEventListener(`dispose`,A),O(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=n.version,s.memory.textures++),u){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let r=0;r<n.mipmaps.length;r++)a.__webglFramebuffer[t][r]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=i.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),s.memory.textures++)}if(t.samples>0&&L(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=o.convert(r.format,r.colorSpace),s=o.convert(r.type),c=D(r.internalFormat,i,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Re(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),Ae(a.__webglDepthRenderbuffer,t,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){r.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),Se(e.TEXTURE_CUBE_MAP,n);for(let r=0;r<6;r++)if(n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)ke(a.__webglFramebuffer[r][i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else ke(a.__webglFramebuffer[r],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);C(n)?T(e.TEXTURE_CUBE_MAP):n.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),r.unbindTexture()}else if(d){for(let n=0,o=l.length;n<o;n++){let o=l[n],s=i.get(o),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(c,s.__webglTexture),Se(c,o),ke(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+n,c,0),C(o)&&T(c)}r.unbindTexture()}else{let i=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(i=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(i,c.__webglTexture),Se(i,n),n.mipmaps.length>0)for(let r=0;r<n.mipmaps.length;r++)ke(a.__webglFramebuffer[r],t,n,e.COLOR_ATTACHMENT0,i,r);else ke(a.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,i,0);C(n)?T(i):n.mipmaps.length>0&&e.texParameteri(i,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),r.unbindTexture()}t.depthBuffer&&Me(t)}function Fe(e){let t=e.textures;for(let n=0,a=t.length;n<a;n++){let a=t[n];if(C(a)&&a.mipmapsAutoUpdate===!0){let t=E(e),n=i.get(a).__webglTexture;r.bindTexture(t,n),T(t),r.unbindTexture()}}}let Ie=[];function Le(t){if(t.samples>0){if(L(t)===!1){let n=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=i.get(t),d=n.length>1;if(d)for(let t=0;t<n.length;t++)r.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?r.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):r.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let r=0;r<n.length;r++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[r]);let t=i.get(n[r]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l===!0&&(Ie.length=0,Ie.push(e.COLOR_ATTACHMENT0+r),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Ie.push(c),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ie))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<n.length;t++){r.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=i.get(n[t]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Re(e){return Math.min(a.maxSamples,e.samples)}function L(e){let t=i.get(e);return e.samples>0&&n.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function ze(e){let t=s.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function Be(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ee.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&N(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):w(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ve(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=pe,this.resetTextureUnits=P,this.getTextureUnits=fe,this.setTextureUnits=F,this.setTexture2D=he,this.setTexture2DArray=ge,this.setTexture3D=_e,this.setTextureCube=ve,this.rebindTextures=Ne,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=L,this.dispose=j}function qi(e,t){function n(n,r=``){let i,a=Ee.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Ji=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yi=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xi=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new s(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Be({vertexShader:Ji,fragmentShader:Yi,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new F(new Se(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zi=class extends l{constructor(e,t){super();let n=this,i=null,a=1,c=null,l=`local-floor`,u=1,d=null,f=null,p=null,m=null,h=null,g=null,_=typeof XRWebGLBinding<`u`,v=new Xi,y={},b=t.getContextAttributes(),x=null,S=null,C=[],w=[],T=new ne,D=null,te=null,O=new qe;O.viewport=new r;let k=new qe;k.viewport=new r;let re=[O,k],A=new R,ie=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new ee,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new ee,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new ee,C[e]=t),t.getHandSpace()};function se(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,d||c),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ce(){i.removeEventListener(`select`,se),i.removeEventListener(`selectstart`,se),i.removeEventListener(`selectend`,se),i.removeEventListener(`squeeze`,se),i.removeEventListener(`squeezestart`,se),i.removeEventListener(`squeezeend`,se),i.removeEventListener(`end`,ce),i.removeEventListener(`inputsourceschange`,le);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ie=null,j=null,v.reset();for(let e in y)delete y[e];if(e.setRenderTarget(x),h=null,m=null,p=null,i=null,S=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(T.width,T.height,!1),te!==null){let e=te.camera;e.fov=te.fov,e.zoom=te.zoom,e.updateProjectionMatrix(),te=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){a=e,n.isPresenting===!0&&N(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){l=e,n.isPresenting===!0&&N(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(e){d=e},this.getBaseLayer=function(){return m===null?h:m},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(i,t)),p},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(r){if(i=r,i!==null){if(x=e.getRenderTarget(),i.addEventListener(`select`,se),i.addEventListener(`selectstart`,se),i.addEventListener(`selectend`,se),i.addEventListener(`squeeze`,se),i.addEventListener(`squeezestart`,se),i.addEventListener(`squeezeend`,se),i.addEventListener(`end`,ce),i.addEventListener(`inputsourceschange`,le),b.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(T),_&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,r=null,s=null;b.depth&&(s=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?ae:st,r=b.stencil?oe:ot);let c={colorFormat:t.RGBA8,depthFormat:s,scaleFactor:a};p=this.getBinding(),m=p.createProjectionLayer(c),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),S=new E(m.textureWidth,m.textureHeight,{format:Ne,type:be,depthTexture:new o(m.textureWidth,m.textureHeight,r,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(i,t,n),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new E(h.framebufferWidth,h.framebufferHeight,{format:Ne,type:be,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(u),d=null,c=await i.requestReferenceSpace(l),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function le(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function M(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(i===null)return;let t=e.near,n=e.far;v.texture!==null&&(v.depthNear>0&&(t=v.depthNear),v.depthFar>0&&(n=v.depthFar)),A.near=k.near=O.near=t,A.far=k.far=O.far=n,(ie!==A.near||j!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),ie=A.near,j=A.far),A.layers.mask=e.layers.mask|6,O.layers.mask=A.layers.mask&-5,k.layers.mask=A.layers.mask&-3;let r=e.parent,a=A.cameras;M(A,r);for(let e=0;e<a.length;e++)M(a[e],r);A.projectionMatrix.copy(O.projectionMatrix),A.projectionMatrixInverse.copy(O.projectionMatrixInverse),te===null&&e.isPerspectiveCamera&&(te={camera:e,fov:e.fov,zoom:e.zoom}),ue(e,A,r)};function ue(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ce*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(m!==null||h!==null)return u},this.setFoveation=function(e){u=e,m!==null&&(m.fixedFoveation=e),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=e)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(A)},this.getCameraTexture=function(e){return y[e]};let de=null;function P(t,a){if(f=a.getViewerPose(d||c),g=a,f!==null){let t=f.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let a=!1;t.length!==A.cameras.length&&(A.cameras.length=0,a=!0);for(let n=0;n<t.length;n++){let i=t[n],o=null;if(h!==null)o=h.getViewport(i);else{let t=p.getViewSubImage(m,i);o=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let s=re[n];s===void 0&&(s=new qe,s.layers.enable(n),s.viewport=new r,re[n]=s),s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.projectionMatrix.fromArray(i.projectionMatrix),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),s.viewport.set(o.x,o.y,o.width,o.height),n===0&&(A.matrix.copy(s.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),a===!0&&A.cameras.push(s)}let o=i.enabledFeatures;if(o&&o.includes(`depth-sensing`)&&i.depthUsage==`gpu-optimized`&&_){p=n.getBinding();let e=p.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&v.init(e,i.renderState)}if(o&&o.includes(`camera-access`)&&_){e.state.unbindTexture(),p=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=y[n];e||(e=new s,y[n]=e);let t=p.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,a,d||c)}de&&de(t,a),a.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:a}),g=null}let fe=new Yt;fe.setAnimationLoop(P),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},Qi=new y,$i=new B;$i.set(-1,0,0,0,1,0,0,0,1);function ea(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,a(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?o(e,t):t.isMeshLambertMaterial?(o(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(o(e,t),f(e,t)):t.isMeshPhongMaterial?(o(e,t),d(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(o(e,t),p(e,t),t.isMeshPhysicalMaterial&&m(e,t,i)):t.isMeshMatcapMaterial?(o(e,t),h(e,t)):t.isMeshDepthMaterial?o(e,t):t.isMeshDistanceMaterial?(o(e,t),g(e,t)):t.isMeshNormalMaterial?o(e,t):t.isLineBasicMaterial?(s(e,t),t.isLineDashedMaterial&&c(e,t)):t.isPointsMaterial?l(e,t,n,r):t.isSpriteMaterial?u(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function o(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Qi.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply($i),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function s(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function c(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function l(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function d(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function f(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function p(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function m(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function h(e,t){t.matcap&&(e.matcap.value=t.matcap)}function g(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ta(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?N(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):N(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var na=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ra=null;function ia(){return ra===null&&(ra=new ye(na,16,16,S,_),ra.name=`DFG_LUT`,ra.minFilter=M,ra.magFilter=M,ra.wrapS=tt,ra.wrapT=tt,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}var aa=class{constructor(e={}){let{canvas:t=f(),context:n=null,depth:i=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:p=`default`,failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1,outputBufferType:v=be}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);b=n.getContextAttributes().alpha}else b=o;let x=v,S=new Set([Ae,Ye,re]),C=new Set([be,ot,c,oe,se,u]),ee=new Uint32Array(4),te=new Int32Array(4),ne={textures:[],min:[],max:[],resolution:[]},O=null,k=null,A=[],ie=[],ae=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ce=!1,M=null,de=null,P=null,fe=null;this._outputColorSpace=Ke;let F=0,pe=0,me=null,he=-1,ge=null,_e=new r,ve=new r,ye=null,xe=new I(0),Se=0,Ce=t.width,we=t.height,Te=1,De=null,Oe=null,ke=new r(0,0,Ce,we),je=new r(0,0,Ce,we),Me=!1,Ne=new T,Pe=new D,Fe=!1,Ie=!1,Re=new y,ze=new L,Be=new r,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function Ue(){return me===null?Te:1}let R=n;function We(e,n){return t.getContext(e,n)}let Ge,qe,z,Je,B,V,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,st,ct,lt,ut,dt,ft,pt;try{let e={alpha:!0,depth:i,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ht,!1),t.addEventListener(`webglcontextrestored`,gt,!1),t.addEventListener(`webglcontextcreationerror`,_t,!1),R===null){let t=`webgl2`;if(R=We(t,e),R===null)throw We(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}mt()}catch(e){throw t.removeEventListener(`webglcontextlost`,ht,!1),t.removeEventListener(`webglcontextrestored`,gt,!1),t.removeEventListener(`webglcontextcreationerror`,_t,!1),w(`WebGLRenderer: `+e.message),e}function mt(){Ge=new Tn(R),Ge.init(),dt=new qi(R,Ge),qe=new an(R,Ge,e,dt),z=new Gi(R,Ge),qe.reversedDepthBuffer&&g&&z.buffers.depth.setReversed(!0),de=R.createFramebuffer(),P=R.createFramebuffer(),fe=R.createFramebuffer(),Je=new On(R),B=new Ti,V=new Ki(R,Ge,z,B,qe,dt,Je),Xe=new wn(j),Ze=new Xt(R),ft=new nn(R,Ze),Qe=new En(R,Ze,Je,ft),$e=new An(R,Qe,Ze,ft,Je),ct=new kn(R,qe,V),it=new on(B),et=new wi(j,Xe,Ge,qe,ft,it),tt=new ea(j,B),nt=new ki,rt=new Ii(Ge),st=new tn(j,Xe,z,$e,b,l),at=new Wi(j,$e,qe),pt=new ta(R,Je,qe,z),lt=new rn(R,Ge,Je),ut=new Dn(R,Ge,Je),Je.programs=et.programs,j.capabilities=qe,j.extensions=Ge,j.properties=B,j.renderLists=nt,j.shadowMap=at,j.state=z,j.info=Je}x!==1009&&(ae=new Mn(x,t.width,t.height,s,i,a));let H=new Zi(j,R);this.xr=H,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=Ge.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ge.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(e){e!==void 0&&(Te=e,this.setSize(Ce,we,!1))},this.getSize=function(e){return e.set(Ce,we)},this.setSize=function(e,n,r=!0){H.isPresenting?N(`WebGLRenderer: Can't change size while VR device is presenting.`):(Ce=e,we=n,t.width=Math.floor(e*Te),t.height=Math.floor(n*Te),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ae!==null&&ae.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(Ce*Te,we*Te).floor()},this.setDrawingBufferSize=function(e,n,r){Ce=e,we=n,Te=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(x===1009)w(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){N(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ae.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(_e)},this.getViewport=function(e){return e.copy(ke)},this.setViewport=function(e,t,n,r){e.isVector4?ke.set(e.x,e.y,e.z,e.w):ke.set(e,t,n,r),z.viewport(_e.copy(ke).multiplyScalar(Ue()).round())},this.getScissor=function(e){return e.copy(je)},this.setScissor=function(e,t,n,r){e.isVector4?je.set(e.x,e.y,e.z,e.w):je.set(e,t,n,r),z.scissor(ve.copy(je).multiplyScalar(Ue()).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(e){z.setScissorTest(Me=e)},this.setOpaqueSort=function(e){De=e},this.setTransparentSort=function(e){Oe=e},this.getClearColor=function(e){return e.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(me!==null){let t=me.texture.format;e=S.has(t)}if(e){let e=me.texture.type,t=C.has(e),n=st.getClearColor(),r=st.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(ee[0]=i,ee[1]=a,ee[2]=o,ee[3]=r,R.clearBufferuiv(R.COLOR,0,ee)):(te[0]=i,te[1]=a,te[2]=o,te[3]=r,R.clearBufferiv(R.COLOR,0,te))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),M=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ht,!1),t.removeEventListener(`webglcontextrestored`,gt,!1),t.removeEventListener(`webglcontextcreationerror`,_t,!1),st.dispose(),nt.dispose(),rt.dispose(),V.dispose(),B.dispose(),Xe.dispose(),$e.dispose(),Qe.dispose(),ft.dispose(),pt.dispose(),et.dispose(),H.dispose(),H.removeEventListener(`sessionstart`,bt),H.removeEventListener(`sessionend`,q),xt.stop()};function ht(e){e.preventDefault(),ue(`WebGLRenderer: Context Lost.`),ce=!0}function gt(){ue(`WebGLRenderer: Context Restored.`),ce=!1;let e=Je.autoReset,t=at.enabled,n=at.autoUpdate,r=at.needsUpdate,i=at.type;mt(),Je.autoReset=e,at.enabled=t,at.autoUpdate=n,at.needsUpdate=r,at.type=i}function _t(e){w(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function U(e){let t=e.target;t.removeEventListener(`dispose`,U),W(t)}function W(e){vt(e),B.remove(e)}function vt(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){et.releaseProgram(e)}),e.isShaderMaterial&&et.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ve);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Qe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ft.setup(i,r,s,n,c);let h,g=lt;if(c!==null&&(h=Ze.get(c),g=ut,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*Ue()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*Ue()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(Ge.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ze.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function yt(e,t,n,r){M!==null&&e.isNodeMaterial&&M.setObject(r,e),Fe===!0&&it.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),M!==null&&M.renderStart(e,t,n),k=rt.get(n),k.init(t),ie.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),M!==null&&M.updateLights(k.state.lightsArray),Ie=this.localClippingEnabled,Fe=it.init(this.clippingPlanes,Ie),Fe===!0&&it.setGlobalState(this.clippingPlanes,t),M!==null&&at.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];yt(o,n,t,e),r.add(o)}else yt(i,n,t,e),r.add(i)}}),k=ie.pop(),M!==null&&M.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=B.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ge.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let G=null;function K(e){G&&G(e)}function bt(){xt.stop()}function q(){xt.start()}let xt=new Yt;xt.setAnimationLoop(K),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){G=e,H.setAnimationLoop(e),e===null?xt.stop():xt.start()},H.addEventListener(`sessionstart`,bt),H.addEventListener(`sessionend`,q),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){w(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ce===!0)return;M!==null&&M.renderStart(e,t);let n=H.enabled===!0&&H.isPresenting===!0,r=ae!==null&&(me===null||n)&&ae.begin(j,me);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(ae===null||ae.isCompositing()===!1)&&(H.cameraAutoUpdate===!0&&H.updateCamera(t),t=H.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,me),k=rt.get(e,ie.length),k.init(t),k.state.textureUnits=V.getTextureUnits(),ie.push(k),Re.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Pe.setFromArrayCamera(t):Ne.setFromProjectionMatrix(Re,Le,t.reversedDepth),Ie=this.localClippingEnabled,Fe=it.init(this.clippingPlanes,Ie),O=nt.get(e,A.length),O.init(),A.push(O),this.info.render.frame++,H.enabled===!0&&H.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&J(e,t,-1/0,j.sortObjects)}J(e,t,0,j.sortObjects),O.finish(),M!==null&&M.updateLights(k.state.lightsArray),j.sortObjects===!0&&O.sort(De,Oe),He=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,He&&st.addToRenderList(O,e),this.info.autoReset===!0&&this.info.reset(),Fe===!0&&it.beginShadows();let i=k.state.shadowsArray;if(at.render(i,e,t),Fe===!0&&it.endShadows(),(r&&ae.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}He&&st.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(O,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),He&&st.render(e),St(O,e,t)}me!==null&&pe===0&&(V.updateMultisampleRenderTarget(me),V.updateRenderTargetMipmap(me)),r&&ae.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),ft.resetDefaultState(),he=-1,ge=null,ie.pop(),ie.length>0?(k=ie[ie.length-1],V.setTextureUnits(k.state.textureUnits),Fe===!0&&it.setGlobalState(j.clippingPlanes,k.state.camera)):k=null,A.pop(),O=A.length>0?A[A.length-1]:null,M!==null&&M.renderEnd()};function J(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Pe:Ne;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Be.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Re);let i=$e.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Be.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Pe:Ne;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=$e.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Be.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Be.copy(e.boundingSphere.center)),Be.applyMatrix4(e.matrixWorld).applyMatrix4(Re)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Be.z,s,t)}}else a.visible&&O.push(e,i,a,n,Be.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)J(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Fe===!0&&it.setGlobalState(j.clippingPlanes,n),r&&z.viewport(_e.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Ge.has(`EXT_color_buffer_half_float`)||Ge.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new E(1,1,{generateMipmaps:!0,type:e?_:be,minFilter:h,samples:Math.max(4,qe.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}let i=k.state.transmissionRenderTarget[r.id],o=r.viewport||_e;i.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(i),j.getClearColor(xe),Se=j.getClearAlpha(),Se<1&&j.setClearColor(16777215,.5),j.clear(),He&&st.render(n);let u=j.toneMapping;j.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Fe===!0&&it.setGlobalState(j.clippingPlanes,r),wt(e,n,r),V.updateMultisampleRenderTarget(i),V.updateRenderTargetMipmap(i),Ge.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(i),V.updateRenderTargetMipmap(i))}j.setRenderTarget(s,c,l),j.setClearColor(xe,Se),d!==void 0&&(r.viewport=d),j.toneMapping=u}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){M!==null&&i.isNodeMaterial&&M.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Et(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Dt(e,t,n){t.isScene!==!0&&(t=Ve);let r=B.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=et.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=et.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Xe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,U),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=et.getUniforms(e),M!==null&&e.isNodeMaterial&&M.build(e,n,s),e.onBeforeCompile(s,j),d=et.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=it.uniform),kt(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Et(k.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Y(e,t,n,r,i){let a=B.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Dt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Vr.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t,n,r,i){t.isScene!==!0&&(t=Ve),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=me===null?j.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ee.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Xe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=B.get(r),y=k.state.lights;if(Fe===!0&&(Ie===!0||e!==ge)){let t=e===ge&&r.id===he;it.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==it.numPlanes||v.numIntersection!==it.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Et(k.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Y(r,t,i,s,h):Dt(r,t,i),M&&r.isNodeMaterial&&M.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),D=v.uniforms;if(z.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==he&&(he=r.id,w=!0),C||ge!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(R,`projectionMatrix`,e.projectionMatrix),E.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(R,ze.setFromMatrixPosition(e.matrixWorld)),qe.logarithmicDepthBuffer&&E.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),ge!==e&&(ge=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(R,`sunShadowMap`,y.state.sunShadowMap,V),y.state.directionalShadowMap.length>0&&E.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,V),y.state.spotShadowMap.length>0&&E.setValue(R,`spotShadowMap`,y.state.spotShadowMap,V),y.state.pointShadowMap.length>0&&E.setValue(R,`pointShadowMap`,y.state.pointShadowMap,V)),i.isSkinnedMesh){E.setOptional(R,i,`bindMatrix`),E.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(R,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(E.setOptional(R,i,`batchingTexture`),E.setValue(R,`batchingTexture`,i._matricesTexture,V),E.setOptional(R,i,`batchingIdTexture`),E.setValue(R,`batchingIdTexture`,i._indirectTexture,V),E.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(R,`batchingColorTexture`,i._colorsTexture,V));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&ct.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=ia()),w){if(E.setValue(R,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&jt(D,T),a&&r.fog===!0&&tt.refreshFogUniforms(D,a),tt.refreshMaterialUniforms(D,r,Te,we,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=ne,t=0;for(let n of k.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;D.probesSH.value=e.textures,D.probesMin.value=e.min,D.probesMax.value=e.max,D.probesResolution.value=e.resolution}Vr.upload(R,Ot(v),D,V)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Vr.upload(R,Ot(v),D,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(R,`center`,i.center),E.setValue(R,`modelViewMatrix`,i.modelViewMatrix),E.setValue(R,`normalMatrix`,i.normalMatrix),E.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];pt.update(n,S),pt.bind(n,S)}}return S}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return pe},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){me=e,F=t,pe=n;let r=null,i=!1,a=!1;if(e){let o=B.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),_e.copy(e.viewport),ve.copy(e.scissor),ye=e.scissorTest,z.viewport(_e),z.scissor(ve),z.setScissorTest(ye),he=-1;return}if(o.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(o.__hasExternalTextures)V.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&V.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,_e.copy(e.viewport),ve.copy(e.scissor),ye=e.scissorTest}else _e.copy(ke).multiplyScalar(Te).floor(),ve.copy(je).multiplyScalar(Te).floor(),ye=Me;if(n!==0&&(r=de),z.bindFramebuffer(R.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(_e),z.scissor(ve),z.setScissorTest(ye),i){let r=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=B.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}he=-1};function Nt(e){let t=B.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=qe.textureFormatReadable(e.format),t.__typeReadable=qe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){w(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){z.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=Nt(o);if(u.__formatReadable===!1){w(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){w(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,dt.convert(c),dt.convert(l),a)}finally{let e=me===null?null:B.get(me).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=Nt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,dt.convert(l),dt.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=me===null?null:B.get(me).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await le(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=dt.convert(t.format),_=dt.convert(t.type),v;t.isData3DTexture?(V.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(V.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(V.setTexture2D(t,0),v=R.TEXTURE_2D),z.activeTexture(R.TEXTURE0),z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(R.UNPACK_ROW_LENGTH),b=z.getParameter(R.UNPACK_IMAGE_HEIGHT),x=z.getParameter(R.UNPACK_SKIP_PIXELS),S=z.getParameter(R.UNPACK_SKIP_ROWS),C=z.getParameter(R.UNPACK_SKIP_IMAGES);z.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(R.UNPACK_SKIP_PIXELS,l),z.pixelStorei(R.UNPACK_SKIP_ROWS,u),z.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(R.READ_FRAMEBUFFER,P),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,fe);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.COLOR_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(R.UNPACK_ROW_LENGTH,y),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(R.UNPACK_SKIP_PIXELS,x),z.pixelStorei(R.UNPACK_SKIP_ROWS,S),z.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&R.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){F=0,pe=0,me=null,z.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Le}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ee._getUnpackColorSpace()}},oa=24,sa=[11,8,5,2],ca=.26;function la(e,t){return e.userData.harborGlow=t,e}function ua(){let{canvas:e,context:t}=Kt(oa,oa);for(let e of sa){t.fillStyle=`rgba(255,255,255,0.20)`;let n=oa/2;for(let r=-e;r<=e;r++){let i=Math.floor(Math.sqrt(e*e-r*r));t.fillRect(n-i,n+r,i*2+1,1)}}return Vt(e)}function da(e){let t=X.beam,n=new d,r=new F(new z(t.radius,t.length,t.facets,1,!0),new P({color:t.color,transparent:!0,depthWrite:!1,side:2,blending:2}));return r.position.x=t.length/2,r.rotation.z=Math.PI/2,n.position.set(...t.position),n.add(r),e.add(n),(e,i,a)=>{n.visible=a.beam&&(e>0||a.pulse>0),n.rotation.y=i*t.turnSpeed,r.material.opacity=t.opacity*Math.min(1,e+a.pulse)*(1+a.pulse)}}function fa(t){let n=[],r=[];return t.updateMatrixWorld(!0),t.traverse(t=>{if(!(t instanceof F)||!t.userData.harborGlow)return;let i=t.userData.harborGlow,a=X.glow[i];if(t.material instanceof e&&(t.material=t.material.clone(),t.material.emissive.set(a.color),n.push({kind:i,material:t.material})),t.userData.movingGlow)return;let o=t.userData.glowPoints;for(let e of o??[t.getWorldPosition(new L)])r.push({kind:i,point:e})}),{surfaces:n,anchors:r}}function pa(e,t){let n=ua(),{surfaces:r,anchors:i}=fa(e),a=t?X.simplifiedHaloLimit:X.haloLimit;i.sort((e,t)=>X.glow[t.kind].size-X.glow[e.kind].size);let o=i.slice(0,a).map(({kind:t,point:r})=>{let i=X.glow[t],a=new Je(new Ue({map:n,color:i.color,transparent:!0,depthWrite:!1,blending:2}));return a.position.copy(r),a.scale.setScalar(i.size),a.visible=!1,e.add(a),{kind:t,halo:a}}),s=da(e),c=-1,l=!1;return(e,t,n)=>{if(s(e,t,{beam:n.beam,pulse:n.pulse??0}),e!==c||l!==n.halos){c=e,l=n.halos;for(let{kind:t,material:n}of r){let r=X.glow[t];n.emissiveIntensity=x.lerp(r.day,r.night,e)}for(let{kind:t,halo:r}of o){let i=X.glow[t],a=x.lerp(i.day,i.night,e);r.visible=n.halos&&e>0,r.material.opacity=a*e*ca}}}}function ma(){let e=Wt(),t=new Pe;function n(n,r,i){let a=new F(t,e(...i));return a.position.set(...n),a.scale.set(...r),a}function r(t,n,r){let i=new F(new he(...n),e(...r));return i.position.set(...t),i}function i(e,t,r){let i=new L(...e[0]),a=new L(...e[1]),o=a.clone().sub(i),s=n(i.lerp(a,.5).toArray(),[t,o.length(),t],r);return s.quaternion.setFromUnitVectors(Fe.DEFAULT_UP,o.normalize()),s}return{box:n,cylinder:r,beam:i,surface:e}}function ha(e,t,n){let r=new d,[i,a,o]=n,{box:s,surface:c}=e,l=i*.31;r.add(s([0,a/2,0],n,[t.wall,`brick`]));let u=new nt;u.moveTo(-i/2,0),u.lineTo(i/2,0),u.lineTo(0,l);let f=new F(new te(u,{depth:o,bevelEnabled:!1}),c(t.wall));f.position.set(0,a,-o/2),r.add(f);for(let e of[-1,1]){let n=Math.atan2(l,i/2),c=s([e*i*.25,a+l/2,0],[Math.hypot(i/2,l)+.42,.16,o+.48],[t.roof,`roof`]);c.rotation.z=-e*n,r.add(c);let u=e*i*.29,d=-o/2-.035;r.add(s([u,a*.62,d],[.79,.82,.11],[t.trim]));for(let e of[-.15,.15])r.add(la(s([u+e,a*.62,d-.065],[.24,.58,.035],[`#e6b879`]),`window`))}return r.add(s([0,a*.29,-o/2],[.76,a*.58,.14],[`#455854`,`wood`])),r.add(s([i*.22,a+l*.75,o*.25],[.4,1.15,.45],[`#835e58`,`brick`])),r}function ga(e,t,n){let{box:r,beam:i,cylinder:a}=t,o=[`#a74338`,`roof`],s=[`#544b49`];e.add(a([0,n,0],[U.outerRadius,1.04,.25,12],o)),e.add(la(a([0,n+.36,0],[.61,.64,.57,12],[`#fff1ad`]),`lighthouse`)),e.add(a([0,n+.71,0],[.86,.86,.15,12],o)),e.add(a([0,n+1.04,0],[.21,.83,.53,12],o)),e.add(a([0,n+1.34,0],[.06,.19,.1,10],o)),e.add(r([0,n+1.47,0],[.077,.23,.077],s));for(let t=0;t<12;t++){let a=t*Math.PI/6,o=a+Math.PI/6,c=Math.cos(a),l=Math.sin(a);e.add(r([c*.62,n+.4,l*.62],[.07,.62,.07],s));let u=U.outerRadius-.067;e.add(r([c*u,n+.37,l*u],[.06,.54,.06],s));for(let t of[n+.36,n+.62])e.add(i([[c*u,t,l*u],[Math.cos(o)*u,t,Math.sin(o)*u]],.045,s))}}function _a(e){let t=new d,{box:n,cylinder:r}=e,i=1.7;t.add(r([0,.13,0],[1.46,1.55,.26,12],[`#ada191`,`brick`]));for(let e=0;e<5;e++){let a=1.23-e*.092,o=e%2==0?`#eee4cc`:`#ba5147`,s=.24+(e+.5)*i;t.add(r([0,s,0],[a-.092,a,i,12],[o,`brick`])),e>0&&(t.add(n([0,s+.22,a-.004],[.39,.59,.1],[`#886e65`])),t.add(n([0,s+.22,a+.057],[.25,.45,.05],[`#f0c583`])))}return t.add(n([0,.85,1.18],[.65,1.36,.17],[`#52605a`,`wood`])),ga(t,e,8.84),t}function va(e,t){let n=new nt;n.moveTo(-2.05,-.64),n.lineTo(.85,-.78),n.lineTo(1.65,-.55),n.lineTo(2.48,0),n.lineTo(1.65,.55),n.lineTo(.85,.78),n.lineTo(-2.05,.64),n.closePath();let r=new d,i=[{y:.08,height:.15,scale:.86,paint:[`#774942`,`wood`]},{y:.23,height:.31,scale:.96,paint:[`#e5d9bd`,`wood`]},{y:.54,height:.12,scale:1,paint:[t,`wood`]}];for(let{y:t,height:a,scale:o,paint:s}of i){let i=new F(new te(n,{depth:a,bevelEnabled:!1}),e.surface(s[0],s[1]));i.rotation.x=-Math.PI/2,i.position.y=t,i.scale.set(o,o,1),r.add(i)}return r}function ya(e,t){let n=va(e,t),{box:r,beam:i,cylinder:a}=e;n.add(r([-.53,1.01,0],[1.02,.83,1.02],[`#f3dfc1`,`wood`])),n.add(r([-.53,1.48,0],[1.2,.15,1.22],[t]));for(let e of[-1,1]){n.add(r([-.49,1.18,e*.53],[.7,.32,.045],[`#587981`])),n.add(r([-.48,1.18,e*.56],[.055,.35,.035],[`#ecd8b6`]));let t=a([-1.18,.43,e*.72],[.19,.19,.12,10],[`#465456`]);t.rotation.x=Math.PI/2,n.add(t)}return n.add(r([0,1.17,0],[.05,.32,.67],[`#688890`])),n.add(i([[.78,.66,0],[.51,2.56,0]],.074,[`#8c6b51`])),n.add(r([.37,2.43,0],[.31,.19,.045],[`#c97155`])),n.add(r([1.38,.77,.17],[.48,.24,.45],[`#c08a58`,`wood`])),n.add(a([.85,.74,-.28],[.24,.3,.16,8],[`#668c76`,`grass`])),n}function ba(e){let{box:t}=e,n=new d;return n.add(t([0,0,0],[.27,.16,.39],[`#fff0d5`])),n.add(t([0,.11,-.15],[.15,.15,.15],[`#fff7e2`])),n.add(t([0,.08,-.25],[.08,.055,.13],[`#d89c4f`])),n.add(t([.079,.13,-.17],[.025,.028,.028],[`#354a52`])),{bird:n,wings:[-1,1].map(e=>{let r=new d;return r.add(t([e*.205,.03,.018],[.28,.065,.16],[`#aab9bc`])),r.add(t([e*.39,.03,.074],[.16,.052,.1],[`#6c7f8a`])),n.add(r),r})}}var xa={count:8,sides:13,detailedSides:28,seed:6322,positions:[[43,-18,8,4],[96,-6,17,10],[119,21,20,12],[58,47,13,6],[11,84,17,8],[-81,41,23,14],[-94,-30,19,11],[-5,-97,18,10]],routes:[[57,-34,68,-27],[64,17,81,23],[52,-61,79,-66],[40,57,51,62]]};function Sa(e,t,n){return xa.positions.some(([r,i,a])=>{let o=a*.93+n,s=a*.64+n;return((e-r)/o)**2+((t-i)/s)**2<1})}function Ca(e,t,n,r){let[i,a,o,s]=t,c=r?xa.detailedSides:xa.sides,l=Ht(xa.seed+n),u=Array.from({length:c},()=>.72+l()*.36),d=[[-.17,1,`#b1ae9d`],[.07,.92,`#a79783`],[.29,.78,`#8d8d78`],[.61,.54,`#758e7d`],[.87,.23,`#677e73`]],f=d.flatMap(([e,t],r)=>u.flatMap((l,u)=>{let d=u/c*Math.PI*2,f=.8+.2*Math.cos(d*2+n)+.1*Math.sin(d*3);return[i+Math.cos(d)*l*o*t+r*.09*o,e*s*f,a+Math.sin(d)*l*o*t*.65]})),p=[],m=new Ge;for(let e=1;e<d.length;e++){let t=p.length;for(let t=0;t<c;t++){let n=(t+1)%c,r=(e-1)*c+t,i=(e-1)*c+n,a=e*c+t,o=e*c+n;p.push(r,a,i,i,a,o)}if(e===d.length-1){let t=f.length/3;f.push(i+o*.25,s,a);for(let n=0;n<c;n++)p.push(e*c+n,t,e*c+(n+1)%c)}m.addGroup(t,p.length-t,e-1)}return m.setAttribute(`position`,new Re(f,3)),m.setIndex(p),m.computeVertexNormals(),new F(m,d.slice(0,-1).map(([,,t])=>e.surface(t)))}function wa(e,t,n,r=!1){let i=new d;i.add(Ca(e,t,n,r));let[a,o,s,c]=t;if(r||n<4){let t=ha(e,{wall:`#d9b085`,roof:`#826059`,trim:`#e9d6bc`},[2.3,1.5,1.9]);t.position.set(a+s*.58,c*.3,o+1.6),i.add(t);let n=e.cylinder([a+s*.62,c*.24,o-1.25],[.35,.54,2.4,7],[`#e4d3b9`]),l=e.cylinder([a+s*.62,c*.24+1.1,o-1.25],[.13,.62,.46,7],[`#aa6557`]);i.add(n,l,e.box([a+s*.65,.15,o+4],[2.7,.28,1.2],[`#92765f`]));let u=e.box([0,0,0],[1,1,1],[`#6d866f`]),d=new A(u.geometry,u.material,r?14:5),f=new Fe;for(let e=0;e<d.count;e++)f.position.set(a+s*.31+Math.cos(e*2.4)*s*.33,c*.51+Math.sin(e*.8)*c*.1,o+Math.sin(e*2.4)*s*.29),f.scale.set(.88,1.38,.89),f.updateMatrix(),d.setMatrixAt(e,f.matrix);i.add(d)}return i}function Ta(e,t){let n=xa.positions.slice(0,xa.count).map((n,r)=>{let i=wa(t,n,r);return e.add(i),{id:`island-${r}`,object:i,position:new L(n[0],n[3]*.68,n[1])}}),r=xa.routes.map((n,r)=>{let i=ya(t,[`#697e8b`,`#b27e63`,`#738b78`,`#a68c5e`][r]);i.scale.setScalar(.86);let a=la(t.box([.36,1.8,0],[.15,.16,.14],[`#f4d397`]),`street`);return a.userData.movingGlow=!0,i.add(a),e.add(i),{id:`distant-ship-${r}`,object:i,route:n}});return{islands:n,ships:r,update(e,t){r.forEach(({object:n,route:[r,i,a,o]},s)=>{let c=e*.027+s*1.03,l=(1+Math.sin(c))/2;n.position.set(r+(a-r)*l,.04+Math.sin(e+s)*.03,i+(o-i)*l),n.rotation.y=Math.atan2(-(o-i),a-r)+(Math.cos(c)<0?Math.PI:0),n.visible=s===0||t.weather<.45&&t.tier<3}),n.forEach(({object:e},n)=>{e.visible=t.tier<3||n%2==0})}}}function Ea({night:e,weather:t},n){let r=H.pool.map(n=>n.weight*(e?n.night:1)*(t===`clear`?1:n[t])),i=n()*r.reduce((e,t)=>e+t,0);return H.pool[r.findIndex(e=>(i-=e)<0)]??H.pool[0]}function Da({play:e,change:t,landed:n},r=Math.random){let i=`idle`,a=0,o;function s(e,n=0){i=e,a=n,t(e)}function c(){e(`fishCast`),s(`casting`,H.castSeconds)}return{get phase(){return i},get active(){return i!==`idle`},get castProgress(){return i===`casting`?1-a/H.castSeconds:i===`reeling`?a/H.reelSeconds:1},cast:c,stop(){o=void 0,i!==`idle`&&s(`idle`)},act(t){if(i===`miss`)return c();i===`bite`&&(e(`fishReel`),o=Ea(t,r),s(`reeling`,H.reelSeconds))},step(t){if(i!==`idle`&&i!==`miss`&&(a-=t,!(a>0))){if(i===`casting`){e(`fishSplash`);let[t,n]=H.waitSeconds;s(`waiting`,t+(n-t)*r())}else if(i===`waiting`)e(`fishBite`),s(`bite`,H.responseSeconds);else if(i===`reeling`&&o){let e=o;o=void 0,s(`idle`),n(e)}else s(`miss`)}}}}var Oa={armPivot:.995,armReach:.36,gripX:.267,length:1.24,sweep:1.05,readyArm:-.98,castArm:-1.62,pitch:.45,handle:.23,width:.036,wood:`#7c4b37`,tip:`#eac17e`,grip:`#46352e`,line:`#fff4d8`},ka={waterline:.065,sink:-.12,rock:.026,arc:1.38,hitch:.038,scale:.95};function Aa(e){let t=new d;return t.add(e.box([0,0,Oa.handle/2],[Oa.width*2,Oa.width*2,Oa.handle],[Oa.grip])),t.add(e.box([0,0,Oa.length/2],[Oa.width,Oa.width,Oa.length],[Oa.wood])),t.add(e.box([0,0,Oa.length-Oa.handle/2],[Oa.width*.7,Oa.width*.7,Oa.handle],[Oa.tip])),t}function ja(e){let t=new d;return t.add(e.box([0,-.025,0],[.12,.095,.12],[`#fff4ca`])),t.add(e.box([0,.045,0],[.093,.06,.093],[`#c54a3f`])),t.add(e.box([0,.097,0],[.036,.06,.036],[`#ffcf69`])),t.scale.setScalar(ka.scale),t}function Ma(e,t){let n=new d,r=Aa(t),i=ja(t),a=t.box([0,0,0],[ka.hitch,1,ka.hitch],[Oa.line]);n.name=`harbor-fishing-rig`,n.add(r,i,a),n.visible=!1,e.add(n);let o=new L,s=new L,c=new L;return(e,t)=>{if(n.visible=t.phase!==`idle`,!n.visible)return;let l=t.reduced?0:Math.sin(Math.PI*t.cast),u=x.lerp(Oa.readyArm,Oa.castArm,l),d=Math.cos(e.facing)*Oa.gripX-Math.sin(e.facing)*Math.sin(u)*Oa.armReach,f=-Math.sin(e.facing)*Oa.gripX-Math.cos(e.facing)*Math.sin(u)*Oa.armReach;return r.position.set(e.x+d,q+Oa.armPivot-Math.cos(u)*Oa.armReach,e.z+f),r.rotation.set(-Oa.pitch-l*Oa.sweep,e.facing,0,`YXZ`),r.updateMatrixWorld(!0),r.localToWorld(o.set(0,0,Oa.length)),c.set(H.float.x,t.phase===`bite`?ka.sink:ka.waterline,H.float.z),i.position.copy(o).lerp(c,t.reduced?1:t.cast),i.position.y+=l*ka.arc+Math.sin(t.time*3)*ka.rock,i.rotation.z=Math.sin(t.time*2)*ka.rock,a.visible=t.phase!==`miss`,i.visible=a.visible,s.subVectors(i.position,o),a.position.copy(o).lerp(i.position,.5),a.scale.y=s.length(),a.quaternion.setFromUnitVectors(Fe.DEFAULT_UP,s.normalize()),u}}var Na={startY:q+1.28,width:.23,height:.27,depth:.21,trim:`#9e5a3a`,paper:`#fff1c7`,warm:`#ffc269`,fadeOutAt:.78,day:.26,night:.93,retainedRadius:.8,retainedLift:.24,retainedStep:.18},Pa=Math.PI*2,Fa=[[0,0,0,Na.width,Na.height,Na.depth,0],[0,.155,0,.16,.04,.16,1],[0,-.155,0,.18,.039,.17,1],[0,.016,0,.265,.035,.237,1]];function Ia(e,t){let{altar:n,altarWidth:r,altarHeight:i}=gt,a=new d;a.position.set(n.x,q,n.z),a.add(t.box([0,.09,0],[r,.18,r],[`#9f9485`,`brick`])),a.add(t.box([0,.44,0],[.54,.7,.54],[`#b6a390`,`brick`])),a.add(t.box([0,.84,0],[.71,.14,.7],[`#cbb397`,`brick`])),a.add(la(t.box([0,.99,0],[.22,.18,.22],[`#ffcd85`]),`street`)),a.add(t.box([0,i,0],[.29,.05,.29],[`#956756`])),e.add(a);let o=r/2;return{footprint:[n.x-o,n.x+o,n.z-o,n.z+o],height:i}}function La(e,t){let n=new Pe;return Array.from({length:t},()=>{let t=new d,r=new P({color:Na.paper,transparent:!0,depthWrite:!1}),i=new P({color:Na.trim,transparent:!0,depthWrite:!1}),a={value:``};for(let[e,a,o,s,c,l,u]of Fa){let d=new F(n,u?i:r);d.position.set(e,a,o),d.scale.set(s,c,l),t.add(d)}return t.visible=!1,e.add(t),{group:t,paper:r,trim:i,id:a,opacity:0}})}var Ra=new I(Na.warm);function za(e,t,n){e.group.visible=t>0,e.paper.color.set(Na.paper).lerp(Ra,n),e.paper.opacity=t*x.lerp(Na.day,Na.night,n),e.trim.opacity=t}function Ba(e,t,n){let r=n.low?Math.floor(gt.lights.retained/2):gt.lights.retained,i=t.slice(0,r);for(let t of e){let e=i.some(e=>e.id===t.id.value);e||(t.opacity=n.reduced?0:Math.max(0,t.opacity-n.step/gt.lights.fadeSeconds)),!t.opacity&&!e&&(t.id.value=``)}for(let t of i){let r=e.find(e=>e.id.value===t.id)??e.find(e=>!e.id.value);r&&(r.id.value=t.id,r.opacity=n.reduced?1:Math.min(1,r.opacity+n.step/gt.lights.fadeSeconds))}e.forEach((e,t)=>{let r=t/gt.lights.retained*Pa;e.group.position.set(gt.altar.x+Math.cos(r)*Na.retainedRadius,Na.startY+Na.retainedLift+t*Na.retainedStep,gt.altar.z+Math.sin(r)*Na.retainedRadius),za(e,e.opacity,n.night)})}function Va(e){let{altar:t,lights:n}=gt,r=La(e,n.retained+1),i=La(e,n.flying).map(e=>({...e,age:Number(n.flightSeconds)})),a=new fe,o=0;return{release(){let e=i.reduce((e,t)=>t.age>e.age?t:e);e.age=0,o=n.beamSeconds},get beam(){return o/n.beamSeconds},pick(e,t,n){a.setFromCamera(e,t);let i=r.filter(e=>e.group.visible&&n.some(t=>t.id===e.id.value)),o=a.intersectObjects(i.map(e=>e.group),!0)[0];return i.find(e=>e.group===o?.object.parent)?.id.value},update(e,a){o=Math.max(0,o-a.step),Ba(r,e,a);let{drift:s,flightSeconds:c}=n,l=a.low?Math.max(1,Math.floor(n.flying/2)):n.flying;i.forEach(e=>{e.age+=a.step});let u=[...i].sort((e,t)=>e.age-t.age).slice(0,l);i.forEach(e=>{let n=Math.min(1,e.age/c),r=a.reduced?.2:n,i=u.includes(e)?Math.min(1,(1-n)/(1-Na.fadeOutAt)):0;e.group.position.set(t.x+r*s.x,Na.startY+r*s.y,t.z+r*s.z),za(e,i,a.night)})}}}function Ha(e,t,n){let r=Ia(e,t),i=Va(e),a=Ut(),o=Ma(e,t),s,c,l={night:!1,weather:`clear`},u=Da({play:n.play,change:n.fishing,landed(e){s=e,a.catchFish(e),n.landed()}});return{altar:r,fishing:u,reel(){u.act(l)},get result(){return s},get chosenWish(){return c},showRecords(){s=void 0,u.stop()},chooseWish(e){c=e},get beam(){return i.beam},pickWish(e,t){return i.pick(e,t,a.wishes().items)},catches:a.catches,wishes:a.wishes,deleteWish:a.deleteWish,clearWishes:a.clearWishes,releaseWish(e){return a.writeWish(e)?(i.release(),n.play(`wishChime`),n.notice(a.wishes().warning||gt.ui.saved),!0):!1},update(e,t){return l={night:t.night>=.5,weather:t.weather},u.step(t.frameTime),i.update(a.wishes().items,t),o(e,{phase:u.phase,cast:u.castProgress,time:t.time,reduced:t.reduced})}}}var Ua={id:`pier-gull`,title:`栈桥海鸥`,action:`逗海鸥`,perch:[3.25,1.51,-2.44],cover:[8.05,2.95,-5.02],cautious:3.6,flee:.95,interact:2.15,flight:7,cooldown:9,hop:1.25,flock:5,reducedFlock:2,route:{x:5.4,z:-.4,width:5.2,depth:4.3,rise:3.1}};function Wa(e,t){let n=t.box([0,0,0],[1,1,1],[`#f1e5ce`]),r=new A(n.geometry,n.material,Ua.flock*3);r.frustumCulled=!1,e.add(r);let i=new Fe;return(e,t)=>{r.count=t*3;for(let n=0;n<t;n++){let t=e*.145+n*1.72,a=2+Math.cos(t)*12,o=-11+Math.sin(t)*8,s=5.25+n*.62+Math.sin(t*2)*.27;for(let c=0;c<3;c++){let l=c-1;i.position.set(a+Math.cos(t)*l*.31,s+(l?Math.sin(e*4+n)*.09:0),o+Math.sin(t)*l*.31),i.rotation.set(0,-t,l*Math.sin(e*4+n)*.25),i.scale.set(l?.35:.22,l?.065:.13,.23),i.updateMatrix(),r.setMatrixAt(n*3+c,i.matrix)}}r.instanceMatrix.needsUpdate=!0}}function Ga(e,t){let n=ba(t),r=Wa(e,t);e.add(n.bird);let i=new L(...Ua.perch),a=new L(...Ua.cover),o=0,s=0,c=0,l=0;return{actor:n.bird,update(e,t,u){let{step:d,time:f,rain:p,snow:m,night:h}=t,g=Math.hypot(e.x-i.x,e.z-i.z),_=g<Ua.cautious&&!e.sailing&&!e.lookout,v=p>.45;s=Math.max(0,s-d),c=Math.max(0,c-d),o=Math.max(0,o-d),!o&&!s&&!c&&_&&g<Ua.flee&&!v&&(o=Ua.flight,s=Ua.flight+Ua.cooldown);let y=o?(1-o/Ua.flight)*Math.PI*2:0,b=Math.sin(y*.5),x=Ua.route;n.bird.position.copy(i).lerp(a,Math.min(1,p*2)),n.bird.position.add(new L((x.x-i.x+Math.cos(y)*x.width)*b,b*x.rise+Math.abs(Math.sin(c*Math.PI*2/Ua.hop))*.17,(x.z-i.z+Math.sin(y)*x.depth)*b)),n.bird.scale.y=1-m*.26,n.bird.rotation.y=o?-y:_?Math.atan2(e.x-i.x,e.z-i.z)+Math.PI:-1.1,n.wings.forEach((e,n)=>{e.scale.x=o||c?1:.46,e.rotation.z=(n?1:-1)*(t.reduced?.15:o||c?Math.sin(f*12)*.81:_?Math.sin(f*9)*.18:.3)}),r(f,t.low||v||h>.5?Ua.reducedFlock:Ua.flock),l+=d,l>16&&(l=0,!t.low&&!v&&h<.5&&u(g+4))},pet(e){c=Ua.hop,s=Ua.cooldown,e(0)},hotspot(e){return o||c||e.sailing||e.lookout||Math.hypot(e.x-n.bird.position.x,e.z-n.bird.position.z)>Ua.interact?null:{id:Ua.id,title:Ua.title,kind:`gull`,label:Ua.action,x:n.bird.position.x,z:n.bird.position.z,radius:Ua.interact}}}}var Ka={radius:1.55,activityRadius:13,speed:.39,cadence:.3,greet:`打招呼`,placeholder:`待填写`,people:[{spot:[-21.2,-8.9],hair:`#443940`,skin:`#c59172`,shirt:`#ad795e`,trousers:`#656a6b`,hat:!1,name:``,job:``,line:``},{spot:[-20.4,-5.98],hair:`#7c6046`,skin:`#e1b998`,shirt:`#7e9d81`,trousers:`#62637c`,hat:!0,name:``,job:``,line:``},{spot:[-16.5,3.8],hair:`#5e4274`,skin:`#dca67f`,shirt:`#ab9a6a`,trousers:`#605145`,hat:!1,name:``,job:``,line:``},{spot:[-5.3,13.3],hair:`#4b4f52`,skin:`#a46f55`,shirt:`#6f969f`,trousers:`#6e5c55`,hat:!1,name:``,job:``,line:``},{spot:[-16.3,16.1],hair:`#a57c52`,skin:`#dfab83`,shirt:`#a88292`,trousers:`#4e6764`,hat:!0,name:``,job:``,line:``},{spot:[-37.1,-6.36],hair:`#5d5443`,skin:`#d8ae90`,shirt:`#707da0`,trousers:`#474d52`,hat:!1,name:``,job:``,line:``}]},qa=.35;function Ja(e,t,n){e.updateMatrix(),n.copy(e.matrix);for(let r=e.parent;r&&r!==t;r=r.parent)r.updateMatrix(),n.premultiply(r.matrix);return n}function Ya(e){let t=new Map;e.traverse(e=>{if(!(e instanceof F)||e.geometry.type!==`BoxGeometry`||Array.isArray(e.material))return;let n=t.get(e.material);n?n.push(e):t.set(e.material,[e])});let n=new y,r=[...t.entries()].filter(([,e])=>e.length>1).map(([t,n])=>{let r=new A(n[0].geometry,t,n.length);return r.instanceMatrix.setUsage(j),n.forEach(e=>{e.visible=!1}),e.add(r),{mesh:r,parts:n}});function i(){for(let{mesh:t,parts:i}of r)i.forEach((r,i)=>t.setMatrixAt(i,Ja(r,e,n))),t.instanceMatrix.needsUpdate=!0}i();for(let{mesh:e}of r)e.computeBoundingSphere(),e.boundingSphere&&(e.boundingSphere.radius+=qa);return i}var Xa=.065,Za=`#d49f78`,Qa=`#5a443a`,$a=`#c19459`,eo=`#815841`,to=1.65,no=.57,ro=.038,io=Math.PI*2,ao=.29,oo=8,so=.005,co=.26,lo=ft.lift**2/(2*ft.gravity);function $([e,t,n]){return[e*Xa,t*Xa,n*Xa]}function uo(e,t){let n=new d,{hair:r,hat:i}=t,a=t.skin??Za;n.add(e.box($([0,19,0]),$([7,6,6]),[a])),n.add(e.box($([0,20.5,-1.6]),$([7.4,4.2,3.6]),[r])),n.add(e.box($([0,22,0]),$([7.4,1.7,6.4]),[r]));for(let t of[-1,1])n.add(e.box($([t*1.72,19.2,3.05]),$([.83,1.04,.16]),[`#403733`])),n.add(e.box($([t*3.65,18.6,.7]),$([.83,1.48,1.35]),[a]));if(t.traveler){let i=t.hairstyle===`tuft`?.87:-1.75;n.add(e.box($([i,22.9,.45]),$([3.65,1.9,4]),[r])),n.add(e.box($([i+.7,24.05,.1]),$([1.8,.87,2.1]),[r]))}if(t.faceVariant!==void 0){let i=t.faceVariant;n.add(e.box($([0,17.7+i%3*.19,3.05]),$([1.1+i%3*.38,.27,.15]),[`#614947`])),n.add(e.box($([i%2?1.42:-1.52,22.8,-.97]),$([3.2,1.6+i*.1,3.3]),[r]))}return i&&(n.add(e.box($([0,22.25,.35]),$([9.5,.9,8.5]),[$a])),n.add(e.box($([0,23.45,0]),$([7.25,1.45,6.3]),[eo])),n.add(e.box($([0,24.15,0]),$([6.65,1.03,5.75]),[$a]))),n}function fo(e,{side:t,kind:n,appearance:r}){let i=new d,a=n===`arm`;return i.position.set(...$([t*(a?4.1:1.68),a?15.3:7.1,0])),a?(i.add(e.box($([0,-2.32,0]),$([2.18,5.25,2.98]),[r.shirt])),i.add(e.box($([0,-5.6,0]),$([1.91,1.62,2.1]),[r.skin??Za]))):(i.add(e.box($([0,-2.65,0]),$([2.65,5.55,3.4]),[r.trousers])),i.add(e.box($([0,-6.08,.58]),$([2.74,2.03,4.25]),[r.boots??Qa]))),i}function po(){let e=new F(new ze(ao,oo),new P({color:`#443830`,opacity:co,transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=so,e}function mo(e,t,n){let r=new d;if(n.traveler){e.add(t.box($([0,13.9,0]),$([5.7,4.3,4.07]),[n.shirt]));for(let[e,i]of[[11.2,6.28],[9.65,6.92],[8.1,7.48]])r.add(t.box($([0,e,0]),$([i,1.59,4.18]),[n.shirt]));let i=t.cylinder($([1.4,13.1,2.1]),[.06,.06,.03,8],[n.badge??`#78844D`]);i.rotation.x=Math.PI/2,e.add(i,r)}else e.add(t.box($([0,12.31,0]),$([6.05,7.5,4.02]),[n.shirt]));if(!n.traveler||n.shoulderBag){let r=n.traveler?2.7:0;e.add(t.box($([r,12.95,-2.17]),$([4.45,4.68,1.99]),[`#816c4d`])),e.add(t.box($([r,14.38,-3.23]),$([4.33,1.24,.32]),[`#b39561`]))}return r}function ho(e,t=yt){let n=new d,r=new d,i=fo(e,{side:-1,kind:`arm`,appearance:t}),a=fo(e,{side:1,kind:`arm`,appearance:t}),o=fo(e,{side:-1,kind:`leg`,appearance:t}),s=fo(e,{side:1,kind:`leg`,appearance:t});r.add(e.box($([0,8.45,0]),$([6.13,2.25,4.03]),[t.trousers]));let c=mo(r,e,t);r.add(uo(e,t),i,a,o,s);let l=Ya(r),u=po();n.add(r,u);let f,p=0,m=0,h={blend:0,lean:0,bank:0,arms:0};return{avatar:n,detailAnchor:r,setFishingArm(e){f=e},swingCoat(e){c.rotation.x=e},wave(e){a.rotation.z=e},setFlightPose(e){!e.blend&&h.blend&&(i.rotation.z=a.rotation.z=0),h=e},update(e,t,c){n.position.set(e.x,q+e.elevation,e.z),n.rotation.y=e.facing;let d=e.speed<Lt.movementThreshold||c||e.sailing||e.airborne||e.swimming?0:Math.min(e.speed/Lt.walkSpeed,1),g=e.speed*t/to*io;p=(p+g)%io;let _=Math.sin(p)*d*no,v=e.airborne?Math.max(0,1-e.jumpAge/ft.launchPoseTime):0,y=c?0:Math.sin(Math.PI*e.landing/ft.recovery);r.position.y=e.height+Math.abs(Math.sin(p))*d*ro,r.scale.y=1-v*ft.launchSquat-y*ft.landingSquat,i.rotation.z=0,a.rotation.z=0;let b=e.airborne?ft.airArm*(1-v):0,S=e.airborne?ft.airLeg*(1-v):0;o.rotation.x=_+S,s.rotation.x=-_-S,i.rotation.x=-_-b,a.rotation.x=f??_-b,u.scale.setScalar(x.lerp(1,ft.shadowScaleAtPeak,Math.min(1,e.height/lo))),e.sitting&&(r.position.y-=.29,o.rotation.x=s.rotation.x=-Math.PI*.45,i.rotation.x=a.rotation.x=-.18);let{blend:C,lean:w,bank:T,arms:E}=h;if(r.rotation.set(w,0,T),C&&(r.scale.y=x.lerp(r.scale.y,1,C),i.rotation.x*=1-C,a.rotation.x*=1-C,i.rotation.z=-E,a.rotation.z=E,o.rotation.x*=1-C,s.rotation.x*=1-C),e.swimming&&!C){m=(m+t*(mt.strokeRate+e.speed*.9))%io;let n=c?.35:Math.sin(m),l=c?.2:Math.sin(m*2.3);r.rotation.set(mt.lean,0,0),r.position.y=e.height+(c?0:Math.sin(m*2)*mt.bob),i.rotation.x=-mt.armSweep*(.5+.5*n),a.rotation.x=-mt.armSweep*(.5-.5*n),i.rotation.z=mt.armSpread,a.rotation.z=-mt.armSpread,o.rotation.x=l*mt.kick,s.rotation.x=-l*mt.kick}u.visible=!C&&!e.swimming,l()}}}var go={displayName:`星旅人`,mutedMix:.13,neutral:`#8b806b`,reference:{hair:`#E0A83C`,skin:`#DEB781`,coat:`#9DB787`,scarf:`#CC6047`,trousers:`#625756`,boots:`#1E1715`,badge:`#78844D`,shoulderBag:!1,hairstyle:`tuft`},variant:{hair:``,coat:``,scarf:``,shoulderBag:!0,hairstyle:`side`},variantPreview:{hair:`#855943`,coat:`#5b6086`,scarf:`#be914a`},scarfSegments:4,lowSegments:2,wind:.095,scarfResponse:.21,scarfWidth:.095,umbrella:`#a16f56`,coatSwing:.042,first:{transition:.4,eye:1.285,seatEye:.88,helmEye:1.32,near:.035,bob:.032,bobHz:8.2,hatBlend:.27,hideBlend:.52}};function _o(e){let t=new d,n=e.cylinder([0,.58,0],[.18,.65,.24,8],[go.umbrella]);return t.add(n,e.box([0,.3,0],[.045,.57,.045],[`#725c4a`])),t.visible=!1,t}var vo=-Math.log1p(-.9),yo=2*Math.PI;function bo(e,t){return-Math.expm1(-vo*e/t)}function xo(e,t,n){let r=t-e;return e+(r-yo*Math.round(r/yo))*n}function So(e,t,n){let[r,i]=t.spot,a=ho(e,{...t,traveler:!1,faceVariant:n}),o=_o(e);return o.position.set(.25,1.02,.13),a.avatar.add(o),{actor:a,pose:{x:r,z:i,facing:n,elevation:zt(r,i),speed:0,height:0,landing:0,jumpAge:0,airborne:!1,lookout:!1,sitting:!1,sailing:!1,swimming:!1},umbrella:o,spot:{x:r,z:i},index:n,time:n*3,accumulated:0,title:t.name||`村民 ${n+1}`,note:[t.job,t.line].filter(Boolean).join(` · `)||Ka.placeholder}}function Co(e,t,n){let{pose:r,spot:i,time:a,index:o}=e,s=Ka.speed*n.step,c=i.x+Math.sin(a*.18+o)*1.6,l=i.z+Math.cos(a*.18)*.7,u=c-r.x,d=l-r.z,f=Math.hypot(u,d),p=Math.hypot(t.x-r.x,t.z-r.z)<1.02&&!t.lookout?Math.atan2(r.x-t.x,r.z-t.z):Math.atan2(u,d),m=r.x+Math.sin(p)*Math.min(s,f),h=r.z+Math.cos(p)*Math.min(s,f),g={obstacles:n.obstacles,height:0,radius:.23};r.speed=0,kt(m,h,g)&&(r.speed=f>.05?Ka.speed:0,Object.assign(r,{x:m,z:h,elevation:zt(m,h),facing:xo(r.facing,p,bo(n.step,.28))}))}function wo(e,t,n){let r=Ka.people.map((e,n)=>So(t,e,n));return r.forEach(({actor:t,pose:n})=>{t.update(n,0,!0),e.add(t.avatar)}),{update(e,t,i){for(let a of r){let{index:r,pose:o,actor:s}=a;if(s.avatar.visible=r<i.limit&&(i.night<.75||r%2==1),!s.avatar.visible)continue;let c=Math.hypot(e.x-o.x,e.z-o.z)<Ka.activityRadius;if(a.accumulated+=t,!c&&a.accumulated<Ka.cadence)continue;let l=a.accumulated;a.accumulated=0,a.time+=l,o.sitting=r%3==0&&Math.sin(a.time*.22)<-.28,o.speed=0,!o.sitting&&r%3!=2&&Co(a,e,{step:l,obstacles:n}),a.umbrella.visible=i.rain>.32,s.update(o,l,i.reduced||!c)}},hotspot(e){let t=r.find(({actor:t,pose:n})=>t.avatar.visible&&Math.hypot(e.x-n.x,e.z-n.z)<Ka.radius);return t?{id:`resident-${t.index}`,kind:`resident`,title:t.title,label:Ka.greet,note:t.note,x:t.pose.x,z:t.pose.z,radius:Ka.radius}:null},targets:r.map(e=>({id:`resident-${e.index}`,object:e.actor.avatar,detailAnchor:e.actor.detailAnchor,title:e.title,height:1.28}))}}var To=.35,Eo=208;function Do(e,t){let[n,r,i]=Gt.eye,a=t.box([n-.14,r-.56,i],[.11,.88,.11],[`#715b4c`]),o=t.beam([[n-.3,r-.2,i+.13],[n+.48,r+.03,i-.14]],.23,[`#67817e`]);e.add(a,o,t.box([n+.47,r+.03,i-.14],[.11,.24,.26],[`#ccab78`]))}function Oo(e){let{x:t,z:n}=Gt.position;return!e.lookout||Math.hypot(e.x-t,e.z-n)>Gt.promptRadius?null:{kind:`telescope`,id:Gt.id,label:Gt.action,x:t,z:n,radius:Gt.promptRadius}}function ko(e,t){let{camera:n,onChange:r,targets:i}=t,a=new L(.93,.107,-.36),o=new L(...X.moonDirection),s=new L(...Gt.eye);i.push({id:`sun`,title:`太阳`,position:a.normalize().multiplyScalar(Eo),night:!1},{id:`moon`,title:`月亮`,position:o.normalize().multiplyScalar(Eo),night:!0});let c=new L,l=new L,u=new L,d=!1,f=Gt.starting,p=Gt.yaw,m=Gt.pitch,h=null,g=null,_=``,v=!1,y=0,b;function S(){let e=h?.id??``,t=[e,f,v,!!g].join(`:`);t!==_&&(_=t,r({zoom:f,name:Gt.titles[e]||h?.title||(h?`观察目标`:``),caption:e===`sun`?Gt.sunHint||Gt.captions[e]||`待填写`:Gt.captions[e]||(h?`待填写`:``),locked:!!g,loading:v}))}async function C(){if(d)return;let t=++y;d=!0,v=!0,_=``,g=null,f=Gt.starting,p=Gt.yaw,m=Gt.pitch,S();try{let n=await Pt(()=>import(`./harbor-scope-detail-171htpWI.js`),__vite__mapDeps([0,1,2,3,4,5]));d&&t===y&&(b=n.mountScopeDetails(e,i))}catch{t===y&&(b=void 0)}finally{t===y&&(v=!1,d&&S())}}function w(e,t){return e.position?t.copy(e.position):(e.object?.getWorldPosition(t),t.y+=e.height??.8,t)}function T(e,t){let n=Gt.aimTolerance/Math.sqrt(f)*Math.max(To,1-t*.38),r=null;for(let t of i){if(t.night!==void 0&&t.night!==e||!t.position&&t.object&&!t.object.visible)continue;let i=u.subVectors(w(t,u),s).normalize().angleTo(l);i<n&&(n=i,r=t)}return r}return{get active(){return d},open:C,close(){return d?(d=!1,++y,b?.dispose(),b=void 0,h=g=null,n.fov=G.fov,n.updateProjectionMatrix(),r(null),!0):!1},look(e,t){g=null,p=x.clamp(p-e*Gt.sensitivity,Gt.yaw-Gt.yawLimit,Gt.yaw+Gt.yawLimit),m=x.clamp(m+t*Gt.sensitivity,-Gt.pitchLimit,Gt.pitchLimit)},zoom(e){f=x.clamp(f+e*Gt.step,Gt.minimum,Gt.maximum),S()},lock(){g=g?null:h,S()},update(e,t){d&&(n.position.copy(s),g?l.subVectors(w(g,c),s).normalize():l.set(-Math.sin(p)*Math.cos(m),-Math.sin(m),-Math.cos(p)*Math.cos(m)),n.lookAt(c.copy(s).add(l)),n.fov=G.fov/f,n.updateProjectionMatrix(),h=g??T(e,t),b?.update(f),S())}}}var Ao={transition:4.2,snowBuild:18,snowMelt:14,iceDelay:9,iceBuild:25,iceMelt:15,maximumIce:.4,wetFog:.025,snowFog:.018,rainLight:.61,snowLight:.8,rainSky:`#778e9f`,snowSky:`#bac6cc`,snowTint:`#e8e7dc`,particles:{high:490,medium:250,low:82},volume:[21,15,21],iceBounds:[-24,27,-24,23],safeChannels:[[-6,13,6,11],[8,29,-14,10],[3.5,8.5,-8.5,-2.5],[-8,-1.5,-7.4,-2.4]]};function jo(e,t,n){let[r,i,a,o]=Ao.iceBounds;if(n<=0||e<r||e>i||t<a||t>o||Ao.safeChannels.some(([n,r,i,a])=>e>=n&&e<=r&&t>=i&&t<=a))return!1;let s=Math.min(Math.abs(t+2.55),Math.abs(t-11),Math.abs(e+12),Math.abs(t+18)),c=.14*Math.sin(e*.83+t*.51)*Math.sin(t*1.25-e*.34);return s*.16+c<n}var Mo=193,No=.024,Po=.42,Fo=.075;function Io(e,t,n,r){return e+Math.sign(t-e)*Math.min(Math.abs(t-e),n/r)}function Lo(e){let t=Ht(Mo),[n,r,i]=Ao.volume,a=Array.from({length:Ao.particles.high},()=>({x:t()*n-n/2,y:t()*r,z:t()*i-i/2,drift:t()})),o=new P({color:`#d9e4df`,transparent:!0,opacity:.64,depthWrite:!1}),s=new A(new Pe,o,a.length);s.instanceMatrix.setUsage(j),s.frustumCulled=!1,e.add(s);let c=new Fe;return(e,t,n)=>{let{frame:i,limit:l}=n,u=i.rain>i.snow;if(s.count=Math.min(a.length,Math.round(l*Math.max(i.rain,i.snow))),s.visible=s.count>0,s.visible){o.color.set(u?`#a7bfca`:`#ecebe0`),o.opacity=u?.46:.81,c.scale.set(u?No:Fo,u?Po:Fo,Fo),c.rotation.z=u?-.16:0;for(let n=0;n<s.count;n++){let i=a[n],o=x.euclideanModulo(i.y-t*(u?12:1.2+i.drift),r),l=u?(o-r/2)*.18:Math.sin(t+i.drift*8)*.64;c.position.set(e.position.x+i.x+l,e.position.y+o-r/2,e.position.z+i.z),c.updateMatrix(),s.setMatrixAt(n,c.matrix)}s.instanceMatrix.needsUpdate=!0}}}function Ro(t,n){let r=new Set;t.traverse(t=>{if(!(t instanceof F))return;let i=Array.isArray(t.material)?t.material:[t.material];for(let t of i){if(!(t instanceof e)||r.has(t))continue;r.add(t);let i=t.onBeforeCompile.bind(t);t.onBeforeCompile=(e,t)=>{i(e,t),e.uniforms.harborSnow=n.snow,e.uniforms.harborRain=n.ripple,e.uniforms.harborWeatherTime=n.time,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 harborWorld;`).replace(`#include <project_vertex>`,`
            vec4 harborPoint=vec4(transformed,1.0);
            #ifdef USE_INSTANCING
              harborPoint=instanceMatrix*harborPoint;
            #endif
            harborWorld=(modelMatrix*harborPoint).xyz;
            #include <project_vertex>`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 harborWorld;
uniform float harborSnow, harborRain, harborWeatherTime;`).replace(`#include <opaque_fragment>`,`float snowFace = smoothstep(0.48, 0.86, dot(normal, normalize((viewMatrix * vec4(0.,1.,0.,0.)).xyz)));
             if(harborRain>0.01){
                vec2 drop=harborWorld.xz*1.78;
                float ring=length(fract(drop)-0.5);
                float phase=fract(harborWeatherTime*1.23+sin(dot(floor(drop),vec2(7.92,13.17)))*19.02);
                float trace=1.0-smoothstep(0.021,0.055,abs(ring-phase*0.43));
                float nearby=1.0-smoothstep(7.0,18.0,distance(cameraPosition,harborWorld));
                outgoingLight+=vec3(0.25,0.33,0.37)*(1.0-phase)*trace*snowFace*harborRain*nearby*0.29;
             }
             outgoingLight = mix(outgoingLight, mix(outgoingLight, vec3(0.78,0.81,0.79),0.76), snowFace * harborSnow);
             #include <opaque_fragment>`)},t.customProgramCacheKey=()=>`harbor-surface-weather`,t.needsUpdate=!0}})}function zo(e){let t={value:0},n={value:0},r={value:0};Ro(e,{snow:t,ripple:n,time:r});let i=Lo(e),a={rain:0,snow:0,cover:0,ice:0,low:!1},o=0,s=0;return{frame:a,update(e,c,l){let{step:u,quality:d,tier:f,reduced:p}=l;a.low=d===`low`||f>=2,a.rain=Io(a.rain,Number(e===`rain`),u,Ao.transition),a.snow=Io(a.snow,Number(e===`snow`),u,Ao.transition),o=e===`snow`?o+u:0,a.cover=Io(a.cover,Number(e===`snow`),u,e===`snow`?Ao.snowBuild:Ao.snowMelt);let m=o>=Ao.iceDelay;return a.ice=Io(a.ice,m?Ao.maximumIce:0,u,(m?Ao.iceBuild:Ao.iceMelt)/Ao.maximumIce),t.value=a.low?Number(a.cover>=.6)*.66:a.cover,s+=p?0:u,n.value=a.low?0:a.rain,r.value=s,i(c,s,{frame:a,limit:f>=1||p?Ao.particles.low:Ao.particles[d]}),a}}}var Bo=5;function Vo(e){return(t,n)=>{let r=Math.abs(n.speed);e(`engine`,{volume:t.sailing?(n.mode===`tour`?.29:.67)*Math.min(1,.28+r*.11):0,pitch:.77+r*.13});let i=Math.hypot(t.x-U.center.x,t.z-U.center.z),a=n.mobile?Bo:At.effects.machine.range;e(`machine`,{volume:Math.max(0,1-i/a)*(t.lookout?.3:.52),pitch:t.lookout?.73:1});let{rain:o,snow:s}=n.weather;e(`rain`,{volume:o*.66}),e(`wind`,{volume:Math.max(s*.41,n.flightWind)})}}function Ho({scene:e,camera:t,kit:n},r){let i=wo(e,n,r.obstacles),a=Ta(e,n),o=Ga(e,n);return Do(e,n),{residents:i,islands:a,gulls:o,weather:zo(e),scope:ko(e,{camera:t,onChange:r.onChange,targets:[...a.islands,...a.ships,...i.targets,...r.animals.targets,{id:Ua.id,title:Ua.title,object:o.actor,height:.1}]}),ambience:Vo(r.setAmbience)}}function Uo(e){let{first:t}=go,n=new L,r=new L,i=new Ve,a=new qe,o=0,s=0,c=0;return{get blend(){return o},get heading(){return c},update(l,u,d){let f=Number(d.enabled);o=d.instant?f:o+Math.sign(f-o)*Math.min(Math.abs(f-o),d.step/t.transition);let p=o*o*(3-2*o),m=u.yaw;if(c=m,s+=d.step*l.speed,!o){e.near!==G.near&&(e.near=G.near,e.updateProjectionMatrix());return}let h=d.bob&&!l.airborne&&!l.sailing?Math.sin(s*t.bobHz)*t.bob:0,g=l.sailing?t.helmEye:l.sitting?t.seatEye:t.eye;n.set(l.x,q+l.elevation+l.height+g+h,l.z);let _=Math.cos(u.pitch);r.set(-Math.sin(m)*_,-Math.sin(u.pitch),-Math.cos(m)*_).add(n),a.position.copy(n),a.lookAt(r),i.copy(e.quaternion),e.position.lerp(n,p),e.quaternion.copy(i).slerp(a.quaternion,p),e.near=x.lerp(G.near,t.near,p),e.updateProjectionMatrix()}}}var Wo=2,Go=.015;function Ko(e){let t=K.cape,n=Math.min(t.rows,Math.floor(t.maxSegments/Wo)),r=e.surface(t.color),i=new A(new Pe,r,n*Wo);i.name=`harbor-flight-cape`,i.instanceMatrix.setUsage(j),i.visible=!1,i.frustumCulled=!1;let a=new Fe;function o(e){if(i.visible=e.open>Go||t.alwaysVisible,!i.visible)return;let r=e.low?Math.ceil(n/2):n,o=Math.min(1,e.speed/K.speed),s=t.length*n/r*(.23+e.open*.77),c=e.open*(.16+t.flow*o),l=t.shoulder,u=t.rootBack;i.count=r*Wo;for(let n=0;n<r;n++){let o=e.reduced?0:Math.sin(e.time*t.waveRate-n)*t.breeze,d=c+o*e.open,f=-e.bank*t.bank*e.open*n/r;for(let c=0;c<Wo;c++){let p=t.width+e.open*t.spread*n/r;a.position.set(f+(c-.5)*p,l-Math.cos(d)*s/2,u-Math.sin(d)*s/2),a.rotation.set(d,0,o),a.scale.set(p,s+t.thickness/4,t.thickness),a.updateMatrix(),i.setMatrixAt(n*Wo+c,a.matrix)}l-=Math.cos(d)*s,u-=Math.sin(d)*s}i.instanceMatrix.needsUpdate=!0}return{mesh:i,update:o}}function qo(e,t){let n=go.reference,r=go.variantPreview,i=t?{...n,...go.variant,hair:go.variant.hair||r.hair,coat:go.variant.coat||r.coat,scarf:go.variant.scarf||r.scarf}:n,a=e=>`#`+new I(e).lerp(new I(go.neutral),go.mutedMix).getHexString();return{...ho(e,{hair:a(i.hair),shirt:a(i.coat),trousers:i.trousers,boots:i.boots,hat:!1,skin:i.skin,badge:i.badge,hairstyle:i.hairstyle,traveler:!0,shoulderBag:i.shoulderBag}),scarfColor:i.scarf}}function Jo(e,t){let n=new d,r=go.scarfWidth;n.add(e.box([0,0,.01],[.41,.088,.4],[t]));let i=Array.from({length:go.scarfSegments},()=>{let n=new d;return n.add(e.box([0,-.056,0],[r,.133,.046],[t])),n}),a=n;return i.forEach((e,t)=>{e.position.set(t?0:-.14,t?-.106:0,t?0:-.195),a.add(e),a=e}),{root:n,segments:i}}function Yo(e,t,n){e.root.position.set(0,1.1+t.height,0);let r=n.reduced?.1:n.rain>.3?.38:1;e.segments.forEach((e,i)=>{e.visible=!n.low||i<go.lowSegments;let a=Math.sin(n.time*1.5+i*.54)*go.wind,o=Math.min(t.speed*.17,.54),s=t.airborne?Math.max(-.27,Math.min(.32,n.vertical*.095)):0,c=(i?a*.7:-o-s+a)*r,l=bo(n.step,go.scarfResponse+i*.035);e.rotation.x=x.lerp(e.rotation.x,c,l),e.rotation.z=x.lerp(e.rotation.z,(a+n.turn*.8)*r,l)})}function Xo(e,t){let n={traveler:qo(t,!1),variant:qo(t,!0),original:ho(t)},r={traveler:Jo(t,n.traveler.scarfColor),variant:Jo(t,n.variant.scarfColor)};n.traveler.avatar.add(r.traveler.root),n.variant.avatar.add(r.variant.root);let i=_o(t);i.name=`harbor-player-umbrella`;let a=Ko(t);e.add(...Object.values(n).map(e=>e.avatar),i);let o=0,s=0,c=0,l=0;return(e,t)=>{let{appearance:u}=t.settings,d=n[u],f=t.simplified||t.settings.quality===`low`;for(let e of Object.values(n))e.avatar.visible=e===d&&t.first<go.first.hideBlend;o+=t.seconds;let p=(e.height-s)/Math.max(t.seconds,.016),m=Math.atan2(Math.sin(e.facing-c),Math.cos(e.facing-c));s=e.height,c=e.facing;let h=Number(t.flying),g=t.seconds/K.cape.transition;l=t.reduced?h:l+Math.sign(h-l)*Math.min(g,Math.abs(h-l));let _=l*l*(3-2*l);a.mesh.parent!==d.detailAnchor&&d.detailAnchor.add(a.mesh),a.update({open:_,time:o,low:f,speed:e.speed,reduced:t.reduced,bank:t.bank}),d.setFlightPose({blend:_,lean:_*K.pose.lean*Math.min(1,e.speed/K.speed),bank:-_*t.bank*K.pose.bank,arms:_*K.pose.arms}),d.setFishingArm(t.fishingArm),d.update(e,t.seconds,t.reduced),d.swingCoat(f||t.reduced?0:Math.sin(o*6.6)*Math.min(e.speed*.015,go.coatSwing)),u!==`original`&&Yo(r[u],e,{time:o,step:t.seconds,rain:t.rain,reduced:t.reduced,low:f,turn:m,vertical:p}),i.visible=!t.flying&&t.fishingArm===void 0&&t.rain>.25;let v=t.first>go.first.hatBlend,y=v?t.yaw+Math.PI:e.facing,b=Math.cos(y)*.29+Math.sin(y)*(v?.41:.08),x=-Math.sin(y)*.29+Math.cos(y)*(v?.41:.08);i.position.set(e.x+b,q+e.elevation+e.height+(v?1.3:1.01),e.z+x),i.rotation.set(0,y,t.reduced?0:Math.sin(o*6)*e.speed*.012)}}var Zo=`#819471`,Qo=`#8c8878`,$o=`#b7a384`,es=`#896a50`,ts=.016,ns=.06;function rs(e,t){return q+dt(e,t)}function is(e,t){let[n,r,i,a]=t,o=[[n,i],[r,i],[r,a],[n,a]],s=o.flatMap(([e,t])=>[e,rs(e,t),t]).concat(o.flatMap(([e,t])=>[e,-.72,t])),c=new Ge;return c.setAttribute(`position`,new Re(s,3)),c.setAttribute(`uv`,new Re([0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1],2)),c.setIndex([0,2,1,0,3,2,0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6,3,0,4,3,4,7]),c.addGroup(0,6,0),c.addGroup(6,24,1),c.computeVertexNormals(),new F(c,[e.surface(Zo,`grass`),e.surface(Qo,`brick`)])}var as=Y.footprints.flatMap(([e,t,n,r])=>{let i=[e,...[Y.summitAt,Y.riseFrom].filter(n=>n>e&&n<t),t];return i.slice(1).map((e,t)=>[i[t],e,n,r])});function os(){let e=Ht(Y.treeSeed);return Array.from({length:Y.treeCount},(t,n)=>{let[r,i,a,o]=Y.footprints[n%Y.footprints.length];return{x:r+(i-r)*(.08+e()*.84),z:n%2==0?a+.48:o-.48,size:.8+e()*.45}}).filter(({x:e,z:t})=>Math.hypot(e+47.1,t+7.8)>2.1)}var ss=os();function cs(e,t){let n=Math.atan2(t[0]-e[0],t[2]-e[2]),r=Math.cos(n)*Y.railOffset,i=-Math.sin(n)*Y.railOffset;function a([e,,t],a){let o=e+r+Math.sin(n)*a,s=t+i+Math.cos(n)*a;return[o,rs(o,s)+Y.railHeight,s]}return[a(e,Y.railEndGap),a(t,-Y.railEndGap)]}function ls(e,t,n){return[e-n,e+n,t-n,t+n]}var us=[...ss.map(({x:e,z:t})=>ls(e,t,.14)),...Y.stairRuns.flatMap(e=>{let[t,n]=Y.trail[e-1],[r,i]=Y.trail[e];return cs([t,0,n],[r,0,i]).map(([e,,t])=>ls(e,t,Y.railThickness/2))})],ds=[[.62,.24,1.24,`#725440`],[1.39,.92,.77,`#5d7764`],[1.89,.63,.41,`#79906e`]],fs=ss.flatMap(({x:e,z:t,size:n})=>ds.map(([r,i,a])=>({footprint:ls(e,t,i*n/2),base:rs(e,t)+(r-a/2)*n,height:a*n})));function ps(e,t){let n=new Fe;for(let[r,i,a,o]of ds){let s=t.box([0,0,0],[1,1,1],[o]),c=new A(s.geometry,s.material,ss.length);ss.forEach(({x:e,z:t,size:o},s)=>{n.position.set(e,rs(e,t)+r*o,t),n.scale.set(i*o,a*o,i*o),n.updateMatrix(),c.setMatrixAt(s,n.matrix)}),e.add(c)}}function ms(e,[t,n]){let r=new d,i=n[0]-t[0],a=n[2]-t[2],o=Math.atan2(i,a);for(let n=1;n<=Y.treadCount;n++){let s=n/(Y.treadCount+1),c=t[0]+i*s,l=t[2]+a*s,u=e.box([c,rs(c,l),l],[Y.treadWidth,Y.treadHeight,Y.treadDepth],[Qo,`brick`]);u.rotation.y=o,r.add(u)}let s=cs(t,n),[c,l]=s;r.add(e.beam([c,l],Y.railThickness,[es,`wood`]));for(let[t,n,i]of s)r.add(e.box([t,n-Y.railHeight/2,i],[Y.railThickness,Y.railHeight,Y.railThickness],[es,`wood`]));return r}function hs(e,t){for(let n=1;n<Y.trail.length;n++){let[r,i]=Y.trail[n-1],[a,o]=Y.trail[n],s=[r,rs(r,i)+ts,i],c=[a,rs(a,o)+ts,o],l=t.beam([s,c],Y.trailWidth,[$o,`brick`]);l.scale.z=ns,l.rotateY(Math.PI/2),e.add(l),Y.stairRuns.some(e=>e===n)&&e.add(ms(t,[s,c]));let u=r+.52,d=i-.91,f=rs(u,d);e.add(t.box([u,f+.49,d],[.11,.98,.11],[es])),n%2&&e.add(la(t.box([u,f+1.04,d],[.19,.2,.19],[`#f2c48b`]),`street`))}}function gs(e,t){for(let n of as)e.add(is(t,n));ps(e,t),hs(e,t);let{canvas:n,context:r}=Kt(128,32);r.fillStyle=es,r.fillRect(0,0,128,32),r.fillStyle=`#fff0d4`,r.font=`bold 19px sans-serif`,r.textAlign=`center`,r.fillText(Y.title,64,23);let i=new F(new Se(1.12,.28),new P({map:Vt(n),side:2}));i.position.set(-24.8,q+1.26,-11.88),i.rotation.y=Math.PI/2,e.add(i,t.box([-24.8,q+.61,-11.88],[.12,1.22,.12],[es]))}var{playerRadius:_s}=Lt,vs={left:Jt.west-K.mapMargin,right:Jt.east+K.mapMargin,near:Jt.north-K.mapMargin,far:Jt.south+K.mapMargin};function ys({x:e,z:t}){let n=Math.min(e-vs.left,vs.right-e,t-vs.near,vs.far-t);return 1-Math.max(0,Math.min(1,n/K.edgeBrake))}function bs({x:e,z:t}){let n=It(e,t,wt);return Math.max(n,It(e-_s,t,wt),It(e+_s,t,wt),It(e,t-_s,wt),It(e,t+_s,wt))}function xs(e){let t=bs(e);return t>0?t+K.groundClearance:K.waterClearance}function Ss(e,t){let n=[...t,...e.map(({footprint:e,height:t})=>{let[n,r,i,a]=e;return{footprint:e,base:bs({x:(n+r)/2,z:(i+a)/2}),height:t??K.propHeight}})].map(({footprint:[e,t,n,r],base:i=q,height:a})=>({left:e-_s,right:t+_s,near:n-_s,far:r+_s,bottom:i,top:i+a})),r=({x:e,y:t,z:r})=>n.some(n=>e>n.left&&e<n.right&&r>n.near&&r<n.far&&t<n.top&&t+K.bodyHeight>n.bottom);return{landing({x:t,z:n}){if(!kt(t,n,{height:0,obstacles:[]}))return mt.waterLevel;let i=bs({x:t,z:n});if(kt(t,n,{height:0,obstacles:e})&&!r({x:t,y:i,z:n}))return i;let a=Tt(t,n,{obstacles:e,height:1/0});return a>0?i+a:`blocked`},clear({x:e,y:t,z:n},i){return e<vs.left||e>vs.right||n<vs.near||n>vs.far||t>K.maximumAltitude||t<(i?xs({x:e,z:n}):bs({x:e,z:n}))?!1:!r({x:e,y:t,z:n})}}}var Cs={x:0,y:0,z:0},ws=.13,Ts=.04,Es=.4,Ds=.88;function Os(e,t,n){let r=K.speed*(e.sprint?K.sprintMultiplier:1)*(1-n*n*Ds);return{x:(Math.cos(t)*e.x-Math.sin(t)*e.z)*r,z:(-Math.sin(t)*e.x-Math.cos(t)*e.z)*r,y:e.vertical*(e.vertical>0?K.climbSpeed:K.descentSpeed)}}function ks(e,t,n){let r={...Cs};for(let i of[`x`,`y`,`z`]){let a=i===`y`?K.verticalResponse:t.x||t.z?K.accelerationTime:K.brakingTime,o=bo(n,a);r[i]=t[i]*n+(e[i]-t[i])*o*a/vo,e[i]+=(t[i]-e[i])*o}return r}function As(e,t,n){let{velocity:r,target:i,step:a,clearance:o,committedLanding:s}=n,c=ks(r,i,a);for(let n of[`y`,`x`,`z`]){if(!c[n])continue;let i={...t,[n]:t[n]+c[n]};if(n===`y`){let e=o?xs(i):bs(i),t=Math.min(K.maximumAltitude,Math.max(e,i.y));t!==i.y&&(r.y=0),i.y=t}let a=n!==`y`&&(!o||s)&&typeof e.landing(i)!=`number`;(!s||!a)&&e.clear(i,o||a)?t[n]=i[n]:r[n]=0}}function js(e,t,n){let r={...Cs},i={...Cs},a=`ground`,o={x:e.x,z:e.z},s=0,c=0,l=!1,u=()=>{Object.assign(i,Cs),c=0};function d(){a!==`ground`&&(a=`ground`,u(),s=0,n.notice(``),n.change(!1))}function f(){let e=t.landing(r);return typeof e!=`number`&&!l&&(n.notice(K.ui.blocked),l=!0),e}function p(){l=!1,typeof f()==`number`&&(a=`land`)}function m(e,o,s){if(a===`ground`||e<=0)return;o.vertical>=0&&(l=!1);let c=a===`land`||o.vertical<0?f():`blocked`,u=Os(o,s,ys(r));a===`launch`&&Object.assign(u,{x:0,z:0,y:K.launchSpeed}),a===`land`&&Object.assign(u,{x:0,z:0,y:-K.landingSpeed});let p=(a===`land`||o.vertical<0)&&typeof c==`number`,m=a===`air`&&!p&&r.y<xs(r);m&&Object.assign(u,{x:0,z:0,y:Math.max(u.y,K.launchSpeed)});let g={...r},_=Math.ceil(e/Lt.maxCollisionStep);for(let n=0;n<_;n++)As(t,r,{velocity:i,target:u,step:e/_,clearance:a===`air`&&!p&&!m,committedLanding:a===`land`});if(a===`launch`&&r.y>=xs(r)&&(a=`air`),typeof c==`number`&&p&&r.y<c+Ts&&n.land({...r,y:c})){let e=c>bs(r)+Es;d(),e&&n.notice(K.ui.roof)}else h(e,g)}function h(t,n){let i=r.x-n.x,a=r.z-n.z,o=zt(r.x,r.z);e.speed=Math.hypot(i,a)/t,c=Math.hypot(i,a,r.y-n.y)/t;let l=e.speed>Lt.movementThreshold?xo(e.facing,Math.atan2(i,a),bo(t,K.turnTime)):e.facing,u=(l-e.facing)/t;s+=(Math.max(-1,Math.min(1,u))-s)*bo(t,ws),Object.assign(e,{x:r.x,z:r.z,elevation:o,facing:l,height:r.y-q-o,airborne:!0,jumpAge:0,landing:0})}return{get active(){return a!==`ground`},get bank(){return s},get speed(){return c},toggle(){a===`land`?a=`air`:a===`ground`?(Object.assign(r,{x:e.x,z:e.z,y:q+e.elevation+e.height}),o={x:e.x,z:e.z},a=`launch`,u(),n.change(!0)):p()},disable(){a!==`ground`&&a!==`land`&&(typeof t.landing(r)==`number`?a=`land`:(n.land({...o,y:.65+zt(o.x,o.z)})||n.recover(),d(),n.notice(K.ui.recovered)))},update:m,reset:d,clear:u}}function Ms(e){let{baseWind:t,speedWind:n,flapInterval:r,flapThreshold:i}=K.audio,a=r;return(o,s,c)=>{if(!s)return a=r,0;let l=Math.min(1,c/K.speed);return a+=o,a>=r&&l>=i&&(e(`cape`,{volume:l}),a=0),t+n*l}}var Ns=xt.eval.x,Ps=17.35,Fs=1.8,Is=2.65,Ls=112,Rs=40,zs=[-1,1],Bs={footprint:[Ns-Fs,Ns+Fs,15.910000000000002,18.790000000000003],height:Is};function Vs(){let{canvas:e,context:t}=Kt(Ls,Rs);t.fillStyle=`#755440`,t.fillRect(0,0,Ls,Rs),t.fillStyle=`#ac875e`,t.fillRect(3,3,106,34),t.fillStyle=`#fff0c9`,t.textAlign=`center`,t.textBaseline=`middle`,t.font=`bold 22px "Microsoft YaHei", "PingFang SC", sans-serif`,t.fillText(bt.title,Ls/2,Rs/2);let n=new F(new Se(1.72,.59),new P({map:Vt(e)}));return n.position.set(0,2,-1.52),n.rotation.y=Math.PI,la(n,`station`)}function Hs(e,t){let n=new d,{box:r}=t;n.add(r([0,.12,0],[3.6,.24,2.88],[`#9a7153`,`wood`])),n.add(r([0,1.1,1.23],[3.34,1.8,.2],[`#bdad88`,`wood`])),n.add(r([0,.71,-1.12],[3.38,.87,.58],[`#9c7457`,`wood`])),n.add(r([0,1.17,-1.15],[3.52,.12,.64],[`#cda77b`,`wood`]));for(let e of zs){for(let t of zs)n.add(r([1.56*e,1.2,1.17*t],[.17,2.4,.17],[`#765848`,`wood`]));let t=r([e*.82,2.42,0],[1.9,.16,3.05],[`#6b8279`,`roof`]);t.rotation.z=-.22*e,n.add(t)}n.add(r([-.84,1.25,-1.16],[.44,.09,.29],[`#d8c8a2`])),n.add(Vs()),n.position.set(Ns,q,Ps),e.add(n)}function Us(e,t,n){let r=e.vessel,i=t.x-r.x,a=t.z-r.z,o=Math.hypot(i,a);if(o<=_t.positionTolerance)return`arrived`;let s=t.wait?Math.min(_t.speed,Math.max(.8,o*1.6)):_t.speed,c=r.speed+(s-r.speed)*bo(n,_t.startResponse),l=xo(r.yaw,Math.atan2(i,a),bo(n,_t.turnSeconds)),u=Math.min(o,c*n),d={x:r.x+i*u/o,z:r.z+a*u/o,yaw:l,speed:c};return e.followRoute(d,n)?`moving`:`blocked`}function Ws(e,t){let n=0,r=0,i=!1;return{start(){n=0,r=0,i=!1,e.startTour()},update(a){if(i||!a)return null;if(r>0)return r=Math.max(0,r-a),r||t(null),null;let o=_t.route[n],s=Us(e,o,a);return s===`blocked`?(i=!0,`blocked`):s===`moving`?null:(n++,n>=_t.route.length?(i=!0,`finish`):(o.wait&&(e.stop(),r=o.wait,t({title:o.title,caption:o.caption||`待填写`,lookAt:`lookAt`in o?o.lookAt:void 0})),null))},stop(){return i=!0,t(null),e.finishTour()}}}function Gs(e,t){let{player:n}=e.motion,[r,,i]=W.direction,a=zt(W.seat.x,W.seat.z);Object.assign(n,W.seat,{elevation:a+W.seatedElevation,height:0,airborne:!1,sitting:!0,facing:Math.atan2(r,i)});let o={x:n.x+r*W.aimDistance,y:W.aimHeight+a,z:n.z+i*W.aimDistance};e.orbit.aim(o,{yaw:Math.atan2(-r,-i)+W.cameraSideAngle,pitch:t?W.reducedPitch:W.pitch,distance:W.distance})}function Ks(e,t,n){let[r,i,a]=t.anchor??[t.hotspot.x,1.2,t.hotspot.z];n.aim({x:r,y:i,z:a},{yaw:Math.atan2(e.x-r,e.z-a),pitch:U.startPitch})}function qs({motion:e,orbit:t}){e.climb(),t.setLookout(!0),t.center(U.arrivalFacing)}function Js(e){let{motion:t,orbit:n,sailing:r}=e,i=null,a=0,o=!1,s=null,c=null,l=W.position,u=Ws(r,r=>{if(s=r,e.onCue(r),r?.lookAt){let[e,i,a]=r.lookAt;n.aim({x:e,y:i,z:a},{yaw:Math.atan2(t.player.x-e,t.player.z-a),pitch:.22})}}),d=t=>{i=t,a=0,o=!1,e.onMode(t)},f=r=>{t.teleport(u.stop()),n.setSailing(!1),n.center(t.player.facing),d(null),e.onNotice(r?_t.failLabel:_t.finishLabel)};function p(a,o){if(a===`lookout`&&!i)qs(e),d(a);else if(a===`leave-lookout`&&i===`lookout`)n.setLookout(!1),t.teleport(U.position),n.center(t.player.facing),d(null),c=null;else if(a===`sunset`&&!i)l={x:t.player.x,z:t.player.z},Gs(e,o),d(a);else if(a===`leave-sunset`&&i===`sunset`)t.teleport(l),n.center(t.player.facing),d(null);else if(a===`drive`&&!i)r.startTour(),n.setSailing(!0),n.center(t.player.facing,!0),d(a);else if((a===`dock`||a===`return-drive`)&&i===`drive`){let i=a===`dock`?r.nearbyDock():void 0;if(a===`dock`&&!i)return!1;t.teleport(r.finishTour(i??void 0)),n.setSailing(!1),n.center(t.player.facing),d(null),e.onNotice(_t.finishLabel)}else if(a===`tour`&&!i)u.start(),n.setSailing(!0),d(a);else if((a===`return-tour`||a===`abort-tour`)&&i===`tour`)f(a===`abort-tour`);else return!1;return!0}function m(r){if(i===`sunset`&&(a=Math.min(W.duration,a+r)),i!==`tour`||o)return;let c=u.update(r);s||n.center(t.player.facing,!0),c&&(o=!0,e.onRequest(c===`blocked`?`abort-tour`:`return-tour`))}return{act:p,step:m,get mode(){return i},get dusk(){return i===`sunset`?a/W.duration:0},focusAt(e){return i===`lookout`?(!e||e.hotspot.id===c?(c=null,n.center(t.player.facing)):(c=e.hotspot.id,Ks(U.center,e,n)),c):null}}}var Ys={limit:5,simplifiedLimit:2,degradedLimit:1,speed:1.04,followSpeed:1.32,footprintRadius:.23,followDistance:4.2,followTime:4.7,followStopDistance:1.18,followCooldown:8,fullUpdateDistance:19,distantUpdateInterval:.25,interactRadius:1.28,nameDistance:2.9,reactionSeconds:1,petCooldown:4.3,petLabel:`摸摸`,palette:{shadow:`#42352d`,face:`#322a2a`,heart:`#da805f`,plate:`#332c29`},residents:[{id:`animal-cat-1`,species:`cat`,name:`猫 1`,x:-22,z:-1.2,radius:2,rest:{x:-22.1,z:-.42},fur:`#cd9564`,accent:`#f0d3ac`,size:.71},{id:`animal-dog-1`,species:`dog`,name:`狗 1`,x:-14.6,z:12.46,radius:2.6,rest:{x:-15.6,z:12.25},fur:`#bd936b`,accent:`#745e4f`,size:.88},{id:`animal-cat-2`,species:`cat`,name:`猫 2`,x:7.3,z:1.38,radius:2.1,rest:{x:8.9,z:-1.75},fur:`#93a2a3`,accent:`#d7d2c0`,size:.72}]},Xs=[[-.19,-.32],[.19,.29],[.19,-.32],[-.19,.29]];function Zs(e){let{canvas:t,context:n}=Kt(64,19);n.fillStyle=Ys.palette.plate,n.fillRect(0,0,t.width,t.height),n.fillStyle=`#f7e2bb`,n.font=`12px "Microsoft YaHei",sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,t.width/2,t.height/2);let r=new Je(new Ue({map:Vt(t),depthWrite:!1}));return r.scale.set(.54,.17,1),r.position.y=.93,r}function Qs(){let{canvas:e,context:t}=Kt(9,9);t.fillStyle=Ys.palette.heart,t.fillRect(1,1,3,4),t.fillRect(5,1,3,4),t.fillRect(2,4,5,2),t.fillRect(3,6,3,1),t.fillRect(4,7,1,1);let n=new Je(new Ue({map:Vt(e),transparent:!0,depthWrite:!1}));return n.scale.setScalar(.22),n}function $s(e,t){return Xs.map(([n,r])=>e.box([n,.19,r],[.14,.36,.15],[t.accent]))}function ec(e,t){let n=new d,r=new d,{box:i}=e,a=t.species===`dog`,o=$s(e,t),s=[-.115,.115].map(e=>i([e,.66,.61],[.037,.042,.017],[Ys.palette.face])),c=i([0,.55,-.57],[.095,.1,.43],[t.accent]);r.add(i([0,.4,-.06],[.45,.39,.81],[t.fur]),i([0,.61,.39],[.44,.39,.42],[t.fur]),c,...o,...s),a&&r.add(i([0,.55,.615],[.24,.17,.21],[t.accent]));for(let e of[-1,1])r.add(i([e*.15,a?.75:.83,.36],[.115,a?.19:.16,.16],[t.accent]));let l=new F(new ze(.32,8),new P({color:Ys.palette.shadow,transparent:!0,opacity:.23,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.013;let u=Qs(),f=Zs(t.name);return u.visible=f.visible=!1,n.scale.setScalar(t.size),n.add(r,l,u,f),{root:n,body:r,legs:o,eyes:s,tail:c,heart:u,nameplate:f,updateBoxes:Ya(r)}}var tc=.12;function nc(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}function rc(e,t){let n=ec(e,t);return n.root.position.set(t.x,q+zt(t.x,t.z),t.z),{resident:t,model:n,position:{x:t.x,z:t.z},random:Ht(Math.abs(Math.floor(t.x*7523))),target:null,facing:0,state:`idle`,time:0,phase:0,idle:0,follow:0,cooldown:0,pet:0,followCooldown:0,speed:0,distant:0}}function ic(e,t,n){let{resident:r,random:i,position:a}=e;if(e.pet>0)return null;if(r.species===`dog`&&!t.sailing&&!t.lookout&&!e.followCooldown&&nc(a,t)<Ys.followDistance)return e.follow||=Ys.followTime,nc(a,t)>Ys.followStopDistance?t:null;if(n&&r.species===`cat`)return nc(a,r.rest)>tc?r.rest:null;if(e.target&&nc(a,e.target)>tc)return e.target;if(e.idle>0)return null;if(e.state===`walk`)return e.idle=.9+i()*2,null;if(nc(a,r)>r.radius)return r;let o=i()*Math.PI*2,s=i()*r.radius;return e.target={x:r.x+Math.cos(o)*s,z:r.z+Math.sin(o)*s},e.target}function ac(e,t,n){let{position:r,resident:i}=e,{step:a,obstacles:o}=n,s=Math.atan2(t.x-r.x,t.z-r.z),c=e.follow>0?Ys.followSpeed:Ys.speed,l=Math.min(nc(r,t),c*a),u=Math.sin(s)*l,d=Math.cos(s)*l,f={obstacles:o,height:0,radius:Ys.footprintRadius*i.size},p={...r};kt(r.x+u,r.z,f)&&(r.x+=u),kt(r.x,r.z+d,f)&&(r.z+=d),e.speed=nc(p,r)/a,e.speed<.02?(e.idle=.65,e.target=null):e.facing=xo(e.facing,Math.atan2(r.x-p.x,r.z-p.z),bo(a,.24))}function oc(e,t,n){let{step:r,night:i,obstacles:a}=n;if(!r)return;e.speed=0,e.pet=Math.max(0,e.pet-r),e.idle=Math.max(0,e.idle-r),e.cooldown=Math.max(0,e.cooldown-r),e.followCooldown=Math.max(0,e.followCooldown-r),e.follow>0&&(e.follow=Math.max(0,e.follow-r),e.follow||(e.followCooldown=Ys.followCooldown,e.target=null));let o=ic(e,t,i);o&&ac(e,o,{step:r,obstacles:a}),e.state=e.speed>.02?`walk`:e.pet>0?`sit`:i&&e.resident.species===`cat`&&nc(e.position,e.resident.rest)<.4?`sleep`:e.idle>1?`sit`:`idle`}function sc(e,t,n){let{position:r,model:i,resident:a}=e;i.root.position.set(r.x,q+zt(r.x,r.z),r.z),i.root.rotation.y=e.facing,e.phase+=n.step*e.speed*11;let o=n.reduced?0:Math.sin(e.phase)*Math.min(.48,e.speed*.43);i.body.scale.y=e.state===`sleep`?.58:e.state===`sit`?.79:1,i.legs.forEach((e,t)=>{e.rotation.x=t%2?o:-o}),i.tail.rotation.y=e.pet&&a.species===`dog`&&!n.reduced?Math.sin(e.pet*31)*.88:o,i.eyes.forEach(t=>{t.scale.y=e.pet||e.state===`sleep`?.012:.042}),i.nameplate.visible=!t.sailing&&!t.lookout&&nc(r,t)<=Ys.nameDistance,i.heart.visible=e.pet>0,i.heart.position.y=1.18+(n.reduced?0:(1-e.pet/Ys.reactionSeconds)*.35),i.updateBoxes()}function cc(e){let{scene:t,kit:n,obstacles:r,simplified:i}=e,a=Ys.residents.slice(0,Math.min(Ys.limit,i?Ys.simplifiedLimit:Ys.limit)).map(e=>rc(n,e));return a.forEach(e=>t.add(e.model.root)),{targets:a.map(({resident:e,model:t})=>({id:e.id,title:e.name,object:t.root,height:.5,detailAnchor:t.body})),update(e,t,n){a.forEach((i,a)=>{let o=n.scenery||a<Ys.degradedLimit;if(i.model.root.visible=o,!o)return;let s=nc(i.position,e)<=Ys.fullUpdateDistance;i.distant+=t,!s&&i.distant<Ys.distantUpdateInterval||(oc(i,e,{step:i.distant,night:n.night,obstacles:r}),sc(i,e,{step:i.distant,reduced:n.reduced||!s}),i.distant=0)})},nearby(e){return e.lookout||e.sailing||e.sitting?null:a.find(t=>t.model.root.visible&&!t.cooldown&&nc(t.position,e)<Ys.interactRadius)??null},pet(e){e.pet=Ys.reactionSeconds,e.cooldown=Ys.petCooldown,e.speed=0}}}var lc=([e,t,n,r])=>`(p.x >= ${e.toFixed(3)} && p.x <= ${t.toFixed(3)} && p.y >= ${n.toFixed(3)} && p.y <= ${r.toFixed(3)})`,uc=`
  bool navigableIce(vec2 p, float strength) {
    if (strength <= 0.0 || !${lc(Ao.iceBounds)}
      || ${Ao.safeChannels.map(lc).join(` || `)}) return false;
    float edge = min(min(abs(p.y + 2.55), abs(p.y - 11.0)), min(abs(p.x + 12.0),abs(p.y + 18.0)));
    float noise = 0.14 * sin(p.x * 0.83 + p.y * 0.51) * sin(p.y * 1.25 - p.x * 0.34);
    return edge * 0.16 + noise < strength;
  }
`,dc=`
varying vec3 world;
void main() {
  world = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}`,fc=`
      varying vec3 world;
      uniform vec3 sun, blue, mist, rose, gold, white;
      uniform vec3 moon, moonColor, nightZenith, nightHorizon;
      uniform vec3 sunsetZenith, sunsetHorizon;
      uniform vec3 weatherSky;
      uniform float weatherShade;
      uniform float night, dusk, starDensity;
      void main() {
        vec3 direction = normalize(world - cameraPosition);
        float height = floor(max(direction.y, 0.0) * 27.0) / 27.0;
        float facing = pow(max(dot(normalize(direction.xz), normalize(sun.xz)), 0.0), 3.0);
        vec3 tone = mix(mist, mix(rose, gold, facing), smoothstep(0.0, 0.12, height));
        tone = mix(tone, blue, smoothstep(0.035, 0.55, height));
        float angle = length(direction - sun);
        float halo = floor((1.0 - smoothstep(0.035, 0.23, angle)) * 7.0) / 7.0;
        tone = mix(tone, gold, halo * 0.72);
        if (angle < 0.037) tone = white;
        vec3 darkSky = mix(nightHorizon, nightZenith, smoothstep(0.0, 0.53, height));
        vec2 starCoord = vec2(atan(direction.z, direction.x), direction.y) * vec2(98.0, 125.0);
        vec2 starCell = floor(starCoord);
        float seed = fract(sin(dot(starCell, vec2(12.9898, 78.233))) * 43758.5453);
        float star = step(1.0 - starDensity, seed) * step(0.19, direction.y)
          * (1.0 - step(0.22, max(abs(fract(starCoord.x) - 0.5), abs(fract(starCoord.y) - 0.5))));
        darkSky = mix(darkSky, moonColor, star * 0.84);
        float moonAngle = length(direction - moon);
        float moonHalo = floor((1.0 - smoothstep(0.033, 0.14, moonAngle)) * 5.0) / 5.0;
        float moonTexture = 0.78 + 0.19 * sin(floor(direction.x * 450.0)) * cos(floor(direction.y * 390.0));
        darkSky = mix(darkSky, moonColor, moonAngle < 0.031 ? moonTexture : moonHalo * 0.21);
        vec3 sunsetSky = mix(sunsetHorizon, sunsetZenith, smoothstep(0.0, 0.5, height));
        sunsetSky = mix(sunsetSky, white, direction.y >= 0.0 && angle < 0.037 ? 1.0 : halo * 0.45);
        vec3 sky = mix(mix(tone, darkSky, night), sunsetSky, dusk);
        gl_FragColor = vec4(mix(sky, weatherSky * (1.0 - night * 0.62), weatherShade * 0.72), 1.0);
        #include <colorspace_fragment>
      }`,pc=`
      varying vec3 world;
      uniform float time;
      uniform vec3 sun, mist, deep, shallow, gleam, crest;
      uniform vec3 nightWater, nightCrest, nightReflection, nightFog, moon;
      uniform vec2 shoreLights[3];
      uniform vec4 waveCells;
      uniform vec3 sunsetHaze;
      uniform float night, dusk, reflections;
      uniform float wet, ice, rippleFx, foamFx;
      ${uc}
      float hash(vec2 point) {
        return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453);
      }
      vec2 wavePattern(vec2 ripple, float spacing) {
        vec2 cell = floor(ripple / spacing);
        float stagger = hash(vec2(cell.y, 13.0)) * 10.0;
        float broken = hash(vec2(floor((cell.x + stagger) / 4.0), cell.y));
        float crossWave = sin(cell.x * spacing * 1.28 + cell.y * spacing * 0.27) * 0.68;
        float swell = sin(cell.y * spacing * 4.4 + crossWave - time * 1.4);
        float stripe = floor((swell * 0.61 + broken * 1.06) * 3.2) / 7.0;
        return vec2(stripe, broken);
      }
      void main() {
        vec2 relative = world.xz - cameraPosition.xz;
        float distanceToEye = length(relative);
        vec2 acrossSun = vec2(-sun.z, sun.x);
        vec2 ripple = vec2(dot(world.xz, acrossSun), dot(world.xz, sun.xz));
        ripple += time * vec2(0.12, 0.083);
        vec2 wave = mix(wavePattern(ripple, waveCells.x), wavePattern(ripple + vec2(time*0.16,-time*0.024), waveCells.y),
          smoothstep(waveCells.z, waveCells.w, distanceToEye));
        float coverage = 1.0 - max(smoothstep(0.21, 1.3, length(fwidth(ripple))),
          smoothstep(24.0, 88.0, distanceToEye));
        float swell = sin(ripple.y * 0.57 - time * 0.69) * 0.053;
        float drops = sin(22.0 * length(fract(world.xz * 1.61) - 0.5) - time * 9.0);
        float stripe = (wave.x * coverage + swell * (1.0 - coverage)) * (1.0 + wet * 0.44);
        stripe += drops * wet * rippleFx * coverage * 0.035;
        float broken = wave.y;
        vec3 tone = mix(deep, shallow, clamp(0.36 + stripe, 0.0, 1.0));
        vec3 darkWater = mix(nightWater, nightCrest, clamp(0.19 + stripe, 0.0, 1.0));
        vec3 duskWater = mix(tone, sunsetHaze, 0.53);
        if (reflections > 0.5) {
          vec2 viewDirection = normalize(relative);
          float align = max(dot(viewDirection, normalize(sun.xz)), 0.0);
          float reflection = pow(align, 215.0) * clamp(distanceToEye / 8.0, 0.0, 1.0);
          tone = mix(tone, gleam, pow(align, 13.0) * smoothstep(6.0, 95.0, distanceToEye) * 0.6);
          tone = mix(tone, stripe > 0.5 ? crest : gleam, reflection * (0.22 + max(stripe, 0.0)));
          duskWater = mix(duskWater, gleam, reflection * (0.43 + max(stripe, 0.0)));
          if (night > 0.0) {
            float moonAlign = pow(max(dot(viewDirection, normalize(moon.xz)), 0.0), 110.0);
            float shore = 0.0;
            for (int light = 0; light < 3; light++) {
              shore = max(shore, (1.0 - smoothstep(0.4, 4.5, length(world.xz - shoreLights[light]))) * step(0.68, broken));
            }
            darkWater = mix(darkWater, nightReflection, moonAlign * max(stripe, 0.0));
            darkWater = mix(darkWater, gleam, shore * 0.64);
          }
        }
        tone = mix(tone, mist, smoothstep(34.0, 200.0, distanceToEye));
        darkWater = mix(darkWater, nightFog, smoothstep(34.0, 200.0, distanceToEye));
        duskWater = mix(duskWater, sunsetHaze, smoothstep(34.0, 200.0, distanceToEye));
        vec3 water = mix(mix(tone,darkWater,night),duskWater,dusk);
        float nearBank = abs(world.x + 12.0) + max(0.0,abs(world.z) - 20.0);
        float nearCape = abs(world.z + 12.0) + max(0.0,abs(world.x + 4.5) - 12.5);
        float nearQuay = abs(world.z - 11.0) + max(0.0,abs(world.x + 3.5) - 14.5);
        float foam = (1.0-smoothstep(0.1,0.45,min(nearBank,min(nearCape,nearQuay)))) * max(0.0,swell*12.0);
        water = mix(water,crest,foam*coverage*foamFx*0.24*(1.0-night*0.6));
        if (navigableIce(world.xz, ice)) {
          vec2 cells = world.xz * vec2(2.2,3.0);
          vec2 fissures = abs(fract(cells + floor(cells.yx) * 0.38) - 0.5);
          float cracks = step(0.478,max(fissures.x,fissures.y))*coverage*rippleFx;
          bool sparse = !navigableIce(world.xz + vec2(0.17,-0.21), ice);
          vec3 frozen = mix(vec3(0.48,0.62,0.67), vec3(0.69,0.77,0.76), hash(floor(cells))*0.3 + (sparse?0.3:0.65));
          water = mix(water,mix(frozen,vec3(0.36,0.54,0.58),cracks*0.72)*(1.0-night*0.55),sparse?0.78:0.96);
        }
        gl_FragColor = vec4(water, 1.0);
        #include <colorspace_fragment>
      }`,mc=new L(.93,.107,-.36).normalize(),hc=`#efd6b6`;function gc(){let e=new Be({side:1,depthWrite:!1,uniforms:{sun:{value:mc.clone()},blue:{value:new I(`#7fadc8`)},mist:{value:new I(hc)},rose:{value:new I(`#f5c9b9`)},gold:{value:new I(`#ffedd0`)},white:{value:new I(`#fff6ce`)},night:{value:0},starDensity:{value:X.starDensity},dusk:{value:0},sunsetZenith:{value:new I(W.sunsetZenith)},weatherSky:{value:new I(Ao.rainSky)},weatherShade:{value:0},sunsetHorizon:{value:new I(W.sunsetHorizon)},nightZenith:{value:new I(X.nightZenith)},nightHorizon:{value:new I(X.nightHorizon)},moonColor:{value:new I(X.moonColor)},moon:{value:new L(...X.moonDirection).normalize()}},vertexShader:dc,fragmentShader:fc}),t=new F(new De(235,32,16),e);return t.renderOrder=-100,t}function _c(){let e=new Be({uniforms:{time:{value:0},sun:{value:mc},mist:{value:new I(hc)},deep:{value:new I(`#4c8791`)},shallow:{value:new I(`#82afb0`)},gleam:{value:new I(`#eac795`)},crest:{value:new I(`#f9dfa8`)},night:{value:0},dusk:{value:0},reflections:{value:1},wet:{value:0},ice:{value:0},rippleFx:{value:1},foamFx:{value:1},sunsetHaze:{value:new I(W.sunsetHaze)},nightWater:{value:new I(X.nightWater)},nightCrest:{value:new I(X.nightCrest)},nightReflection:{value:new I(X.nightReflection)},nightFog:{value:new I(X.nightFog)},moon:{value:new L(...X.moonDirection).normalize()},shoreLights:{value:X.nightWaterLights.map(e=>new ne(...e))},waveCells:{value:new r(X.waveCells.near,X.waveCells.far,X.waveCells.blendStart,X.waveCells.blendEnd)}},vertexShader:dc,fragmentShader:pc}),t=new F(new Se(440,440),e);return t.rotation.x=-Math.PI/2,t}function vc(){let e=new d,{canvas:t,context:n}=Kt(100,22),r=Ht(72);for(let e=0;e<27;e++){let t=8+(r()*76|0),i=3+(r()*12|0),a=6+(r()*16|0);n.fillStyle=[`#fbe0c94d`,`#ffe6cd70`,`#fff0d896`][e%3],n.fillRect(t,i,a,1+e%3)}let i=new Ue({map:Vt(t),depthWrite:!1,fog:!1});for(let t=0;t<22;t++){let n=t*2.39996,a=new Je(i);a.position.set(Math.cos(n)*128,8+r()*34,Math.sin(n)*128),a.scale.set(25+r()*44,7+r()*5,1),e.add(a)}return e}function yc(e){let t=X,n=new Ie(hc,.009);e.fog=n;let r=new C(t.ambientColor,`#9b9aa0`,t.ambient),i=new at(t.sunColor,t.sun);i.position.set(40,14,-12);let a=_c(),o=vc(),s=gc();e.add(s,a,o,i,r);let c={dawn:new I(hc),nightFog:new I(t.nightFog),ambient:new I(t.ambientColor),nightAmbient:new I(t.nightAmbientColor),sun:new I(t.sunColor),nightSun:new I(t.nightSunColor),duskFog:new I(W.sunsetHaze),duskSun:new I(W.sunsetLight),duskAmbient:new I(W.sunsetAmbient)},l=new I(Ao.rainSky),u=new I(Ao.snowSky);return(e,d,f)=>{let{dusk:p,reflections:m}=f;s.material.uniforms.night.value=d,s.material.uniforms.dusk.value=p;let h=x.lerp(W.maxSunY,W.minSunY,p);s.material.uniforms.sun.value.set(W.direction[0],h,W.direction[2]).normalize(),a.material.uniforms.time.value=e,a.material.uniforms.night.value=d,a.material.uniforms.dusk.value=p,a.material.uniforms.reflections.value=Number(m),n.color.copy(c.dawn).lerp(c.nightFog,d).lerp(c.duskFog,p),n.density=x.lerp(.009,W.duskFog,p),r.color.copy(c.ambient).lerp(c.nightAmbient,d).lerp(c.duskAmbient,p),i.color.copy(c.sun).lerp(c.nightSun,d).lerp(c.duskSun,p),i.position.y=x.lerp(14,W.sunsetLightHeight,p),r.intensity=x.lerp(x.lerp(t.ambient,t.nightAmbient,d),W.sunsetAmbientPower,p),i.intensity=x.lerp(x.lerp(t.sun,t.nightSun,d),W.sunsetMainPower,p),o.rotation.y=e*.0013;let g=f.weather,_=g?.rain??0,v=g?.snow??0,y=Math.max(_,v);s.material.uniforms.weatherShade.value=y,s.material.uniforms.weatherSky.value.copy(l).lerp(u,v/(_+v||1)),a.material.uniforms.wet.value=_,a.material.uniforms.ice.value=g?.ice??0,a.material.uniforms.rippleFx.value=+!g?.low,a.material.uniforms.foamFx.value=+!g?.low,n.color.lerp(d>.5?c.nightFog:s.material.uniforms.weatherSky.value,y*.67),n.density=x.lerp(n.density,v>_?Ao.snowFog:Ao.wetFog,y),n.density=Math.max(n.density,f.edgeFog),i.intensity*=x.lerp(1,v>_?Ao.snowLight:Ao.rainLight,y);for(let e of o.children)e.material.opacity=(1-d*.91)*(1-y*.55)}}var bc=new Map([[`KeyW`,`up`],[`ArrowUp`,`up`],[`KeyS`,`down`],[`ArrowDown`,`down`],[`KeyA`,`left`],[`ArrowLeft`,`left`],[`KeyD`,`right`],[`ArrowRight`,`right`]]),xc=4,Sc=new Set([`ShiftLeft`,`ShiftRight`]),Cc=new Set([`ControlLeft`,`ControlRight`,`KeyC`]);function wc(e,t){let n=new AbortController,{signal:r}=n,i;return e.addEventListener(`pointerdown`,n=>{if(!(i||n.button!==0)){if(n.pointerType===`mouse`&&t.lockPointer()&&!document.pointerLockElement&&e.requestPointerLock){let t=e.requestPointerLock();t&&t.catch(()=>e.focus({preventScroll:!0}))}else i={id:n.pointerId,x:n.clientX,y:n.clientY,travel:0},e.focus({preventScroll:!0}),e.setPointerCapture(n.pointerId)}},{signal:r}),e.addEventListener(`pointermove`,n=>{if(document.pointerLockElement===e){t.look(n.movementX,n.movementY);return}if(i?.id!==n.pointerId)return;let r=n.clientX-i.x,a=n.clientY-i.y;i={id:i.id,x:n.clientX,y:n.clientY,travel:i.travel+Math.hypot(r,a)},i.travel>xc&&t.look(r,a)},{signal:r}),e.addEventListener(`pointerup`,n=>{if(i?.id===n.pointerId){if(i.travel<=xc){let r=e.getBoundingClientRect();t.pick(new ne((n.clientX-r.left)/r.width*2-1,1-(n.clientY-r.top)/r.height*2))}i=void 0}},{signal:r}),e.addEventListener(`lostpointercapture`,()=>{i=void 0},{signal:r}),e.addEventListener(`wheel`,e=>{e.preventDefault(),t.zoom(Math.sign(e.deltaY))},{signal:r,passive:!1}),()=>n.abort()}function Tc(e){let t=new AbortController,{signal:n}=t;return window.addEventListener(`keydown`,t=>{if(t.defaultPrevented||t.metaKey||t.altKey)return;let n=t.target instanceof Element?t.target:null;if(n?.closest(`input, textarea, select, [contenteditable="true"]`))return;if((!t.ctrlKey||Cc.has(t.code))&&(t.code!==`Space`||!n?.closest(`button, a, video`))&&e.flight(t.code,t.repeat)){t.preventDefault();return}let r=bc.get(t.code);(!t.ctrlKey||e.flying()&&r)&&(t.code.startsWith(`Arrow`)&&n?.closest(`.harbor-detail`)||(Sc.has(t.code)&&e.sprint(t.code),r&&(t.preventDefault(),e.move(t.code,r)),t.code===`KeyE`&&!t.repeat&&e.interact(),t.code===`Space`&&!t.repeat&&!n?.closest(`button, a, video`)&&(t.preventDefault(),e.jump())))},{signal:n}),window.addEventListener(`keyup`,t=>e.release(t.code),{signal:n}),()=>t.abort()}function Ec(e,t,n){let r=new Set(e.values()),i=Number(r.has(`right`))-Number(r.has(`left`))+t.x,a=Number(r.has(`up`))-Number(r.has(`down`))+t.z,o=n/Math.max(1,Math.hypot(i,a));return{x:i*o,z:a*o}}function Dc({canvas:e,motion:t,orbit:n,sailing:r,canJump:i,canMove:a,canLook:o,canSteer:s,lockPointer:c,sprintEnabled:l,specialLook:u,onInteract:d,onPick:f,flight:p,canFly:m,flightEnabled:h}){let g=new Map,_=new Set,v={x:0,z:0},y=!1,b=new Set,x=new Set,S=(e,t)=>{a()&&g.set(e,t)},C=e=>{g.delete(e),_.delete(e),b.delete(e)},w=(e,t)=>{v.x=e,v.z=t},T=()=>{g.clear(),_.clear(),b.clear(),x.clear(),y=!1,w(0,0),t.clear(),r.stop(),p.clear()},E=()=>{i()&&!p.active&&t.jump()};function D(){m()&&h()&&(p.active||(t.clear(),e.focus({preventScroll:!0})),p.toggle())}function ee(e,t){return e===`KeyF`?(t||D(),!0):!p.active||!Cc.has(e)&&e!==`Space`?!1:(m()&&b.add(e),!0)}function te(e,t){if(!m())return;h()||p.disable();let r=x.has(1)||b.has(`Space`),i=x.has(-1)||[...b].some(e=>Cc.has(e));p.update(e,{...Ec(g,v,1),vertical:Number(r)-Number(i),sprint:t},n.yaw)}let ne=Tc({move:S,release:C,interact:d,jump:E,sprint:e=>_.add(e),flight:ee,flying:()=>p.active}),O=wc(e,{look(e,t){u.active()?u.look(e,t):o()&&n.look(e,t)},zoom(e){u.active()?u.zoom(-e):o()&&n.zoom(e)},pick:f,lockPointer:c});return n.update(t.player,0,!0),{moveAnalog:w,interact:d,clear:T,jump:E,toggleFlight:D,setFlightVertical(e,t){t?x.add(e):x.delete(e)},setThrottle(e){y=e},update(e){let i=!!(_.size||y)&&l();if(t.player.sailing&&s())r.update({...Ec(g,v,1),sprint:i},e);else if(p.active)te(e,i);else if(a()&&!t.player.sailing){let r=Lt.walkSpeed*(i?Lt.sprintMultiplier:1);t.update(e,Ec(g,v,r),n.yaw)}n.setFlight(p.active),n.update(t.player,e)},respawn(){T(),t.player.sailing?r.respawn():t.respawn(),p.reset(),n.setFlight(!1),n.update(t.player,0,!0)},center(){n.center(t.player.facing,t.player.sailing)},dispose(){document.pointerLockElement===e&&document.exitPointerLock(),ne(),O()}}}function Oc(e,{kit:t,vessel:n}){let r=ho(t,ht.appearance),i={...ht.position,facing:ht.facing,speed:0,height:0,elevation:0,airborne:!1,jumpAge:0,landing:0,sailing:!1,sitting:!1,lookout:!1,swimming:!1},a=la(t.box([..._t.lamp.position],[..._t.lamp.size],[_t.lamp.color]),`street`);return a.userData.movingGlow=!0,n.add(a),e.add(r.avatar),(e,t)=>{let n=e%ht.wavePeriod;i.facing=ht.facing+(t?0:Math.sin(e*.31)*.24),r.wave(!t&&n<ht.waveLength?-Math.sin(n/ht.waveLength*Math.PI)*.82:0),r.update(i,0,t)}}var kc={clusters:[{x:-15.75,z:-24.1,seed:311,total:7,radius:.76},{x:-10,z:-20.45,seed:591,total:6,radius:1.1},{x:-5.4,z:-15.3,seed:809,total:6,radius:1.4},{x:-15.4,z:25.2,seed:427,total:6,radius:1.18}],treeFoot:.18,trunk:`#765743`,lower:`#58766a`,upper:`#728d72`,shadowColor:`#272f3c`,shadowDay:.12,shadowDusk:.25,shadowLength:1,shadowLong:3.65,shadowWidth:.42},Ac=4;function jc(){let e=Math.min(vt.maxNewTrees,Math.floor(vt.maxNewInstances/Ac));return kc.clusters.map(t=>{let n=Ht(t.seed),r=Math.min(t.total,e);e-=r;let i=Array.from({length:r},(e,i)=>{let a=i*Math.PI*2/r,o=t.radius*(.65+n()*.35),s=t.x+Math.cos(a)*o,c=t.z+Math.sin(a)*o;return{x:s,z:c,y:q+zt(s,c),size:.74+n()*.34}});return{...t,trees:i}})}var Mc=jc(),Nc=Mc.flatMap(e=>e.trees.map(({x:e,z:t,size:n})=>{let r=kc.treeFoot*n;return[e-r,e+r,t-r,t+r]})),Pc={radius:.62,base:1.42,top:2.88},Fc=Mc.flatMap(e=>e.trees.flatMap(({x:e,y:t,z:n,size:r})=>{let i=kc.treeFoot*r,a=Pc.radius*r;return[{footprint:[e-i,e+i,n-i,n+i],base:t,height:Pc.base*r},{footprint:[e-a,e+a,n-a,n+a],base:t+Pc.base*r,height:(Pc.top-Pc.base)*r}]}));function Ic(e,t,n){let r=e.box([0,0,0],n.size,[n.color]),i=new A(r.geometry,r.material,t.length),a=new Fe;return t.forEach((e,t)=>{a.position.set(e.x,e.y+n.y*e.size,e.z),a.scale.set(...n.size.map(t=>t*e.size)),a.updateMatrix(),i.setMatrixAt(t,a.matrix)}),i}function Lc(e,t,n,r){e.add(Ic(t,n,{y:.83,size:[.23,1.66,.24],color:kc.trunk})),e.add(Ic(t,n,{y:1.96,size:[1.23,1.07,1.15],color:kc.lower})),r&&e.add(Ic(t,n,{y:2.62,size:[.79,.51,.72],color:kc.upper}))}function Rc(e){let t=Mc.flatMap(e=>e.trees),n=new P({color:kc.shadowColor,transparent:!0,depthWrite:!1}),r=new A(new Se(1,1),n,t.length);r.frustumCulled=!1,e.add(r);let i=new Fe,[a,,o]=W.direction,s=-1;return(e,c)=>{if(r.visible=c,!c||e===s)return;s=e;let l=x.lerp(kc.shadowLength,kc.shadowLong,e);n.opacity=x.lerp(kc.shadowDay,kc.shadowDusk,e),i.rotation.set(-Math.PI/2,0,Math.atan2(-o,a)),t.forEach(({x:e,y:t,z:n,size:s},c)=>{let u=l*s;i.position.set(e-a*u/2,t+.018,n-o*u/2),i.scale.set(u,kc.shadowWidth*s,1),i.updateMatrix(),r.setMatrixAt(c,i.matrix)}),r.instanceMatrix.needsUpdate=!0}}function zc(e,t){let n=Rc(e),r=Mc.map(n=>{let r=new d,i=new d;return Lc(r,t,n.trees,!0),Lc(i,t,n.trees,!1),e.add(r,i),{x:n.x,z:n.z,near:r,far:i}});return(e,t,i)=>{n(t,i.shadows);for(let t of r){let n=Math.hypot(e.x-t.x,e.z-t.z);t.near.visible=n<vt.forestLodDistance,t.far.visible=i.trees&&!t.near.visible&&n<vt.forestLimitDistance}}}var Bc=[{id:`moon-cabin`,x:-.35,z:1.65,yaw:-1.22},{id:`first-tide`,x:14.85,z:2.58,yaw:Math.PI},{id:`net-mender`,x:-4.85,z:14.32,yaw:Math.PI},{id:`dune-flowers`,x:-17.5,z:3.8,yaw:Math.PI/2},{id:`keeper-map`,x:-1.9,z:-21.2,yaw:0}],Vc=3.35,Hc=1.74;function Uc(e,t,n){let r=new d,{canvas:i,context:a}=Kt(120,84),o=Vt(i);a.fillStyle=`#a7aba0`,a.fillRect(0,0,i.width,i.height);let s=new Image;s.onload=()=>{a.imageSmoothingEnabled=!1;let e=Math.min(i.width/s.width,i.height/s.height),t=Math.round(s.width*e),n=Math.round(s.height*e);a.drawImage(s,(i.width-t)/2,(i.height-n)/2,t,n),o.needsUpdate=!0},s.src=t.image,n.push(()=>{s.onload=null});for(let t of[-.68,.68])r.add(e.box([t,.56,0],[.14,1.12,.17],[`#795947`,`wood`]));r.add(e.box([0,1.44,0],[Hc,1.25,.17],[`#92674e`,`wood`])),r.add(e.box([0,1.43,.091],[1.63,1.11,.024],[`#dec6a0`])),r.add(e.box([0,2.1,0],[1.88,.14,.29],[`#617473`,`wood`]));let c=new F(new Se(1.49,1.043),new P({map:o}));return c.position.set(0,1.43,.107),r.add(c),r}function Wc(e,t,n){let r=[],i=[];return{exhibits:Bc.flatMap(a=>{let o=n.find(e=>e.id===a.id);if(!o)return[];let{x:s,z:c,yaw:l}=a,u=Uc(t,o,r);u.position.set(s,q,c),u.rotation.y=l,e.add(u);let d=Math.abs(Math.cos(l))*Hc/2+.16,f=Math.abs(Math.sin(l))*Hc/2+.16;return i.push([s-d,s+d,c-f,c+f]),[{...a,artwork:o,frame:u}]}),obstacles:i,dispose:()=>r.forEach(e=>e())}}var Gc=.018,Kc=1.82,qc=32,Jc={inner:.48,outer:.57,color:X.glow.ring.color,opacity:.98},Yc={inner:.39,outer:.66,color:`#ffb752`,opacity:.34};function Xc(e){let t=new F(new $e(e.inner,e.outer,qc),new P({color:e.color,transparent:!0,opacity:e.opacity,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t}function Zc(e){let t=new d,n=new L,r=Xc(Yc),i=Xc(Jc);return i.position.y=Gc,t.add(r,i),t.visible=!1,e.add(t),{setHotspot(e){t.visible=!!e,e&&t.position.set(e.x,(e.kind===`sea`?0:q+(e.kind===`telescope`?U.platformOffset:zt(e.x,e.z)))+Gc,e.z)},setNight(e,t){let n=X.glow.ring;i.material.opacity=x.lerp(n.day,n.night,e),r.visible=t||e===0},project(e){return!t.visible||(n.copy(t.position),n.y+=Kc,n.project(e),Math.abs(n.x)>1||Math.abs(n.y)>1||Math.abs(n.z)>1)?null:{x:(n.x+1)*50,y:(1-n.y)*50}}}}function Qc({id:e,x:t,z:n,artwork:r}){return{kind:`art`,id:e,x:t,z:n,label:r.title,radius:Vc}}function $c(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}function el(e,t){return $c(e,t)<t.radius}function tl(e,t){if(e.sailing)return Rt.find(t=>el(e,t))??null;let n=Object.values(xt).find(t=>el(e,t));if(n)return n;let r=Vc,i=null;for(let n of t){let t=$c(e,n);t<r&&(r=t,i=Qc(n))}if(i)return i;let a=St.find(t=>el(e,t));return a?{kind:`landmark`,...a}:null}function nl(e){return[...Object.values(xt),...St.map(e=>({...e,kind:`landmark`})),...e.map(Qc),...Rt].map(t=>{let n=pt.places[t.id];return n?{hotspot:t,...n,requiresBoat:!1}:t.kind===`sea`?{hotspot:t,title:t.title,iconType:`landmark`,blurb:t.note,anchor:[t.x,1.18,t.z],requiresBoat:!0}:t.kind===`landmark`?{hotspot:t,title:t.label,iconType:`landmark`,blurb:t.note,requiresBoat:!1}:{hotspot:t,title:t.label,iconType:`artwork`,blurb:e.find(e=>e.id===t.id)?.artwork.description??``,requiresBoat:!1}})}function rl(e){let t=null,n=!1;return{open(n){t||(t=n,e.open(n))},dismiss(){t=null,n=!1},hasOpen(){return t!==null},update(r){!t||n||el(r,t)||(n=!0,e.leave(t.id))}}}var il=Math.PI*2,al=.13;function ol(e,t){return e.map(({footprint:[e,n,r,i],height:a,base:o=q})=>new V(new L(e-t,o,r-t),new L(n+t,o+a,i+t)))}function sl(e,t,n){let r=new L,i=n;for(let n of t){if(n.containsPoint(e.origin))continue;let t=e.intersectBox(n,r);t&&(i=Math.min(i,Math.max(G.minObstructedDistance,t.distanceTo(e.origin)-G.obstacleClearance)))}return i}function cl(e,t){let n=new L(Ct.x,q+G.focusHeight,Ct.z),r=n.clone(),i=new L,a=new L,o=new pe(n,a),s=ol(t,al),c=G.distance;return(t,l,u)=>{let{step:d,immediate:f}=u,p=f?1:bo(d,G.followTime),m=t.lookout?U.center:t,h=t.sitting?-.24:0;i.set(m.x,q+G.focusHeight+t.elevation+t.height+h,m.z),n.lerp(i,p);let g=Math.cos(l.pitch);a.set(Math.sin(l.yaw)*g,Math.sin(l.pitch),Math.cos(l.yaw)*g);let _=sl(o,s,l.distance),v=f?1:bo(d,G.zoomTime);c=Math.min(_,x.lerp(c,_,v)),e.position.copy(n).addScaledVector(a,c);let y=t.lookout?q+U.platformOffset:It(e.position.x,e.position.z,wt);e.position.y=Math.max(e.position.y,y+G.floorClearance),r.lerp(l.target?i.set(l.target.x,l.target.y,l.target.z):n,f?1:bo(d,G.aimTime)),e.lookAt(r)}}function ll(e,t){let n=cl(e,t),r={yaw:Ct.yaw,pitch:G.pitch,distance:G.distance},i={...r,target:null},a=!1,o=!1;return{update(e,t,a=!1){let s=a?1:bo(t,G.orbitTime);i.yaw=xo(i.yaw,r.yaw,s);let c=o?Math.max(G.minPitch,r.pitch-K.camera.pitch):r.pitch;i.pitch=x.lerp(i.pitch,c,s);let l=r.distance+(o?K.camera.distance:0)+(e.swimming?G.swimDistance:0);i.distance=x.lerp(i.distance,l,a?1:bo(t,G.zoomTime)),n(e,i,{step:t,immediate:a})},get yaw(){return i.yaw},get angles(){return{yaw:i.yaw,pitch:i.pitch}},look(e,t){i.target=null,r.yaw=(r.yaw-e*G.lookSensitivity)%il,r.pitch=x.clamp(r.pitch+t*G.verticalLookSensitivity,a?U.minPitch:G.minPitch,a?U.maxPitch:G.maxPitch)},zoom(e){r.distance=x.clamp(r.distance+e*G.distancePerWheelStep,a?U.minDistance:G.minDistance,a?U.maxDistance:G.maxDistance)},center(e,t=!1){i.target=null,Object.assign(r,{yaw:(e+Math.PI)%il,pitch:a?U.startPitch:G.pitch,distance:a?U.distance:t?G.vesselDistance:G.distance})},setSailing(e){r.distance=e?G.vesselDistance:G.distance},setFlight(e){o=e},setLookout(e){a=e,i.target=null,Object.assign(r,{pitch:e?U.startPitch:G.pitch,distance:e?U.distance:G.distance})},aim(e,t){i.target=e,t&&Object.assign(r,t)}}}function ul(e,t,n){return n.some(n=>Math.abs(n.x-e)<pt.width&&Math.abs(n.y-t)<pt.height)}function dl(e,t){let n=e.flatMap(e=>e.anchor?[{place:e,anchor:new L(...e.anchor)}]:[]),r=ol(t,0),i=new pe,a=new L,o=new L;function s(e,t){i.origin.copy(e.position),i.direction.copy(t).sub(e.position).normalize();let n=e.position.distanceTo(t)-pt.occlusionMargin;return r.some(e=>!e.containsPoint(i.origin)&&i.intersectBox(e,a)!==null&&a.distanceTo(i.origin)<n)}return(e,t,r)=>{let i=n.map(({place:e,anchor:n})=>({place:e,anchor:n,distance:Math.hypot(t.x-e.hotspot.x,t.z-e.hotspot.z)})).filter(e=>e.distance<pt.maxDistance).sort((e,t)=>e.distance-t.distance),a=[];for(let{place:t,anchor:n,distance:c}of i){if(a.length>=pt.maxVisible)break;if(o.copy(n).project(e),Math.abs(o.z)>1||Math.abs(o.x)>1||Math.abs(o.y)>1)continue;let i=(o.x+1)*r.width/2,l=(1-o.y)*r.height/2+Math.sin(r.elapsed*pt.bobSpeed)*pt.bob;if(l<pt.visibleTop||ul(i,l,a)||s(e,n))continue;let u=x.clamp((pt.maxDistance-c)/(pt.maxDistance-pt.fadeStart),0,1);a.push({id:t.hotspot.id,x:i,y:l,opacity:u,showName:c<=pt.nameDistance})}return a}}var fl=[`#b28b63`,`wood`],pl=[`#88664e`,`wood`],ml=.56,hl=.12,gl=`#8a694c`,_l=`#fff0d4`,vl=[{x:-18,near:23.3,far:vt.terrace[3]},{x:vt.terrace[1],near:24,far:vt.terrace[3]}],yl=[vt.ramp[0],vt.ramp[1]].map(e=>[e-hl/2,e+hl/2,vt.ramp[2],vt.terrace[2]]);function bl(e,t,n){let{canvas:r,context:i}=Kt(144,35);i.fillStyle=gl,i.fillRect(0,0,r.width,r.height),i.fillStyle=_l,i.textAlign=`center`,i.textBaseline=`middle`,i.font=`bold 19px "Microsoft YaHei", sans-serif`,i.fillText(e,r.width/2,r.height/2);let a=new F(new Se(1.38,.34),new P({map:Vt(r),side:2}));return a.position.set(...t),a.rotation.y=n,a}function xl(e,t){let[n,r,i]=vt.ramp,a=vt.terrace[2],o=vt.upperY-q,s=Math.atan2(o,a-i),c=t.box([(n+r)/2,q+o/2-.07,(a+i)/2],[r-n,.14,Math.hypot(o,a-i)+.1],fl);c.rotation.x=-s,e.add(c);for(let o of[n,r])e.add(t.beam([[o,q+.45,i],[o,vt.upperY+.45,a]],hl,pl)),e.add(t.box([o,q+.22,i],[.15,.48,.16],pl)),e.add(t.box([o,vt.upperY+.22,a],[.15,.48,.16],pl));e.add(t.box([-4.05,vt.upperY+.012,23.75],[27.8,.024,1.2],[`#b29b7d`,`brick`]));for(let{x:n,near:r,far:i}of vl){e.add(t.beam([[n,vt.upperY+.49,r],[n,vt.upperY+.49,i]],hl,pl));for(let a of[r,(r+i)/2,i])e.add(t.box([n,vt.upperY+.26,a],[.15,.53,.16],pl))}e.add(bl(vt.title,[9.62,2.35,23.65],Math.PI))}function Sl(e,t){let n=new d;n.add(t.box([0,.37,0],[1.03,.1,.42],fl)),n.add(t.box([0,.68,-.18],[1.03,.25,.08],pl));for(let e of[-1,1])n.add(t.box([e*.42,.25,0],[.1,.5,.37],pl));n.position.set(W.seat.x,q+zt(W.seat.x,W.seat.z),W.seat.z),n.rotation.y=Math.atan2(W.direction[0],W.direction[2]),e.add(n);let{x:r,z:i}=W.sign,a=zt(r,i);e.add(bl(W.title,[r,a+1.56,i],-.7)),e.add(t.box([r,a+1.1,i],[.13,.92,.13],pl))}function Cl(e,t){let n=new d;xl(n,t),Sl(n,t),n.add(bl(Dt.title,[-22.57,2.48,-3],Math.PI/2)),e.add(n)}var wl=[[W.seat.x-ml,W.seat.x+ml,W.seat.z-ml,W.seat.z+ml],[W.sign.x-.1,W.sign.x+.1,W.sign.z-.1,W.sign.z+.1],...vl.map(({x:e,near:t,far:n})=>[e-hl,e+hl,t,n]),...yl],Tl=1e-8;function El(e,t){let n=(e+1)*t/2;return(Math.floor(n+Tl)+.5)*2/t-1}function Dl(){let e=new L;return(t,n,r)=>{let{width:i,height:a}=r,o=t.projectionMatrix.elements;t.updateProjectionMatrix(),t.updateMatrixWorld(),e.copy(n).project(t),o[8]-=El(e.x,i)-e.x,o[9]-=El(e.y,a)-e.y,t.projectionMatrixInverse.copy(t.projectionMatrix).invert()}}var Ol=8,kl=-(q+mt.floatSink);function Al(e){let[t,n,r,i]=J.bounds;return e.x>=t&&e.x<=n&&e.z>=r&&e.z<=i}function jl(e,t,n){if(e.lookout){let e=Math.hypot(t.x-U.center.x,t.z-U.center.z);return e>=U.lanternRadius+Lt.playerRadius&&e<=U.outerRadius-Lt.playerRadius}return e.swimming?Al(t):kt(t.x,t.z,{obstacles:n,height:e.height})}function Ml(e,t,n){let{axis:r,distance:i}=n;if(!i)return!1;let a=e[r],o=n=>jl(e,{x:r===`x`?a+i*n:e.x,z:r===`z`?a+i*n:e.z},t);if(o(1))return e[r]+=i,!1;let s=0,c=1;for(let e=0;e<Ol;e++){let e=(s+c)/2;o(e)?s=e:c=e}return e[r]+=i*s,!0}function Nl(e,t,n){let{velocity:r,target:i,seconds:a,response:o}=n,s=bo(a,o),c=s*o/vo,l=i.x*a+(r.x-i.x)*c,u=i.z*a+(r.z-i.z)*c;r.x+=(i.x-r.x)*s,r.z+=(i.z-r.z)*s;let d=Math.abs(l)>=Math.abs(u)?`x`:`z`,f={x:l,z:u};for(let n of[d,d===`x`?`z`:`x`])Ml(e,t,{axis:n,distance:f[n]})&&(r[n]=0)}function Pl(e,t){let n=0;return{jump(){if(e.airborne||e.sailing||e.lookout||e.sitting||e.swimming)return;let r=Tt(e.x,e.z,{obstacles:t,height:e.height});e.height>r+ft.landingTolerance||(n=ft.lift,e.jumpAge=0,e.airborne=!0)},update(r){let i=Tt(e.x,e.z,{obstacles:t,height:e.height});if(!e.airborne&&e.height<=i)return;e.airborne=!0,e.jumpAge+=r;let a=e.height+(n-ft.gravity*r/2)*r;n-=ft.gravity*r,n<=0&&a<=i+ft.landingTolerance?(e.height=i,e.airborne=!1,e.landing=ft.recovery,n=0):e.height=a},reset(){n=0,Object.assign(e,{height:0,airborne:!1,jumpAge:0,landing:0})}}}function Fl(e,t){let n=Math.sin(t),r=Math.cos(t);return{x:r*e.x-n*e.z,z:-n*e.x-r*e.z}}function Il(e){let t={x:Ct.x,z:Ct.z,facing:Ct.yaw+Math.PI,speed:0,height:0,airborne:!1,jumpAge:0,landing:0,sailing:!1,elevation:0,lookout:!1,sitting:!1,swimming:!1},n={x:0,z:0},r=Pl(t,e),i=e.map(e=>e.footprint);function a(i,a,o){if(i<=0)return;let s=Fl(a,o);t.swimming&&(s.x*=mt.speedFactor,s.z*=mt.speedFactor);let c=s.x||s.z?Lt.accelerationTime:Lt.decelerationTime,{x:l,z:u}=t,d=Math.ceil(i/Lt.maxCollisionStep);t.landing=Math.max(0,t.landing-i);for(let a=0;a<d;a++)!t.lookout&&!t.swimming&&r.update(i/d),Nl(t,e,{velocity:n,target:s,response:c,seconds:i/d});t.lookout||(t.elevation=zt(t.x,t.z)),t.swimming&&(t.height=kl,t.airborne=!1,t.landing=0,kt(t.x,t.z,{obstacles:e,height:0})&&(t.swimming=!1,t.height=0));let f=t.x-l,p=t.z-u;t.speed=Math.hypot(f,p)/i,t.speed>Lt.movementThreshold&&(t.facing=xo(t.facing,Math.atan2(f,p),bo(i,Lt.turnTime)))}function o(e,n=0){r.reset(),Object.assign(t,e,{elevation:zt(e.x,e.z),lookout:!1,sitting:!1,swimming:!1,height:n})}return{player:t,update:a,jump:r.jump,swim(e){return o(e,kl),t.swimming=!0,!0},teleport(t,n){let r=n===void 0?0:Math.max(0,n-q-zt(t.x,t.z));return kt(t.x,t.z,{obstacles:e,height:r})?(o(t,r),!0):!1},respawn(){let e=Et(t,i);e&&o(e)},climb(){let e=(U.outerRadius+U.lanternRadius)/2;Object.assign(t,{...U.center,z:U.center.z+e,elevation:U.platformOffset,lookout:!0}),r.reset()},clear(){n.x=0,n.z=0,t.speed=0}}}var Ll=[`#805b45`,`wood`],Rl=[{x:-.15,z:-1.97,yaw:-.94,width:1.48,height:.87,elevation:2.16,kind:`wayfinding`},{x:xt.portfolio.x,z:-2.06,yaw:-.38,width:1.01,height:.32,elevation:1.1,kind:`boat`},{x:xt.notice.x,z:xt.notice.z,yaw:Math.PI/2,width:1.88,height:1.18,elevation:1.38,kind:`notice`}];function zl(e){let{canvas:t,context:n}=Kt(176,e===`notice`?112:e===`boat`?55:106),r=t.height;if(n.fillStyle=`#735847`,n.fillRect(0,0,176,r),n.fillStyle=`#b28a63`,n.fillRect(3,3,170,r-6),n.textAlign=`center`,n.textBaseline=`middle`,n.font=`bold 23px "Microsoft YaHei", "PingFang SC", sans-serif`,e===`notice`){n.fillStyle=`#e8cf9f`,n.fillRect(10,9,156,94),n.fillStyle=`#674d3d`,n.fillText(`展览公告栏`,88,29),n.fillStyle=`#bda277`;for(let e of[55,65,75,85])n.fillRect(29,e,e===85?73:118,2);n.fillStyle=`#a46047`,n.fillRect(14,12,5,5),n.fillRect(157,12,5,5)}else n.fillStyle=`#f9e6bb`,n.fillText(e===`boat`?`作品船`:`↑  作品船`,88,e===`boat`?29:23),e===`wayfinding`&&(n.fillRect(14,38,148,2),n.fillText(`↶  展览公告栏`,88,55),n.fillRect(14,70,148,2),n.fillText(`↶  ${bt.title}`,88,88));return Vt(t)}function Bl(e,t){let{x:n,z:r,yaw:i,width:a,height:o,elevation:s,kind:c}=t,l=new d,u=c===`notice`?[-a*.39,a*.39]:[0],f=s+o*.32;for(let t of u)l.add(e.box([t,f/2,-.08],[.15,f,.16],[...Ll]));l.add(e.box([0,s,0],[a+.09,o+.1,.13],[...Ll]));let p=new F(new Se(a,o),new P({map:zl(c)}));return p.position.set(0,s,.069),l.add(p),l.position.set(n,q,r),l.rotation.y=i,l}function Vl(e,t){return Rl.map(n=>{e.add(Bl(t,n));let r=n.width/2+.065,i=Math.abs(Math.cos(n.yaw))*r+.09,a=Math.abs(Math.sin(n.yaw))*r+.09;return[n.x-i,n.x+i,n.z-a,n.z+a]})}var Hl=[...wt,[10.4,22,16.1,19.9],[-49,-27,-20,21]],Ul=1e-5,Wl=Math.PI/2;function Gl(e,t,n){let r=J.boundary;return r.every(([i,a],o)=>{let[s,c]=r[(o+1)%r.length];return(s-i)*(t-a)-(c-a)*(e-i)>=n*Math.hypot(s-i,c-a)})}function Kl(e,t,n){let[r,i,a,o]=J.bounds;return e-n<r||e+n>i||t-n<a||t+n>o||!Gl(e,t,n)||Sa(e,t,n)?!0:Hl.some(([r,i,a,o])=>{let s=e-Math.max(r,Math.min(i,e)),c=t-Math.max(a,Math.min(o,t));return Math.hypot(s,c)<n})}function ql(e,t,n){let r=Math.sin(n),i=Math.cos(n);return J.collisionDiscs.every(([n,a])=>!Kl(e+r*n,t+i*n,a))}function Jl(e){return J.docks.reduce((t,n)=>Yl(e,n)<Yl(e,t)?n:t,J.docks[0])}function Yl(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}function Xl(e,t,n){if(n<=0)return;let r=-Math.max(-1,Math.min(1,t/(n*J.maxTurnRate)))*J.maxBank;e.bank+=(r-e.bank)*bo(n,J.bankTime)}function Zl(e,t,n){let{step:r,ice:i}=n,a=(e,t,n)=>ql(e,t,n)&&!J.collisionDiscs.some(([r,a])=>{let o=e+Math.sin(n)*r,s=t+Math.cos(n)*r;return[[0,0],[a,0],[-a,0],[0,a],[0,-a]].some(([e,t])=>jo(o+e,s+t,i))}),o=t.z*(t.z<0?J.reverseSpeed:J.forwardSpeed*(t.sprint?J.sprint:1)),s=t.z?J.accelerationTime:J.coastingTime;e.speed+=(o-e.speed)*bo(r,s),e.turn+=(t.x-e.turn)*bo(r,J.turnTime);let c=Math.min(1,Math.abs(e.speed)/J.forwardSpeed),l=J.minTurnFactor+c*(1-J.minTurnFactor),u=(J.invertSteerWhenReversing&&e.speed<0?e.turn:-e.turn)*J.maxTurnRate*l*r,d=e.yaw+u,f=a(e.x,e.z,d);f&&(e.yaw=d),Xl(e,f?u:0,r);let p=Math.sin(e.yaw)*e.speed*r,m=Math.cos(e.yaw)*e.speed*r,h={x:e.x,z:e.z};a(e.x+p,e.z,e.yaw)&&(e.x+=p),a(e.x,e.z+m,e.yaw)&&(e.z+=m),Math.abs(p)+Math.abs(m)>Ul&&Yl(h,e)<Ul&&(e.speed=0)}function Ql(e,t,n=()=>0){let r={x:e.position.x,z:e.position.z,yaw:e.rotation.y+Wl,speed:0,turn:0,bank:0};e.rotation.reorder(`YXZ`);let i=()=>{e.position.x=r.x,e.position.z=r.z,e.rotation.y=r.yaw-Wl,t.sailing&&Object.assign(t,{x:r.x,z:r.z,facing:r.yaw,height:J.helmHeight,speed:0,airborne:!1,landing:0})};function a(e){Object.assign(r,{x:e.x,z:e.z,yaw:e.yaw,speed:0,turn:0,bank:0}),i()}return{vessel:r,nearbyDock(){let e=Jl(r);return Yl(r,e)>e.berthRadius||!t.sailing&&Yl(t,e.land)>J.boardingRadius?null:e},toggle(e){let n=t.sailing;return t.sailing=!n,a(e),n?e.land:null},respawn(){a(Jl(r))},disembark(){t.sailing=!1,a(Jl(r))},startTour(){t.sailing=!0,a(J.docks[0])},finishTour(e=J.docks[0]){return t.sailing=!1,a(e),e.land},followRoute(e,t){return ql(e.x,e.z,e.yaw)?(Xl(r,e.yaw-r.yaw,t),Object.assign(r,e),i(),!0):!1},teleport(e){return ql(e.x,e.z,r.yaw)?(Object.assign(r,e,{speed:0,turn:0,bank:0}),i(),!0):!1},update(e,t){Zl(r,e,{step:t,ice:n()}),i()},stop(){r.speed=0,r.turn=0,r.bank=0}}}function $l(e){let t=Number(e),n=t,r=t,i=X.transitionSeconds;return{setNight(e){Number(e)!==r&&(n=t,r=Number(e),i=0)},step(e){i=Math.min(X.transitionSeconds,i+e);let a=i/X.transitionSeconds;return t=n+(r-n)*(a*a*(3-2*a)),t}}}function eu(e,t){let n={particles:!0,snow:!0,islands:!0,residents:!0,scenery:!0,gulls:!0,cloth:!0,shadows:!e,beam:!0,reflections:!0,halos:!0,wake:!e},r=0,i=0,a=0;return{flags:n,simplified:e,get tier(){return a},sample(e){if(!e||a>=Bt.order.length||(r+=Math.min(e,Bt.maxSampleSeconds),i++,r<Bt.sampleSeconds))return;let o=i/r;if(r=0,i=0,!(o>=Bt.minimumFps)){for(;a<Bt.order.length&&!n[Bt.order[a]];)a++;a>=Bt.order.length||(n[Bt.order[a]]=!1,t(`${Bt.noticePrefix}${Bt.notices[a]}。`),a++)}}}}var tu={seed:841,count:4,baseZ:23.5,stride:5.3,rise:1.52,rows:5,startX:-23,widthStep:6.8,width:39,depth:21};function nu(){let e=Ht(tu.seed);return Array.from({length:tu.count},(t,n)=>{let r=tu.baseZ+n*tu.stride;return{tier:n,y:vt.upperY+n*tu.rise,z:r,lots:Array.from({length:tu.rows},(t,r)=>({x:tu.startX+tu.widthStep*r+e()*1.5,house:n<tu.count-1&&(r+n)%tu.rows!==0?{width:3.2+e(),height:2.2+e(),color:(r+n)%4}:void 0,treeScale:1.15+e()*.85}))}})}var ru=nu();function iu(e,t,n){return[e-n/2,e+n/2,t-1.7,t+1.7]}var au=ru.flatMap(({y:e,z:t,lots:n})=>n.flatMap(({x:n,house:r})=>r?[{footprint:iu(n,t+2.3,r.width),base:e,height:r.height+r.width*.31}]:[])),ou=ru[0].lots.map(({x:e,treeScale:t})=>{let n=.16*t;return[e+2.8-n,e+2.8+n,ru[0].z+2.7-n,ru[0].z+2.7+n]}),su=ru.slice(1).map(({tier:e,y:t,z:n})=>{let r=tu.width-e*2.8;return{footprint:[-9-r/2,-9+r/2,n-.5,n+20.5],base:0,height:t}}),cu=2.15,lu=.018,uu=.74,du=.17;function fu(e){let t=new Se(uu,du),n=Array.from({length:J.wakeLimit},()=>{let n=new P({color:J.wakeColor,transparent:!0,depthWrite:!1}),r=new F(t,n);return r.rotation.x=-Math.PI/2,r.visible=!1,e.add(r),{mesh:r,remaining:0}}),r=0,i=0;return(e,t,a)=>{if(i+=e,a&&i>=J.wakeInterval&&t.speed>J.wakeMinimumSpeed){let e=n[r++%n.length];e.remaining=J.wakeLife,e.mesh.position.set(t.x-Math.sin(t.yaw)*cu,lu,t.z-Math.cos(t.yaw)*cu),e.mesh.rotation.z=t.yaw,i=0}for(let t of n)if(t.remaining-=e,t.mesh.visible=a&&t.remaining>0,t.mesh.visible){let e=t.remaining/J.wakeLife;t.mesh.material.opacity=e*.58,t.mesh.scale.x=2-e}}}var pu=[`#805843`,`wood`],mu=[`#ad9e8d`,`brick`],hu=[`#ceb28a`],gu=2.65;function _u([e,t,n,r]){let i=[];for(let a=e+.35;a<t;a+=gu)i.push([a,n+.1],[a,r-.1]);return i}function vu(e,t,n){let[r,i,a,o]=t;return e.box([(r+i)/2,q-.48,(a+o)/2],[i-r,.96,o-a],n)}function yu(e,t,n){let[r,i,a,o]=n,s=Ht(113),c=(a+o)/2,l=Math.ceil((i-r)/.37),u=(i-r)/l;for(let n=0;n<l;n++){let i=r+(n+.5)*u,l=[`#a07655`,`#b48b65`,`#ba916b`,`#a57b5c`][Math.floor(s()*4)],d=c+(n%3-1)*.62;for(let[n,r]of[[a,d],[d+.023,o]])e.add(t.box([i,q-.08,(n+r)/2],[u-.014,.16,r-n],[l,`wood`]))}for(let n of[a+.1,o-.1])e.add(t.box([(r+i)/2,.44,n],[i-r,.24,.2],pu));for(let[r,i]of _u(n))e.add(t.box([r,.34,i],[.31,1.91,.33],pu)),e.add(t.box([r,.96,i],[.345,.15,.36],hu)),e.add(t.box([r,1.31,i],[.35,.09,.36],[`#91674c`,`wood`]))}function bu(e,t,[n,,r]){e.add(t.box([n,q+1.18,r],[.105,2.36,.105],[`#595655`])),e.add(t.box([n,q+2.36,r+.24],[.105,.1,.54],[`#595655`])),e.add(la(t.box([n,q+2.25,r+.47],[.24,.22,.24],[`#efc481`]),`street`)),e.add(t.box([n,q+2.41,r+.47],[.33,.1,.34],[`#595655`]))}function xu(e,t,[n,r,i],a){let o=new d;o.name=`harbor-tree`,o.add(t.box([0,.75,0],[.27,1.5,.28],pu)),o.add(t.box([0,1.23,0],[1.67,.57,1.42],[`#547262`,`grass`])),o.add(t.box([.04,1.68,.02],[1.26,.42,1.16],[`#6d8868`,`grass`])),o.add(t.box([.1,1.98,.04],[.77,.31,.82],[`#88966e`,`grass`])),o.position.set(n,r,i),o.scale.setScalar(a),e.add(o)}function Su(e,t,[n,r,i],a){let o=t.cylinder([n,r,i],[.69,1,1,6],[`#888a83`,`brick`]);o.scale.set(...a),o.rotation.y=n,e.add(o)}function Cu(e,t,[n,r,i],a){e.add(t.cylinder([n,r,i],[.22,.29,.27,8],[a])),e.add(t.cylinder([n,r+.17,i],[.09,.15,.12,8],[`#f0cd8b`]))}function wu(e,t){let n=Ht(251);e.add(vu(t,Mt,[`#c3a983`,`grass`])),e.add(vu(t,jt,[`#91a079`,`grass`])),e.add(vu(t,Ft,mu)),e.add(vu(t,[10.4,22,16.1,19.9],mu)),e.add(t.box([-10,q-.012,12.2],[31,.026,2.4],[`#c7b299`,`brick`])),e.add(t.box([-14,q-.012,-13.1],[3.7,.025,10.1],[`#c8b591`,`brick`]));for(let r=0;r<18;r++)Su(e,t,[-13+r*1.21,.18,-11.7+n()*.26],[.54+n()*.44,.48+n()*.75,.64]),Su(e,t,[11.4+r*.66,.12,15.95],[.55,.57,.62]);for(let r=0;r<16;r++){Su(e,t,[8.25+n(),.23,-12.4-r*.83],[.67,.74,.69]);let i=-28+n()*2.6,a=-19+r*2.57,o=.9+n()*.65;(a<-12.3||a>-8.4)&&xu(e,t,[i,q,a],o)}}var Tu=[{wall:`#d0a16b`,roof:`#97685e`,trim:`#f1dbc2`},{wall:`#c28b79`,roof:`#6b7880`,trim:`#f3ddbd`},{wall:`#a9af94`,roof:`#836c6a`,trim:`#f0d7b3`},{wall:`#abc1c0`,roof:`#926556`,trim:`#ecd4af`}];function Eu(e,t,n){let r=ha(t,Tu[n.color],n.size);r.name=`harbor-house`,r.position.set(...n.position),r.rotation.y=n.yaw??0,e.add(r)}function Du(e,t){Eu(e,t,{position:[-3,q,17.5],size:[6.3,3.05,4.4],color:0}),Eu(e,t,{position:[6,q,19.2],size:[3.9,2.55,4.1],color:3}),Eu(e,t,{position:[-8,q,-21],size:[4.7,2.6,3.7],color:2,yaw:Math.PI}),Eu(e,t,{position:[-24.7,q,-3],size:[4.4,2.43,4],color:1,yaw:-Math.PI/2});for(let{tier:n,y:r,z:i,lots:a}of ru){e.add(t.box([-9,r-2.4,i+10],[39-n*2.8,4.8,21],[`#8a9b76`,`grass`]));let o=n===0?vt.ramp[0]+28:38-n*2.8,s=n===0?(vt.ramp[0]-28)/2:-9;e.add(t.box([s,r-.62,i-.49],[o,1.24,.55],mu));for(let{x:n,house:o,treeScale:s}of a)o&&Eu(e,t,{position:[n,r,i+2.3],size:[o.width,o.height,3.4],color:o.color}),xu(e,t,[n+2.8,r,i+2.7],s)}}function Ou(e,t){let n=14.3;for(let r of[-1.2,1.2])e.add(t.box([3+r,1.52,n],[.13,1.74,.13],pu));e.add(t.box([3,2.28,n],[2.55,.13,.14],pu));for(let r=0;r<=12;r++){let i=1.89+r*.185;e.add(t.beam([[i,2.22,n],[i+.07,1.26,n]],.023,[`#93a291`]))}for(let r=0;r<6;r++)e.add(t.box([3,1.3+r*.17,n],[2.29,.025,.026],[`#93a291`]));for(let r of[-.82,.55,.98])Cu(e,t,[3+r,1.29,n],`#c58d58`)}function ku(e,t){Ou(e,t);for(let[n,r]of[[-1.2,2.34],[9,-2.34],[16.4,2.69],[-13.4,-14.9],[-10.5,13.4]])bu(e,t,[n,q,r]);for(let[n,r]of[[-8,-2.05],[13.8,3.12],[0,12.2],[-6.9,15.9],[-21,2.6]])e.add(t.box([n,.91,r],[.65,.52,.61],[`#bc8a59`,`wood`])),e.add(t.box([n,1.19,r],[.68,.08,.64],pu)),Cu(e,t,[n-.46,.81,r],`#bd6951`);for(let[n,r]of[[.6,2.23],[11.9,2.95],[-16,9.1]]){e.add(t.cylinder([n,.99,r],[.35,.31,.68,9],pu));for(let i of[.78,1.18])e.add(t.cylinder([n,i,r],[.355,.355,.08,9],[`#69645c`]))}let n=new F(new ke(.28,.048,4,12),t.surface(...hu));n.rotation.x=-Math.PI/2,n.position.set(1.8,q+.055,-1.6),e.add(n),e.add(t.beam([[3.22,1.02,-2.45],[4.54,.67,-4.45]],.034,hu))}function Au(e,t){let n=-21.6;for(let r of[-11,-3.9,3.2])e.add(t.box([n,2.6,r],[.19,3.9,.2],pu)),e.add(t.box([n,4.21,r],[.85,.12,.15],pu));for(let r of[-.33,.33])for(let i of[-11,-3.9]){let a=n+r,o=[a,4,i+3.55];e.add(t.beam([[a,4.31,i],o],.028,[`#646059`])),e.add(t.beam([o,[a,4.31,i+7.1]],.028,[`#646059`]))}}function ju(e,t){let n=[`#c1a784`,`grass`];for(let[r,i]of[[-7.2,9.4],[6.8,8.1]])e.add(t.box([-11.74,.14,r],[1.15,.39,i],n)),e.add(t.box([-12.05,.27,r],[.92,.43,i-1.4],n))}function Mu(e){let t=new Map;e.updateMatrixWorld(!0),e.traverse(e=>{if(!(e instanceof F)||e.geometry.type!==`BoxGeometry`)return;let n=e.material,r=`${n.id}:${e.userData.harborGlow??``}`,i=t.get(r);i?i.blocks.push(e):t.set(r,{material:n,blocks:[e]})});for(let{material:n,blocks:r}of t.values()){if(r.length<2)continue;let t=new A(r[0].geometry,n,r.length);r[0].userData.harborGlow&&(t.userData.harborGlow=r[0].userData.harborGlow,t.userData.glowPoints=r.map(e=>new L().setFromMatrixPosition(e.matrixWorld))),r.forEach((e,n)=>{t.setMatrixAt(n,e.matrixWorld),e.removeFromParent()}),e.add(t)}}var Nu=`vessel`;function Pu(e,t){let n=[{id:`north-shore`,point:[4.8,.035,-5],yaw:-.12,size:1.22,color:`#537984`},{id:Nu,point:[-.3,.025,8.8],yaw:.13,size:1,color:`#65866e`},{id:`east-shoal`,point:[42,.03,-8],yaw:.62,size:.75,color:`#7a827d`},{id:`outer-cay`,point:[64,.03,-26],yaw:-.28,size:.8,color:`#9c785b`}],r=n.map(({id:n,point:r,yaw:i,size:a,color:o})=>{let s=ya(t,o);return s.name=`harbor-boat-${n}`,s.position.set(r[0],r[1],r[2]),s.rotation.y=i,s.scale.setScalar(a),e.add(s),s});return{boats:r,vessel:r[n.findIndex(e=>e.id===Nu)]??r[0]}}var Fu=[{footprint:[5.15,8.25,-23.1,-20],height:10.4},{footprint:[-10.4,-5.6,-22.9,-19.1],height:4.3},{footprint:[-6.2,.2,15.2,19.8],height:5.2},{footprint:[4,8,17.1,21.3],height:3.9},{footprint:[-26.9,-22.5,-5.3,-.7],height:3.9}],Iu=[...Fu.map(e=>e.footprint),...au.filter(e=>e.base===vt.upperY).map(e=>e.footprint),...ou,...us,[-30,vt.ramp[0],22.74,23.29],[-30,-25,-21,-12.32],[-30,-25,-8.38,22],[1.7,4.3,14.16,14.44],[-8.8,-7.67,-2.39,-1.73],[13.02,14.15,2.8,3.45],[-.78,.35,11.87,12.53],[-7.7,-6.56,15.57,16.23],[-21.8,-20.66,2.27,2.93],[.24,.96,1.87,2.55],[11.54,12.26,2.59,3.31],[-16.36,-15.64,8.74,9.46],[-1.29,-1.11,2.27,2.43],[8.91,9.09,-2.43,-2.27],[16.32,16.48,2.61,2.77],[-13.48,-13.32,-14.98,-14.82],[-10.58,-10.42,13.32,13.48],[-21.71,-21.49,-11.11,-10.89],[-21.71,-21.49,-4.01,-3.79],[-21.71,-21.49,3.09,3.31]];function Lu(e){let t=[],n=new V;return e.traverse(e=>{if(e.name!==`harbor-tree`&&e.name!==`harbor-house`&&e.name!==`harbor-tower`)return;n.setFromObject(e);let{min:r,max:i}=n;t.push({footprint:[r.x,i.x,r.z,i.z],base:r.y,height:i.y-r.y})}),t}for(let[e,t]of[..._u(Ot),..._u(Nt)])Iu.push([e-.18,e+.18,t-.18,t+.18]);function Ru(e,t){for(let n of[13,16,19])e.add(t.cylinder([n,q+.3,16.62],[.11,.13,.6,8],[`#6d6154`])),e.add(t.box([n,q+.6,16.62],[.26,.07,.26],[`#8a7a68`]));e.add(t.box([16,q+.04,16.34],[11,.12,.22],pu))}function zu(e,t=ma()){let n=new d;wu(n,t),Ru(n,t),yu(n,t,Ot),yu(n,t,Nt),Du(n,t),ku(n,t),Au(n,t),ju(n,t),gs(n,t);let r=_a(t);r.name=`harbor-tower`,r.position.set(6.7,q,-21.55),n.add(r);for(let[e,r,i]of[[17,-6,`#c97959`],[23,-12,`#d1ab63`],[14,9,`#bf7154`],[30,-3,`#cfac62`]])Cu(n,t,[e,.18,r],i);Cl(n,t);let i=Lu(n);Mu(n),e.add(n);let{boats:a,vessel:o}=Pu(e,t);return{animate:(e,t)=>{a.forEach((n,r)=>{n.position.y=.033+Math.sin(e*1.41+r)*.043,n.rotation.z=Math.sin(e*.96+r*.71)*.025,n.rotation.x=Math.sin(e*.88+r*.65)*.045+(n===o?t:0)})},vessel:o,flightVolumes:i}}var Bu=400,Vu=720,Hu={high:1,medium:.83,low:.65},Uu=2.45,Wu=1,Gu=.26;function Ku(e,t){let n=new E(1,1,{magFilter:et,minFilter:et,generateMipmaps:!1}),r=new xe,i=new F(new Se(2,2),new P({map:n.texture,depthTest:!1})),a=new ve(-1,1,1,-1,0,1),o=Dl(),s=new L;i.frustumCulled=!1,r.add(i);let c={width:1,height:1},l=t();function u(){let{width:e,height:t}=c,r=Hu[l],i=Math.min(Vu*r/e,Bu*r/t,1);n.setSize(Math.max(Wu,Math.round(e*i)),Math.max(Wu,Math.round(t*i)))}return{resize(t,n){e.setPixelRatio(1),e.setSize(t,n,!1),Object.assign(c,{width:t,height:n}),u()},draw(i,c,d){let f=t();f!==l&&(l=f,u());let{player:p,align:m}=d;s.set(p.x,q+G.focusHeight+p.height+p.elevation,p.z),m&&o(c,s,n),e.setRenderTarget(n),e.render(i,c),e.setRenderTarget(null),e.render(r,a)},dispose(){n.dispose(),i.geometry.dispose(),i.material.dispose()}}}function qu(e){let t=new Set,n=new Set,r=new Set;e.traverse(e=>{if(e instanceof A&&e.dispose(),e instanceof F||e instanceof Je){e instanceof F&&t.add(e.geometry);let i=Array.isArray(e.material)?e.material:[e.material];for(let e of i)n.add(e),`map`in e&&e.map instanceof Me&&r.add(e.map)}}),t.forEach(e=>e.dispose()),n.forEach(e=>e.dispose()),r.forEach(e=>e.dispose()),e.clear()}function Ju(e){let t=new AbortController,{signal:n}=t,r=window.matchMedia(`(prefers-reduced-motion: reduce)`),i=0,a,o=0,s=!1;function c(t){let n=a===void 0?0:(t-a)/1e3,s=Math.min(n,Lt.maxFrameStep);a=t,r.matches||(o+=s),e(s,o,r.matches,n),i=requestAnimationFrame(c)}function l(){cancelAnimationFrame(i),a=void 0,!s&&!document.hidden&&document.hasFocus()&&(i=requestAnimationFrame(c))}return window.addEventListener(`blur`,l,{signal:n}),window.addEventListener(`focus`,l,{signal:n}),document.addEventListener(`visibilitychange`,l,{signal:n}),{start(){l()},stop(){s=!0,l(),t.abort()}}}function Yu(e,t,n){let r=new fe,i=e.map(e=>e.frame);return a=>{if(n.player.sailing)return;r.setFromCamera(a,t);let o=r.intersectObjects(i,!0),s=e.find(e=>o[0]?.object.parent===e.frame);if(!s)return;let c=Qc(s);el(n.player,c)&&n.tracker.open(c)}}var Xu=Fu.slice(1);function Zu(e){return Xu.find(t=>t.footprint.every((t,n)=>t===e[n]))?.height}function Qu(e){let{x:t,z:n}=ht.position,r=Gu,i=[t-r,t+r,n-r,n+r];return[...Iu,Bs.footprint,...Nc,...wl,i,...e].map(e=>({footprint:e,height:ft.vaultable.find(t=>t.footprint.every((t,n)=>t===e[n]))?.height??Zu(e)}))}function $u(e,t,n){let r=tl(e,n),i=t.nearby(e);return r?.kind===`fishing`||r?.kind===`wishing`||r?.kind===`captain`||r?.kind===`lookout`||r?.kind===`sunset`||!i?r:{id:i.resident.id,...i.position,radius:Ys.interactRadius,kind:`animal`,label:`${Ys.petLabel} ${i.resident.name}`}}function ed(e,t,n){let{exhibits:r,canvas:i,propObstacles:a,vessel:o,animals:s,obstacles:c,extension:l}=n,{scope:u}=l,{pastimes:d}=n,{fishing:f}=d,p=rl({open:e.onOpen,leave:e.onLeave}),m=[...Fu,Bs,...au,...su,d.altar,...a.map(e=>({footprint:e,height:Uu}))],h=Il(c),{player:g}=h,_=js(g,Ss(c,[...m,...n.flightVolumes,...Fc,...fs]),{change:e.onFlight,notice:e.onFlightNotice,land:e=>kt(e.x,e.z,{obstacles:[],height:0})?h.teleport(e,e.y):h.swim(e),recover:h.respawn}),v=Ql(o,g,()=>l.weather.frame.ice),y=ll(t,m),b=Uo(t),x=nl(r),S=Js({motion:h,orbit:y,sailing:v,onMode:e.onMode,onRequest:e.onActivityRequest,onCue:e.onCue,onNotice:e.onQuality}),C=!1,w=!1,T=!1,E=0,D=0,ee=()=>{k.clear(),e.onSailing(g.sailing)};function te(){if(_.active||f.active||u.active||E)return null;if(S.mode===`lookout`)return Oo(g);if(S.mode===`drive`){let e=v.nearbyDock();return e?{kind:`dock`,id:e.id,label:J.dockPrompt,x:e.x,z:e.z,radius:e.berthRadius}:null}if(S.mode)return null;let e=$u(g,s,r);return e?.kind===`fishing`||e?.kind===`wishing`?e:l.gulls.hotspot(g)??l.residents.hotspot(g)??e}function ne(){let{x:e,z:t}=H.place;!g.airborne&&h.teleport({x:e,z:t})&&(k.clear(),document.pointerLockElement===i&&document.exitPointerLock(),g.facing=Math.atan2(H.float.x-g.x,H.float.z-g.z),y.aim(null,{yaw:g.facing+Math.PI,pitch:H.pitch}),i.focus({preventScroll:!0}),f.cast())}function O(){if(T||C||p.hasOpen())return;if(u.active){u.close();return}if(f.active){d.reel();return}let t=te();if(!t)S.mode===`lookout`&&e.onActivityRequest(`leave-lookout`);else if(t.kind===`fishing`)ne();else if(t.kind===`wishing`&&d.chooseWish(),t.kind===`telescope`)document.pointerLockElement===i&&document.exitPointerLock(),u.open().catch(()=>e.onQuality(`望远镜细节暂不可用。`));else if(t.kind===`dock`)e.onActivityRequest(`dock`);else if(t.kind===`gull`)l.gulls.pet(t=>e.play(`gull`,{distance:t}));else if(t.kind===`resident`&&e.play(`greeting`,{pitch:.84+Number(t.id.slice(-1))*.09}),t.kind===`captain`&&e.play(`greeting`,{pitch:.76}),t.kind===`mayor`)e.play(`knock`),D=window.setTimeout(()=>e.play(`knock`),115),E=window.setTimeout(()=>{E=0,p.open(t)},245);else if(t.kind===`lookout`||t.kind===`sunset`)g.airborne||e.onActivityRequest(t.kind);else if(t.kind===`animal`){let t=s.nearby(g);t&&(s.pet(t),e.play(t.resident.species))}else p.open(t)}let k=Dc({canvas:i,motion:h,orbit:y,sailing:v,flight:_,canFly:()=>!f.active&&!C&&!p.hasOpen()&&!T&&!S.mode&&!u.active&&!E,flightEnabled:()=>e.settings().flight,canJump:()=>!f.active&&!C&&!p.hasOpen()&&!T&&!S.mode,canMove:()=>!f.active&&!T&&!w&&!u.active&&(S.mode===null||S.mode===`lookout`||S.mode===`drive`),canLook:()=>!f.active&&!T&&!C&&S.mode!==`sunset`&&S.mode!==`tour`,canSteer:()=>!T&&!w&&S.mode===`drive`,sprintEnabled:()=>!w,lockPointer:()=>e.settings().view===`first`&&e.settings().lock&&!f.active&&!C&&!u.active,specialLook:{active:()=>u.active,look:u.look,zoom:u.zoom},onInteract:O,onPick(e){if(_.active||f.active||C||p.hasOpen()||S.mode||T)return;let n=el(g,gt.place)?d.pickWish(e,t):void 0;n?(d.chooseWish(n),p.open(gt.place)):re(e)}}),re=Yu(r,t,{player:g,tracker:p}),A=td({motion:h,obstacles:c,sailing:v},x,e=>{_.reset(),y.setFlight(!1),ee(),y.setSailing(g.sailing),e===vt.id&&(g.facing=vt.arrivalYaw+Math.PI,y.center(g.facing)),y.update(g,0,!0)});return{...k,player:g,places:x,sailing:v,flight:_,tracker:p,cameraObstacles:m,activity:S,getInteraction:te,scope:u,viewYaw:()=>y.yaw,pastimes:d,stopFishing(){f.stop(),i.focus({preventScroll:!0})},openCatchRecords(){f.active&&(d.showRecords(),p.open(H.place))},dispose(){k.dispose(),u.close(),window.clearTimeout(E),window.clearTimeout(D)},setPanelOpen(e,t=!1){C=e,(t&&!w||_.active&&e&&!C)&&k.clear(),w=t,e&&document.pointerLockElement===i&&document.exitPointerLock()},setTransition(e){T=e,e&&k.clear()},advanceActivity(e){T||S.step(e)},performAction(e){if(_.active||f.active)return!1;let t=matchMedia(`(prefers-reduced-motion: reduce)`).matches,n=S.act(e,t);return n&&(ee(),(e!==`sunset`||t)&&y.update(g,0,!0)),n},focusPlace(e){return S.focusAt(x.find(t=>t.hotspot.id===e))},updateFirst(e,t,n){return b.update(g,y.angles,{enabled:t.view===`first`&&S.mode!==`sunset`&&!u.active,step:e,instant:n,bob:t.bob&&!n&&!_.active}),{blend:b.blend,yaw:b.heading}},travel(e){return!S.mode&&!f.active&&A(e)}}}function td(e,t,n){let{motion:r,obstacles:i,sailing:a}=e;return e=>{let o=t.find(t=>t.hotspot.id===e);if(!o||o.requiresBoat&&!r.player.sailing)return!1;let s=o.requiresBoat?(e,t)=>ql(e,t,a.vessel.yaw):(e,t)=>kt(e,t,{obstacles:i,height:0}),c=qt(o.hotspot,s);return c?(o.requiresBoat?a.teleport(c):(r.player.sailing&&a.disembark(),r.teleport(c)),n(e),!0):!1}}function nd(e,t,n){let{session:r,avatar:i,animate:a,animals:o,forest:s,extension:c}=n,{player:l,tracker:u,places:d,cameraObstacles:f,sailing:p,activity:m,flight:h,pastimes:g}=r,{scene:_,camera:v,output:y,canvas:b}=t,x=Zc(_),S=dl(d,f),C=$l(e.night),w=eu(e.simplified,e.onQuality),T=pa(_,e.simplified),E=fu(_),D,ee=!1,te=0,ne=Ms(e.play);return{draw:(t,n,d,f)=>{let O=e.settings();d||=O.reduced,r.advanceActivity(m.mode===`sunset`?Math.min(f,.25):t),r.update(t),l.swimming!==ee&&(ee=l.swimming,e.onFlightNotice(ee?K.ui.swim:K.ui.shore)),l.swimming?(te+=t,te>=mt.paddleInterval&&(te=0,l.speed>Lt.movementThreshold&&e.play(`swim`,{volume:Math.min(.85,.35+l.speed*.14)}))):te=0,w.sample(f);let k=C.step(Math.min(f,.25)),re=m.dusk,A=r.updateFirst(t,O,d),ie=c.weather.update(O.weather,v,{step:t,quality:O.quality,tier:w.tier,reduced:d}),ae=Math.max(ie.rain,ie.snow),oe=O.quality===`low`,j=d?0:n,se=g.update(l,{step:t,frameTime:f,time:j,night:k,low:oe||!w.flags.cloth,reduced:d,weather:O.weather});i(l,{fishingArm:se,settings:O,rain:ie.rain,first:A.blend,seconds:t,reduced:d,simplified:!w.flags.cloth,yaw:A.yaw,flying:h.active,bank:h.bank}),c.residents.update(l,t,{night:k,rain:ie.rain,reduced:d,limit:oe?3:w.flags.residents?1/0:4}),c.gulls.update(l,{time:j,step:t,rain:ie.rain,snow:ie.snow,night:k,reduced:d,low:oe||!w.flags.gulls},t=>e.play(`gull`,{distance:t})),c.islands.update(j,{weather:ae,tier:oe?3:w.tier}),c.ambience(l,{mode:m.mode,speed:p.vessel.speed,weather:ie,mobile:e.simplified,flightWind:ne(t,h.active,h.speed)}),c.scope.update(k>.5,ae),a(j,k,{reflections:w.flags.reflections,dusk:re,reduced:d,weather:ie,bank:d?0:p.vessel.bank,edgeFog:h.active?ys(l)*K.edgeFog:0}),T(Math.max(k*(1-re),re*.86,ae*.36),j,{...w.flags,pulse:g.beam}),o.update(l,t,{night:k>.5||ie.rain>.54,reduced:d,scenery:w.flags.scenery}),s(l,re,{trees:w.flags.scenery,shadows:w.flags.shadows}),E(t,p.vessel,l.sailing&&w.flags.wake&&!d&&!oe),u.update(l);let ce=r.getInteraction(),le=ce&&`${ce.kind}:${ce.id}`;(le??void 0)!==D&&(D=le??void 0,x.setHotspot(ce),e.onHotspot(ce)),(ce?.kind===`animal`||ce?.kind===`resident`||ce?.kind===`gull`)&&x.setHotspot(ce),x.setNight(k,w.flags.halos),y.draw(_,v,{player:l,align:A.blend<.35&&!c.scope.active}),e.onHintPosition(x.project(v)),e.onLabels(m.mode||h.active||g.fishing.active?[]:S(v,l,{width:b.width,height:b.height,elapsed:n}))},setNight:C.setNight}}function rd({mount:e,onError:t},n,r){let{renderer:{domElement:i},camera:a,output:o}=n,s=()=>{let t=Math.max(Wu,e.clientWidth),n=Math.max(Wu,e.clientHeight);a.aspect=t/n,a.updateProjectionMatrix(),o.resize(t,n)},c=new ResizeObserver(s),l=new AbortController,{signal:u}=l;return i.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),t()},{signal:u}),window.addEventListener(`blur`,r.clear,{signal:u}),document.addEventListener(`visibilitychange`,r.clear,{signal:u}),i.tabIndex=0,i.setAttribute(`aria-label`,`渔港场景，拖动环绕人物，使用方向键移动`),e.append(i),c.observe(e),s(),()=>{l.abort(),c.disconnect()}}function id(e,t,n){let{renderer:r,scene:i}=t,a=new qe(G.fov,1,G.near,G.far),o=Ku(r,()=>e.settings().quality);n.push(o.dispose);let s=ma(),c=yc(i),l=zu(i,s);Hs(i,s);let u=zc(i,s),d=Oc(i,{kit:s,vessel:l.vessel}),f=Wc(i,s,e.artworks);n.push(f.dispose);let p=Vl(i,s),m=r.domElement,h=Ha(i,s,{play:e.play,notice:e.onQuality,fishing:e.onFishing,landed:()=>e.onOpen(H.place)}),g=[...f.obstacles,...p],_=[...Qu(g),h.altar],v=cc({scene:i,kit:s,obstacles:_,simplified:e.simplified}),y=Ho({scene:i,camera:a,kit:s},{obstacles:_,animals:v,onChange:e.onScope,setAmbience:e.setAmbience}),b=ed(e,a,{exhibits:f.exhibits,canvas:m,propObstacles:g,vessel:l.vessel,animals:v,obstacles:_,extension:y,flightVolumes:l.flightVolumes,pastimes:h});n.push(b.dispose);let x=Xo(i,s),{draw:S,setNight:C}=nd(e,{scene:i,camera:a,output:o,canvas:m},{session:b,avatar:x,forest:u,animals:v,extension:y,animate(e,t,n){l.animate(e,n.bank),d(e,n.reduced),c(e,t,n)}}),w=Ju(S);n.push(w.stop),n.push(rd({...e,onError(){w.stop(),e.onError()}},{renderer:r,camera:a,output:o},b)),S(0,0,!0,0),w.start();let T;return{...b,setNight:C,dismissPanel:b.tracker.dismiss,async bakeMap(){let e=await Pt(()=>import(`./harbor-map-bake-lIBdklXA.js`),__vite__mapDeps([6,4,1,2,3,5]));return T??=e.captureHarborMap(r,i),T()}}}function ad(e){let t=document.createElement(`canvas`),n=t.getContext(`webgl2`,{antialias:!1,powerPreference:`low-power`});if(!n)throw Error(`WebGL 2 unavailable`);let r=new aa({canvas:t,context:n}),i=new xe,a=[],o=()=>{for(let e of a.reverse())e();qu(i),r.dispose(),r.forceContextLoss(),t.remove()};try{return{...id(e,{renderer:r,scene:i},a),focus:()=>t.focus({preventScroll:!0}),dispose:o}}catch(e){throw o(),e}}export{ad as mountHarbor,xa as n,ma as r,wa as t};