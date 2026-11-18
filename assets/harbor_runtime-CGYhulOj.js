const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/harbor-scope-detail-qOOv3NC9.js","assets/pixel_harbor-1SZg1pwb.js","assets/index-DEc7aJ6q.js","assets/index-CzAqu4Ou.css","assets/three.core-BdF-6bIW.js","assets/pixel_harbor-Cp4IVIDa.css","assets/harbor-map-bake-Bke6LL2m.js"])))=>i.map(i=>d[i]);
import{$ as e,$t as t,A as n,An as r,B as i,Bn as a,C as o,Cn as s,D as c,Dn as l,E as u,En as d,F as f,Fn as p,G as m,H as h,Hn as g,I as _,In as v,J as y,Jt as b,K as x,Kt as S,L as C,Ln as w,M as T,Mn as E,N as D,Nn as ee,O as te,On as O,Pn as ne,Q as re,Qt as k,R as A,Rn as j,S as ie,T as M,Tn as ae,U as oe,Un as N,V as P,Vn as F,W as se,Wn as ce,X as I,Xt as le,Y as L,Yt as ue,Z as de,_ as fe,_n as pe,a as me,at as he,b as ge,cn as _e,ct as ve,d as R,dt as ye,en as be,et as xe,f as Se,fn as Ce,g as we,gn as Te,gt as Ee,h as De,hn as Oe,ht as ke,i as Ae,it as je,j as Me,jn as Ne,k as Pe,kn as Fe,l as Ie,ln as Le,lt as Re,m as ze,mn as Be,n as z,nt as Ve,o as He,on as Ue,ot as We,p as B,pn as Ge,q as V,qt as Ke,r as H,rt as qe,sn as Je,st as Ye,tn as Xe,tt as Ze,u as Qe,un as $e,v as et,vn as tt,w as nt,wn as rt,x as it,xn as at,y as ot,yn as st,zn as ct}from"./three.core-BdF-6bIW.js";import{A as U,B as W,C as lt,D as ut,E as dt,F as ft,H as pt,I as mt,J as ht,L as gt,M as _t,O as vt,P as yt,R as G,S as bt,T as K,U as xt,Y as St,_ as Ct,b as wt,c as Tt,d as Et,f as Dt,g as Ot,h as kt,j as At,k as jt,l as Mt,m as Nt,n as Pt,p as Ft,q as It,s as q,t as Lt,u as Rt,v as zt,x as J,y as Bt,z as Y}from"./index-DEc7aJ6q.js";import{a as Vt,c as Ht,i as Ut,l as Wt,n as Gt,o as Kt,r as qt,s as Jt,t as Yt,u as Xt}from"./pixel_harbor-1SZg1pwb.js";function Zt(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Qt(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var X={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Z={common:{diffuse:{value:new R(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new l(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new R(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new R(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new R(16777215)},opacity:{value:1},center:{value:new l(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},$t={basic:{uniforms:F([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:F([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new R(0)},envMapIntensity:{value:1}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:F([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new R(0)},specular:{value:new R(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:F([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new R(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:F([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new R(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:F([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:F([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:F([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:F([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:F([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:F([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distance:{uniforms:F([Z.common,Z.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distance_vert,fragmentShader:X.distance_frag},shadow:{uniforms:F([Z.lights,Z.fog,{color:{value:new R(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};$t.physical={uniforms:F([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new l(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new V},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new R(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new l},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new R(0)},specularColor:{value:new R(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new l},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var en={r:0,b:0,g:0},tn=new y,nn=new V;nn.set(-1,0,0,0,1,0,0,0,1);function rn(e,t,n,r,i,a){let o=new R(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new L(new Ae(1,1,1),new Le({name:`BackgroundCubeMaterial`,uniforms:ee($t.backgroundCube.uniforms),vertexShader:$t.backgroundCube.vertexShader,fragmentShader:$t.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tn.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(nn),l.material.toneMapped=Se.getTransfer(i.colorSpace)!==Je,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new L(new ve(2,2),new Le({name:`BackgroundMaterial`,uniforms:ee($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Se.getTransfer(i.colorSpace)!==Je,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(en,ct(e)),n.buffers.color.setClear(en.r,en.g,en.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function an(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function on(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function sn(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(N(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&N(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&N(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function cn(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ye,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ln=class extends Ne{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new we(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ae(5,5,5),i=new Le({name:`CubemapFromEquirect`,uniforms:ee(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new L(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=P),new ze(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},un=256,dn=3,fn=20,pn=256,mn=16,hn=3,gn=new O,_n=new R,vn=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ze(1,10,null),this._boxMesh=new L(new Ae(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=gn}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(_n));let h=new ze(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(un,w(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?un:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=yn(e,!1,!1),n=Math.log2(e)-dn;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=yn(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tn()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=wn()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=xn(),this._integrationMaterial=Sn());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/mn);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-hn)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(pn*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Cn());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function yn(e,t,n){return new ln(e,{minFilter:h,generateMipmaps:t,type:_,colorSpace:se,depthBuffer:n})}function bn(e,t,n){return new Le({name:e,uniforms:t,vertexShader:X.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function xn(){return bn(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${pn}u

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
	`)}function Sn(){return bn(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:mn}},`

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
	`)}function Cn(){return bn(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fn}
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
	`)}function wn(){return bn(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

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
	`)}function Tn(){return bn(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function En(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new ln(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new vn(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new vn(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Dn(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ce(`WebGLRenderer: `+e+` extension not supported.`),t}}}function On(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?pe:Te)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function kn(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function An(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:v(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function jn(e,t,r){let i=new WeakMap,a=new Fe;function o(o,s,c){let u=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,f=d===void 0?0:d.length,p=i.get(s);if(p===void 0||p.count!==f){p!==void 0&&p.texture.dispose();let e=s.morphAttributes.position!==void 0,r=s.morphAttributes.normal!==void 0,o=s.morphAttributes.color!==void 0,c=s.morphAttributes.position||[],u=s.morphAttributes.normal||[],d=s.morphAttributes.color||[],m=0;e===!0&&(m=1),r===!0&&(m=2),o===!0&&(m=3);let h=s.attributes.position.count*m,g=1;h>t.maxTextureSize&&(g=Math.ceil(h/t.maxTextureSize),h=t.maxTextureSize);let _=new Float32Array(h*g*4*f),v=new ot(_,h,g,f);v.type=n,v.needsUpdate=!0;let y=m*4;for(let t=0;t<f;t++){let n=c[t],i=u[t],s=d[t],l=h*g*4*t;for(let t=0;t<n.count;t++){let c=t*y;e===!0&&(a.fromBufferAttribute(n,t),_[l+c+0]=a.x,_[l+c+1]=a.y,_[l+c+2]=a.z,_[l+c+3]=0),r===!0&&(a.fromBufferAttribute(i,t),_[l+c+4]=a.x,_[l+c+5]=a.y,_[l+c+6]=a.z,_[l+c+7]=0),o===!0&&(a.fromBufferAttribute(s,t),_[l+c+8]=a.x,_[l+c+9]=a.y,_[l+c+10]=a.z,_[l+c+11]=s.itemSize===4?a.w:1)}}p={count:f,texture:v,size:new l(h,g)},i.set(s,p);function b(){v.dispose(),i.delete(s),s.removeEventListener(`dispose`,b)}s.addEventListener(`dispose`,b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(e,`morphTexture`,o.morphTexture,r);else{let t=0;for(let e=0;e<u.length;e++)t+=u[e];let n=s.morphTargetsRelative?1:1-t;c.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),c.getUniforms().setValue(e,`morphTargetInfluences`,u)}c.getUniforms().setValue(e,`morphTargetsTexture`,p.texture,r),c.getUniforms().setValue(e,`morphTargetsTextureSize`,p.size)}return{update:o}}function Mn(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Nn={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Pn(e,t,n,r,i,a){let s=new Ne(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,l=null,u=null,d=new He;d.setAttribute(`position`,new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute(`uv`,new Pe([0,2,0,0,2,0],2));let f=new b({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new L(d,f),m=new he(-1,1,1,-1,0,1),h=null,g=null,v=!1,y,x=null,S=[],C=!1;this.setSize=function(e,t){s.setSize(e,t),c!==null&&c.setSize(e,t),l!==null&&l.setSize(e,t);for(let n=0;n<S.length;n++){let r=S[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){S=e,C=S.length>0&&S[0].isRenderPass===!0;let t=s.width,n=s.height;S.length>0&&c===null&&(c=new Ne(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),l=new Ne(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&S.some(e=>e.needsDepthTexture===!0);r!==(s.depthTexture!==null)&&(r===!0&&u===null&&(u=new o(t,n),a===!0&&(u.format=ie,u.type=at)),s.dispose(),s.depthTexture=r?u:null,s.resolveDepthBuffer=r,s.storeMultisampledDepthBuffer=r);for(let e=0;e<S.length;e++){let i=S[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(u)}},this.begin=function(e,t){if(v||e.toneMapping===0&&S.length===0)return!1;if(x=t,t!==null){let e=t.width,n=t.height;(s.width!==e||s.height!==n)&&this.setSize(e,n)}return C===!1&&e.setRenderTarget(s),y=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return C},this.end=function(e,t){e.toneMapping=y,v=!0;let n=s,r=c;for(let i=0;i<S.length;i++){let a=S[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===c?l:c))}if(h!==e.outputColorSpace||g!==e.toneMapping){h=e.outputColorSpace,g=e.toneMapping,f.defines={},Se.getTransfer(h)===`srgb`&&(f.defines.SRGB_TRANSFER=``);let t=Nn[g];t&&(f.defines[t]=``),f.needsUpdate=!0}f.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(x),e.render(p,m),x=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.dispose(),c!==null&&c.dispose(),l!==null&&l.dispose(),d.dispose(),f.dispose()}}var Fn=new Oe,In=new o(1,1),Ln=new De(1),Rn=new ot,zn=new et,Bn=new we,Vn=[],Hn=[],Un=new Float32Array(16),Wn=new Float32Array(9),Gn=new Float32Array(4);function Kn(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Vn[i];if(a===void 0&&(a=new Float32Array(i),Vn[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function qn(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Jn(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Yn(e,t){let n=Hn[t];n===void 0&&(n=new Int32Array(t),Hn[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Xn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Zn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qn(n,t))return;e.uniform2fv(this.addr,t),Jn(n,t)}}function Qn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(qn(n,t))return;e.uniform3fv(this.addr,t),Jn(n,t)}}function $n(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qn(n,t))return;e.uniform4fv(this.addr,t),Jn(n,t)}}function er(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Jn(n,t)}else{if(qn(n,r))return;Gn.set(r),e.uniformMatrix2fv(this.addr,!1,Gn),Jn(n,r)}}function tr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Jn(n,t)}else{if(qn(n,r))return;Wn.set(r),e.uniformMatrix3fv(this.addr,!1,Wn),Jn(n,r)}}function nr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Jn(n,t)}else{if(qn(n,r))return;Un.set(r),e.uniformMatrix4fv(this.addr,!1,Un),Jn(n,r)}}function rr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ir(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qn(n,t))return;e.uniform2iv(this.addr,t),Jn(n,t)}}function ar(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qn(n,t))return;e.uniform3iv(this.addr,t),Jn(n,t)}}function or(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qn(n,t))return;e.uniform4iv(this.addr,t),Jn(n,t)}}function sr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function cr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qn(n,t))return;e.uniform2uiv(this.addr,t),Jn(n,t)}}function lr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qn(n,t))return;e.uniform3uiv(this.addr,t),Jn(n,t)}}function ur(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qn(n,t))return;e.uniform4uiv(this.addr,t),Jn(n,t)}}function dr(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function fr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?dr(In):Fn,n.setTexture2D(t||a,i)}function pr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||zn,i)}function mr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?dr(Ln):Bn,n.setTextureCube(t||a,i)}function hr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Rn,i)}function gr(e){switch(e){case 5126:return Xn;case 35664:return Zn;case 35665:return Qn;case 35666:return $n;case 35674:return er;case 35675:return tr;case 35676:return nr;case 5124:case 35670:return rr;case 35667:case 35671:return ir;case 35668:case 35672:return ar;case 35669:case 35673:return or;case 5125:return sr;case 36294:return cr;case 36295:return lr;case 36296:return ur;case 35678:case 36198:case 36298:case 36306:case 35682:return fr;case 35679:case 36299:case 36307:return pr;case 35680:case 36300:case 36308:case 36293:return mr;case 36289:case 36303:case 36311:case 36292:return hr}}function _r(e,t){e.uniform1fv(this.addr,t)}function vr(e,t){let n=Kn(t,this.size,2);e.uniform2fv(this.addr,n)}function yr(e,t){let n=Kn(t,this.size,3);e.uniform3fv(this.addr,n)}function br(e,t){let n=Kn(t,this.size,4);e.uniform4fv(this.addr,n)}function xr(e,t){let n=Kn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Sr(e,t){let n=Kn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Cr(e,t){let n=Kn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function wr(e,t){e.uniform1iv(this.addr,t)}function Tr(e,t){e.uniform2iv(this.addr,t)}function Er(e,t){e.uniform3iv(this.addr,t)}function Dr(e,t){e.uniform4iv(this.addr,t)}function Or(e,t){e.uniform1uiv(this.addr,t)}function kr(e,t){e.uniform2uiv(this.addr,t)}function Ar(e,t){e.uniform3uiv(this.addr,t)}function jr(e,t){e.uniform4uiv(this.addr,t)}function Mr(e,t,n){let r=this.cache,i=t.length,a=Yn(n,i);qn(r,a)||(e.uniform1iv(this.addr,a),Jn(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?dr(In):Fn;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Nr(e,t,n){let r=this.cache,i=t.length,a=Yn(n,i);qn(r,a)||(e.uniform1iv(this.addr,a),Jn(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||zn,a[e])}function Pr(e,t,n){let r=this.cache,i=t.length,a=Yn(n,i);qn(r,a)||(e.uniform1iv(this.addr,a),Jn(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?dr(Ln):Bn;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Fr(e,t,n){let r=this.cache,i=t.length,a=Yn(n,i);qn(r,a)||(e.uniform1iv(this.addr,a),Jn(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Rn,a[e])}function Ir(e){switch(e){case 5126:return _r;case 35664:return vr;case 35665:return yr;case 35666:return br;case 35674:return xr;case 35675:return Sr;case 35676:return Cr;case 5124:case 35670:return wr;case 35667:case 35671:return Tr;case 35668:case 35672:return Er;case 35669:case 35673:return Dr;case 5125:return Or;case 36294:return kr;case 36295:return Ar;case 36296:return jr;case 35678:case 36198:case 36298:case 36306:case 35682:return Mr;case 35679:case 36299:case 36307:return Nr;case 35680:case 36300:case 36308:case 36293:return Pr;case 36289:case 36303:case 36311:case 36292:return Fr}}var Lr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gr(t.type)}},Rr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ir(t.type)}},zr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Br=/(\w+)(\])?(\[|\.)?/g;function Vr(e,t){e.seq.push(t),e.map[t.id]=t}function Hr(e,t,n){let r=e.name,i=r.length;for(Br.lastIndex=0;;){let a=Br.exec(r),o=Br.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Vr(n,l===void 0?new Lr(s,e,t):new Rr(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new zr(s),Vr(n,e)),n=e}}}var Ur=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Hr(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Wr(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Gr=37297,Kr=0;function qr(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Jr=new V;function Yr(e){Se._getMatrix(Jr,Se.workingColorSpace,e);let t=`mat3( ${Jr.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(e)){case m:return[t,`LinearTransferOETF`];case Je:return[t,`sRGBTransferOETF`];default:return N(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Xr(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+qr(e.getShaderSource(t),r)}return i}function Zr(e,t){let n=Yr(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Qr={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function $r(e,t){let n=Qr[t];return n===void 0?(N(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ei=new O;function ti(){return Se.getLuminanceCoefficients(ei),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ei.x.toFixed(4)}, ${ei.y.toFixed(4)}, ${ei.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ni(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ai).join(`
`)}function ri(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ii(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ai(e){return e!==``}function oi(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function si(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ci=/^[ \t]*#include +<([\w\d./]+)>/gm;function li(e){return e.replace(ci,ui)}function ui(e,t){let n=X[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return li(n)}var di=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fi(e){return e.replace(di,pi)}function pi(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function mi(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var hi={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function gi(e){return hi[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var _i={302:`ENVMAP_MODE_REFRACTION`};function vi(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:_i[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var yi={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function bi(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:yi[e.combine]||`ENVMAP_BLENDING_NONE`}function xi(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=gi(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=vi(n),d=bi(n),f=ni(n),p=ri(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(ai).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(ai).join(`
`),g.length>0&&(g+=`
`)):(h=[mi(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ai).join(`
`),g=[mi(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:$r(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,Zr(`linearToOutputTexel`,n.outputColorSpace),ti(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ai).join(`
`)),o=li(o),o=oi(o,n),o=si(o,n),s=li(s),s=oi(s,n),s=si(s,n),o=fi(o),s=fi(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let y=_+h+o,b=_+g+s,x=Wr(i,i.VERTEX_SHADER,y),S=Wr(i,i.FRAGMENT_SHADER,b);i.attachShader(m,x),i.attachShader(m,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,x,S);else{let e=Xr(i,x,`vertex`),n=Xr(i,S,`fragment`);v(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):N(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(x),i.deleteShader(S),w=new Ur(i,m),T=ii(i,m)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(m,Gr)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Kr++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=S,this}var Si=0,Ci=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wi(e),t.set(e,n)),n}},wi=class{constructor(e){this.id=Si++,this.code=e,this.usedTimes=0}};function Ti(e){return e===1030||e===37490||e===36285}function Ei(e,t,n,r,a,o){let s=new i,c=new Ci,l=new Set,u=[],d=new Map,f=r.logarithmicDepthBuffer,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return l.add(e),e===0?`uv`:`uv${e}`}function h(i,a,s,u,d,h){let g=u.fog,_=d.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=p[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&N(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,ee,te;if(x){let e=$t[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=c.getVertexShaderStage(i),t=c.getFragmentShaderStage(i);c.update(i,e,t),ee=e.id,te=t.id}let O=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=d.isInstancedMesh===!0,k=d.isBatchedMesh===!0,A=!!i.map,j=!!i.matcap,ie=!!b,M=ie&&b.isPMREMTexture===!0,ae=!!i.aoMap,oe=!!i.lightMap,P=!!i.bumpMap&&i.wireframe===!1,F=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,I=!!i.metalnessMap,le=!!i.roughnessMap,L=i.anisotropy>0,ue=i.clearcoat>0,de=i.diffuseRoughness>0,fe=i.dispersion>0,pe=i.retroreflectivity>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=L&&!!i.anisotropyMap,ve=ue&&!!i.clearcoatMap,R=ue&&!!i.clearcoatNormalMap,ye=ue&&!!i.clearcoatRoughnessMap,be=de&&!!i.diffuseRoughnessMap,xe=me&&!!i.iridescenceMap,Ce=me&&!!i.iridescenceThicknessMap,we=he&&!!i.sheenColorMap,Te=he&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=ge&&!!i.transmissionMap,Ae=ge&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,Pe=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le=M?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Re={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:te,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:k,batchingColor:k&&d._colorsTexture!==null,instancing:re,instancingColor:re&&d.instanceColor!==null,instancingMorph:re&&d.morphTexture!==null,outputColorSpace:O===null?e.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Se.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:A,matcap:j,envMap:ie,envMapMode:ie&&b.mapping,envMapPMREM:M,envMapMaxLod:M?Le.length-1:null,envMapSize:M?Le[0].width:null,aoMap:ae,lightMap:oe,bumpMap:P,normalMap:F,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:F&&i.normalMapType===1,normalMapTangentSpace:F&&i.normalMapType===0,packedNormalMap:F&&i.normalMapType===0&&Ti(i.normalMap.format),metalnessMap:I,roughnessMap:le,anisotropy:L,anisotropyMap:_e,clearcoat:ue,clearcoatMap:ve,clearcoatNormalMap:R,clearcoatRoughnessMap:ye,diffuseRoughness:de,diffuseRoughnessMap:be,dispersion:fe,retroreflection:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Ce,sheen:he,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:ge,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:Pe,combine:i.combine,mapUv:A&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:P&&m(i.bumpMap.channel),normalMapUv:F&&m(i.normalMap.channel),displacementMapUv:se&&m(i.displacementMap.channel),emissiveMapUv:ce&&m(i.emissiveMap.channel),metalnessMapUv:I&&m(i.metalnessMap.channel),roughnessMapUv:le&&m(i.roughnessMap.channel),anisotropyMapUv:_e&&m(i.anisotropyMap.channel),clearcoatMapUv:ve&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:R&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&m(i.diffuseRoughnessMap.channel),iridescenceMapUv:xe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:De&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(F||L),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:d.isPoints===!0&&!!_.attributes.uv&&(A||Me),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&F===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ne,skinning:d.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:a.sun.length,numDirLights:a.directional.length,numPointLights:a.point.length,numSpotLights:a.spot.length,numSpotLightMaps:a.spotLightMap.length,numRectAreaLights:a.rectArea.length,numHemiLights:a.hemi.length,numSunLightShadows:a.sunShadowMap.length,numDirLightShadows:a.directionalShadowMap.length,numPointLightShadows:a.pointShadowMap.length,numSpotLightShadows:a.spotShadowMap.length,numSpotLightShadowsWithMaps:a.numSpotLightShadowsWithMaps,numLightProbes:a.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&s.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:A&&i.map.isVideoTexture===!0&&Se.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&Se.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||k)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.retroreflection&&s.enable(24),t.diffuseRoughness&&s.enable(25),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),t.packedNormalMap&&s.enable(22),t.vertexNormals&&s.enable(23),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),t.numLightProbeGrids>0&&s.enable(22),t.hasPositionAttribute&&s.enable(23),e.push(s.mask)}function y(e){let t=p[e.type],n;if(t){let e=$t[t];n=tt.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=d.get(n);return r===void 0?(r=new xi(e,n,t,a),u.push(r),d.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function S(e){c.remove(e)}function C(){c.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:u,dispose:C}}function Di(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Oi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ki(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ai(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Oi),r.length>1&&r.sort(t||ki),i.length>1&&i.sort(t||ki)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ji(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ai,e.set(t,[i])):n>=r.length?(i=new Ai,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Mi(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new O,color:new R};break;case`SpotLight`:n={position:new O,direction:new O,color:new R,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new O,color:new R,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new O,skyColor:new R,groundColor:new R};break;case`RectAreaLight`:n={color:new R,position:new O,halfWidth:new O,halfHeight:new O}}return e[t.id]=n,n}}}function Ni(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Pi=0;function Fi(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ii(e){let t=new Mi,n=Ni(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new O);let i=new O,a=new y,o=new y;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Fi);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Pi++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Li(e){let t=new Ii(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Ri(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Li(e),t.set(n,[a])):r>=i.length?(a=new Li(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var zi=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bi=`uniform sampler2D shadow_pass;
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
}`,Vi=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Hi=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Ui=new y,Wi=new O,Gi=new O;function Ki(e,t,r){let i=new T,a=new l,c=new l,u=new Fe,d=new de,f=new re,p={},m=r.maxTextureSize,h={0:1,1:0,2:2},g=new Le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new l},radius:{value:4}},vertexShader:zi,fragmentShader:Bi}),v=g.clone();v.defines.HORIZONTAL_PASS=1;let y=new He;y.setAttribute(`position`,new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new L(y,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let C=this.type;this.render=function(t,r,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(N(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),h=e.state;h.setBlending(0),h.buffers.depth.getReversed()===!0?h.buffers.color.setClear(0,0,0,0):h.buffers.color.setClear(1,1,1,1),h.buffers.depth.setTest(!0),h.setScissorTest(!1);let g=C!==this.type;g&&r.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let d=0,f=t.length;d<f;d++){let f=t[d],p=f.shadow;if(p===void 0){N(`WebGLShadowMap:`,f,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let v=p.getFrameExtents();a.multiply(v),c.copy(p.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(c.x=Math.floor(m/v.x),a.x=c.x*v.x,p.mapSize.x=c.x),a.y>m&&(c.y=Math.floor(m/v.y),a.y=c.y*v.y,p.mapSize.y=c.y));let y=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=y,p.map===null||g===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(f.isPointLight){N(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Ne(a.x,a.y,{format:S,type:_,minFilter:P,magFilter:P,generateMipmaps:!1}),p.map.texture.name=f.name+`.shadowMap`,p.map.depthTexture=new o(a.x,a.y,n),p.map.depthTexture.name=f.name+`.shadowMapDepth`,p.map.depthTexture.format=it,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=Ze,p.map.depthTexture.magFilter=Ze}else f.isPointLight?(p.map=new ln(a.x),p.map.depthTexture=new De(a.x,s)):(p.map=new Ne(a.x,a.y),p.map.depthTexture=new o(a.x,a.y,s)),p.map.depthTexture.name=f.name+`.shadowMap`,p.map.depthTexture.format=it,this.type===1?(p.map.depthTexture.compareFunction=y?518:515,p.map.depthTexture.minFilter=P,p.map.depthTexture.magFilter=P):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=Ze,p.map.depthTexture.magFilter=Ze);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let b=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();f.isPointLight!==!0&&p.updateMatrices(f,l);let x=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<b;t++){let n=p.getCamera(t);if(f.isPointLight){let e=p.camera,n=p.matrix,r=f.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Wi.setFromMatrixPosition(f.matrixWorld),e.position.copy(Wi),Gi.copy(e.position),Gi.add(Vi[t]),e.up.copy(Hi[t]),e.lookAt(Gi),e.updateMatrixWorld(),n.makeTranslation(-Wi.x,-Wi.y,-Wi.z),Ui.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Ui,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);u.set(c.x*n.x,c.y*n.y,c.x*n.z,c.y*n.w),h.viewport(u)}i=p.getFrustum(t),D(r,l,n,f,x,this.type)}p.isPointLightShadow!==!0&&this.type===3&&w(p,l),p.needsUpdate=!1}C=this.type,x.needsUpdate=!1,e.setRenderTarget(d,f,p)};function w(n,r){let i=t.update(b);g.defines.VSM_SAMPLES!==n.blurSamples&&(g.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Ne(a.x,a.y,{format:S,type:_}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),g.uniforms.shadow_pass.value=n.map.depthTexture,g.uniforms.resolution.value.set(n.map.width,n.map.height),g.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,g,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function E(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?f:d,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=p[e];r===void 0&&(r={},p[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,ee)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?h[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function D(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=E(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=E(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)D(l[e],r,a,o,s,c)}function ee(e){e.target.removeEventListener(`dispose`,ee);for(let t in p){let n=p[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function qi(e,t){function n(){let t=!1,n=new Fe,r=null,i=new Fe(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=be[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new R(0,0,0),E=0,D=!1,ee=null,te=null,O=null,ne=null,re=null,k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,j=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),A=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(ie)[1]),A=j>=1);let M=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),N=e.getParameter(e.VIEWPORT),P=new Fe().fromArray(oe),F=new Fe().fromArray(N);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),ge(!1),_e(1),I(e.CULL_FACE),me(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function L(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return h!==t&&(e.useProgram(t),h=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(le(e.BLEND),g=!1);else if(g===!1&&(I(e.BLEND),g=!0),t!==5){if(t!==_||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:v(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:v(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:v(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:v(`WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,_=t,D=u}}else a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(fe[n],fe[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),_=t,D=!1}function he(t,n){t.side===2?le(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){ee!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),ee=t)}function _e(t){t===0?le(e.CULL_FACE):(I(e.CULL_FACE),t!==te&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),te=t}function ve(t){t!==O&&(A&&e.lineWidth(t),O=t)}function ye(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(ne!==n||re!==r)&&(ne=n,re=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function xe(t){t?I(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+k-1),M!==t&&(e.activeTexture(t),M=t)}function Ce(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+k-1:M);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function we(){let t=ae[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){v(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){v(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){v(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){v(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){v(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){v(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){v(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){v(`WebGLState:`,e)}}function Ne(){try{e.texImage2D(...arguments)}catch(e){v(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){v(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Re(t){P.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),P.copy(t))}function ze(t){F.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),F.copy(t))}function Be(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function z(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,ae={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new R(0,0,0),E=0,D=!1,ee=null,te=null,O=null,ne=null,re=null,P.set(0,0,e.canvas.width,e.canvas.height),F.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:le,bindFramebuffer:L,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:Ne,texImage3D:Pe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:Be,uniformBlockBinding:z,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:Re,viewport:ze,reset:Ve}}function Ji(e,n,r,i,a,o,s){let c=n.has(`WEBGL_multisampled_render_to_texture`)?n.get(`WEBGL_multisampled_render_to_texture`):null,u=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),d=new l,f=new WeakMap,g=new Set,_,y=new WeakMap,b=new Set,x=new FinalizationRegistry(e=>b.delete(e)),S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):p(`canvas`)}function w(e,t,n){let r=1,i=z(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);_===void 0&&(_=C(n,a));let o=t?C(n,a):_;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),N(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&N(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function T(e){return e.generateMipmaps}function E(t){e.generateMipmap(t)}function D(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function ee(t,r,i,a,o,s=!1){if(t!==null){if(e[t]!==void 0)return e[t];N(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let c;a&&(c=n.get(`EXT_texture_norm16`),c||N(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?m:Se.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&n.get(`EXT_color_buffer_float`),l}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,N(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function O(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=new WeakRef(e);i.get(e).__ref=t,b.add(t),x.register(e,t,t)}function re(e){let t=i.get(e).__ref;t!==void 0&&(b.delete(t),x.unregister(t))}function k(e){M(e.target)}function A(e){ae(e.target)}function M(e){e.removeEventListener(`dispose`,k),re(e),se(e),e.isVideoTexture&&f.delete(e),e.isHTMLTexture&&g.delete(e)}function ae(e){e.removeEventListener(`dispose`,A),re(e),I(e)}function F(){for(let e of b){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ae(t):M(t))}b.clear(),g.clear()}function se(e){let t=i.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=y.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ce(e),Object.keys(r).length===0&&y.delete(n)}i.remove(e)}function ce(t){let n=i.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,a=y.get(r);delete a[n.__cacheKey],s.memory.textures--}function I(t){let n=i.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let r=t.depthTexture;if(r&&r.renderTarget===t&&M(r),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=i.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),s.memory.textures--),i.remove(a[t])}i.remove(t)}let le=0;function L(){le=0}function ue(){return le}function de(e){le=e}function fe(){let e=le;return e>=a.maxTextures&&N(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+a.maxTextures),le+=1,e}function pe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function me(t,n){let a=i.get(t);if(t.isVideoTexture&&ze(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)N(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)N(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ee(a,t,n);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);r.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+n)}function he(t,n){let a=i.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ee(a,t,n):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),r.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+n))}function ge(t,n){let a=i.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ee(a,t,n):r.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+n)}function _e(t,n){let a=i.get(t);t.version>0&&a.__version!==t.version?De(a,t,n):r.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+n)}let ve={[t]:e.REPEAT,[Qe]:e.CLAMP_TO_EDGE,[xe]:e.MIRRORED_REPEAT},R={[Ze]:e.NEAREST,[qe]:e.NEAREST_MIPMAP_NEAREST,[Ve]:e.NEAREST_MIPMAP_LINEAR,[P]:e.LINEAR,[oe]:e.LINEAR_MIPMAP_NEAREST,[h]:e.LINEAR_MIPMAP_LINEAR},ye={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function be(t,r){if(r.type===1015&&n.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&N(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,ve[r.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,ve[r.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,ve[r.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,R[r.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,R[r.minFilter]),r.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,ye[r.compareFunction])),n.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&n.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||i.get(r).__currentAnisotropy){let o=n.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,a.getMaxAnisotropy())),i.get(r).__currentAnisotropy=r.anisotropy}}}function Ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,k),ne(n));let i=n.source,a=y.get(i);a===void 0&&(a={},y.set(i,a));let o=pe(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ce(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function we(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Te(t,n,i,a){let o=t.updateRanges;if(o.length===0)r.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,i,a,n.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],r=o[e],i=t.start+t.count,a=we(r.start,n.width,4),c=we(t.start,n.width,4);r.start<=i+1&&a===c&&we(r.start+r.count-1,n.width,4)===a?t.count=Math.max(t.count,r.start+r.count-t.start):(++s,o[s]=r)}o.length=s+1;let c=r.getParameter(e.UNPACK_ROW_LENGTH),l=r.getParameter(e.UNPACK_SKIP_PIXELS),u=r.getParameter(e.UNPACK_SKIP_ROWS);r.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%n.width,d=Math.floor(c/n.width),f=l;r.pixelStorei(e.UNPACK_SKIP_PIXELS,u),r.pixelStorei(e.UNPACK_SKIP_ROWS,d),r.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,n.data)}t.clearUpdateRanges(),r.pixelStorei(e.UNPACK_ROW_LENGTH,c),r.pixelStorei(e.UNPACK_SKIP_PIXELS,l),r.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Ee(t,n,s){let c=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(c=e.TEXTURE_3D);let l=Ce(t,n),u=n.source;r.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=i.get(u);if(u.version!==d.__version||l===!0){if(r.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Se.getPrimaries(Se.workingColorSpace),i=n.colorSpace===``?null:Se.getPrimaries(n.colorSpace),a=n.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;r.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),r.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),r.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}r.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=w(n.image,!1,a.maxTextureSize);t=Be(n,t);let i=o.convert(n.format,n.colorSpace),f=o.convert(n.type),p=ee(n.internalFormat,i,f,n.normalized,n.colorSpace,n.isVideoTexture);be(c,n);let m,h=n.mipmaps,_=n.isVideoTexture!==!0,v=d.__version===void 0||l===!0,y=u.dataReady,b=O(n,t);if(n.isDepthTexture)p=te(n.format===ie,n.type),v&&(_?r.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):r.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,i,f,null));else if(n.isDataTexture){if(h.length>0){_&&v&&r.texStorage2D(e.TEXTURE_2D,b,p,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)m=h[t],_?y&&r.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,i,f,m.data):r.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,i,f,m.data);n.generateMipmaps=!1}else _?(v&&r.texStorage2D(e.TEXTURE_2D,b,p,t.width,t.height),y&&Te(n,t,i,f)):r.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,i,f,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){_&&v&&r.texStorage3D(e.TEXTURE_2D_ARRAY,b,p,h[0].width,h[0].height,t.depth);for(let a=0,o=h.length;a<o;a++)if(m=h[a],n.format!==1023){if(i!==null){if(_){if(y){if(n.layerUpdates.size>0){let t=j(m.width,m.height,n.format,n.type);for(let o of n.layerUpdates){let n=m.data.subarray(o*t/m.data.BYTES_PER_ELEMENT,(o+1)*t/m.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,o,m.width,m.height,1,i,n)}}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,m.width,m.height,t.depth,i,m.data)}}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,a,p,m.width,m.height,t.depth,0,m.data,0,0)}else N(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?y&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,m.width,m.height,t.depth,i,f,m.data):r.texImage3D(e.TEXTURE_2D_ARRAY,a,p,m.width,m.height,t.depth,0,i,f,m.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{_&&v&&r.texStorage2D(e.TEXTURE_2D,b,p,h[0].width,h[0].height);for(let t=0,a=h.length;t<a;t++)m=h[t],n.format===1023?_?y&&r.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,i,f,m.data):r.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,i,f,m.data):i===null?N(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?y&&r.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,i,m.data):r.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(n.isDataArrayTexture){if(_){if(v&&r.texStorage3D(e.TEXTURE_2D_ARRAY,b,p,t.width,t.height,t.depth),y){if(n.layerUpdates.size>0){let a=j(t.width,t.height,n.format,n.type);for(let o of n.layerUpdates){let n=t.data.subarray(o*a/t.data.BYTES_PER_ELEMENT,(o+1)*a/t.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,i,f,n)}n.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,i,f,t.data)}}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,i,f,t.data)}else if(n.isData3DTexture)_?(v&&r.texStorage3D(e.TEXTURE_3D,b,p,t.width,t.height,t.depth),y&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,i,f,t.data)):r.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,i,f,t.data);else if(n.isFramebufferTexture){if(v){if(_)r.texStorage2D(e.TEXTURE_2D,b,p,t.width,t.height);else{let n=t.width,a=t.height;for(let t=0;t<b;t++)r.texImage2D(e.TEXTURE_2D,t,p,n,a,0,i,f,null),n>>=1,a>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),g.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of g)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(_&&v){let t=z(h[0]);r.texStorage2D(e.TEXTURE_2D,b,p,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)m=h[t],_?y&&r.texSubImage2D(e.TEXTURE_2D,t,0,0,i,f,m):r.texImage2D(e.TEXTURE_2D,t,p,i,f,m);n.generateMipmaps=!1}else if(_){if(v){let n=z(t);r.texStorage2D(e.TEXTURE_2D,b,p,n.width,n.height)}y&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,i,f,t)}else r.texImage2D(e.TEXTURE_2D,0,p,i,f,t);T(n)&&n.mipmapsAutoUpdate===!0&&E(c),d.__version=u.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function De(t,n,s){if(n.image.length!==6)return;let c=Ce(t,n),l=n.source;r.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=i.get(l);if(l.version!==u.__version||c===!0){r.activeTexture(e.TEXTURE0+s);let t=Se.getPrimaries(Se.workingColorSpace),i=n.colorSpace===``?null:Se.getPrimaries(n.colorSpace),d=n.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;r.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),r.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),r.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),r.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=n.isCompressedTexture||n.image[0].isCompressedTexture,p=n.image[0]&&n.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=w(n.image[e],!0,a.maxCubemapSize):m[e]=p?n.image[e].image:n.image[e],m[e]=Be(n,m[e]);let h=m[0],g=o.convert(n.format,n.colorSpace),_=o.convert(n.type),v=ee(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=O(n,h);be(e.TEXTURE_CUBE_MAP,n);let C;if(n.isDepthTexture){if(v=te(n.format===ie,n.type),b){if(y)r.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(f){y&&b&&r.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let i=0;i<C.length;i++){let a=C[i];n.format===1023?y?x&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,_,a.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,g,_,a.data):g===null?N(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,a.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,a.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=z(m[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let n=0;n<C.length;n++){let i=C[n].image[t].image;y?x&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,i.width,i.height,g,_,i.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let n=0;n<C.length;n++){let i=C[n];y?x&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,i.image[t]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,i.image[t])}}}T(n)&&n.mipmapsAutoUpdate===!0&&E(e.TEXTURE_CUBE_MAP),u.__version=l.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Oe(t,n,a,s,l,u){let d=o.convert(a.format,a.colorSpace),f=o.convert(a.type),p=ee(a.internalFormat,d,f,a.normalized,a.colorSpace),m=i.get(n),h=i.get(a);if(h.__renderTarget=n,!m.__hasExternalTextures){let t=Math.max(1,n.width>>u),i=Math.max(1,n.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?r.texImage3D(l,u,p,t,i,n.depth,0,d,f,null):r.texImage2D(l,u,p,t,i,0,d,f,null)}r.bindFramebuffer(e.FRAMEBUFFER,t),Re(n)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,h.__webglTexture,0,Le(n)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,h.__webglTexture,u),r.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Re(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Le(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Le(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],s=o.convert(a.format,a.colorSpace),l=o.convert(a.type),u=ee(a.internalFormat,s,l,a.normalized,a.colorSpace);Re(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Le(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Le(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ae(t,n,a){let o=n.isWebGLCubeRenderTarget===!0;if(r.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let s=i.get(n.depthTexture);s.__renderTarget=n;let l=o?n.depthTexture.image[0]:n.depthTexture.image;s.__webglTexture&&l.width===n.width&&l.height===n.height||(l.width=n.width,l.height=n.height,n.depthTexture.needsUpdate=!0),o?_e(n.depthTexture,0):me(n.depthTexture,0);let u=s.__webglTexture,d=Le(n),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Re(n)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(n.depthTexture.format===1027)Re(n)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function je(t){let n=i.get(t),a=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Ae(n.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Ae(n.__webglFramebuffer[0],t,0):Ae(n.__webglFramebuffer,t,0)}else if(a){n.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(r.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[i]),n.__webglDepthbuffer[i]===void 0)n.__webglDepthbuffer[i]=e.createRenderbuffer(),ke(n.__webglDepthbuffer[i],t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[i];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?r.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):r.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),ke(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}r.bindFramebuffer(e.FRAMEBUFFER,null)}function Me(t,n,r){let a=i.get(t);n!==void 0&&Oe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&je(t)}function Ne(t){let n=t.texture,a=i.get(t),c=i.get(n);t.addEventListener(`dispose`,A),ne(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=n.version,s.memory.textures++),u){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let r=0;r<n.mipmaps.length;r++)a.__webglFramebuffer[t][r]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=i.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),s.memory.textures++)}if(t.samples>0&&Re(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=o.convert(r.format,r.colorSpace),s=o.convert(r.type),c=ee(r.internalFormat,i,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Le(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),ke(a.__webglDepthRenderbuffer,t,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){r.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),be(e.TEXTURE_CUBE_MAP,n);for(let r=0;r<6;r++)if(n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)Oe(a.__webglFramebuffer[r][i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Oe(a.__webglFramebuffer[r],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);T(n)?E(e.TEXTURE_CUBE_MAP):n.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),r.unbindTexture()}else if(d){for(let n=0,o=l.length;n<o;n++){let o=l[n],s=i.get(o),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(c,s.__webglTexture),be(c,o),Oe(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+n,c,0),T(o)&&E(c)}r.unbindTexture()}else{let i=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(i=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(i,c.__webglTexture),be(i,n),n.mipmaps.length>0)for(let r=0;r<n.mipmaps.length;r++)Oe(a.__webglFramebuffer[r],t,n,e.COLOR_ATTACHMENT0,i,r);else Oe(a.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,i,0);T(n)?E(i):n.mipmaps.length>0&&e.texParameteri(i,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),r.unbindTexture()}t.depthBuffer&&je(t)}function Pe(e){let t=e.textures;for(let n=0,a=t.length;n<a;n++){let a=t[n];if(T(a)&&a.mipmapsAutoUpdate===!0){let t=D(e),n=i.get(a).__webglTexture;r.bindTexture(t,n),E(t),r.unbindTexture()}}}let Fe=[];function Ie(t){if(t.samples>0){if(Re(t)===!1){let n=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=i.get(t),d=n.length>1;if(d)for(let t=0;t<n.length;t++)r.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?r.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):r.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let r=0;r<n.length;r++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[r]);let t=i.get(n[r]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),u===!0&&(Fe.length=0,Fe.push(e.COLOR_ATTACHMENT0+r),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Fe.push(c),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Fe))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<n.length;t++){r.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let a=i.get(n[t]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&u){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Le(e){return Math.min(a.maxSamples,e.samples)}function Re(e){let t=i.get(e);return e.samples>0&&n.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function ze(e){let t=s.render.frame;f.get(e)!==t&&(f.set(e,t),e.update())}function Be(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Se.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&N(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):v(`WebGLTextures: Unsupported texture color space:`,n)),t}function z(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(d.width=e.naturalWidth||e.width,d.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(d.width=e.displayWidth,d.height=e.displayHeight):(d.width=e.width,d.height=e.height),d}this.allocateTextureUnit=fe,this.resetTextureUnits=L,this.getTextureUnits=ue,this.setTextureUnits=de,this.setTexture2D=me,this.setTexture2DArray=he,this.setTexture3D=ge,this.setTextureCube=_e,this.rebindTextures=Me,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Re,this.dispose=F}function Yi(e,t){function n(n,r=``){let i,a=Se.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Xi=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zi=`
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

}`,Qi=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new c(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Le({vertexShader:Xi,fragmentShader:Zi,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new L(new ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$i=class extends u{constructor(e,t){super();let n=this,r=null,i=1,a=null,u=`local-floor`,d=1,f=null,p=null,m=null,h=null,g=null,_=null,v=typeof XRWebGLBinding<`u`,y=new Qi,b={},x=t.getContextAttributes(),S=null,C=null,w=[],T=[],D=new l,ee=null,te=null,O=new We;O.viewport=new Fe;let ne=new We;ne.viewport=new Fe;let re=[O,ne],k=new z,A=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=w[e];return t===void 0&&(t=new E,w[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=w[e];return t===void 0&&(t=new E,w[e]=t),t.getGripSpace()},this.getHand=function(e){let t=w[e];return t===void 0&&(t=new E,w[e]=t),t.getHandSpace()};function M(e){let t=T.indexOf(e.inputSource);if(t===-1)return;let n=w[t];n!==void 0&&(n.update(e.inputSource,e.frame,f||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,M),r.removeEventListener(`selectstart`,M),r.removeEventListener(`selectend`,M),r.removeEventListener(`squeeze`,M),r.removeEventListener(`squeezestart`,M),r.removeEventListener(`squeezeend`,M),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<w.length;e++){let t=T[e];t!==null&&(T[e]=null,w[e].disconnect(t))}A=null,j=null,y.reset();for(let e in b)delete b[e];if(e.setRenderTarget(S),g=null,h=null,m=null,r=null,C=null,I.stop(),n.isPresenting=!1,e.setPixelRatio(ee),e.setSize(D.width,D.height,!1),te!==null){let e=te.camera;e.fov=te.fov,e.zoom=te.zoom,e.updateProjectionMatrix(),te=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&N(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){u=e,n.isPresenting===!0&&N(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function(e){f=e},this.getBaseLayer=function(){return h===null?g:h},this.getBinding=function(){return m===null&&v&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(c){if(r=c,r!==null){if(S=e.getRenderTarget(),r.addEventListener(`select`,M),r.addEventListener(`selectstart`,M),r.addEventListener(`selectend`,M),r.addEventListener(`squeeze`,M),r.addEventListener(`squeezestart`,M),r.addEventListener(`squeezeend`,M),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),x.xrCompatible!==!0&&await t.makeXRCompatible(),ee=e.getPixelRatio(),e.getSize(D),v&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,c=null;x.depth&&(c=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=x.stencil?ie:it,a=x.stencil?at:s);let l={colorFormat:t.RGBA8,depthFormat:c,scaleFactor:i};m=this.getBinding(),h=m.createProjectionLayer(l),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),C=new Ne(h.textureWidth,h.textureHeight,{format:ke,type:st,depthTexture:new o(h.textureWidth,h.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let n={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:i};g=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),C=new Ne(g.framebufferWidth,g.framebufferHeight,{format:ke,type:st,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),f=null,a=await r.requestReferenceSpace(u),I.setContext(r),I.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=T.indexOf(n);r>=0&&(T[r]=null,w[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=T.indexOf(n);if(r===-1){for(let e=0;e<w.length;e++)if(e>=T.length){T.push(n),r=e;break}else if(T[e]===null){T[e]=n,r=e;break}if(r===-1)break}let i=w[r];i&&i.connect(n)}}function P(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;y.texture!==null&&(y.depthNear>0&&(t=y.depthNear),y.depthFar>0&&(n=y.depthFar)),k.near=ne.near=O.near=t,k.far=ne.far=O.far=n,(A!==k.near||j!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),A=k.near,j=k.far),k.layers.mask=e.layers.mask|6,O.layers.mask=k.layers.mask&-5,ne.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;P(k,i);for(let e=0;e<a.length;e++)P(a[e],i);k.projectionMatrix.copy(O.projectionMatrix),k.projectionMatrixInverse.copy(O.projectionMatrixInverse),te===null&&e.isPerspectiveCamera&&(te={camera:e,fov:e.fov,zoom:e.zoom}),F(e,k,i)};function F(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ye*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(h!==null||g!==null)return d},this.setFoveation=function(e){d=e,h!==null&&(h.fixedFoveation=e),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=e)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(k)},this.getCameraTexture=function(e){return b[e]};let se=null;function ce(t,i){if(p=i.getViewerPose(f||a),_=i,p!==null){let t=p.views;g!==null&&(e.setRenderTargetFramebuffer(C,g.framebuffer),e.setRenderTarget(C));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(g!==null)a=g.getViewport(r);else{let t=m.getViewSubImage(h,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(C,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(C))}let o=re[n];o===void 0&&(o=new We,o.layers.enable(n),o.viewport=new Fe,re[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&v){m=n.getBinding();let e=m.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&y.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&v){e.state.unbindTexture(),m=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=b[n];e||(e=new c,b[n]=e);let t=m.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<w.length;e++){let t=T[e],n=w[e];t!==null&&n!==void 0&&n.update(t,i,f||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),_=null}let I=new Zt;I.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},ea=new y,ta=new V;ta.set(-1,0,0,0,1,0,0,0,1);function na(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ct(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ea.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(ta),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ra(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?N(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):N(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var ia=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),aa=null;function oa(){return aa===null&&(aa=new ge(ia,16,16,S,_),aa.name=`DFG_LUT`,aa.minFilter=P,aa.magFilter=P,aa.wrapS=Qe,aa.wrapT=Qe,aa.generateMipmaps=!1,aa.needsUpdate=!0),aa}var sa=class{constructor(e={}){let{canvas:t=ne(),context:n=null,depth:i=!0,stencil:o=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:p=`default`,failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:b=!1,outputBufferType:x=st}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);S=n.getContextAttributes().alpha}else S=c;let C=x,w=new Set([Ee,Ke,k]),E=new Set([st,s,d,at,rt,ae]),ee=new Uint32Array(4),te=new Int32Array(4),re={textures:[],min:[],max:[],resolution:[]},A=null,j=null,ie=[],M=[],oe=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,F=!1,se=null,ce=null,I=null,le=null;this._outputColorSpace=Ue;let L=0,ue=0,de=null,fe=-1,pe=null,me=new Fe,he=new Fe,ge=null,_e=new R(0),ve=0,ye=t.width,be=t.height,xe=1,Ce=null,we=null,Te=new Fe(0,0,ye,be),De=new Fe(0,0,ye,be),Oe=!1,ke=new T,Ae=new D,je=!1,Me=!1,Pe=new y,Ie=new O,Le=new Fe,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ze=!1;function Be(){return de===null?xe:1}let z=n;function Ve(e,n){return t.getContext(e,n)}let He,We,B,Ge,V,H,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,it,ot,ct,U,W,lt,ut;try{let e={alpha:!0,depth:i,stencil:o,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:m};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,pt,!1),t.addEventListener(`webglcontextrestored`,mt,!1),t.addEventListener(`webglcontextcreationerror`,ht,!1),z===null){let t=`webgl2`;if(z=Ve(t,e),z===null)throw Ve(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}dt()}catch(e){throw t.removeEventListener(`webglcontextlost`,pt,!1),t.removeEventListener(`webglcontextrestored`,mt,!1),t.removeEventListener(`webglcontextcreationerror`,ht,!1),v(`WebGLRenderer: `+e.message),e}function dt(){He=new Dn(z),He.init(),W=new Yi(z,He),We=new sn(z,He,e,W),B=new qi(z,He),We.reversedDepthBuffer&&b&&B.buffers.depth.setReversed(!0),ce=z.createFramebuffer(),I=z.createFramebuffer(),le=z.createFramebuffer(),Ge=new An(z),V=new Di,H=new Ji(z,He,B,V,We,W,Ge),qe=new En(P),Je=new Qt(z),lt=new an(z,Je),Ye=new On(z,Je,Ge,lt),Xe=new Mn(z,Ye,Je,lt,Ge),ot=new jn(z,We,H),tt=new cn(V),Ze=new Ei(P,qe,He,We,lt,tt),Qe=new na(P,V),$e=new ji,et=new Ri(He),it=new rn(P,qe,B,Xe,S,u),nt=new Ki(P,Xe,We),ut=new ra(z,Ge,We,B),ct=new on(z,He,Ge),U=new kn(z,He,Ge),Ge.programs=Ze.programs,P.capabilities=We,P.extensions=He,P.properties=V,P.renderLists=$e,P.shadowMap=nt,P.state=B,P.info=Ge}C!==1009&&(oe=new Pn(C,t.width,t.height,l,i,o));let ft=new $i(P,z);this.xr=ft,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=He.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=He.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){ft.isPresenting?N(`WebGLRenderer: Can't change size while VR device is presenting.`):(ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),oe!==null&&oe.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(C===1009)v(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){N(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}oe.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(Te)},this.setViewport=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),B.viewport(me.copy(Te).multiplyScalar(Be()).round())},this.getScissor=function(e){return e.copy(De)},this.setScissor=function(e,t,n,r){e.isVector4?De.set(e.x,e.y,e.z,e.w):De.set(e,t,n,r),B.scissor(he.copy(De).multiplyScalar(Be()).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(e){B.setScissorTest(Oe=e)},this.setOpaqueSort=function(e){Ce=e},this.setTransparentSort=function(e){we=e},this.getClearColor=function(e){return e.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(de!==null){let t=de.texture.format;e=w.has(t)}if(e){let e=de.texture.type,t=E.has(e),n=it.getClearColor(),r=it.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(ee[0]=i,ee[1]=a,ee[2]=o,ee[3]=r,z.clearBufferuiv(z.COLOR,0,ee)):(te[0]=i,te[1]=a,te[2]=o,te[3]=r,z.clearBufferiv(z.COLOR,0,te))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),se=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,pt,!1),t.removeEventListener(`webglcontextrestored`,mt,!1),t.removeEventListener(`webglcontextcreationerror`,ht,!1),it.dispose(),$e.dispose(),et.dispose(),H.dispose(),V.dispose(),qe.dispose(),Xe.dispose(),Ye.dispose(),lt.dispose(),ut.dispose(),Ze.dispose(),ft.dispose(),ft.removeEventListener(`sessionstart`,K),ft.removeEventListener(`sessionend`,xt),St.stop()};function pt(e){e.preventDefault(),a(`WebGLRenderer: Context Lost.`),F=!0}function mt(){a(`WebGLRenderer: Context Restored.`),F=!1;let e=Ge.autoReset,t=nt.enabled,n=nt.autoUpdate,r=nt.needsUpdate,i=nt.type;dt(),Ge.autoReset=e,nt.enabled=t,nt.autoUpdate=n,nt.needsUpdate=r,nt.type=i}function ht(e){v(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function gt(e){let t=e.target;t.removeEventListener(`dispose`,gt),_t(t)}function _t(e){vt(e),V.remove(e)}function vt(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){Ze.releaseProgram(e)}),e.isShaderMaterial&&Ze.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Re);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Nt(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ye.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;lt.setup(i,r,s,n,c);let h,g=ct;if(c!==null&&(h=Je.get(c),g=U,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*Be()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*Be()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh){if(He.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Je.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function yt(e,t,n,r){se!==null&&e.isNodeMaterial&&se.setObject(r,e),je===!0&&tt.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,kt(e,t,r),e.side=0,e.needsUpdate=!0,kt(e,t,r),e.side=2):kt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),se!==null&&se.renderStart(e,t,n),j=et.get(n),j.init(t),M.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),se!==null&&se.updateLights(j.state.lightsArray),Me=this.localClippingEnabled,je=tt.init(this.clippingPlanes,Me),je===!0&&tt.setGlobalState(this.clippingPlanes,t),se!==null&&nt.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];yt(o,n,t,e),r.add(o)}else yt(i,n,t,e),r.add(i)}}),j=M.pop(),se!==null&&se.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=V.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}He.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let G=null;function bt(e){G&&G(e)}function K(){St.stop()}function xt(){St.start()}let St=new Zt;St.setAnimationLoop(bt),typeof self<`u`&&St.setContext(self),this.setAnimationLoop=function(e){G=e,ft.setAnimationLoop(e),e===null?St.stop():St.start()},ft.addEventListener(`sessionstart`,K),ft.addEventListener(`sessionend`,xt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){v(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(F===!0)return;se!==null&&se.renderStart(e,t);let n=ft.enabled===!0&&ft.isPresenting===!0,i=oe!==null&&(de===null||n)&&oe.begin(P,de);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(oe===null||oe.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(t),t=ft.getCamera()),e.isScene===!0&&e.onBeforeRender(P,e,t,de),j=et.get(e,M.length),j.init(t),j.state.textureUnits=H.getTextureUnits(),M.push(j),Pe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Ae.setFromArrayCamera(t):ke.setFromProjectionMatrix(Pe,r,t.reversedDepth),Me=this.localClippingEnabled,je=tt.init(this.clippingPlanes,Me),A=$e.get(e,ie.length),A.init(),ie.push(A),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){let e=P.xr.getDepthSensingMesh();e!==null&&Ct(e,t,-1/0,P.sortObjects)}Ct(e,t,0,P.sortObjects),A.finish(),se!==null&&se.updateLights(j.state.lightsArray),P.sortObjects===!0&&A.sort(Ce,we),ze=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,ze&&it.addToRenderList(A,e),this.info.autoReset===!0&&this.info.reset(),je===!0&&tt.beginShadows();let a=j.state.shadowsArray;if(nt.render(a,e,t),je===!0&&tt.endShadows(),(i&&oe.hasRenderPass())===!1){let n=A.opaque,r=A.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Tt(n,r,e,a)}ze&&it.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];wt(A,e,n,n.viewport)}}else r.length>0&&Tt(n,r,e,t),ze&&it.render(e),wt(A,e,t)}de!==null&&ue===0&&(H.updateMultisampleRenderTarget(de),H.updateRenderTargetMipmap(de)),i&&oe.end(P),e.isScene===!0&&e.onAfterRender(P,e,t),lt.resetDefaultState(),fe=-1,pe=null,M.pop(),M.length>0?(j=M[M.length-1],H.setTextureUnits(j.state.textureUnits),je===!0&&tt.setGlobalState(P.clippingPlanes,j.state.camera)):j=null,ie.pop(),A=ie.length>0?ie[ie.length-1]:null,se!==null&&se.renderEnd()};function Ct(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Ae:ke;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Le.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Pe);let i=Xe.update(e),a=e.material;a.visible&&A.push(e,i,a,n,Le.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Ae:ke;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Xe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Le.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Le.copy(e.boundingSphere.center)),Le.applyMatrix4(e.matrixWorld).applyMatrix4(Pe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&A.push(e,i,c,n,Le.z,s,t)}}else a.visible&&A.push(e,i,a,n,Le.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ct(i[e],t,n,r)}function wt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),je===!0&&tt.setGlobalState(P.clippingPlanes,n),r&&B.viewport(me.copy(r)),i.length>0&&Et(i,t,n),a.length>0&&Et(a,t,n),o.length>0&&Et(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=He.has(`EXT_color_buffer_half_float`)||He.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new Ne(1,1,{generateMipmaps:!0,type:e?_:st,minFilter:h,samples:Math.max(4,We.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Se.workingColorSpace})}let i=j.state.transmissionRenderTarget[r.id],a=r.viewport||me;i.setSize(a.z*P.transmissionResolutionScale,a.w*P.transmissionResolutionScale);let s=P.getRenderTarget(),c=P.getActiveCubeFace(),l=P.getActiveMipmapLevel();P.setRenderTarget(i),P.getClearColor(_e),ve=P.getClearAlpha(),ve<1&&P.setClearColor(16777215,.5),P.clear(),ze&&it.render(n);let u=P.toneMapping;P.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),je===!0&&tt.setGlobalState(P.clippingPlanes,r),Et(e,n,r),H.updateMultisampleRenderTarget(i),H.updateRenderTargetMipmap(i),He.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Dt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(H.updateMultisampleRenderTarget(i),H.updateRenderTargetMipmap(i))}P.setRenderTarget(s,c,l),P.setClearColor(_e,ve),d!==void 0&&(r.viewport=d),P.toneMapping=u}function Et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Dt(o,t,n,s,l,c)}}function Dt(e,t,n,r,i,a){se!==null&&i.isNodeMaterial&&se.setObject(e,i),e.onBeforeRender(P,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(P,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=2):P.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(P,t,n,r,i,a)}function Ot(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function kt(e,t,n){t.isScene!==!0&&(t=Re);let r=V.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=Ze.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=Ze.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=qe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,gt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Mt(e,s),d}else s.uniforms=Ze.getUniforms(e),se!==null&&e.isNodeMaterial&&se.build(e,n,s),e.onBeforeCompile(s,P),d=Ze.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=tt.uniform),Mt(e,s),r.needsLights=Ft(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Ot(j.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function At(e,t,n,r,i){let a=V.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=kt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function jt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ur.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Mt(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Nt(e,t,n,r,i){t.isScene!==!0&&(t=Re),H.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=de===null?P.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Se.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=qe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(h=P.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=V.get(r),y=j.state.lights;if(je===!0&&(Me===!0||e!==pe)){let t=e===pe&&r.id===fe;tt.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==tt.numPlanes||v.numIntersection!==tt.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Ot(j.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?At(r,t,i,s,h):kt(r,t,i),se&&r.isNodeMaterial&&se.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),D=v.uniforms;if(B.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==fe&&(fe=r.id,w=!0),C||pe!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(z,`projectionMatrix`,e.projectionMatrix),E.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(z,Ie.setFromMatrixPosition(e.matrixWorld)),We.logarithmicDepthBuffer&&E.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(z,`sunShadowMap`,y.state.sunShadowMap,H),y.state.directionalShadowMap.length>0&&E.setValue(z,`directionalShadowMap`,y.state.directionalShadowMap,H),y.state.spotShadowMap.length>0&&E.setValue(z,`spotShadowMap`,y.state.spotShadowMap,H),y.state.pointShadowMap.length>0&&E.setValue(z,`pointShadowMap`,y.state.pointShadowMap,H)),i.isSkinnedMesh){E.setOptional(z,i,`bindMatrix`),E.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(z,`boneTexture`,e.boneTexture,H))}i.isBatchedMesh&&(E.setOptional(z,i,`batchingTexture`),E.setValue(z,`batchingTexture`,i._matricesTexture,H),E.setOptional(z,i,`batchingIdTexture`),E.setValue(z,`batchingIdTexture`,i._indirectTexture,H),E.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(z,`batchingColorTexture`,i._colorsTexture,H));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&ot.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=oa()),w){if(E.setValue(z,`toneMappingExposure`,P.toneMappingExposure),v.needsLights&&Pt(D,T),a&&r.fog===!0&&Qe.refreshFogUniforms(D,a),Qe.refreshMaterialUniforms(D,r,xe,be,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=re,t=0;for(let n of j.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;D.probesSH.value=e.textures,D.probesMin.value=e.min,D.probesMax.value=e.max,D.probesResolution.value=e.resolution}Ur.upload(z,jt(v),D,H)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ur.upload(z,jt(v),D,H),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(z,`center`,i.center),E.setValue(z,`modelViewMatrix`,i.modelViewMatrix),E.setValue(z,`normalMatrix`,i.normalMatrix),E.setValue(z,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ut.update(n,S),ut.bind(n,S)}}return S}function Pt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ft(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return de},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){de=e,L=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,B.viewport(me),B.scissor(he),B.setScissorTest(ge),fe=-1;return}if(o.__webglFramebuffer===void 0)H.setupRenderTarget(e);else if(o.__hasExternalTextures)H.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);H.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&H.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(Te).multiplyScalar(xe).floor(),he.copy(De).multiplyScalar(xe).floor(),ge=Oe;if(n!==0&&(r=ce),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(me),B.scissor(he),B.setScissorTest(ge),i){let r=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}fe=-1};function It(e){let t=V.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=We.textureFormatReadable(e.format),t.__typeReadable=We.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){v(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){B.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let u=It(o);if(u.__formatReadable===!1){v(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){v(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,W.convert(c),W.convert(l),a)}finally{let e=de===null?null:V.get(de).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let d=It(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,W.convert(l),W.convert(u),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let p=de===null?null:V.get(de).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,p);let m=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await g(z,m,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(f),z.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;H.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=W.convert(t.format),_=W.convert(t.type),v;t.isData3DTexture?(H.setTexture3D(t,0),v=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(H.setTexture2DArray(t,0),v=z.TEXTURE_2D_ARRAY):(H.setTexture2D(t,0),v=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(z.UNPACK_ROW_LENGTH),b=B.getParameter(z.UNPACK_IMAGE_HEIGHT),x=B.getParameter(z.UNPACK_SKIP_PIXELS),S=B.getParameter(z.UNPACK_SKIP_ROWS),C=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,l),B.pixelStorei(z.UNPACK_SKIP_ROWS,u),B.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,I),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),T?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?T?z.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(v,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(z.UNPACK_ROW_LENGTH,y),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(z.UNPACK_SKIP_PIXELS,x),B.pixelStorei(z.UNPACK_SKIP_ROWS,S),B.pixelStorei(z.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&z.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&H.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?H.setTextureCube(e,0):e.isData3DTexture?H.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?H.setTexture2DArray(e,0):H.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){L=0,ue=0,de=null,B.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return r}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(e),t.unpackColorSpace=Se._getUnpackColorSpace()}},ca=24,la=[11,8,5,2],ua=.26;function da(e,t){return e.userData.harborGlow=t,e}function fa(){let{canvas:e,context:t}=Jt(ca,ca);for(let e of la){t.fillStyle=`rgba(255,255,255,0.20)`;let n=ca/2;for(let r=-e;r<=e;r++){let i=Math.floor(Math.sqrt(e*e-r*r));t.fillRect(n-i,n+r,i*2+1,1)}}return Ht(e)}function pa(e){let t=Ut.beam,n=new f,r=new L(new B(t.radius,t.length,t.facets,1,!0),new I({color:t.color,transparent:!0,depthWrite:!1,side:2,blending:2}));return r.position.x=t.length/2,r.rotation.z=Math.PI/2,n.position.set(...t.position),n.add(r),e.add(n),(e,i,a)=>{n.visible=a.beam&&(e>0||a.pulse>0),n.rotation.y=i*t.turnSpeed,r.material.opacity=t.opacity*Math.min(1,e+a.pulse)*(1+a.pulse)}}function ma(t){let n=[],r=[];return t.updateMatrixWorld(!0),t.traverse(t=>{if(!(t instanceof L)||!t.userData.harborGlow)return;let i=t.userData.harborGlow,a=Ut.glow[i];if(t.material instanceof e&&(t.material=t.material.clone(),t.material.emissive.set(a.color),n.push({kind:i,material:t.material})),t.userData.movingGlow)return;let o=t.userData.glowPoints;for(let e of o??[t.getWorldPosition(new O)])r.push({kind:i,point:e})}),{surfaces:n,anchors:r}}function ha(e,t){let n=fa(),{surfaces:r,anchors:i}=ma(e),a=t?Ut.simplifiedHaloLimit:Ut.haloLimit;i.sort((e,t)=>Ut.glow[t.kind].size-Ut.glow[e.kind].size);let o=i.slice(0,a).map(({kind:t,point:r})=>{let i=Ut.glow[t],a=new Ge(new Be({map:n,color:i.color,transparent:!0,depthWrite:!1,blending:2}));return a.position.copy(r),a.scale.setScalar(i.size),a.visible=!1,e.add(a),{kind:t,halo:a}}),s=pa(e),c=-1,l=!1;return(e,t,n)=>{if(s(e,t,{beam:n.beam,pulse:n.pulse??0}),e!==c||l!==n.halos){c=e,l=n.halos;for(let{kind:t,material:n}of r){let r=Ut.glow[t];n.emissiveIntensity=x.lerp(r.day,r.night,e)}for(let{kind:t,halo:r}of o){let i=Ut.glow[t],a=x.lerp(i.day,i.night,e);r.visible=n.halos&&e>0,r.material.opacity=a*e*ua}}}}function ga(){let e=Kt(),t=new Ae;function n(n,r,i){let a=new L(t,e(...i));return a.position.set(...n),a.scale.set(...r),a}function r(t,n,r){let i=new L(new fe(...n),e(...r));return i.position.set(...t),i}function i(e,t,r){let i=new O(...e[0]),a=new O(...e[1]),o=a.clone().sub(i),s=n(i.lerp(a,.5).toArray(),[t,o.length(),t],r);return s.quaternion.setFromUnitVectors(je.DEFAULT_UP,o.normalize()),s}return{box:n,cylinder:r,beam:i,surface:e}}function _a(e,t,n){let r=new f,[i,a,o]=n,{box:s,surface:c}=e,l=i*.31;r.add(s([0,a/2,0],n,[t.wall,`brick`]));let u=new $e;u.moveTo(-i/2,0),u.lineTo(i/2,0),u.lineTo(0,l);let d=new L(new te(u,{depth:o,bevelEnabled:!1}),c(t.wall));d.position.set(0,a,-o/2),r.add(d);for(let e of[-1,1]){let n=Math.atan2(l,i/2),c=s([e*i*.25,a+l/2,0],[Math.hypot(i/2,l)+.42,.16,o+.48],[t.roof,`roof`]);c.rotation.z=-e*n,r.add(c);let u=e*i*.29,d=-o/2-.035;r.add(s([u,a*.62,d],[.79,.82,.11],[t.trim]));for(let e of[-.15,.15])r.add(da(s([u+e,a*.62,d-.065],[.24,.58,.035],[`#e6b879`]),`window`))}return r.add(s([0,a*.29,-o/2],[.76,a*.58,.14],[`#455854`,`wood`])),r.add(s([i*.22,a+l*.75,o*.25],[.4,1.15,.45],[`#835e58`,`brick`])),r}function va(e,t,n){let{box:r,beam:i,cylinder:a}=t,o=[`#a74338`,`roof`],s=[`#544b49`];e.add(a([0,n,0],[G.outerRadius,1.04,.25,12],o)),e.add(da(a([0,n+.36,0],[.61,.64,.57,12],[`#fff1ad`]),`lighthouse`)),e.add(a([0,n+.71,0],[.86,.86,.15,12],o)),e.add(a([0,n+1.04,0],[.21,.83,.53,12],o)),e.add(a([0,n+1.34,0],[.06,.19,.1,10],o)),e.add(r([0,n+1.47,0],[.077,.23,.077],s));for(let t=0;t<12;t++){let a=t*Math.PI/6,o=a+Math.PI/6,c=Math.cos(a),l=Math.sin(a);e.add(r([c*.62,n+.4,l*.62],[.07,.62,.07],s));let u=G.outerRadius-.067;e.add(r([c*u,n+.37,l*u],[.06,.54,.06],s));for(let t of[n+.36,n+.62])e.add(i([[c*u,t,l*u],[Math.cos(o)*u,t,Math.sin(o)*u]],.045,s))}}function ya(e){let t=new f,{box:n,cylinder:r}=e,i=1.7;t.add(r([0,.13,0],[1.46,1.55,.26,12],[`#ada191`,`brick`]));for(let e=0;e<5;e++){let a=1.23-e*.092,o=e%2==0?`#eee4cc`:`#ba5147`,s=.24+(e+.5)*i;t.add(r([0,s,0],[a-.092,a,i,12],[o,`brick`])),e>0&&(t.add(n([0,s+.22,a-.004],[.39,.59,.1],[`#886e65`])),t.add(n([0,s+.22,a+.057],[.25,.45,.05],[`#f0c583`])))}return t.add(n([0,.85,1.18],[.65,1.36,.17],[`#52605a`,`wood`])),va(t,e,8.84),t}function ba(e,t){let n=new $e;n.moveTo(-2.05,-.64),n.lineTo(.85,-.78),n.lineTo(1.65,-.55),n.lineTo(2.48,0),n.lineTo(1.65,.55),n.lineTo(.85,.78),n.lineTo(-2.05,.64),n.closePath();let r=new f,i=[{y:.08,height:.15,scale:.86,paint:[`#774942`,`wood`]},{y:.23,height:.31,scale:.96,paint:[`#e5d9bd`,`wood`]},{y:.54,height:.12,scale:1,paint:[t,`wood`]}];for(let{y:t,height:a,scale:o,paint:s}of i){let i=new L(new te(n,{depth:a,bevelEnabled:!1}),e.surface(s[0],s[1]));i.rotation.x=-Math.PI/2,i.position.y=t,i.scale.set(o,o,1),r.add(i)}return r}function xa(e,t){let n=ba(e,t),{box:r,beam:i,cylinder:a}=e;n.add(r([-.53,1.01,0],[1.02,.83,1.02],[`#f3dfc1`,`wood`])),n.add(r([-.53,1.48,0],[1.2,.15,1.22],[t]));for(let e of[-1,1]){n.add(r([-.49,1.18,e*.53],[.7,.32,.045],[`#587981`])),n.add(r([-.48,1.18,e*.56],[.055,.35,.035],[`#ecd8b6`]));let t=a([-1.18,.43,e*.72],[.19,.19,.12,10],[`#465456`]);t.rotation.x=Math.PI/2,n.add(t)}return n.add(r([0,1.17,0],[.05,.32,.67],[`#688890`])),n.add(i([[.78,.66,0],[.51,2.56,0]],.074,[`#8c6b51`])),n.add(r([.37,2.43,0],[.31,.19,.045],[`#c97155`])),n.add(r([1.38,.77,.17],[.48,.24,.45],[`#c08a58`,`wood`])),n.add(a([.85,.74,-.28],[.24,.3,.16,8],[`#668c76`,`grass`])),n}function Sa(e){let t=new f,{box:n,cylinder:r}=e,i=[`#e9e4d7`,`wood`],a=[`#3f5a68`],o=[`#c4a882`,`wood`],s=[`#b59a74`,`wood`],c=[`#8a8f8a`],l=[`#455a63`];t.add(n([-.2,.38,0],[4.6,.64,2.2],i)),t.add(n([2.6,.4,0],[1,.56,1.2],i)),t.add(n([-2.95,.4,0],[.9,.6,1.9],i)),t.add(n([-.2,.52,0],[4.64,.12,2.24],a)),t.add(n([2,.74,0],[2,.08,2.1],o)),t.add(n([-2.65,.74,0],[1.5,.08,2.1],o));for(let e of[-1,1])t.add(n([-.45,.74,e*.98],[2.9,.08,.24],o));t.add(n([-.45,.52,0],[2.9,.08,1.72],s));for(let e of[-1.9,1])t.add(n([e,.63,0],[.12,.3,1.72],i));t.add(n([.75,.85,0],[.36,.58,1.1],i)),t.add(n([.95,1,0],[.06,.36,1.1],l)),t.add(n([-2.6,1.16,0],[1.34,.78,1.86],i)),t.add(n([-2.6,1.24,0],[1.36,.3,1.9],l)),t.add(n([-2.6,1.58,0],[1.5,.08,1.96],i)),t.add(r([-2.6,1.95,0],[.05,.07,.68,6],c)),t.add(n([-2.6,2.3,0],[.06,.06,.6],c));for(let e of[-1,1]){t.add(n([2,1,e*.98],[2,.05,.05],c));for(let r of[1.2,2.6])t.add(n([r,.9,e*.98],[.05,.24,.05],c))}return t.add(n([-3.6,.3,0],[.3,.2,1.6],o)),t.add(n([-2.6,1.24,.94],[.26,.26,.06],[`#c0553f`])),t}function Ca(e){let{box:t}=e,n=new f;return n.add(t([0,0,0],[.27,.16,.39],[`#fff0d5`])),n.add(t([0,.11,-.15],[.15,.15,.15],[`#fff7e2`])),n.add(t([0,.08,-.25],[.08,.055,.13],[`#d89c4f`])),n.add(t([.079,.13,-.17],[.025,.028,.028],[`#354a52`])),{bird:n,wings:[-1,1].map(e=>{let r=new f;return r.add(t([e*.205,.03,.018],[.28,.065,.16],[`#aab9bc`])),r.add(t([e*.39,.03,.074],[.16,.052,.1],[`#6c7f8a`])),n.add(r),r})}}var wa={count:8,sides:13,detailedSides:28,seed:6322,positions:[[43,-18,8,4],[96,-6,17,10],[119,21,20,12],[58,47,13,6],[11,84,17,8],[-81,41,23,14],[-94,-30,19,11],[-5,-97,18,10]],routes:[[57,-34,68,-27],[64,17,81,23],[52,-61,79,-66],[40,57,51,62]]};function Ta(e,t,n){return wa.positions.some(([r,i,a])=>{let o=a*.93+n,s=a*.64+n;return((e-r)/o)**2+((t-i)/s)**2<1})}function Ea(e,t,n,r){let[i,a,o,s]=t,c=r?wa.detailedSides:wa.sides,l=Wt(wa.seed+n),u=Array.from({length:c},()=>.72+l()*.36),d=[[-.17,1,`#b1ae9d`],[.07,.92,`#a79783`],[.29,.78,`#8d8d78`],[.61,.54,`#758e7d`],[.87,.23,`#677e73`]],f=d.flatMap(([e,t],r)=>u.flatMap((l,u)=>{let d=u/c*Math.PI*2,f=.8+.2*Math.cos(d*2+n)+.1*Math.sin(d*3);return[i+Math.cos(d)*l*o*t+r*.09*o,e*s*f,a+Math.sin(d)*l*o*t*.65]})),p=[],m=new He;for(let e=1;e<d.length;e++){let t=p.length;for(let t=0;t<c;t++){let n=(t+1)%c,r=(e-1)*c+t,i=(e-1)*c+n,a=e*c+t,o=e*c+n;p.push(r,a,i,i,a,o)}if(e===d.length-1){let t=f.length/3;f.push(i+o*.25,s,a);for(let n=0;n<c;n++)p.push(e*c+n,t,e*c+(n+1)%c)}m.addGroup(t,p.length-t,e-1)}return m.setAttribute(`position`,new Pe(f,3)),m.setIndex(p),m.computeVertexNormals(),new L(m,d.slice(0,-1).map(([,,t])=>e.surface(t)))}function Da(e,t,n,r=!1){let i=new f;i.add(Ea(e,t,n,r));let[a,o,s,c]=t;if(r||n<4){let t=_a(e,{wall:`#d9b085`,roof:`#826059`,trim:`#e9d6bc`},[2.3,1.5,1.9]);t.position.set(a+s*.58,c*.3,o+1.6),i.add(t);let n=e.cylinder([a+s*.62,c*.24,o-1.25],[.35,.54,2.4,7],[`#e4d3b9`]),l=e.cylinder([a+s*.62,c*.24+1.1,o-1.25],[.13,.62,.46,7],[`#aa6557`]);i.add(n,l,e.box([a+s*.65,.15,o+4],[2.7,.28,1.2],[`#92765f`]));let u=e.box([0,0,0],[1,1,1],[`#6d866f`]),d=new A(u.geometry,u.material,r?14:5),f=new je;for(let e=0;e<d.count;e++)f.position.set(a+s*.31+Math.cos(e*2.4)*s*.33,c*.51+Math.sin(e*.8)*c*.1,o+Math.sin(e*2.4)*s*.29),f.scale.set(.88,1.38,.89),f.updateMatrix(),d.setMatrixAt(e,f.matrix);i.add(d)}return i}function Oa(e,t){let n=wa.positions.slice(0,wa.count).map((n,r)=>{let i=Da(t,n,r);return e.add(i),{id:`island-${r}`,object:i,position:new O(n[0],n[3]*.68,n[1])}}),r=wa.routes.map((n,r)=>{let i=xa(t,[`#697e8b`,`#b27e63`,`#738b78`,`#a68c5e`][r]);i.scale.setScalar(.86);let a=da(t.box([.36,1.8,0],[.15,.16,.14],[`#f4d397`]),`street`);return a.userData.movingGlow=!0,i.add(a),e.add(i),{id:`distant-ship-${r}`,object:i,route:n}});return{islands:n,ships:r,update(e,t){r.forEach(({object:n},r)=>{let[i,a,o]=wa.positions[r%wa.positions.length],s=o*.9+2.6,c=e*.16+r*1.3;n.position.set(i+Math.cos(c)*s,.04+Math.sin(e+r)*.03,a+Math.sin(c)*s),n.rotation.y=-c+Math.PI*.5,n.visible=r===0||t.weather<.45&&t.tier<3}),n.forEach(({object:e},n)=>{e.visible=t.tier<3||n%2==0})}}}function ka({night:e,weather:t},n){let r=ht.pool.map(n=>n.weight*(e?n.night:1)*(t===`clear`?1:n[t])),i=n()*r.reduce((e,t)=>e+t,0);return ht.pool[r.findIndex(e=>(i-=e)<0)]??ht.pool[0]}function Aa({play:e,change:t,landed:n},r=Math.random){let i=`idle`,a=0,o;function s(e,n=0){i=e,a=n,t(e)}function c(){e(`fishCast`),s(`casting`,ht.castSeconds)}return{get phase(){return i},get active(){return i!==`idle`},get castProgress(){return i===`casting`?1-a/ht.castSeconds:i===`reeling`?a/ht.reelSeconds:1},cast:c,stop(){o=void 0,i!==`idle`&&s(`idle`)},act(t){if(i===`miss`)return c();i===`bite`&&(e(`fishReel`),o=ka(t,r),s(`reeling`,ht.reelSeconds))},step(t){if(i!==`idle`&&i!==`miss`&&(a-=t,!(a>0))){if(i===`casting`){e(`fishSplash`);let[t,n]=ht.waitSeconds;s(`waiting`,t+(n-t)*r())}else if(i===`waiting`)e(`fishBite`),s(`bite`,ht.responseSeconds);else if(i===`reeling`&&o){let e=o;o=void 0,s(`idle`),n(e)}else s(`miss`)}}}}var ja={armPivot:.995,armReach:.36,gripX:.267,length:1.24,sweep:1.05,readyArm:-.98,castArm:-1.62,pitch:.45,handle:.23,width:.036,wood:`#7c4b37`,tip:`#eac17e`,grip:`#46352e`,line:`#fff4d8`},Ma={waterline:.065,sink:-.12,rock:.026,arc:1.38,hitch:.038,scale:.95};function Na(e){let t=new f;return t.add(e.box([0,0,ja.handle/2],[ja.width*2,ja.width*2,ja.handle],[ja.grip])),t.add(e.box([0,0,ja.length/2],[ja.width,ja.width,ja.length],[ja.wood])),t.add(e.box([0,0,ja.length-ja.handle/2],[ja.width*.7,ja.width*.7,ja.handle],[ja.tip])),t}function Pa(e){let t=new f;return t.add(e.box([0,-.025,0],[.12,.095,.12],[`#fff4ca`])),t.add(e.box([0,.045,0],[.093,.06,.093],[`#c54a3f`])),t.add(e.box([0,.097,0],[.036,.06,.036],[`#ffcf69`])),t.scale.setScalar(Ma.scale),t}function Fa(e,t){let n=new f,r=Na(t),i=Pa(t),a=t.box([0,0,0],[Ma.hitch,1,Ma.hitch],[ja.line]);n.name=`harbor-fishing-rig`,n.add(r,i,a),n.visible=!1,e.add(n);let o=new O,s=new O,c=new O;return(e,t)=>{if(n.visible=t.phase!==`idle`,!n.visible)return;let l=t.reduced?0:Math.sin(Math.PI*t.cast),u=x.lerp(ja.readyArm,ja.castArm,l),d=Math.cos(e.facing)*ja.gripX-Math.sin(e.facing)*Math.sin(u)*ja.armReach,f=-Math.sin(e.facing)*ja.gripX-Math.cos(e.facing)*Math.sin(u)*ja.armReach;return r.position.set(e.x+d,J+ja.armPivot-Math.cos(u)*ja.armReach,e.z+f),r.rotation.set(-ja.pitch-l*ja.sweep,e.facing,0,`YXZ`),r.updateMatrixWorld(!0),r.localToWorld(o.set(0,0,ja.length)),c.set(ht.float.x,t.phase===`bite`?Ma.sink:Ma.waterline,ht.float.z),i.position.copy(o).lerp(c,t.reduced?1:t.cast),i.position.y+=l*Ma.arc+Math.sin(t.time*3)*Ma.rock,i.rotation.z=Math.sin(t.time*2)*Ma.rock,a.visible=t.phase!==`miss`,i.visible=a.visible,s.subVectors(i.position,o),a.position.copy(o).lerp(i.position,.5),a.scale.y=s.length(),a.quaternion.setFromUnitVectors(je.DEFAULT_UP,s.normalize()),u}}var Ia={startY:J+1.28,width:.23,height:.27,depth:.21,trim:`#9e5a3a`,paper:`#fff1c7`,warm:`#ffc269`,fadeOutAt:.78,day:.26,night:.93,retainedRadius:.8,retainedLift:.24,retainedStep:.18},La=Math.PI*2,Ra=[[0,0,0,Ia.width,Ia.height,Ia.depth,0],[0,.155,0,.16,.04,.16,1],[0,-.155,0,.18,.039,.17,1],[0,.016,0,.265,.035,.237,1]];function za(e,t){let{altar:n,altarWidth:r,altarHeight:i}=St,a=new f;a.position.set(n.x,J,n.z),a.add(t.box([0,.09,0],[r,.18,r],[`#9f9485`,`brick`])),a.add(t.box([0,.44,0],[.54,.7,.54],[`#b6a390`,`brick`])),a.add(t.box([0,.84,0],[.71,.14,.7],[`#cbb397`,`brick`])),a.add(da(t.box([0,.99,0],[.22,.18,.22],[`#ffcd85`]),`street`)),a.add(t.box([0,i,0],[.29,.05,.29],[`#956756`])),e.add(a);let o=r/2;return{footprint:[n.x-o,n.x+o,n.z-o,n.z+o],height:i}}function Ba(e,t){let n=new Ae;return Array.from({length:t},()=>{let t=new f,r=new I({color:Ia.paper,transparent:!0,depthWrite:!1}),i=new I({color:Ia.trim,transparent:!0,depthWrite:!1}),a={value:``};for(let[e,a,o,s,c,l,u]of Ra){let d=new L(n,u?i:r);d.position.set(e,a,o),d.scale.set(s,c,l),t.add(d)}return t.visible=!1,e.add(t),{group:t,paper:r,trim:i,id:a,opacity:0}})}var Va=new R(Ia.warm);function Ha(e,t,n){e.group.visible=t>0,e.paper.color.set(Ia.paper).lerp(Va,n),e.paper.opacity=t*x.lerp(Ia.day,Ia.night,n),e.trim.opacity=t}function Ua(e,t,n){let r=n.low?Math.floor(St.lights.retained/2):St.lights.retained,i=t.slice(0,r);for(let t of e){let e=i.some(e=>e.id===t.id.value);e||(t.opacity=n.reduced?0:Math.max(0,t.opacity-n.step/St.lights.fadeSeconds)),!t.opacity&&!e&&(t.id.value=``)}for(let t of i){let r=e.find(e=>e.id.value===t.id)??e.find(e=>!e.id.value);r&&(r.id.value=t.id,r.opacity=n.reduced?1:Math.min(1,r.opacity+n.step/St.lights.fadeSeconds))}e.forEach((e,t)=>{let r=t/St.lights.retained*La;e.group.position.set(St.altar.x+Math.cos(r)*Ia.retainedRadius,Ia.startY+Ia.retainedLift+t*Ia.retainedStep,St.altar.z+Math.sin(r)*Ia.retainedRadius),Ha(e,e.opacity,n.night)})}function Wa(e){let{altar:t,lights:n}=St,r=Ba(e,n.retained+1),i=Ba(e,n.flying).map(e=>({...e,age:Number(n.flightSeconds)})),a=new le,o=0;return{release(){let e=i.reduce((e,t)=>t.age>e.age?t:e);e.age=0,o=n.beamSeconds},get beam(){return o/n.beamSeconds},pick(e,t,n){a.setFromCamera(e,t);let i=r.filter(e=>e.group.visible&&n.some(t=>t.id===e.id.value)),o=a.intersectObjects(i.map(e=>e.group),!0)[0];return i.find(e=>e.group===o?.object.parent)?.id.value},update(e,a){o=Math.max(0,o-a.step),Ua(r,e,a);let{drift:s,flightSeconds:c}=n,l=a.low?Math.max(1,Math.floor(n.flying/2)):n.flying;i.forEach(e=>{e.age+=a.step});let u=[...i].sort((e,t)=>e.age-t.age).slice(0,l);i.forEach(e=>{let n=Math.min(1,e.age/c),r=a.reduced?.2:n,i=u.includes(e)?Math.min(1,(1-n)/(1-Ia.fadeOutAt)):0;e.group.position.set(t.x+r*s.x,Ia.startY+r*s.y,t.z+r*s.z),Ha(e,i,a.night)})}}}function Ga(e,t,n){let r=za(e,t),i=Wa(e),a=Gt(),o=Fa(e,t),s,c,l={night:!1,weather:`clear`},u=Aa({play:n.play,change:n.fishing,landed(e){s=e,a.catchFish(e),n.landed()}});return{altar:r,fishing:u,reel(){u.act(l)},get result(){return s},get chosenWish(){return c},showRecords(){s=void 0,u.stop()},chooseWish(e){c=e},get beam(){return i.beam},pickWish(e,t){return i.pick(e,t,a.wishes().items)},catches:a.catches,wishes:a.wishes,deleteWish:a.deleteWish,clearWishes:a.clearWishes,releaseWish(e){return a.writeWish(e)?(i.release(),n.play(`wishChime`),n.notice(a.wishes().warning||St.ui.saved),!0):!1},update(e,t){return l={night:t.night>=.5,weather:t.weather},u.step(t.frameTime),i.update(a.wishes().items,t),o(e,{phase:u.phase,cast:u.castProgress,time:t.time,reduced:t.reduced})}}}var Ka={id:`pier-gull`,title:`栈桥海鸥`,action:`逗海鸥`,perch:[3.25,1.51,-2.44],cover:[8.05,2.95,-5.02],cautious:3.6,flee:.95,interact:2.15,flight:7,cooldown:9,hop:1.25,flock:5,reducedFlock:2,route:{x:5.4,z:-.4,width:5.2,depth:4.3,rise:3.1}};function qa(e,t){let n=t.box([0,0,0],[1,1,1],[`#f1e5ce`]),r=new A(n.geometry,n.material,Ka.flock*3);r.frustumCulled=!1,e.add(r);let i=new je;return(e,t)=>{r.count=t*3;for(let n=0;n<t;n++){let t=e*.145+n*1.72,a=2+Math.cos(t)*12,o=-11+Math.sin(t)*8,s=5.25+n*.62+Math.sin(t*2)*.27;for(let c=0;c<3;c++){let l=c-1;i.position.set(a+Math.cos(t)*l*.31,s+(l?Math.sin(e*4+n)*.09:0),o+Math.sin(t)*l*.31),i.rotation.set(0,-t,l*Math.sin(e*4+n)*.25),i.scale.set(l?.35:.22,l?.065:.13,.23),i.updateMatrix(),r.setMatrixAt(n*3+c,i.matrix)}}r.instanceMatrix.needsUpdate=!0}}function Ja(e,t){let n=Ca(t),r=qa(e,t);e.add(n.bird);let i=new O(...Ka.perch),a=new O(...Ka.cover),o=0,s=0,c=0,l=0;return{actor:n.bird,update(e,t,u){let{step:d,time:f,rain:p,snow:m,night:h}=t,g=Math.hypot(e.x-i.x,e.z-i.z),_=g<Ka.cautious&&!e.sailing&&!e.lookout,v=p>.45;s=Math.max(0,s-d),c=Math.max(0,c-d),o=Math.max(0,o-d),!o&&!s&&!c&&_&&g<Ka.flee&&!v&&(o=Ka.flight,s=Ka.flight+Ka.cooldown);let y=o?(1-o/Ka.flight)*Math.PI*2:0,b=Math.sin(y*.5),x=Ka.route;n.bird.position.copy(i).lerp(a,Math.min(1,p*2)),n.bird.position.add(new O((x.x-i.x+Math.cos(y)*x.width)*b,b*x.rise+Math.abs(Math.sin(c*Math.PI*2/Ka.hop))*.17,(x.z-i.z+Math.sin(y)*x.depth)*b)),n.bird.scale.y=1-m*.26,n.bird.rotation.y=o?-y:_?Math.atan2(e.x-i.x,e.z-i.z)+Math.PI:-1.1,n.wings.forEach((e,n)=>{e.scale.x=o||c?1:.46,e.rotation.z=(n?1:-1)*(t.reduced?.15:o||c?Math.sin(f*12)*.81:_?Math.sin(f*9)*.18:.3)}),r(f,t.low||v||h>.5?Ka.reducedFlock:Ka.flock),l+=d,l>16&&(l=0,!t.low&&!v&&h<.5&&u(g+4))},pet(e){c=Ka.hop,s=Ka.cooldown,e(0)},hotspot(e){return o||c||e.sailing||e.lookout||Math.hypot(e.x-n.bird.position.x,e.z-n.bird.position.z)>Ka.interact?null:{id:Ka.id,title:Ka.title,kind:`gull`,label:Ka.action,x:n.bird.position.x,z:n.bird.position.z,radius:Ka.interact}}}}var Ya={center:{x:30.96,z:-16.48},innerRadius:8,radius:22,gulls:3,fish:26,gullHeight:1.95,spoutPeriod:9,spoutLife:1.3,burstPeriod:9.5,burstLife:2.6,gravity:9.4,launch:{min:1,max:3.4},lift:{min:4.6,max:7.4},delay:.42,keepOut:[34.6,51.4,-24.4,-11.6],colors:{fish:`#a8c3cc`,gull:`#f1e5ce`,water:`#dcf0ee`}},Xa=-60;function Za(e,t){let[n,r,i,a]=Ya.keepOut;return e>=n&&e<=r&&t>=i&&t<=a}function Qa(e,t){let n=Wt(t),r=[];for(;r.length<e;){let e=n()*Math.PI*2,t=Ya.innerRadius+n()*(Ya.radius-Ya.innerRadius),i=Ya.center.x+Math.cos(e)*t,a=Ya.center.z+Math.sin(e)*t;Za(i,a)||r.push({x:i,z:a,yaw:n()*Math.PI*2})}return r}var $a=Qa(Ya.gulls,331),eo=Qa(6,977),to={x:0,y:0,z:0,yaw:0,sx:1,sy:1,sz:1},no=new je;function ro(e,t){no.position.set(to.x,to.y,to.z),no.rotation.set(0,to.yaw,0),no.scale.set(to.sx,to.sy,to.sz),no.updateMatrix(),e.setMatrixAt(t,no.matrix)}function io(e,t){Object.assign(to,{x:0,y:Xa,z:0,yaw:0,sx:.001,sy:.001,sz:.001}),ro(e,t)}function ao(e,t,n,r){let i=t.box([0,Xa,0],[1,1,1],[n]),a=new A(i.geometry,i.material,r);return a.frustumCulled=!1,a.count=r,a.raycast=()=>{},e.add(a),a}function oo(e,t){let n=Math.floor(t/Ya.burstPeriod),r=t-n*Ya.burstPeriod,i=eo[n%eo.length],a=Wt(917+n*37);for(let t=0;t<Ya.fish;t++){let n=a()*Math.PI*2,o=Ya.launch.min+a()*(Ya.launch.max-Ya.launch.min),s=Ya.lift.min+a()*(Ya.lift.max-Ya.lift.min),c=r-a()*Ya.delay,l=s*c-Ya.gravity*c*c/2,u=t*2;if(c<=0||l<=0){io(e,u),io(e,u+1);continue}let d=i.x+Math.cos(n)*o*c,f=i.z+Math.sin(n)*o*c;Object.assign(to,{x:d,y:l,z:f,yaw:-n,sx:.2,sy:.3,sz:.62}),ro(e,u),Object.assign(to,{x:d-Math.cos(n)*.36,y:l,z:f-Math.sin(n)*.36,yaw:-n,sx:.14,sy:.22,sz:.3}),ro(e,u+1)}e.instanceMatrix.needsUpdate=!0}function so(e,t,n){for(let r=0;r<Ya.gulls;r++){let i=$a[r],a=Ya.gullHeight+Math.sin(n*.85+r*1.9)*.18,o=Math.sin(n*5.2+r)*.1;Object.assign(to,{x:i.x,y:a,z:i.z,yaw:i.yaw,sx:.3,sy:.2,sz:.44}),ro(e,r*3);for(let t of[-1,1])Object.assign(to,{x:i.x+t*.24,y:a+o,z:i.z,yaw:i.yaw,sx:.28,sy:.07,sz:.26}),ro(e,r*3+(t>0?2:1));let s=(n+r*3.1)%Ya.spoutPeriod,c=s<Ya.spoutLife?Math.sin(s/Ya.spoutLife*Math.PI):0;Object.assign(to,{x:i.x,y:a*c/2,z:i.z,yaw:0,sx:.12,sy:Math.max(.001,a*c),sz:.12}),ro(t,r*2),Object.assign(to,{x:i.x,y:.04,z:i.z,yaw:0,sx:.4*c+.001,sy:.05,sz:.4*c+.001}),ro(t,r*2+1)}e.instanceMatrix.needsUpdate=!0,t.instanceMatrix.needsUpdate=!0}function co(e,t){let n=ao(e,t,Ya.colors.gull,Ya.gulls*3),r=ao(e,t,Ya.colors.water,Ya.gulls*2),i=ao(e,t,Ya.colors.fish,Ya.fish*2);function a(e,t){if(t.reduced)for(let e=0;e<Ya.fish*2;e++)io(i,e);else oo(i,e);so(n,r,e)}return a(0,{reduced:!1}),{update:a}}var Q={radius:1.55,activityRadius:13,speed:1.35,cadence:.3,greet:`打招呼`,placeholder:`待填写`,homes:[[-3,17.5],[6,19.2],[-2.69,-21.21],[-24.7,-3]],shelterNight:.6,shelterRain:.4,shelterDistance:.75,patrolRate:.8,gazeYaw:Math.PI/2,carryArm:-.15,watchArm:-1.75,post:{x:6.57,z:-13.9},seat:{x:6.22,z:-13.9},lamp:{x:6.95,z:-14.45},seatHeight:.3,sitSeconds:11,standSeconds:7,lookEvery:8,lookLength:3,people:[{spot:[-37.1,-6.36],hair:`#5d5443`,skin:`#d8ae90`,shirt:`#707da0`,trousers:`#474d52`,hat:!0,build:[.98,1.05,.98],headwear:`bandana`,name:``,job:``,line:``},{spot:[13.5,16.3],facing:Math.PI,homeDoor:[6,16.6],hair:`#655d57`,skin:`#c89773`,shirt:`#426d78`,trousers:`#58483d`,hat:!1,build:[1,1.02,1],headwear:`straw`,fishing:!0,name:``,job:``,line:``},{spot:[6.57,-13.9],facing:Math.PI/2,hair:`#463a30`,skin:`#d8ae90`,shirt:`#2f3f57`,trousers:`#243040`,hat:!1,build:[1.04,1.06,1.04],headwear:`helmet`,apron:`#e6e2d4`,guard:!0,post:!0,name:`守塔人`,job:``,line:``}]},lo=.35;function uo(e,t,n){e.updateMatrix(),n.copy(e.matrix);for(let r=e.parent;r&&r!==t;r=r.parent)r.updateMatrix(),n.premultiply(r.matrix);return n}function fo(e){let t=new Map;e.traverse(e=>{if(!(e instanceof L)||e.geometry.type!==`BoxGeometry`||Array.isArray(e.material))return;let n=t.get(e.material);n?n.push(e):t.set(e.material,[e])});let n=new y,r=[...t.entries()].filter(([,e])=>e.length>1).map(([t,n])=>{let r=new A(n[0].geometry,t,n.length);return r.instanceMatrix.setUsage(M),n.forEach(e=>{e.visible=!1}),e.add(r),{mesh:r,parts:n}});function i(){for(let{mesh:t,parts:i}of r)i.forEach((r,i)=>t.setMatrixAt(i,uo(r,e,n))),t.instanceMatrix.needsUpdate=!0}i();for(let{mesh:e}of r)e.computeBoundingSphere(),e.boundingSphere&&(e.boundingSphere.radius+=lo);return i}var po=.065,mo=`#d49f78`,ho=`#5a443a`,go=`#c19459`,_o=`#815841`,vo=1.65,yo=.57,bo=.038,xo=Math.PI*2,So=.29,Co=8,wo=.005,To=.26,Eo=vt.lift**2/(2*vt.gravity);function $([e,t,n]){return[e*po,t*po,n*po]}function Do(e,t,n){let r=n.headwear??(n.hat?`straw`:`none`);if(r===`straw`)e.add(t.box($([0,22.25,.35]),$([9.5,.9,8.5]),[go])),e.add(t.box($([0,23.45,0]),$([7.25,1.45,6.3]),[_o])),e.add(t.box($([0,24.15,0]),$([6.65,1.03,5.75]),[go]));else if(r===`cap`)e.add(t.box($([0,22.9,0]),$([7.6,2.1,6.8]),[`#5d5a52`])),e.add(t.box($([0,22.5,3.4]),$([7.9,.55,2.2]),[`#4e4b45`]));else if(r===`souwester`){let r=n.headwearColors?.crown??go,i=n.headwearColors?.band??_o;e.add(t.box($([0,22.35,-.25]),$([9.3,.8,9.4]),[r])),e.add(t.box($([0,21.45,-3.9]),$([8.3,2.1,1.7]),[r])),e.add(t.box($([0,23.15,0]),$([7.8,1.5,6.85]),[i])),e.add(t.box($([0,24.05,0]),$([6.2,1,5.5]),[r]))}else r===`helmet`?(e.add(t.box($([0,22,0]),$([8.3,.7,7.7]),[`#7f878d`])),e.add(t.box($([0,22.95,0]),$([7,1.3,6.6]),[`#8d949a`])),e.add(t.box($([0,23.8,0]),$([4.6,.6,5.4]),[`#8d949a`])),e.add(t.box($([0,24.05,0]),$([1.1,.5,5.8]),[`#6f767c`]))):r===`bandana`&&(e.add(t.box($([0,21.7,0]),$([7.7,1.5,6.8]),[`#a2544c`])),e.add(t.box($([0,21.1,-3.05]),$([2,1.6,1.4]),[`#8d453f`])))}function Oo(e,t){let n=new f,{hair:r}=t,i=t.skin??mo;n.add(e.box($([0,19,0]),$([7,6,6]),[i])),n.add(e.box($([0,20.5,-1.6]),$([7.4,4.2,3.6]),[r])),n.add(e.box($([0,22,0]),$([7.4,1.7,6.4]),[r]));for(let t of[-1,1])n.add(e.box($([t*1.72,19.2,3.05]),$([.83,1.04,.16]),[`#403733`])),n.add(e.box($([t*3.65,18.6,.7]),$([.83,1.48,1.35]),[i]));if(t.traveler){let i=t.hairstyle===`tuft`?.87:-1.75;n.add(e.box($([i,22.9,.45]),$([3.65,1.9,4]),[r])),n.add(e.box($([i+.7,24.05,.1]),$([1.8,.87,2.1]),[r]))}if(t.faceVariant!==void 0){let i=t.faceVariant;n.add(e.box($([0,17.7+i%3*.19,3.05]),$([1.1+i%3*.38,.27,.15]),[`#614947`])),n.add(e.box($([i%2?1.42:-1.52,22.8,-.97]),$([3.2,1.6+i*.1,3.3]),[r]))}return Do(n,e,t),n}function ko(e,{side:t,kind:n,appearance:r}){let i=new f,a=n===`arm`;return i.position.set(...$([t*(a?4.1:1.68),a?15.3:7.1,0])),a?(i.add(e.box($([0,-2.32,0]),$([2.18,5.25,2.98]),[r.shirt])),i.add(e.box($([0,-5.6,0]),$([1.91,1.62,2.1]),[r.skin??mo]))):(i.add(e.box($([0,-2.65,0]),$([2.65,5.55,3.4]),[r.trousers])),i.add(e.box($([0,-6.08,.58]),$([2.74,2.03,4.25]),[r.boots??ho]))),i}function Ao(){let e=new L(new Ie(So,Co),new I({color:`#443830`,opacity:To,transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=wo,e}function jo(e,t,n){for(let r=0;r<=5;r++){let i=r/5;e.add(t.box($([-2.55+i*5,15.5-i*5.9,2.06]),$([.72,.72,.36]),[n]))}for(let r=0;r<8;r++){let i=r/8*Math.PI*2;e.add(t.box($([2.15+Math.cos(i)*.62,9.5+Math.sin(i)*.62,1.95]),$([.62,.62,.42]),[n]))}}function Mo(e,t,n){let r=new f;if(n.traveler){e.add(t.box($([0,13.9,0]),$([5.7,4.3,4.07]),[n.shirt]));for(let[e,i]of[[11.2,6.28],[9.65,6.92],[8.1,7.48]])r.add(t.box($([0,e,0]),$([i,1.59,4.18]),[n.shirt]));let i=t.cylinder($([1.4,13.1,2.1]),[.06,.06,.03,8],[n.badge??`#78844D`]);i.rotation.x=Math.PI/2,e.add(i,r)}else e.add(t.box($([0,12.31,0]),$([6.05,7.5,4.02]),[n.shirt]));if(!n.traveler||n.shoulderBag){let r=n.traveler?2.7:0;e.add(t.box($([r,12.95,-2.17]),$([4.45,4.68,1.99]),[`#816c4d`])),e.add(t.box($([r,14.38,-3.23]),$([4.33,1.24,.32]),[`#b39561`]))}return n.rope&&jo(e,t,n.rope.color),r}function No(e,t=ut){let n=new f,r=new f,i=ko(e,{side:-1,kind:`arm`,appearance:t}),a=ko(e,{side:1,kind:`arm`,appearance:t}),o=ko(e,{side:-1,kind:`leg`,appearance:t}),s=ko(e,{side:1,kind:`leg`,appearance:t});r.add(e.box($([0,8.45,0]),$([6.13,2.25,4.03]),[t.trousers]));let c=Mo(r,e,t),l=Oo(e,t);r.add(l,i,a,o,s);let u=fo(r),d=Ao();n.add(r,d);let p,m=0,h=0,g={blend:0,lean:0,bank:0,arms:0};return{avatar:n,detailAnchor:r,head:l,rightArm:a,setFishingArm(e){p=e},swingCoat(e){c.rotation.x=e},wave(e){a.rotation.z=e},setFlightPose(e){!e.blend&&g.blend&&(i.rotation.z=a.rotation.z=0),g=e},update(e,t,c){n.position.set(e.x,J+e.elevation,e.z),n.rotation.y=e.facing;let l=e.speed<jt.movementThreshold||c||e.sailing||e.airborne||e.swimming?0:Math.min(e.speed/jt.walkSpeed,1),f=e.speed*t/vo*xo;m=(m+f)%xo;let _=Math.sin(m)*l*yo,v=e.airborne?Math.max(0,1-e.jumpAge/vt.launchPoseTime):0,y=c?0:Math.sin(Math.PI*e.landing/vt.recovery);r.position.y=e.height+Math.abs(Math.sin(m))*l*bo,r.scale.y=1-v*vt.launchSquat-y*vt.landingSquat,i.rotation.z=0,a.rotation.z=0;let b=e.airborne?vt.airArm*(1-v):0,S=e.airborne?vt.airLeg*(1-v):0;o.rotation.x=_+S,s.rotation.x=-_-S,i.rotation.x=-_-b,a.rotation.x=p??_-b,d.scale.setScalar(x.lerp(1,vt.shadowScaleAtPeak,Math.min(1,e.height/Eo))),e.sitting&&(r.position.y-=.29,o.rotation.x=s.rotation.x=-Math.PI*.45,i.rotation.x=a.rotation.x=-.18);let{blend:C,lean:w,bank:T,arms:E}=g;if(r.rotation.set(w,0,T),C&&(r.scale.y=x.lerp(r.scale.y,1,C),i.rotation.x*=1-C,a.rotation.x*=1-C,i.rotation.z=-E,a.rotation.z=E,o.rotation.x*=1-C,s.rotation.x*=1-C),e.swimming&&!C){h=(h+t*(At.strokeRate+e.speed*.9))%xo;let n=c?.35:Math.sin(h),l=c?.2:Math.sin(h*2.3);r.rotation.set(At.lean,0,0),r.position.y=e.height+(c?0:Math.sin(h*2)*At.bob),i.rotation.x=-At.armSweep*(.5+.5*n),a.rotation.x=-At.armSweep*(.5-.5*n),i.rotation.z=At.armSpread,a.rotation.z=-At.armSpread,o.rotation.x=l*At.kick,s.rotation.x=-l*At.kick}d.visible=!C&&!e.swimming,u()}}}var Po={displayName:`星旅人`,mutedMix:.13,neutral:`#8b806b`,reference:{hair:`#E0A83C`,skin:`#DEB781`,coat:`#9DB787`,scarf:`#CC6047`,trousers:`#625756`,boots:`#1E1715`,badge:`#78844D`,shoulderBag:!1,hairstyle:`tuft`},variant:{hair:``,coat:``,scarf:``,shoulderBag:!0,hairstyle:`side`},variantPreview:{hair:`#855943`,coat:`#5b6086`,scarf:`#be914a`},scarfSegments:4,lowSegments:2,wind:.095,scarfResponse:.21,scarfWidth:.095,umbrella:`#a16f56`,coatSwing:.042,first:{transition:.4,eye:1.285,seatEye:.88,helmEye:1.32,near:.035,bob:.032,bobHz:8.2,hatBlend:.27,hideBlend:.52}};function Fo(e){let t=new f,n=e.cylinder([0,.58,0],[.18,.65,.24,8],[Po.umbrella]);return t.add(n,e.box([0,.3,0],[.045,.57,.045],[`#725c4a`])),t.visible=!1,t}var Io=-Math.log1p(-.9),Lo=2*Math.PI;function Ro(e,t){return-Math.expm1(-Io*e/t)}function zo(e,t,n){let r=t-e;return e+(r-Lo*Math.round(r/Lo))*n}function Bo(e,t){return Q.homes.reduce((n,r)=>Math.hypot(e-r[0],t-r[1])<Math.hypot(e-n[0],t-n[1])?r:n,Q.homes[0])}function Vo(e,t,n){let[r,i]=t.spot,a=t,o=No(e,{...t,traveler:!1,faceVariant:n});a.build&&o.avatar.scale.set(a.build[0],a.build[1],a.build[2]),a.apron&&o.detailAnchor.add(e.box([0,.55,.155],[.3,.42,.04],[a.apron]));let s;if(a.guard){s=new f;for(let t of[-1,1]){let n=e.cylinder([0,0,0],[.04,.048,.2,6],[`#4e463c`]);n.rotation.x=Math.PI/2,n.position.set(t*.112,1.248,.36),s.add(n);let r=e.cylinder([0,0,0],[.056,.056,.035,6],[`#a98a52`]);r.rotation.x=Math.PI/2,r.position.set(t*.112,1.248,.455),s.add(r)}s.add(e.box([0,1.248,.33],[.1,.05,.06],[`#3d3830`])),s.visible=!1,o.head.add(s)}if(a.fishing){o.setFishingArm(-1.18),o.rightArm.add(e.beam([[0,-.364,.01],[0,.354,1.551]],.032,[`#8a6a4a`])),o.rightArm.add(e.beam([[0,.354,1.551],[-.12,-1.94,1.88]],.013,[`#cdd8d6`])),o.rightArm.add(e.box([-.12,-1.94,1.88],[.1,.13,.1],[`#c0553f`])),o.avatar.add(e.cylinder([0,.22,0],[.23,.25,.42,10],[`#8a6a4a`]));let t=-.87,n=-.04;o.avatar.add(e.cylinder([t,.19,n],[.26,.24,.38,9],[`#7b6248`]));for(let r of[.1,.3])o.avatar.add(e.cylinder([t,r,n],[.27,.27,.05,9],[`#5d4a36`]));o.avatar.add(e.box([t,.36,n],[.4,.04,.4],[`#4d6b73`])),o.avatar.add(e.box([-.9299999999999999,.4,-.010000000000000002],[.2,.07,.09],[`#9aa6a8`])),o.avatar.add(e.box([-.8,.4,-.08],[.17,.06,.08],[`#b0bbbd`]))}a.guard&&(o.detailAnchor.add(e.beam([[-.16,.52,-.17],[.22,1.3,-.15]],.07,[`#5b4636`,`wood`])),o.detailAnchor.add(e.beam([[.22,1.3,-.15],[.26,1.47,-.14]],.04,[`#3d444a`])));let c=Fo(e);return c.position.set(.25,1.02,.13),o.avatar.add(c),{actor:o,pose:{x:r,z:i,facing:a.facing??n,elevation:lt(r,i),speed:0,height:a.fishing?.3:0,landing:0,jumpAge:0,airborne:!1,lookout:!1,sitting:!!a.fishing,sailing:!1,swimming:!1},umbrella:c,glass:s,spot:{x:r,z:i},index:n,time:n*3,accumulated:0,home:Bo(r,i),homeDoor:a.homeDoor??[r,i],sheltering:!1,fishing:!!a.fishing,guard:!!a.guard,post:!!a.post,seated:!1,hold:Q.standSeconds,look:Q.lookEvery,arm:void 0,watching:!1,title:t.name||`村民 ${n+1}`,note:[t.job,t.line].filter(Boolean).join(` · `)||Q.placeholder}}function Ho(e,t,n,r){let{pose:i}=e,a=t-i.x,o=n-i.z,s=Math.hypot(a,o),c=Q.speed*r.step,l=Math.atan2(a,o),u=i.x+Math.sin(l)*Math.min(c,s),d=i.z+Math.cos(l)*Math.min(c,s);i.speed=0,Ct(u,d,{obstacles:r.obstacles,height:0,radius:.23})&&(i.speed=Q.speed,Object.assign(i,{x:u,z:d,elevation:lt(u,d),facing:zo(i.facing,l,Ro(r.step,.28))}))}function Uo(e,t,n){let{pose:r,spot:i,time:a,index:o}=e,s=Q.speed*n.step,c=i.x+Math.sin(a*Q.patrolRate+o)*1.6,l=i.z+Math.cos(a*Q.patrolRate)*.7,u=c-r.x,d=l-r.z,f=Math.hypot(u,d),p=Math.hypot(t.x-r.x,t.z-r.z)<1.02&&!t.lookout?Math.atan2(r.x-t.x,r.z-t.z):Math.atan2(u,d),m=r.x+Math.sin(p)*Math.min(s,f),h=r.z+Math.cos(p)*Math.min(s,f),g={obstacles:n.obstacles,height:0,radius:.23};if(r.speed=0,Ct(m,h,g)){let e=Math.hypot(m-r.x,h-r.z);r.speed=e>1e-4?Math.min(Q.speed,e/Math.max(n.step,1e-4)):0,Object.assign(r,{x:m,z:h,elevation:lt(m,h),facing:zo(r.facing,p,Ro(n.step,.28))})}}function Wo(e,t,n,r){let i=r.rain>Q.shelterRain||r.snow>.45;e.hold-=n,i?(e.seated=!1,e.hold=Q.standSeconds):e.hold<=0&&(e.seated=!e.seated,e.hold=e.seated?Q.sitSeconds:Q.standSeconds);let a=e.seated?Q.seat:Q.post;t.x+=(a.x-t.x)*Ro(n,.35),t.z+=(a.z-t.z)*Ro(n,.35),t.facing=zo(t.facing,Q.gazeYaw,Ro(n,.5)),t.sitting=e.seated,t.height=e.seated?Q.seatHeight:0,t.speed=0,e.look=i?Q.lookLength:e.look-n,e.look<=0&&(e.look=Q.lookEvery+Q.lookLength),e.watching=!i&&e.look>Q.lookEvery;let o=e.watching?Q.watchArm:Q.carryArm;e.arm=e.arm===void 0?o:e.arm+(o-e.arm)*Ro(n,.25),e.actor.setFishingArm(e.arm),e.glass&&(e.glass.visible=e.watching&&e.arm<-1.1)}function Go(e,t,n){let r=Q.people.map((e,n)=>Vo(t,e,n));r.forEach(({actor:t,pose:n})=>{t.update(n,0,!0),e.add(t.avatar)}),e.add(t.cylinder([Q.seat.x,J+.22,Q.seat.z],[.23,.25,.42,10],[`#8a6a4a`])),e.add(t.box([Q.lamp.x,J+.45,Q.lamp.z],[.1,.9,.1],[`#595655`]));let i=new L(new Ae,new I({color:`#ffd79b`}));i.scale.set(.24,.24,.24),i.position.set(Q.lamp.x,J+.98,Q.lamp.z);let a=new L(new Ae,new I({color:`#ffd79b`,transparent:!0,opacity:.24}));a.scale.set(.66,.66,.66),a.position.copy(i.position);let o=new f;return o.add(i,a),o.visible=!1,e.add(o),{update(e,t,i){let a=i.night>Q.shelterNight||i.rain>Q.shelterRain;o.visible=i.night>.5;for(let o of r){let{index:r,pose:s,actor:c}=o;if(a&&!o.guard){if(o.fishing){if(o.sheltering){c.avatar.visible=!1;continue}let e=o.homeDoor;if(Math.hypot(e[0]-s.x,e[1]-s.z)<.5){c.avatar.visible=!1,o.sheltering=!0;continue}if(c.avatar.visible=!0,s.sitting=!1,s.height=0,o.accumulated+=t,o.accumulated<Q.cadence)continue;let r=o.accumulated;o.accumulated=0,Ho(o,e[0],e[1],{step:r,obstacles:n}),o.umbrella.visible=i.rain>.32,c.update(s,r,i.reduced);continue}if(Math.hypot(o.home[0]-s.x,o.home[1]-s.z)<Q.shelterDistance){c.avatar.visible=!1,o.sheltering=!0;continue}if(c.avatar.visible=r<i.limit||o.fishing,o.accumulated+=t,o.accumulated<Q.cadence)continue;let e=o.accumulated;o.accumulated=0,s.sitting=!1,Ho(o,o.home[0],o.home[1],{step:e,obstacles:n}),o.umbrella.visible=i.rain>.32&&!o.guard,c.update(s,e,i.reduced);continue}if(!a&&o.fishing&&o.sheltering){let e=Math.hypot(o.spot.x-s.x,o.spot.z-s.z);if(c.avatar.visible=!0,s.sitting=!1,s.height=0,o.accumulated+=t,o.accumulated<Q.cadence)continue;let r=o.accumulated;o.accumulated=0,e<.4?(o.sheltering=!1,Object.assign(s,{x:o.spot.x,z:o.spot.z,height:.3,sitting:!0})):Ho(o,o.spot.x,o.spot.z,{step:r,obstacles:n}),c.update(s,r,i.reduced);continue}o.sheltering=!1,c.avatar.visible=r<i.limit||o.fishing;let l=Math.hypot(e.x-s.x,e.z-s.z)<Q.activityRadius;if(o.accumulated+=t,!l&&o.accumulated<Q.cadence)continue;let u=o.accumulated;o.accumulated=0,o.time+=u,o.fishing&&Math.hypot(o.spot.x-s.x,o.spot.z-s.z)>.4?(s.sitting=!1,s.height=0,Ho(o,o.spot.x,o.spot.z,{step:u,obstacles:n}),c.update(s,u,i.reduced)):(o.fishing&&(s.height=.3),s.sitting=o.fishing||r%3==0&&Math.sin(o.time*.22)<-.28,s.speed=0,o.post&&Wo(o,s,u,{rain:i.rain,snow:i.snow}),o.post||o.fishing||s.sitting||Uo(o,e,{step:u,obstacles:n}),o.umbrella.visible=i.rain>.32&&!o.watching,c.update(s,u,i.reduced||!l))}},hotspot(e){let t=r.find(({actor:t,pose:n})=>t.avatar.visible&&Math.hypot(e.x-n.x,e.z-n.z)<Q.radius);return t?{id:`resident-${t.index}`,kind:`resident`,title:t.title,label:Q.greet,note:t.note,x:t.pose.x,z:t.pose.z,radius:Q.radius}:null},targets:r.map(e=>({id:`resident-${e.index}`,object:e.actor.avatar,detailAnchor:e.actor.detailAnchor,title:e.title,height:1.28})),followers:r.map(e=>({pose:e.pose,avatar:e.actor.avatar}))}}var Ko=.35,qo=208;function Jo(e,t){let[n,r,i]=qt.eye,a=t.box([n-.14,r-.56,i],[.11,.88,.11],[`#715b4c`]),o=t.beam([[n-.3,r-.2,i+.13],[n+.48,r+.03,i-.14]],.23,[`#67817e`]);e.add(a,o,t.box([n+.47,r+.03,i-.14],[.11,.24,.26],[`#ccab78`]))}function Yo(e){let{x:t,z:n}=qt.position;return!e.lookout||Math.hypot(e.x-t,e.z-n)>qt.promptRadius?null:{kind:`telescope`,id:qt.id,label:qt.action,x:t,z:n,radius:qt.promptRadius}}function Xo(e,t){let{camera:n,onChange:r,targets:i}=t,a=new O(.93,.107,-.36),o=new O(...Ut.moonDirection),s=new O(...qt.eye);i.push({id:`sun`,title:`太阳`,position:a.normalize().multiplyScalar(qo),night:!1},{id:`moon`,title:`月亮`,position:o.normalize().multiplyScalar(qo),night:!0});let c=new O,l=new O,u=new O,d=!1,f=qt.starting,p=qt.yaw,m=qt.pitch,h=null,g=null,_=``,v=!1,y=0,b;function S(){let e=h?.id??``,t=[e,f,v,!!g].join(`:`);t!==_&&(_=t,r({zoom:f,name:qt.titles[e]||h?.title||(h?`观察目标`:``),caption:e===`sun`?qt.sunHint||qt.captions[e]||`待填写`:qt.captions[e]||(h?`待填写`:``),locked:!!g,loading:v}))}async function C(){if(d)return;let t=++y;d=!0,v=!0,_=``,g=null,f=qt.starting,p=qt.yaw,m=qt.pitch,S();try{let n=await Lt(()=>import(`./harbor-scope-detail-qOOv3NC9.js`),__vite__mapDeps([0,1,2,3,4,5]));d&&t===y&&(b=n.mountScopeDetails(e,i))}catch{t===y&&(b=void 0)}finally{t===y&&(v=!1,d&&S())}}function w(e,t){return e.position?t.copy(e.position):(e.object?.getWorldPosition(t),t.y+=e.height??.8,t)}function T(e,t){let n=qt.aimTolerance/Math.sqrt(f)*Math.max(Ko,1-t*.38),r=null;for(let t of i){if(t.night!==void 0&&t.night!==e||!t.position&&t.object&&!t.object.visible)continue;let i=u.subVectors(w(t,u),s).normalize().angleTo(l);i<n&&(n=i,r=t)}return r}return{get active(){return d},open:C,close(){return d?(d=!1,++y,b?.dispose(),b=void 0,h=g=null,n.fov=U.fov,n.updateProjectionMatrix(),r(null),!0):!1},look(e,t){g=null,p=x.clamp(p-e*qt.sensitivity,qt.yaw-qt.yawLimit,qt.yaw+qt.yawLimit),m=x.clamp(m+t*qt.sensitivity,-qt.pitchLimit,qt.pitchLimit)},zoom(e){f=x.clamp(f+e*qt.step,qt.minimum,qt.maximum),S()},lock(){g=g?null:h,S()},update(e,t){d&&(n.position.copy(s),g?l.subVectors(w(g,c),s).normalize():l.set(-Math.sin(p)*Math.cos(m),-Math.sin(m),-Math.cos(p)*Math.cos(m)),n.lookAt(c.copy(s).add(l)),n.fov=U.fov/f,n.updateProjectionMatrix(),h=g??T(e,t),b?.update(f),S())}}}var Zo={transition:4.2,snowBuild:18,snowMelt:14,iceDelay:9,iceBuild:25,iceMelt:15,maximumIce:.4,wetFog:.025,snowFog:.018,rainLight:.61,snowLight:.8,rainSky:`#778e9f`,snowSky:`#bac6cc`,snowTint:`#e8e7dc`,particles:{high:490,medium:250,low:82},volume:[21,15,21],iceBounds:[-24,27,-24,23],safeChannels:[[-6,13,6,11],[8,29,-14,10],[3.5,8.5,-8.5,-2.5],[-8,-1.5,-7.4,-2.4]]};function Qo(e,t,n){let[r,i,a,o]=Zo.iceBounds;if(n<=0||e<r||e>i||t<a||t>o||Zo.safeChannels.some(([n,r,i,a])=>e>=n&&e<=r&&t>=i&&t<=a))return!1;let s=Math.min(Math.abs(t+2.55),Math.abs(t-11),Math.abs(e+12),Math.abs(t+18)),c=.14*Math.sin(e*.83+t*.51)*Math.sin(t*1.25-e*.34);return s*.16+c<n}var $o=193,es=.024,ts=.42,ns=.075;function rs(e,t,n,r){return e+Math.sign(t-e)*Math.min(Math.abs(t-e),n/r)}function is(e){let t=Wt($o),[n,r,i]=Zo.volume,a=Array.from({length:Zo.particles.high},()=>({x:t()*n-n/2,y:t()*r,z:t()*i-i/2,drift:t()})),o=new I({color:`#d9e4df`,transparent:!0,opacity:.64,depthWrite:!1}),s=new A(new Ae,o,a.length);s.instanceMatrix.setUsage(M),s.frustumCulled=!1,e.add(s);let c=new je;return(e,t,n)=>{let{frame:i,limit:l}=n,u=i.rain>i.snow;if(s.count=Math.min(a.length,Math.round(l*Math.max(i.rain,i.snow))),s.visible=s.count>0,s.visible){o.color.set(u?`#a7bfca`:`#ecebe0`),o.opacity=u?.46:.81,c.scale.set(u?es:ns,u?ts:ns,ns),c.rotation.z=u?-.16:0;for(let n=0;n<s.count;n++){let i=a[n],o=x.euclideanModulo(i.y-t*(u?12:1.2+i.drift),r),l=u?(o-r/2)*.18:Math.sin(t+i.drift*8)*.64;c.position.set(e.position.x+i.x+l,e.position.y+o-r/2,e.position.z+i.z),c.updateMatrix(),s.setMatrixAt(n,c.matrix)}s.instanceMatrix.needsUpdate=!0}}}function as(t,n){let r=new Set;t.traverse(t=>{if(!(t instanceof L))return;let i=Array.isArray(t.material)?t.material:[t.material];for(let t of i){if(!(t instanceof e)||r.has(t))continue;r.add(t);let i=t.onBeforeCompile.bind(t);t.onBeforeCompile=(e,t)=>{i(e,t),e.uniforms.harborSnow=n.snow,e.uniforms.harborRain=n.ripple,e.uniforms.harborWeatherTime=n.time,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
             #include <opaque_fragment>`)},t.customProgramCacheKey=()=>`harbor-surface-weather`,t.needsUpdate=!0}})}function os(e){let t={value:0},n={value:0},r={value:0};as(e,{snow:t,ripple:n,time:r});let i=is(e),a={rain:0,snow:0,cover:0,ice:0,low:!1},o=0,s=0;return{frame:a,update(e,c,l){let{step:u,quality:d,tier:f,reduced:p}=l;a.low=d===`low`||f>=2,a.rain=rs(a.rain,Number(e===`rain`),u,Zo.transition),a.snow=rs(a.snow,Number(e===`snow`),u,Zo.transition),o=e===`snow`?o+u:0,a.cover=rs(a.cover,Number(e===`snow`),u,e===`snow`?Zo.snowBuild:Zo.snowMelt);let m=o>=Zo.iceDelay;return a.ice=rs(a.ice,m?Zo.maximumIce:0,u,(m?Zo.iceBuild:Zo.iceMelt)/Zo.maximumIce),t.value=a.low?Number(a.cover>=.6)*.66:a.cover,s+=p?0:u,n.value=a.low?0:a.rain,r.value=s,i(c,s,{frame:a,limit:f>=1||p?Zo.particles.low:Zo.particles[d]}),a}}}var ss={origin:[-25.7,J+4.06,-2.03],count:18,life:4.4,rise:1.7,drift:.7,color:`#d3d7da`,opacity:.42,startSize:.16,endSize:.62};function cs(e){let t=Array.from({length:ss.count},(t,n)=>{let r=new I({color:ss.color,transparent:!0,opacity:0,depthWrite:!1}),i=new L(new Ae,r);return i.raycast=()=>{},i.visible=!1,e.add(i),{mesh:i,material:r,seed:n*.83,age:n*ss.life/ss.count}});return{update(e,n){for(let r of t){r.age+=e,r.age>ss.life&&(r.age-=ss.life);let t=r.age/ss.life,i=ss.startSize+t*(ss.endSize-ss.startSize);r.mesh.visible=!n,r.mesh.scale.set(i,i*.9,i),r.mesh.position.set(ss.origin[0]+Math.sin(r.seed)*ss.drift*t+t*t*.3,ss.origin[1]+t*ss.rise,ss.origin[2]+Math.cos(r.seed)*ss.drift*t*.7),r.material.opacity=Math.sin(Math.PI*Math.min(1,t*1.12))*ss.opacity}}}}var ls=5;function us(e){return(t,n)=>{let r=Math.abs(n.speed);e(`engine`,{volume:t.sailing?(n.mode===`tour`?.29:.67)*Math.min(1,.28+r*.11):0,pitch:.77+r*.13});let i=Math.hypot(t.x-G.center.x,t.z-G.center.z),a=n.mobile?ls:Pt.effects.machine.range;e(`machine`,{volume:Math.max(0,1-i/a)*(t.lookout?.3:.52),pitch:t.lookout?.73:1});let{rain:o,snow:s}=n.weather;e(`rain`,{volume:o*.66}),e(`wind`,{volume:Math.max(s*.41,n.flightWind)})}}function ds({scene:e,camera:t,kit:n},r){let i=Go(e,n,r.obstacles),a=Oa(e,n),o=Ja(e,n),s=co(e,n);return Jo(e,n),{residents:i,islands:a,gulls:o,seaLife:s,weather:os(e),chimney:cs(e),scope:Xo(e,{camera:t,onChange:r.onChange,targets:[...a.islands,...a.ships,...i.targets,...r.animals.targets,{id:Ka.id,title:Ka.title,object:o.actor,height:.1}]}),ambience:us(r.setAmbience)}}function fs(e){let{first:t}=Po,n=new O,r=new O,i=new Re,a=new We,o=0,s=0,c=0;return{get blend(){return o},get heading(){return c},update(l,u,d){let f=Number(d.enabled);o=d.instant?f:o+Math.sign(f-o)*Math.min(Math.abs(f-o),d.step/t.transition);let p=o*o*(3-2*o),m=u.yaw;if(c=m,s+=d.step*l.speed,!o){e.near!==U.near&&(e.near=U.near,e.updateProjectionMatrix());return}let h=d.bob&&!l.airborne&&!l.sailing?Math.sin(s*t.bobHz)*t.bob:0,g=l.sailing?t.helmEye:l.sitting?t.seatEye:t.eye;n.set(l.x,J+l.elevation+l.height+g+h,l.z);let _=Math.cos(u.pitch);r.set(-Math.sin(m)*_,-Math.sin(u.pitch),-Math.cos(m)*_).add(n),a.position.copy(n),a.lookAt(r),i.copy(e.quaternion),e.position.lerp(n,p),e.quaternion.copy(i).slerp(a.quaternion,p),e.near=x.lerp(U.near,t.near,p),e.updateProjectionMatrix()}}}var ps=2,ms=.015;function hs(e){let t=q.cape,n=Math.min(t.rows,Math.floor(t.maxSegments/ps)),r=e.surface(t.color),i=new A(new Ae,r,n*ps);i.name=`harbor-flight-cape`,i.instanceMatrix.setUsage(M),i.visible=!1,i.frustumCulled=!1;let a=new je;function o(e){if(i.visible=e.open>ms||t.alwaysVisible,!i.visible)return;let r=e.low?Math.ceil(n/2):n,o=Math.min(1,e.speed/q.speed),s=t.length*n/r*(.23+e.open*.77),c=e.open*(.16+t.flow*o),l=t.shoulder,u=t.rootBack;i.count=r*ps;for(let n=0;n<r;n++){let o=e.reduced?0:Math.sin(e.time*t.waveRate-n)*t.breeze,d=c+o*e.open,f=-e.bank*t.bank*e.open*n/r;for(let c=0;c<ps;c++){let p=t.width+e.open*t.spread*n/r;a.position.set(f+(c-.5)*p,l-Math.cos(d)*s/2,u-Math.sin(d)*s/2),a.rotation.set(d,0,o),a.scale.set(p,s+t.thickness/4,t.thickness),a.updateMatrix(),i.setMatrixAt(n*ps+c,a.matrix)}l-=Math.cos(d)*s,u-=Math.sin(d)*s}i.instanceMatrix.needsUpdate=!0}return{mesh:i,update:o}}function gs(e,t){let n=Po.reference,r=Po.variantPreview,i=t?{...n,...Po.variant,hair:Po.variant.hair||r.hair,coat:Po.variant.coat||r.coat,scarf:Po.variant.scarf||r.scarf}:n,a=e=>`#`+new R(e).lerp(new R(Po.neutral),Po.mutedMix).getHexString();return{...No(e,{hair:a(i.hair),shirt:a(i.coat),trousers:i.trousers,boots:i.boots,hat:!1,skin:i.skin,badge:i.badge,hairstyle:i.hairstyle,traveler:!0,shoulderBag:i.shoulderBag}),scarfColor:i.scarf}}function _s(e,t){let n=new f,r=Po.scarfWidth;n.add(e.box([0,0,.01],[.41,.088,.4],[t]));let i=Array.from({length:Po.scarfSegments},()=>{let n=new f;return n.add(e.box([0,-.056,0],[r,.133,.046],[t])),n}),a=n;return i.forEach((e,t)=>{e.position.set(t?0:-.14,t?-.106:0,t?0:-.195),a.add(e),a=e}),{root:n,segments:i}}function vs(e,t,n){e.root.position.set(0,1.1+t.height,0);let r=n.reduced?.1:n.rain>.3?.38:1;e.segments.forEach((e,i)=>{e.visible=!n.low||i<Po.lowSegments;let a=Math.sin(n.time*1.5+i*.54)*Po.wind,o=Math.min(t.speed*.17,.54),s=t.airborne?Math.max(-.27,Math.min(.32,n.vertical*.095)):0,c=(i?a*.7:-o-s+a)*r,l=Ro(n.step,Po.scarfResponse+i*.035);e.rotation.x=x.lerp(e.rotation.x,c,l),e.rotation.z=x.lerp(e.rotation.z,(a+n.turn*.8)*r,l)})}function ys(e,t){let n={traveler:gs(t,!1),variant:gs(t,!0),original:No(t)},r={traveler:_s(t,n.traveler.scarfColor),variant:_s(t,n.variant.scarfColor)};n.traveler.avatar.add(r.traveler.root),n.variant.avatar.add(r.variant.root);let i=Fo(t);i.name=`harbor-player-umbrella`;let a=hs(t);e.add(...Object.values(n).map(e=>e.avatar),i);let o=0,s=0,c=0,l=0;return(e,t)=>{let{appearance:u}=t.settings,d=n[u],f=t.simplified||t.settings.quality===`low`;for(let e of Object.values(n))e.avatar.visible=e===d&&t.first<Po.first.hideBlend;o+=t.seconds;let p=(e.height-s)/Math.max(t.seconds,.016),m=Math.atan2(Math.sin(e.facing-c),Math.cos(e.facing-c));s=e.height,c=e.facing;let h=Number(t.flying),g=t.seconds/q.cape.transition;l=t.reduced?h:l+Math.sign(h-l)*Math.min(g,Math.abs(h-l));let _=l*l*(3-2*l);a.mesh.parent!==d.detailAnchor&&d.detailAnchor.add(a.mesh),a.update({open:_,time:o,low:f,speed:e.speed,reduced:t.reduced,bank:t.bank}),d.setFlightPose({blend:_,lean:_*q.pose.lean*Math.min(1,e.speed/q.speed),bank:-_*t.bank*q.pose.bank,arms:_*q.pose.arms}),d.setFishingArm(t.fishingArm),d.update(e,t.seconds,t.reduced),d.swingCoat(f||t.reduced?0:Math.sin(o*6.6)*Math.min(e.speed*.015,Po.coatSwing)),u!==`original`&&vs(r[u],e,{time:o,step:t.seconds,rain:t.rain,reduced:t.reduced,low:f,turn:m,vertical:p}),i.visible=!t.flying&&t.fishingArm===void 0&&t.rain>.25;let v=t.first>Po.first.hatBlend,y=v?t.yaw+Math.PI:e.facing,b=Math.cos(y)*.29+Math.sin(y)*(v?.41:.08),x=-Math.sin(y)*.29+Math.cos(y)*(v?.41:.08);i.position.set(e.x+b,J+e.elevation+e.height+(v?1.3:1.01),e.z+x),i.rotation.set(0,y,t.reduced?0:Math.sin(o*6)*e.speed*.012)}}var bs={background:`#8a694c`,text:`#fff0d4`,font:`"Microsoft YaHei", sans-serif`,width:1.38,height:.34,mountHeight:1.83,canvas:[144,35],fontSize:19};function xs(e,t,n){let{canvas:r,context:i}=Jt(bs.canvas[0],bs.canvas[1]);i.fillStyle=bs.background,i.fillRect(0,0,r.width,r.height),i.fillStyle=bs.text,i.textAlign=`center`,i.textBaseline=`middle`,i.font=`bold ${bs.fontSize}px ${bs.font}`,i.fillText(e,r.width/2,r.height/2);let a=new L(new ve(bs.width,bs.height),new I({map:Ht(r),side:2}));return a.position.set(t[0],t[1],t[2]),a.rotation.y=n,a}var Ss={route:[[-21.3,-3.9],[-21.1,2.9]],door:{x:-22.15,z:-2.9},doorApproach:{x:-21.9,z:.2},walkSpeed:1.4,radius:.26,restYaw:Math.PI/2,nightFrom:.55,rainFrom:.35,hideDistance:.55},Cs={x:-22.15,z:.55,yaw:Math.PI/2,elevation:J},ws=[`#6b4a34`],Ts=[`#4a3324`],Es=[`#d8894a`];function Ds(e,t){let n=e.box([.02,1.15,.28],[.022,.022,.16],ws);n.rotation.x=-.22,t.add(n);let r=e.box([.02,1.14,.37],[.045,.05,.045],Ts);t.add(r),t.add(e.box([.02,1.17,.37],[.03,.012,.03],Es))}var Os=[`#8a6b4e`,`wood`],ks=[`#c8b79a`,`wood`];function As(e){let t=new f;t.add(e.box([0,.28,0],[.92,.1,.56],Os)),t.add(e.box([0,.36,0],[.8,.06,.48],ks));let n=e.box([0,.95,-.69],[.94,1.1,.1],Os);n.rotation.x=-.62;let r=e.box([0,1.5,-.79],[1.02,.1,.14],Os);r.rotation.x=-.62,t.add(r,n);for(let n of[-1,1])t.add(e.box([n*.42,.14,.22],[.08,.28,.08],Os)),t.add(e.box([n*.42,.2,-.24],[.08,.4,.08],Os));for(let n of[-1,1])for(let r=0;r<9;r++){let i=(r+.5)/9-.5,a=.16*i*i*4,o=e.box([n*.42,.04+a,i*1.34],[.09,.06,.16088888888888891],Os);o.rotation.x=-i*1.15,t.add(o)}return t}function js(e,t,n){let r=No(t,{hair:`#cdc6bd`,skin:`#d9b394`,shirt:`#4d5a68`,trousers:`#3d454e`,hat:!1,headwear:`bandana`});Ds(t,r.head),e.add(r.avatar),e.add(xs(`守塔人小屋`,[-2.69,J+bs.mountHeight,-19.15],0));let i=As(t);i.rotation.order=`YXZ`,i.rotation.y=Cs.yaw,i.position.set(Cs.x,J+lt(Cs.x,Cs.z),Cs.z),e.add(i);let a=0,[o,s]=Ss.route[0],c={x:o,z:s,facing:Ss.restYaw,speed:0,height:0,elevation:0,airborne:!1,jumpAge:0,landing:0,sailing:!1,sitting:!1,lookout:!1,swimming:!1},l=1,u=!1,d=0;function f(e,t,o,s){a+=o,i.rotation.x=Math.sin(a*1.1)*.045;let f=e>Ss.nightFrom||t>Ss.rainFrom;if(f&&!u){let e=Ss.doorApproach,t=c.x<-22.2&&Math.hypot(e.x-c.x,e.z-c.z)>.5?e:Ss.door,n=t.x-c.x,i=t.z-c.z,a=Math.hypot(n,i);a<Ss.hideDistance&&t===Ss.door?(u=!0,r.avatar.visible=!1):p(n,i,a,o)}else if(!f&&u)u=!1,r.avatar.visible=!0,Object.assign(c,{x:Ss.door.x,z:Ss.door.z,speed:0}),l=0;else if(u){r.update(c,o,s);return}else if(d>0)d-=o,c.speed=0;else{let[e,t]=Ss.route[l],n=e-c.x,r=t-c.z,i=Math.hypot(n,r);i<.18?(l=(l+1)%Ss.route.length,d=1.2+Math.random()*1.6,c.speed=0):p(n,r,i,o)||(d=.8,l=(l+1)%Ss.route.length)}c.elevation=lt(c.x,c.z),c.height=0,r.update(c,o,s);function p(e,t,r,i){let a=Math.min(Ss.walkSpeed*i,r),o=c.x+e/r*a,s=c.z+t/r*a;return Ct(o,s,{obstacles:n,height:0,radius:Ss.radius})?(c.x=o,c.z=s,c.facing=zo(c.facing,Math.atan2(e,t),Ro(i,.22)),c.speed=Ss.walkSpeed,!0):(c.speed=0,!1)}}return{update:f,pose:c,avatar:r.avatar}}var Ms=`#819471`,Ns=`#8c8878`,Ps=`#b7a384`,Fs=`#896a50`,Is=.016,Ls=.06;function Rs(e,t){return J+ft(e,t)}function zs(e,t){let[n,r,i,a]=t,o=[[n,i],[r,i],[r,a],[n,a]],s=o.flatMap(([e,t])=>[e,Rs(e,t),t]).concat(o.flatMap(([e,t])=>[e,-.72,t])),c=new He;return c.setAttribute(`position`,new Pe(s,3)),c.setAttribute(`uv`,new Pe([0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1],2)),c.setIndex([0,2,1,0,3,2,0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6,3,0,4,3,4,7]),c.addGroup(0,6,0),c.addGroup(6,24,1),c.computeVertexNormals(),new L(c,[e.surface(Ms,`grass`),e.surface(Ns,`brick`)])}var Bs=yt.footprints.flatMap(([e,t,n,r])=>{let i=[e,...[yt.summitAt,yt.riseFrom].filter(n=>n>e&&n<t),t];return i.slice(1).map((e,t)=>[i[t],e,n,r])});function Vs(){let e=Wt(yt.treeSeed);return Array.from({length:yt.treeCount},(t,n)=>{let[r,i,a,o]=yt.footprints[n%yt.footprints.length];return{x:r+(i-r)*(.08+e()*.84),z:n%2==0?a+.48:o-.48,size:.8+e()*.45}}).filter(({x:e,z:t})=>Math.hypot(e+47.1,t+7.8)>2.1)}var Hs=Vs();function Us(e,t){let n=Math.atan2(t[0]-e[0],t[2]-e[2]),r=Math.cos(n)*yt.railOffset,i=-Math.sin(n)*yt.railOffset;function a([e,,t],a){let o=e+r+Math.sin(n)*a,s=t+i+Math.cos(n)*a;return[o,Rs(o,s)+yt.railHeight,s]}return[a(e,yt.railEndGap),a(t,-yt.railEndGap)]}function Ws(e,t,n){return[e-n,e+n,t-n,t+n]}var Gs=[...Hs.map(({x:e,z:t})=>Ws(e,t,.14)),...yt.stairRuns.flatMap(e=>{let[t,n]=yt.trail[e-1],[r,i]=yt.trail[e];return Us([t,0,n],[r,0,i]).map(([e,,t])=>Ws(e,t,yt.railThickness/2))})],Ks=[[.62,.24,1.24,`#725440`],[1.39,.92,.77,`#5d7764`],[1.89,.63,.41,`#79906e`]],qs=Hs.flatMap(({x:e,z:t,size:n})=>Ks.map(([r,i,a])=>({footprint:Ws(e,t,i*n/2),base:Rs(e,t)+(r-a/2)*n,height:a*n})));function Js(e,t){let n=new je;for(let[r,i,a,o]of Ks){let s=t.box([0,0,0],[1,1,1],[o]),c=new A(s.geometry,s.material,Hs.length);Hs.forEach(({x:e,z:t,size:o},s)=>{n.position.set(e,Rs(e,t)+r*o,t),n.scale.set(i*o,a*o,i*o),n.updateMatrix(),c.setMatrixAt(s,n.matrix)}),e.add(c)}}function Ys(e,[t,n]){let r=new f,i=n[0]-t[0],a=n[2]-t[2],o=Math.atan2(i,a);for(let n=1;n<=yt.treadCount;n++){let s=n/(yt.treadCount+1),c=t[0]+i*s,l=t[2]+a*s,u=e.box([c,Rs(c,l),l],[yt.treadWidth,yt.treadHeight,yt.treadDepth],[Ns,`brick`]);u.rotation.y=o,r.add(u)}let s=Us(t,n),[c,l]=s;r.add(e.beam([c,l],yt.railThickness,[Fs,`wood`]));for(let[t,n,i]of s)r.add(e.box([t,n-yt.railHeight/2,i],[yt.railThickness,yt.railHeight,yt.railThickness],[Fs,`wood`]));return r}function Xs(e,t){for(let n=1;n<yt.trail.length;n++){let[r,i]=yt.trail[n-1],[a,o]=yt.trail[n],s=[r,Rs(r,i)+Is,i],c=[a,Rs(a,o)+Is,o],l=t.beam([s,c],yt.trailWidth,[Ps,`brick`]);l.scale.z=Ls,l.rotateY(Math.PI/2),e.add(l),yt.stairRuns.some(e=>e===n)&&e.add(Ys(t,[s,c]));let u=r+.52,d=i-.91,f=Rs(u,d);e.add(t.box([u,f+.49,d],[.11,.98,.11],[Fs])),n%2&&e.add(da(t.box([u,f+1.04,d],[.19,.2,.19],[`#f2c48b`]),`street`))}}function Zs(e,t){for(let n of Bs)e.add(zs(t,n));Js(e,t),Xs(e,t);let{canvas:n,context:r}=Jt(128,32);r.fillStyle=Fs,r.fillRect(0,0,128,32),r.fillStyle=`#fff0d4`,r.font=`bold 19px sans-serif`,r.textAlign=`center`,r.fillText(yt.title,64,23);let i=new L(new ve(1.12,.28),new I({map:Ht(n),side:2}));i.position.set(-24.8,J+1.26,-11.88),i.rotation.y=Math.PI/2,e.add(i,t.box([-24.8,J+.61,-11.88],[.12,1.22,.12],[Fs]))}var{playerRadius:Qs}=jt,$s={left:Xt.west-q.mapMargin,right:Xt.east+q.mapMargin,near:Xt.north-q.mapMargin,far:Xt.south+q.mapMargin};function ec({x:e,z:t}){let n=Math.min(e-$s.left,$s.right-e,t-$s.near,$s.far-t);return 1-Math.max(0,Math.min(1,n/q.edgeBrake))}function tc({x:e,z:t}){let n=bt(e,t,kt);return Math.max(n,bt(e-Qs,t,kt),bt(e+Qs,t,kt),bt(e,t-Qs,kt),bt(e,t+Qs,kt))}function nc(e){let t=tc(e);return t>0?t+q.groundClearance:q.waterClearance}function rc(e,t){let n=[...t,...e.map(({footprint:e,height:t})=>{let[n,r,i,a]=e;return{footprint:e,base:tc({x:(n+r)/2,z:(i+a)/2}),height:t??q.propHeight}})].map(({footprint:[e,t,n,r],base:i=J,height:a})=>({left:e-Qs,right:t+Qs,near:n-Qs,far:r+Qs,bottom:i,top:i+a})),r=({x:e,y:t,z:r})=>n.some(n=>e>n.left&&e<n.right&&r>n.near&&r<n.far&&t<n.top&&t+q.bodyHeight>n.bottom);return{landing({x:t,z:n}){if(!Ct(t,n,{height:0,obstacles:[]}))return At.waterLevel;let i=tc({x:t,z:n});if(Ct(t,n,{height:0,obstacles:e})&&!r({x:t,y:i,z:n}))return i;let a=Math.hypot(t-G.center.x,n-G.center.z);if(a>=G.lanternRadius&&a<=G.outerRadius)return J+G.platformOffset;let o=Bt(t,n,{obstacles:e,height:1/0});return o>0?i+o:i},clear({x:e,y:t,z:n},i){return e<$s.left||e>$s.right||n<$s.near||n>$s.far||t>q.maximumAltitude||t<(i?nc({x:e,z:n}):tc({x:e,z:n}))?!1:!r({x:e,y:t,z:n})}}}var ic={x:0,y:0,z:0},ac=.13,oc=.04,sc=.4,cc=.88;function lc(e,t,n){let r=q.speed*(e.sprint?q.sprintMultiplier:1)*(1-n*n*cc);return{x:(Math.cos(t)*e.x-Math.sin(t)*e.z)*r,z:(-Math.sin(t)*e.x-Math.cos(t)*e.z)*r,y:e.vertical*(e.vertical>0?q.climbSpeed:q.descentSpeed)}}function uc(e,t,n){let r={...ic};for(let i of[`x`,`y`,`z`]){let a=i===`y`?q.verticalResponse:t.x||t.z?q.accelerationTime:q.brakingTime,o=Ro(n,a);r[i]=t[i]*n+(e[i]-t[i])*o*a/Io,e[i]+=(t[i]-e[i])*o}return r}function dc(e,t,n){let{velocity:r,target:i,step:a,clearance:o,committedLanding:s}=n,c=uc(r,i,a);for(let n of[`y`,`x`,`z`]){if(!c[n])continue;let i={...t,[n]:t[n]+c[n]};if(n===`y`){let e=o?nc(i):tc(i),t=Math.min(q.maximumAltitude,Math.max(e,i.y));t!==i.y&&(r.y=0),i.y=t}let a=n!==`y`&&(!o||s)&&typeof e.landing(i)!=`number`;(!s||!a)&&e.clear(i,o||a)?t[n]=i[n]:r[n]=0}}function fc(e,t,n){let r={...ic},i={...ic},a=`ground`,o={x:e.x,z:e.z},s=0,c=0,l=!1,u=()=>{Object.assign(i,ic),c=0};function d(){a!==`ground`&&(a=`ground`,u(),s=0,n.notice(``),n.change(!1))}function f(){let e=t.landing(r);return typeof e!=`number`&&!l&&(n.notice(q.ui.blocked),l=!0),e}function p(){l=!1,typeof f()==`number`&&(a=`land`)}function m(e,o,s){if(a===`ground`||e<=0)return;o.vertical>=0&&(l=!1);let c=a===`land`||o.vertical<0?f():`blocked`,u=lc(o,s,ec(r));a===`launch`&&Object.assign(u,{x:0,z:0,y:q.launchSpeed}),a===`land`&&Object.assign(u,{x:0,z:0,y:-q.landingSpeed});let p=(a===`land`||o.vertical<0)&&typeof c==`number`,m=a===`air`&&!p&&r.y<nc(r);m&&Object.assign(u,{x:0,z:0,y:Math.max(u.y,q.launchSpeed)});let g={...r},_=Math.ceil(e/jt.maxCollisionStep);for(let n=0;n<_;n++)dc(t,r,{velocity:i,target:u,step:e/_,clearance:a===`air`&&!p&&!m,committedLanding:a===`land`});if(a===`launch`&&r.y>=nc(r)&&(a=`air`),typeof c==`number`&&p&&r.y<c+oc&&n.land({...r,y:c})){let e=Math.hypot(r.x-G.center.x,r.z-G.center.z),t=e>=G.lanternRadius&&e<=G.outerRadius,i=c>tc(r)+sc;d(),t?n.notice(q.ui.platform):i&&n.notice(q.ui.roof)}else h(e,g)}function h(t,n){let i=r.x-n.x,a=r.z-n.z,o=lt(r.x,r.z);e.speed=Math.hypot(i,a)/t,c=Math.hypot(i,a,r.y-n.y)/t;let l=e.speed>jt.movementThreshold?zo(e.facing,Math.atan2(i,a),Ro(t,q.turnTime)):e.facing,u=(l-e.facing)/t;s+=(Math.max(-1,Math.min(1,u))-s)*Ro(t,ac),Object.assign(e,{x:r.x,z:r.z,elevation:o,facing:l,height:r.y-J-o,airborne:!0,jumpAge:0,landing:0})}return{get active(){return a!==`ground`},get bank(){return s},get speed(){return c},toggle(){a===`land`?a=`air`:a===`ground`?(Object.assign(r,{x:e.x,z:e.z,y:J+e.elevation+e.height}),o={x:e.x,z:e.z},a=`launch`,u(),n.change(!0)):p()},disable(){a!==`ground`&&a!==`land`&&(typeof t.landing(r)==`number`?a=`land`:(n.land({...o,y:.65+lt(o.x,o.z)})||n.recover(),d(),n.notice(q.ui.recovered)))},update:m,reset:d,clear:u}}function pc(e){let{baseWind:t,speedWind:n,flapInterval:r,flapThreshold:i}=q.audio,a=r;return(o,s,c)=>{if(!s)return a=r,0;let l=Math.min(1,c/q.speed);return a+=o,a>=r&&l>=i&&(e(`cape`,{volume:l}),a=0),t+n*l}}var mc=Tt.eval.x,hc=17.35,gc=1.8,_c=2.65,vc=112,yc=40,bc=[-1,1],xc={footprint:[mc-gc,mc+gc,15.910000000000002,18.790000000000003],height:_c};function Sc(){let{canvas:e,context:t}=Jt(vc,yc);t.fillStyle=`#755440`,t.fillRect(0,0,vc,yc),t.fillStyle=`#ac875e`,t.fillRect(3,3,106,34),t.fillStyle=`#fff0c9`,t.textAlign=`center`,t.textBaseline=`middle`,t.font=`bold 22px "Microsoft YaHei", "PingFang SC", sans-serif`,t.fillText(It.title,vc/2,yc/2);let n=new L(new ve(1.72,.59),new I({map:Ht(e)}));return n.position.set(0,2,-1.52),n.rotation.y=Math.PI,da(n,`station`)}function Cc(e,t){let n=new f,{box:r}=t;n.add(r([0,.12,0],[3.6,.24,2.88],[`#9a7153`,`wood`])),n.add(r([0,1.1,1.23],[3.34,1.8,.2],[`#bdad88`,`wood`])),n.add(r([0,.71,-1.12],[3.38,.87,.58],[`#9c7457`,`wood`])),n.add(r([0,1.17,-1.15],[3.52,.12,.64],[`#cda77b`,`wood`]));for(let e of bc){for(let t of bc)n.add(r([1.56*e,1.2,1.17*t],[.17,2.4,.17],[`#765848`,`wood`]));let t=r([e*.82,2.42,0],[1.9,.16,3.05],[`#6b8279`,`roof`]);t.rotation.z=-.22*e,n.add(t)}n.add(r([-.84,1.25,-1.16],[.44,.09,.29],[`#d8c8a2`])),n.add(Sc()),n.position.set(mc,J,hc),e.add(n)}function wc(e,t,n){let r=e.vessel,i=t.x-r.x,a=t.z-r.z,o=Math.hypot(i,a);if(o<=xt.positionTolerance)return`arrived`;let s=t.wait?Math.min(xt.speed,Math.max(.8,o*1.6)):xt.speed,c=r.speed+(s-r.speed)*Ro(n,xt.startResponse),l=zo(r.yaw,Math.atan2(i,a),Ro(n,xt.turnSeconds)),u=Math.min(o,c*n),d={x:r.x+i*u/o,z:r.z+a*u/o,yaw:l,speed:c};return e.followRoute(d,n)?`moving`:`blocked`}function Tc(e,t){let n=0,r=0,i=!1;return{start(){n=0,r=0,i=!1,e.startTour()},update(a){if(i||!a)return null;if(r>0)return r=Math.max(0,r-a),r||t(null),null;let o=xt.route[n],s=wc(e,o,a);return s===`blocked`?(i=!0,`blocked`):s===`moving`?null:(n++,n>=xt.route.length?(i=!0,`finish`):(o.wait&&(e.stop(),r=o.wait,t({title:o.title,caption:o.caption||`待填写`,lookAt:`lookAt`in o?o.lookAt:void 0})),null))},stop(){return i=!0,t(null),e.finishTour()}}}function Ec(e,t){let{player:n}=e.motion,[r,,i]=Y.direction,a=lt(Y.seat.x,Y.seat.z);Object.assign(n,Y.seat,{elevation:a+Y.seatedElevation,height:0,airborne:!1,sitting:!0,facing:Math.atan2(r,i)});let o={x:n.x+r*Y.aimDistance,y:Y.aimHeight+a,z:n.z+i*Y.aimDistance};e.orbit.aim(o,{yaw:Math.atan2(-r,-i)+Y.cameraSideAngle,pitch:t?Y.reducedPitch:Y.pitch,distance:Y.distance})}function Dc(e,t,n){let[r,i,a]=t.anchor??[t.hotspot.x,1.2,t.hotspot.z];n.aim({x:r,y:i,z:a},{yaw:Math.atan2(e.x-r,e.z-a),pitch:G.startPitch})}function Oc({motion:e,orbit:t}){e.climb(),t.setLookout(!0),t.center(G.arrivalFacing)}function kc(e){let{motion:t,orbit:n,sailing:r}=e,i=null,a=0,o=!1,s=null,c=null,l=Y.position,u=Tc(r,r=>{if(s=r,e.onCue(r),r?.lookAt){let[e,i,a]=r.lookAt;n.aim({x:e,y:i,z:a},{yaw:Math.atan2(t.player.x-e,t.player.z-a),pitch:.22})}}),d=t=>{i=t,a=0,o=!1,e.onMode(t)},f=r=>{t.teleport(u.stop()),n.setSailing(!1),n.center(t.player.facing),d(null),e.onNotice(r?xt.failLabel:xt.finishLabel)};function p(a,o){if(a===`lookout`&&!i)Oc(e),d(a);else if(a===`leave-lookout`&&i===`lookout`)n.setLookout(!1),t.teleport(G.position),n.center(t.player.facing),d(null),c=null;else if(a===`sunset`&&!i)l={x:t.player.x,z:t.player.z},Ec(e,o),d(a);else if(a===`leave-sunset`&&i===`sunset`)t.teleport(l),n.center(t.player.facing),d(null);else if(a===`drive`&&!i){if(!r.startTour())return e.onNotice(K.noBoatLabel),!1;n.setSailing(!0),n.center(t.player.facing,!0),d(a)}else if(a===`board`&&!i){let e=r.nearbyDock();if(!e)return!1;r.toggle(e),n.setSailing(!0),n.center(t.player.facing,!0),d(`drive`)}else if((a===`dock`||a===`return-drive`)&&i===`drive`){let i=a===`dock`?r.nearbyDock():void 0;if(a===`dock`&&!i)return!1;t.teleport(r.finishTour(i??void 0)),n.setSailing(!1),n.center(t.player.facing),d(null),e.onNotice(i?`已在${i.title}靠岸`:xt.finishLabel)}else if(a===`tour`&&!i){if(!r.startTour())return e.onNotice(K.noBoatLabel),!1;u.start(),n.setSailing(!0),d(a)}else if((a===`return-tour`||a===`abort-tour`)&&i===`tour`)f(a===`abort-tour`);else return!1;return!0}function m(r){if(i===`sunset`&&(a=Math.min(Y.duration,a+r)),i!==`tour`||o)return;let c=u.update(r);s||n.center(t.player.facing,!0),c&&(o=!0,e.onRequest(c===`blocked`?`abort-tour`:`return-tour`))}return{act:p,step:m,get mode(){return i},get dusk(){return i===`sunset`?a/Y.duration:0},focusAt(e){return i===`lookout`?(!e||e.hotspot.id===c?(c=null,n.center(t.player.facing)):(c=e.hotspot.id,Dc(G.center,e,n)),c):null}}}var Ac={limit:5,simplifiedLimit:2,degradedLimit:1,speed:1.04,followSpeed:1.32,footprintRadius:.23,followDistance:4.2,followTime:4.7,followStopDistance:1.18,followCooldown:8,fullUpdateDistance:19,distantUpdateInterval:.25,interactRadius:1.28,nameDistance:2.9,reactionSeconds:1,petCooldown:4.3,petLabel:`摸摸`,palette:{shadow:`#42352d`,face:`#322a2a`,heart:`#da805f`,plate:`#332c29`},residents:[{id:`animal-cat-1`,species:`cat`,name:`猫 1`,x:-22,z:-1.2,radius:2,rest:{x:-22.1,z:-.42},fur:`#cd9564`,accent:`#f0d3ac`,size:.71},{id:`animal-dog-1`,species:`dog`,name:`狗 1`,x:-14.6,z:12.46,radius:2.6,rest:{x:-15.6,z:12.25},fur:`#bd936b`,accent:`#745e4f`,size:.88},{id:`animal-cat-2`,species:`cat`,name:`猫 2`,x:7.3,z:1.38,radius:2.1,rest:{x:8.9,z:-1.75},fur:`#93a2a3`,accent:`#d7d2c0`,size:.72}]},jc=[[-.19,-.32],[.19,.29],[.19,-.32],[-.19,.29]];function Mc(e){let{canvas:t,context:n}=Jt(64,19);n.fillStyle=Ac.palette.plate,n.fillRect(0,0,t.width,t.height),n.fillStyle=`#f7e2bb`,n.font=`12px "Microsoft YaHei",sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,t.width/2,t.height/2);let r=new Ge(new Be({map:Ht(t),depthWrite:!1}));return r.scale.set(.54,.17,1),r.position.y=.93,r}function Nc(){let{canvas:e,context:t}=Jt(9,9);t.fillStyle=Ac.palette.heart,t.fillRect(1,1,3,4),t.fillRect(5,1,3,4),t.fillRect(2,4,5,2),t.fillRect(3,6,3,1),t.fillRect(4,7,1,1);let n=new Ge(new Be({map:Ht(e),transparent:!0,depthWrite:!1}));return n.scale.setScalar(.22),n}function Pc(e,t){return jc.map(([n,r])=>e.box([n,.19,r],[.14,.36,.15],[t.accent]))}function Fc(e,t){let n=new f,r=new f,{box:i}=e,a=t.species===`dog`,o=Pc(e,t),s=[-.115,.115].map(e=>i([e,.66,.61],[.037,.042,.017],[Ac.palette.face])),c=i([0,.55,-.57],[.095,.1,.43],[t.accent]);r.add(i([0,.4,-.06],[.45,.39,.81],[t.fur]),i([0,.61,.39],[.44,.39,.42],[t.fur]),c,...o,...s),a&&r.add(i([0,.55,.615],[.24,.17,.21],[t.accent]));for(let e of[-1,1])r.add(i([e*.15,a?.75:.83,.36],[.115,a?.19:.16,.16],[t.accent]));let l=new L(new Ie(.32,8),new I({color:Ac.palette.shadow,transparent:!0,opacity:.23,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.013;let u=Nc(),d=Mc(t.name);return u.visible=d.visible=!1,n.scale.setScalar(t.size),n.add(r,l,u,d),{root:n,body:r,legs:o,eyes:s,tail:c,heart:u,nameplate:d,updateBoxes:fo(r)}}var Ic=.12;function Lc(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}function Rc(e,t){let n=Fc(e,t);return n.root.position.set(t.x,J+lt(t.x,t.z),t.z),{resident:t,model:n,position:{x:t.x,z:t.z},random:Wt(Math.abs(Math.floor(t.x*7523))),target:null,facing:0,state:`idle`,time:0,phase:0,idle:0,follow:0,cooldown:0,pet:0,followCooldown:0,speed:0,distant:0}}function zc(e,t,n){let{resident:r,random:i,position:a}=e;if(e.pet>0)return null;if(r.species===`dog`&&!t.sailing&&!t.lookout&&!e.followCooldown&&Lc(a,t)<Ac.followDistance)return e.follow||=Ac.followTime,Lc(a,t)>Ac.followStopDistance?t:null;if(n&&r.species===`cat`)return Lc(a,r.rest)>Ic?r.rest:null;if(e.target&&Lc(a,e.target)>Ic)return e.target;if(e.idle>0)return null;if(e.state===`walk`)return e.idle=.9+i()*2,null;if(Lc(a,r)>r.radius)return r;let o=i()*Math.PI*2,s=i()*r.radius;return e.target={x:r.x+Math.cos(o)*s,z:r.z+Math.sin(o)*s},e.target}function Bc(e,t,n){let{position:r,resident:i}=e,{step:a,obstacles:o}=n,s=Math.atan2(t.x-r.x,t.z-r.z),c=e.follow>0?Ac.followSpeed:Ac.speed,l=Math.min(Lc(r,t),c*a),u=Math.sin(s)*l,d=Math.cos(s)*l,f={obstacles:o,height:0,radius:Ac.footprintRadius*i.size},p={...r};Ct(r.x+u,r.z,f)&&(r.x+=u),Ct(r.x,r.z+d,f)&&(r.z+=d),e.speed=Lc(p,r)/a,e.speed<.02?(e.idle=.65,e.target=null):e.facing=zo(e.facing,Math.atan2(r.x-p.x,r.z-p.z),Ro(a,.24))}function Vc(e,t,n){let{step:r,night:i,obstacles:a}=n;if(!r)return;e.speed=0,e.pet=Math.max(0,e.pet-r),e.idle=Math.max(0,e.idle-r),e.cooldown=Math.max(0,e.cooldown-r),e.followCooldown=Math.max(0,e.followCooldown-r),e.follow>0&&(e.follow=Math.max(0,e.follow-r),e.follow||(e.followCooldown=Ac.followCooldown,e.target=null));let o=zc(e,t,i);o&&Bc(e,o,{step:r,obstacles:a}),e.state=e.speed>.02?`walk`:e.pet>0?`sit`:i&&e.resident.species===`cat`&&Lc(e.position,e.resident.rest)<.4?`sleep`:e.idle>1?`sit`:`idle`}function Hc(e,t,n){let{position:r,model:i,resident:a}=e;i.root.position.set(r.x,J+lt(r.x,r.z),r.z),i.root.rotation.y=e.facing,e.phase+=n.step*e.speed*11;let o=n.reduced?0:Math.sin(e.phase)*Math.min(.48,e.speed*.43);i.body.scale.y=e.state===`sleep`?.58:e.state===`sit`?.79:1,i.legs.forEach((e,t)=>{e.rotation.x=t%2?o:-o}),i.tail.rotation.y=e.pet&&a.species===`dog`&&!n.reduced?Math.sin(e.pet*31)*.88:o,i.eyes.forEach(t=>{t.scale.y=e.pet||e.state===`sleep`?.012:.042}),i.nameplate.visible=!t.sailing&&!t.lookout&&Lc(r,t)<=Ac.nameDistance,i.heart.visible=e.pet>0,i.heart.position.y=1.18+(n.reduced?0:(1-e.pet/Ac.reactionSeconds)*.35),i.updateBoxes()}function Uc(e){let{scene:t,kit:n,obstacles:r,simplified:i}=e,a=Ac.residents.slice(0,Math.min(Ac.limit,i?Ac.simplifiedLimit:Ac.limit)).map(e=>Rc(n,e));return a.forEach(e=>t.add(e.model.root)),{targets:a.map(({resident:e,model:t})=>({id:e.id,title:e.name,object:t.root,height:.5,detailAnchor:t.body})),update(e,t,n){a.forEach((i,a)=>{let o=n.scenery||a<Ac.degradedLimit;if(i.model.root.visible=o,!o)return;let s=Lc(i.position,e)<=Ac.fullUpdateDistance;i.distant+=t,!s&&i.distant<Ac.distantUpdateInterval||(Vc(i,e,{step:i.distant,night:n.night,obstacles:r}),Hc(i,e,{step:i.distant,reduced:n.reduced||!s}),i.distant=0)})},nearby(e){return e.lookout||e.sailing||e.sitting?null:a.find(t=>t.model.root.visible&&!t.cooldown&&Lc(t.position,e)<Ac.interactRadius)??null},pet(e){e.pet=Ac.reactionSeconds,e.cooldown=Ac.petCooldown,e.speed=0}}}var Wc=([e,t,n,r])=>`(p.x >= ${e.toFixed(3)} && p.x <= ${t.toFixed(3)} && p.y >= ${n.toFixed(3)} && p.y <= ${r.toFixed(3)})`,Gc=`
  bool navigableIce(vec2 p, float strength) {
    if (strength <= 0.0 || !${Wc(Zo.iceBounds)}
      || ${Zo.safeChannels.map(Wc).join(` || `)}) return false;
    float edge = min(min(abs(p.y + 2.55), abs(p.y - 11.0)), min(abs(p.x + 12.0),abs(p.y + 18.0)));
    float noise = 0.14 * sin(p.x * 0.83 + p.y * 0.51) * sin(p.y * 1.25 - p.x * 0.34);
    return edge * 0.16 + noise < strength;
  }
`,Kc=`
varying vec3 world;
void main() {
  world = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}`,qc=`
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
      }`,Jc=`
      varying vec3 world;
      uniform float time;
      uniform vec3 sun, mist, deep, shallow, gleam, crest;
      uniform vec3 nightWater, nightCrest, nightReflection, nightFog, moon;
      uniform vec2 shoreLights[3];
      uniform vec4 waveCells;
      uniform vec3 sunsetHaze;
      uniform float night, dusk, reflections;
      uniform float wet, ice, rippleFx, foamFx;
      ${Gc}
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
      }`,Yc=new O(.93,.107,-.36).normalize(),Xc=`#efd6b6`;function Zc(){let e=new Le({side:1,depthWrite:!1,uniforms:{sun:{value:Yc.clone()},blue:{value:new R(`#7fadc8`)},mist:{value:new R(Xc)},rose:{value:new R(`#f5c9b9`)},gold:{value:new R(`#ffedd0`)},white:{value:new R(`#fff6ce`)},night:{value:0},starDensity:{value:Ut.starDensity},dusk:{value:0},sunsetZenith:{value:new R(Y.sunsetZenith)},weatherSky:{value:new R(Zo.rainSky)},weatherShade:{value:0},sunsetHorizon:{value:new R(Y.sunsetHorizon)},nightZenith:{value:new R(Ut.nightZenith)},nightHorizon:{value:new R(Ut.nightHorizon)},moonColor:{value:new R(Ut.moonColor)},moon:{value:new O(...Ut.moonDirection).normalize()}},vertexShader:Kc,fragmentShader:qc}),t=new L(new Ce(235,32,16),e);return t.renderOrder=-100,t}function Qc(){let e=new Le({uniforms:{time:{value:0},sun:{value:Yc},mist:{value:new R(Xc)},deep:{value:new R(`#4c8791`)},shallow:{value:new R(`#82afb0`)},gleam:{value:new R(`#eac795`)},crest:{value:new R(`#f9dfa8`)},night:{value:0},dusk:{value:0},reflections:{value:1},wet:{value:0},ice:{value:0},rippleFx:{value:1},foamFx:{value:1},sunsetHaze:{value:new R(Y.sunsetHaze)},nightWater:{value:new R(Ut.nightWater)},nightCrest:{value:new R(Ut.nightCrest)},nightReflection:{value:new R(Ut.nightReflection)},nightFog:{value:new R(Ut.nightFog)},moon:{value:new O(...Ut.moonDirection).normalize()},shoreLights:{value:Ut.nightWaterLights.map(e=>new l(...e))},waveCells:{value:new Fe(Ut.waveCells.near,Ut.waveCells.far,Ut.waveCells.blendStart,Ut.waveCells.blendEnd)}},vertexShader:Kc,fragmentShader:Jc}),t=new L(new ve(440,440),e);return t.rotation.x=-Math.PI/2,t}function $c(){let e=new f,{canvas:t,context:n}=Jt(100,22),r=Wt(72);for(let e=0;e<27;e++){let t=8+(r()*76|0),i=3+(r()*12|0),a=6+(r()*16|0);n.fillStyle=[`#fbe0c94d`,`#ffe6cd70`,`#fff0d896`][e%3],n.fillRect(t,i,a,1+e%3)}let i=new Be({map:Ht(t),depthWrite:!1,fog:!1});for(let t=0;t<22;t++){let n=t*2.39996,a=new Ge(i);a.position.set(Math.cos(n)*128,8+r()*34,Math.sin(n)*128),a.scale.set(25+r()*44,7+r()*5,1),e.add(a)}return e}function el(e){let t=Ut,n=new Me(Xc,.009);e.fog=n;let r=new C(t.ambientColor,`#9b9aa0`,t.ambient),i=new nt(t.sunColor,t.sun);i.position.set(40,14,-12);let a=Qc(),o=$c(),s=Zc();e.add(s,a,o,i,r);let c={dawn:new R(Xc),nightFog:new R(t.nightFog),ambient:new R(t.ambientColor),nightAmbient:new R(t.nightAmbientColor),sun:new R(t.sunColor),nightSun:new R(t.nightSunColor),duskFog:new R(Y.sunsetHaze),duskSun:new R(Y.sunsetLight),duskAmbient:new R(Y.sunsetAmbient)},l=new R(Zo.rainSky),u=new R(Zo.snowSky);return(e,d,f)=>{let{dusk:p,reflections:m}=f;s.material.uniforms.night.value=d,s.material.uniforms.dusk.value=p;let h=x.lerp(Y.maxSunY,Y.minSunY,p);s.material.uniforms.sun.value.set(Y.direction[0],h,Y.direction[2]).normalize(),a.material.uniforms.time.value=e,a.material.uniforms.night.value=d,a.material.uniforms.dusk.value=p,a.material.uniforms.reflections.value=Number(m),n.color.copy(c.dawn).lerp(c.nightFog,d).lerp(c.duskFog,p),n.density=x.lerp(.009,Y.duskFog,p),r.color.copy(c.ambient).lerp(c.nightAmbient,d).lerp(c.duskAmbient,p),i.color.copy(c.sun).lerp(c.nightSun,d).lerp(c.duskSun,p),i.position.y=x.lerp(14,Y.sunsetLightHeight,p),r.intensity=x.lerp(x.lerp(t.ambient,t.nightAmbient,d),Y.sunsetAmbientPower,p),i.intensity=x.lerp(x.lerp(t.sun,t.nightSun,d),Y.sunsetMainPower,p),o.rotation.y=e*.0013;let g=f.weather,_=g?.rain??0,v=g?.snow??0,y=Math.max(_,v);s.material.uniforms.weatherShade.value=y,s.material.uniforms.weatherSky.value.copy(l).lerp(u,v/(_+v||1)),a.material.uniforms.wet.value=_,a.material.uniforms.ice.value=g?.ice??0,a.material.uniforms.rippleFx.value=+!g?.low,a.material.uniforms.foamFx.value=+!g?.low,n.color.lerp(d>.5?c.nightFog:s.material.uniforms.weatherSky.value,y*.67),n.density=x.lerp(n.density,v>_?Zo.snowFog:Zo.wetFog,y),n.density=Math.max(n.density,f.edgeFog),i.intensity*=x.lerp(1,v>_?Zo.snowLight:Zo.rainLight,y);for(let e of o.children)e.material.opacity=(1-d*.91)*(1-y*.55)}}var tl=new Map([[`KeyW`,`up`],[`ArrowUp`,`up`],[`KeyS`,`down`],[`ArrowDown`,`down`],[`KeyA`,`left`],[`ArrowLeft`,`left`],[`KeyD`,`right`],[`ArrowRight`,`right`]]),nl=4,rl=new Set([`ShiftLeft`,`ShiftRight`]),il=new Set([`ControlLeft`,`ControlRight`,`KeyC`]);function al(e,t){let n=new AbortController,{signal:r}=n,i;return e.addEventListener(`pointerdown`,n=>{if(!(i||n.button!==0)){if(n.pointerType===`mouse`&&t.leftLock()&&!document.pointerLockElement&&e.requestPointerLock){let t=e.requestPointerLock();t&&t.catch(()=>e.focus({preventScroll:!0}))}else i={id:n.pointerId,x:n.clientX,y:n.clientY,travel:0},e.focus({preventScroll:!0}),e.setPointerCapture(n.pointerId)}},{signal:r}),e.addEventListener(`contextmenu`,e=>e.preventDefault(),{signal:r}),e.addEventListener(`pointerdown`,n=>{if(n.button!==2)return;if(n.preventDefault(),document.pointerLockElement===e){document.exitPointerLock();return}if(!t.lockPointer()||!e.requestPointerLock)return;let r=e.requestPointerLock();r&&r.catch(()=>e.focus({preventScroll:!0}))},{signal:r}),e.addEventListener(`pointermove`,n=>{if(document.pointerLockElement===e){t.look(n.movementX,n.movementY);return}if(i?.id!==n.pointerId)return;let r=n.clientX-i.x,a=n.clientY-i.y;i={id:i.id,x:n.clientX,y:n.clientY,travel:i.travel+Math.hypot(r,a)},i.travel>nl&&t.look(r,a)},{signal:r}),e.addEventListener(`pointerup`,n=>{if(i?.id===n.pointerId){if(i.travel<=nl){let r=e.getBoundingClientRect();t.pick(new l((n.clientX-r.left)/r.width*2-1,1-(n.clientY-r.top)/r.height*2))}i=void 0}},{signal:r}),e.addEventListener(`lostpointercapture`,()=>{i=void 0},{signal:r}),e.addEventListener(`wheel`,e=>{e.preventDefault(),t.zoom(Math.sign(e.deltaY))},{signal:r,passive:!1}),()=>n.abort()}function ol(e){let t=new AbortController,{signal:n}=t;return window.addEventListener(`keydown`,t=>{if(t.defaultPrevented||t.metaKey||t.altKey)return;let n=t.target instanceof Element?t.target:null;if(n?.closest(`input, textarea, select, [contenteditable="true"]`))return;if((!t.ctrlKey||il.has(t.code))&&(t.code!==`Space`||!n?.closest(`button, a, video`))&&e.flight(t.code,t.repeat)){t.preventDefault();return}let r=tl.get(t.code);(!t.ctrlKey||e.flying()&&r)&&(t.code.startsWith(`Arrow`)&&n?.closest(`.harbor-detail`)||(rl.has(t.code)&&e.sprint(t.code),r&&(t.preventDefault(),e.move(t.code,r)),t.code===`KeyE`&&!t.repeat&&e.interact(),t.code===`Space`&&!t.repeat&&!n?.closest(`button, a, video`)&&(t.preventDefault(),e.jump())))},{signal:n}),window.addEventListener(`keyup`,t=>e.release(t.code),{signal:n}),()=>t.abort()}function sl(e,t,n){let r=new Set(e.values()),i=Number(r.has(`right`))-Number(r.has(`left`))+t.x,a=Number(r.has(`up`))-Number(r.has(`down`))+t.z,o=n/Math.max(1,Math.hypot(i,a));return{x:i*o,z:a*o}}function cl({canvas:e,motion:t,orbit:n,sailing:r,canJump:i,canMove:a,canLook:o,canSteer:s,lockPointer:c,leftLock:l,sprintEnabled:u,specialLook:d,onInteract:f,onPick:p,flight:m,canFly:h,flightEnabled:g}){let _=new Map,v=new Set,y={x:0,z:0},b=!1,x=new Set,S=new Set,C=(e,t)=>{a()&&_.set(e,t)},w=e=>{_.delete(e),v.delete(e),x.delete(e)},T=(e,t)=>{y.x=e,y.z=t},E=()=>{_.clear(),v.clear(),x.clear(),S.clear(),b=!1,T(0,0),t.clear(),r.stop(),m.clear()},D=()=>{i()&&!m.active&&t.jump()};function ee(){h()&&g()&&(m.active||(t.clear(),e.focus({preventScroll:!0})),m.toggle())}function te(e,t){return e===`KeyF`?(t||ee(),!0):!m.active||!il.has(e)&&e!==`Space`?!1:(h()&&x.add(e),!0)}function O(e,t){if(!h())return;g()||m.disable();let r=S.has(1)||x.has(`Space`),i=S.has(-1)||[...x].some(e=>il.has(e));m.update(e,{...sl(_,y,1),vertical:Number(r)-Number(i),sprint:t},n.yaw)}let ne=ol({move:C,release:w,interact:f,jump:D,sprint:e=>v.add(e),flight:te,flying:()=>m.active}),re=al(e,{look(e,t){d.active()?d.look(e,t):o()&&n.look(e,t)},zoom(e){d.active()?d.zoom(-e):o()&&n.zoom(e)},pick:p,lockPointer:c,leftLock:l});return n.update(t.player,0,!0),{moveAnalog:T,interact:f,clear:E,jump:D,toggleFlight:ee,setFlightVertical(e,t){t?S.add(e):S.delete(e)},setThrottle(e){b=e},update(e){let i=!!(v.size||b)&&u();if(t.player.sailing&&s())r.update({...sl(_,y,1),sprint:i},e);else if(m.active)O(e,i);else if(a()&&!t.player.sailing){let r=jt.walkSpeed*(i?jt.sprintMultiplier:1);t.update(e,sl(_,y,r),n.yaw)}n.setFlight(m.active),n.update(t.player,e)},respawn(){E(),t.player.sailing?r.respawn():t.respawn(),m.reset(),n.setFlight(!1),n.update(t.player,0,!0)},center(){n.center(t.player.facing,t.player.sailing)},dispose(){document.pointerLockElement===e&&document.exitPointerLock(),ne(),re()}}}function ll(e,{kit:t,vessel:n}){let r=No(t,pt.appearance),i={...pt.position,facing:pt.facing,speed:0,height:0,elevation:0,airborne:!1,jumpAge:0,landing:0,sailing:!1,sitting:!1,lookout:!1,swimming:!1},a=da(t.box([...xt.lamp.position],[...xt.lamp.size],[xt.lamp.color]),`street`);return a.userData.movingGlow=!0,n.add(a),e.add(r.avatar),(e,t)=>{let n=e%pt.wavePeriod;i.facing=pt.facing+(t?0:Math.sin(e*.31)*.24),r.wave(!t&&n<pt.waveLength?-Math.sin(n/pt.waveLength*Math.PI)*.82:0),r.update(i,0,t)}}var ul={clusters:[{x:-15.4,z:25.2,seed:427,total:6,radius:1.18}],treeFoot:.18,trunk:`#765743`,lower:`#58766a`,upper:`#728d72`,shadowColor:`#272f3c`,shadowDay:.12,shadowDusk:.25,shadowLength:1,shadowLong:3.65,shadowWidth:.42},dl=4;function fl(){let e=Math.min(W.maxNewTrees,Math.floor(W.maxNewInstances/dl));return ul.clusters.map(t=>{let n=Wt(t.seed),r=Math.min(t.total,e);e-=r;let i=Array.from({length:r},(e,i)=>{let a=i*Math.PI*2/r,o=t.radius*(.65+n()*.35),s=t.x+Math.cos(a)*o,c=t.z+Math.sin(a)*o;return{x:s,z:c,y:J+lt(s,c),size:.74+n()*.34}}).filter(({x:e,z:t})=>Math.hypot(e-gt.house.x,t-gt.house.z)>gt.clearRadius);return{...t,trees:i}})}var pl=[[-15.65,-24.29],[-10.99,-20.67]],ml=fl().map(e=>({...e,trees:e.trees.filter(e=>!pl.some(([t,n])=>Math.hypot(e.x-t,e.z-n)<1))})),hl=ml.flatMap(e=>e.trees.map(({x:e,z:t,size:n})=>{let r=ul.treeFoot*n;return[e-r,e+r,t-r,t+r]})),gl={radius:.62,base:1.42,top:2.88},_l=ml.flatMap(e=>e.trees.flatMap(({x:e,y:t,z:n,size:r})=>{let i=ul.treeFoot*r,a=gl.radius*r;return[{footprint:[e-i,e+i,n-i,n+i],base:t,height:gl.base*r},{footprint:[e-a,e+a,n-a,n+a],base:t+gl.base*r,height:(gl.top-gl.base)*r}]}));function vl(e,t,n){let r=e.box([0,0,0],n.size,[n.color]),i=new A(r.geometry,r.material,t.length),a=new je;return t.forEach((e,t)=>{a.position.set(e.x,e.y+n.y*e.size,e.z),a.scale.set(...n.size.map(t=>t*e.size)),a.updateMatrix(),i.setMatrixAt(t,a.matrix)}),i}function yl(e,t,n,r){e.add(vl(t,n,{y:.83,size:[.23,1.66,.24],color:ul.trunk})),e.add(vl(t,n,{y:1.96,size:[1.23,1.07,1.15],color:ul.lower})),r&&e.add(vl(t,n,{y:2.62,size:[.79,.51,.72],color:ul.upper}))}function bl(e){let t=ml.flatMap(e=>e.trees),n=new I({color:ul.shadowColor,transparent:!0,depthWrite:!1}),r=new A(new ve(1,1),n,t.length);r.frustumCulled=!1,e.add(r);let i=new je,[a,,o]=Y.direction,s=-1;return(e,c)=>{if(r.visible=c,!c||e===s)return;s=e;let l=x.lerp(ul.shadowLength,ul.shadowLong,e);n.opacity=x.lerp(ul.shadowDay,ul.shadowDusk,e),i.rotation.set(-Math.PI/2,0,Math.atan2(-o,a)),t.forEach(({x:e,y:t,z:n,size:s},c)=>{let u=l*s;i.position.set(e-a*u/2,t+.018,n-o*u/2),i.scale.set(u,ul.shadowWidth*s,1),i.updateMatrix(),r.setMatrixAt(c,i.matrix)}),r.instanceMatrix.needsUpdate=!0}}function xl(e,t){let n=bl(e),r=ml.map(n=>{let r=new f,i=new f;return yl(r,t,n.trees,!0),yl(i,t,n.trees,!1),e.add(r,i),{x:n.x,z:n.z,near:r,far:i}});return(e,t,i)=>{n(t,i.shadows);for(let t of r){let n=Math.hypot(e.x-t.x,e.z-t.z);t.near.visible=n<W.forestLodDistance,t.far.visible=i.trees&&!t.near.visible&&n<W.forestLimitDistance}}}var Sl=[{id:`moon-cabin`,x:-.35,z:1.65,yaw:-1.22},{id:`first-tide`,x:14.85,z:2.58,yaw:Math.PI},{id:`net-mender`,x:-4.85,z:14.32,yaw:Math.PI},{id:`dune-flowers`,x:-17.5,z:3.8,yaw:Math.PI/2},{id:`keeper-map`,x:-1.9,z:-21.2,yaw:0}],Cl=3.35,wl=1.74;function Tl(e,t,n){let r=new f,{canvas:i,context:a}=Jt(120,84),o=Ht(i);a.fillStyle=`#a7aba0`,a.fillRect(0,0,i.width,i.height);let s=new Image;s.onload=()=>{a.imageSmoothingEnabled=!1;let e=Math.min(i.width/s.width,i.height/s.height),t=Math.round(s.width*e),n=Math.round(s.height*e);a.drawImage(s,(i.width-t)/2,(i.height-n)/2,t,n),o.needsUpdate=!0},s.src=t.image,n.push(()=>{s.onload=null});for(let t of[-.68,.68])r.add(e.box([t,.56,0],[.14,1.12,.17],[`#795947`,`wood`]));r.add(e.box([0,1.44,0],[wl,1.25,.17],[`#92674e`,`wood`])),r.add(e.box([0,1.43,.091],[1.63,1.11,.024],[`#dec6a0`])),r.add(e.box([0,2.1,0],[1.88,.14,.29],[`#617473`,`wood`]));let c=new L(new ve(1.49,1.043),new I({map:o}));return c.position.set(0,1.43,.107),r.add(c),r}function El(e,t,n){let r=[],i=[];return{exhibits:Sl.flatMap(a=>{let o=n.find(e=>e.id===a.id);if(!o)return[];let{x:s,z:c,yaw:l}=a,u=Tl(t,o,r);u.position.set(s,J,c),u.rotation.y=l,e.add(u);let d=Math.abs(Math.cos(l))*wl/2+.16,f=Math.abs(Math.sin(l))*wl/2+.16;return i.push([s-d,s+d,c-f,c+f]),[{...a,artwork:o,frame:u}]}),obstacles:i,dispose:()=>r.forEach(e=>e())}}var Dl=.018,Ol=1.82,kl=32,Al={inner:.48,outer:.57,color:Ut.glow.ring.color,opacity:.98},jl={inner:.39,outer:.66,color:`#ffb752`,opacity:.34};function Ml(e){let t=new L(new Xe(e.inner,e.outer,kl),new I({color:e.color,transparent:!0,opacity:e.opacity,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t}function Nl(e){let t=new f;t.scale.setScalar(.5);let n=new O,r=Ml(jl),i=Ml(Al);return i.position.y=Dl,t.add(r,i),t.visible=!1,e.add(t),{setHotspot(e){t.visible=!!e,e&&t.position.set(e.x,(e.kind===`sea`?0:J+(e.kind===`telescope`?G.platformOffset:lt(e.x,e.z)))+Dl,e.z)},setNight(e,t){let n=Ut.glow.ring;i.material.opacity=x.lerp(n.day,n.night,e),r.visible=t||e===0},project(e){return!t.visible||(n.copy(t.position),n.y+=Ol,n.project(e),Math.abs(n.x)>1||Math.abs(n.y)>1||Math.abs(n.z)>1)?null:{x:(n.x+1)*50,y:(1-n.y)*50}}}}function Pl({id:e,x:t,z:n,artwork:r}){return{kind:`art`,id:e,x:t,z:n,label:r.title,radius:Cl}}function Fl(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}function Il(e,t){return Fl(e,t)<t.radius}function Ll(e,t){if(e.sailing)return dt.find(t=>Il(e,t))??null;let n=Object.values(Tt).find(t=>Il(e,t));if(n)return n;let r=Cl,i=null;for(let n of t){let t=Fl(e,n);t<r&&(r=t,i=Pl(n))}if(i)return i;let a=Et.find(t=>Il(e,t));return a?{kind:`landmark`,...a}:null}function Rl(e){return[...Object.values(Tt),...Et.map(e=>({...e,kind:`landmark`})),...e.map(Pl),...dt].map(t=>{let n=_t.places[t.id];return n?{hotspot:t,...n,requiresBoat:!1}:t.kind===`sea`?{hotspot:t,title:t.title,iconType:`landmark`,blurb:t.note,anchor:[t.x,1.18,t.z],requiresBoat:!0}:t.kind===`landmark`?{hotspot:t,title:t.label,iconType:`landmark`,blurb:t.note,requiresBoat:!1}:{hotspot:t,title:t.label,iconType:`artwork`,blurb:e.find(e=>e.id===t.id)?.artwork.description??``,requiresBoat:!1}})}function zl(e){let t=null,n=!1;return{open(n){t||(t=n,e.open(n))},dismiss(){t=null,n=!1},hasOpen(){return t!==null},update(r){!t||n||Il(r,t)||(n=!0,e.leave(t.id))}}}var Bl=Math.PI*2,Vl=.13;function Hl(e,t){return e.map(({footprint:[e,n,r,i],height:a,base:o=J})=>new H(new O(e-t,o,r-t),new O(n+t,o+a,i+t)))}function Ul(e,t,n){let r=new O,i=n;for(let n of t){if(n.containsPoint(e.origin))continue;let t=e.intersectBox(n,r);t&&(i=Math.min(i,Math.max(U.minObstructedDistance,t.distanceTo(e.origin)-U.obstacleClearance)))}return i}function Wl(e,t){let n=new O(Nt.x,J+U.focusHeight,Nt.z),r=n.clone(),i=new O,a=new O,o=new ue(n,a),s=Hl(t,Vl),c=U.distance;return(t,l,u)=>{let{step:d,immediate:f}=u,p=f?1:Ro(d,U.followTime),m=t.lookout?G.center:t,h=t.sitting?-.24:0;i.set(m.x,J+U.focusHeight+t.elevation+t.height+h,m.z),n.lerp(i,p);let g=Math.cos(l.pitch);a.set(Math.sin(l.yaw)*g,Math.sin(l.pitch),Math.cos(l.yaw)*g);let _=Ul(o,s,l.distance),v=f?1:Ro(d,U.zoomTime);c=Math.min(_,x.lerp(c,_,v)),e.position.copy(n).addScaledVector(a,c);let y=t.lookout?J+G.platformOffset:bt(e.position.x,e.position.z,kt);e.position.y=Math.max(e.position.y,y+U.floorClearance),r.lerp(l.target?i.set(l.target.x,l.target.y,l.target.z):n,f?1:Ro(d,U.aimTime)),e.lookAt(r)}}function Gl(e,t){let n=Wl(e,t),r={yaw:Nt.yaw,pitch:U.pitch,distance:U.distance},i={...r,target:null},a=!1,o=!1,s=!1;return{update(e,t,a=!1){let s=a?1:Ro(t,U.orbitTime);i.yaw=zo(i.yaw,r.yaw,s);let c=o?x.clamp(r.pitch-q.camera.pitch,U.flightMinPitch,U.flightMaxPitch):r.pitch;i.pitch=x.lerp(i.pitch,c,s);let l=r.distance+(o?q.camera.distance:0)+(e.swimming?U.swimDistance:0);i.distance=x.lerp(i.distance,l,a?1:Ro(t,U.zoomTime)),n(e,i,{step:t,immediate:a})},get yaw(){return i.yaw},get angles(){return{yaw:i.yaw,pitch:i.pitch}},look(e,t){i.target=null,r.yaw=(r.yaw-e*U.lookSensitivity)%Bl,r.pitch=x.clamp(r.pitch+t*U.verticalLookSensitivity,a?G.minPitch:o?U.flightMinPitch:s?U.firstMinPitch:U.minPitch,a?G.maxPitch:o?U.flightMaxPitch:s?U.firstMaxPitch:U.maxPitch)},zoom(e){r.distance=x.clamp(r.distance+e*U.distancePerWheelStep,a?G.minDistance:U.minDistance,a?G.maxDistance:U.maxDistance)},center(e,t=!1){i.target=null,Object.assign(r,{yaw:(e+Math.PI)%Bl,pitch:a?G.startPitch:U.pitch,distance:a?G.distance:t?U.vesselDistance:U.distance})},setSailing(e){r.distance=e?U.vesselDistance:U.distance},setFlight(e){o=e,e||(r.pitch=x.clamp(r.pitch,U.minPitch,U.maxPitch))},setFirstPerson(e){s!==e&&(s=e,e||(r.pitch=x.clamp(r.pitch,U.minPitch,U.maxPitch)))},setLookout(e){a=e,i.target=null,Object.assign(r,{pitch:e?G.startPitch:U.pitch,distance:e?G.distance:U.distance})},aim(e,t){i.target=e,t&&Object.assign(r,t)}}}function Kl(e,t,n){return n.some(n=>Math.abs(n.x-e)<_t.width&&Math.abs(n.y-t)<_t.height)}function ql(e,t){let n=e.flatMap(e=>e.anchor?[{place:e,anchor:new O(...e.anchor)}]:[]),r=Hl(t,0),i=new ue,a=new O,o=new O;function s(e,t){i.origin.copy(e.position),i.direction.copy(t).sub(e.position).normalize();let n=e.position.distanceTo(t)-_t.occlusionMargin;return r.some(e=>!e.containsPoint(i.origin)&&i.intersectBox(e,a)!==null&&a.distanceTo(i.origin)<n)}return(e,t,r)=>{let i=n.map(({place:e,anchor:n})=>({place:e,anchor:n,distance:Math.hypot(t.x-e.hotspot.x,t.z-e.hotspot.z)})).filter(e=>e.distance<_t.maxDistance).sort((e,t)=>e.distance-t.distance),a=[];for(let{place:t,anchor:n,distance:c}of i){if(a.length>=_t.maxVisible)break;if(o.copy(n).project(e),Math.abs(o.z)>1||Math.abs(o.x)>1||Math.abs(o.y)>1)continue;let i=(o.x+1)*r.width/2,l=(1-o.y)*r.height/2+Math.sin(r.elapsed*_t.bobSpeed)*_t.bob;if(l<_t.visibleTop||Kl(i,l,a)||s(e,n))continue;let u=x.clamp((_t.maxDistance-c)/(_t.maxDistance-_t.fadeStart),0,1);a.push({id:t.hotspot.id,x:i,y:l,opacity:u,showName:c<=_t.nameDistance})}return a}}var Jl=[`#b28b63`,`wood`],Yl=[`#88664e`,`wood`],Xl=.56,Zl=.12,Ql=[{x:-18,near:23.3,far:W.terrace[3]},{x:W.terrace[1],near:24,far:W.terrace[3]}],$l=[W.ramp[0],W.ramp[1]].map(e=>[e-Zl/2,e+Zl/2,W.ramp[2],W.terrace[2]]);function eu(e,t){let[n,r,i]=W.ramp,a=W.terrace[2],o=W.upperY-J,s=Math.atan2(o,a-i),c=t.box([(n+r)/2,J+o/2-.07,(a+i)/2],[r-n,.14,Math.hypot(o,a-i)+.1],Jl);c.rotation.x=-s,e.add(c);for(let o of[n,r])e.add(t.beam([[o,J+.45,i],[o,W.upperY+.45,a]],Zl,Yl)),e.add(t.box([o,J+.22,i],[.15,.48,.16],Yl)),e.add(t.box([o,W.upperY+.22,a],[.15,.48,.16],Yl));e.add(t.box([-4.05,W.upperY+.012,23.75],[27.8,.024,1.2],[`#b29b7d`,`brick`]));for(let{x:n,near:r,far:i}of Ql){e.add(t.beam([[n,W.upperY+.49,r],[n,W.upperY+.49,i]],Zl,Yl));for(let a of[r,(r+i)/2,i])e.add(t.box([n,W.upperY+.26,a],[.15,.53,.16],Yl))}e.add(xs(W.title,[9.62,2.35,23.65],Math.PI))}function tu(e,t){let n=new f;n.add(t.box([0,.37,0],[1.03,.1,.42],Jl)),n.add(t.box([0,.68,-.18],[1.03,.25,.08],Yl));for(let e of[-1,1])n.add(t.box([e*.42,.25,0],[.1,.5,.37],Yl));n.position.set(Y.seat.x,J+lt(Y.seat.x,Y.seat.z),Y.seat.z),n.rotation.y=Math.atan2(Y.direction[0],Y.direction[2]),e.add(n);let{x:r,z:i}=Y.sign,a=lt(r,i);e.add(xs(Y.title,[r,a+1.56,i],-.7)),e.add(t.box([r,a+1.1,i],[.13,.92,.13],Yl))}function nu(e,t){let n=new f;eu(n,t),tu(n,t),n.add(xs(mt.title,[-22.57,J+bs.mountHeight,-3],Math.PI/2)),e.add(n)}var ru=[[Y.seat.x-Xl,Y.seat.x+Xl,Y.seat.z-Xl,Y.seat.z+Xl],[Y.sign.x-.1,Y.sign.x+.1,Y.sign.z-.1,Y.sign.z+.1],...Ql.map(({x:e,near:t,far:n})=>[e-Zl,e+Zl,t,n]),...$l],iu=1e-8;function au(e,t){let n=(e+1)*t/2;return(Math.floor(n+iu)+.5)*2/t-1}function ou(){let e=new O;return(t,n,r)=>{let{width:i,height:a}=r,o=t.projectionMatrix.elements;t.updateProjectionMatrix(),t.updateMatrixWorld(),e.copy(n).project(t),o[8]-=au(e.x,i)-e.x,o[9]-=au(e.y,a)-e.y,t.projectionMatrixInverse.copy(t.projectionMatrix).invert()}}var su=8,cu=-(J+At.floatSink);function lu(e){let[t,n,r,i]=K.bounds;return e.x>=t&&e.x<=n&&e.z>=r&&e.z<=i}function uu(e,t,n){if(e.lookout){let e=Math.hypot(t.x-G.center.x,t.z-G.center.z);return e>=G.lanternRadius+jt.playerRadius&&e<=G.outerRadius-jt.playerRadius}return e.swimming?lu(t):Ct(t.x,t.z,{obstacles:n,height:e.height})}function du(e,t,n){let{axis:r,distance:i}=n;if(!i)return!1;let a=e[r],o=n=>uu(e,{x:r===`x`?a+i*n:e.x,z:r===`z`?a+i*n:e.z},t);if(o(1))return e[r]+=i,!1;let s=0,c=1;for(let e=0;e<su;e++){let e=(s+c)/2;o(e)?s=e:c=e}return e[r]+=i*s,!0}function fu(e,t,n){let{velocity:r,target:i,seconds:a,response:o}=n,s=Ro(a,o),c=s*o/Io,l=i.x*a+(r.x-i.x)*c,u=i.z*a+(r.z-i.z)*c;r.x+=(i.x-r.x)*s,r.z+=(i.z-r.z)*s;let d=Math.abs(l)>=Math.abs(u)?`x`:`z`,f={x:l,z:u};for(let n of[d,d===`x`?`z`:`x`])du(e,t,{axis:n,distance:f[n]})&&(r[n]=0)}function pu(e,t){let n=0;return{jump(){if(e.airborne||e.sailing||e.lookout||e.sitting||e.swimming)return;let r=Bt(e.x,e.z,{obstacles:t,height:e.height});e.height>r+vt.landingTolerance||(n=vt.lift,e.jumpAge=0,e.airborne=!0)},update(r){let i=Bt(e.x,e.z,{obstacles:t,height:e.height});if(!e.airborne&&e.height<=i)return;e.airborne=!0,e.jumpAge+=r;let a=e.height+(n-vt.gravity*r/2)*r;n-=vt.gravity*r,n<=0&&a<=i+vt.landingTolerance?(e.height=i,e.airborne=!1,e.landing=vt.recovery,n=0):e.height=a},reset(){n=0,Object.assign(e,{height:0,airborne:!1,jumpAge:0,landing:0})}}}function mu(e,t){let n=Math.sin(t),r=Math.cos(t);return{x:r*e.x-n*e.z,z:-n*e.x-r*e.z}}function hu(e){let t={x:Nt.x,z:Nt.z,facing:Nt.yaw+Math.PI,speed:0,height:0,airborne:!1,jumpAge:0,landing:0,sailing:!1,elevation:0,lookout:!1,sitting:!1,swimming:!1},n={x:0,z:0},r=pu(t,e),i=e.map(e=>e.footprint);function a(i,a,o){if(i<=0)return;let s=mu(a,o);t.swimming&&(s.x*=At.speedFactor,s.z*=At.speedFactor);let c=s.x||s.z?jt.accelerationTime:jt.decelerationTime,{x:l,z:u}=t,d=Math.ceil(i/jt.maxCollisionStep);t.landing=Math.max(0,t.landing-i);for(let a=0;a<d;a++)!t.lookout&&!t.swimming&&r.update(i/d),fu(t,e,{velocity:n,target:s,response:c,seconds:i/d});t.lookout||(t.elevation=lt(t.x,t.z)),t.swimming&&(t.height=cu,t.airborne=!1,t.landing=0,Ct(t.x,t.z,{obstacles:e,height:0})&&(t.swimming=!1,t.height=0));let f=t.x-l,p=t.z-u;t.speed=Math.hypot(f,p)/i,t.speed>jt.movementThreshold&&(t.facing=zo(t.facing,Math.atan2(f,p),Ro(i,jt.turnTime)))}function o(e,n=0){r.reset(),Object.assign(t,e,{elevation:lt(e.x,e.z),lookout:!1,sitting:!1,swimming:!1,height:n})}return{player:t,update:a,jump:r.jump,swim(e){return o(e,cu),t.swimming=!0,!0},teleport(t,n){let r=n===void 0?0:Math.max(0,n-J-lt(t.x,t.z));return Ct(t.x,t.z,{obstacles:e,height:r})?(o(t,r),!0):!1},respawn(){let e=zt(t,i);e&&o(e)},climb(){let e=(G.outerRadius+G.lanternRadius)/2;Object.assign(t,{...G.center,z:G.center.z+e,elevation:G.platformOffset,lookout:!0}),r.reset()},clear(){n.x=0,n.z=0,t.speed=0}}}var gu=[`#805b45`,`wood`],_u=[{x:Tt.notice.x,z:Tt.notice.z,yaw:Math.PI/2,width:1.88,height:1.18,elevation:1.38,kind:`notice`}];function vu(e){let{canvas:t,context:n}=Jt(176,e===`notice`?112:e===`boat`?55:106),r=t.height;if(n.fillStyle=`#735847`,n.fillRect(0,0,176,r),n.fillStyle=`#b28a63`,n.fillRect(3,3,170,r-6),n.textAlign=`center`,n.textBaseline=`middle`,n.font=`bold 23px "Microsoft YaHei", "PingFang SC", sans-serif`,e===`notice`){n.fillStyle=`#e8cf9f`,n.fillRect(10,9,156,94),n.fillStyle=`#674d3d`,n.fillText(`展览公告栏`,88,29),n.fillStyle=`#bda277`;for(let e of[55,65,75,85])n.fillRect(29,e,e===85?73:118,2);n.fillStyle=`#a46047`,n.fillRect(14,12,5,5),n.fillRect(157,12,5,5)}else n.fillStyle=`#f9e6bb`,n.fillText(e===`boat`?`作品船`:`↑  作品船`,88,e===`boat`?29:23),e===`wayfinding`&&(n.fillRect(14,38,148,2),n.fillText(`↶  展览公告栏`,88,55),n.fillRect(14,70,148,2),n.fillText(`↶  ${It.title}`,88,88));return Ht(t)}function yu(e,t){let{x:n,z:r,yaw:i,width:a,height:o,elevation:s,kind:c}=t,l=new f,u=c===`notice`?[-a*.39,a*.39]:[0],d=s+o*.32;for(let t of u)l.add(e.box([t,d/2,-.08],[.15,d,.16],[...gu]));l.add(e.box([0,s,0],[a+.09,o+.1,.13],[...gu]));let p=new L(new ve(a,o),new I({map:vu(c)}));return p.position.set(0,s,.069),l.add(p),l.position.set(n,J,r),l.rotation.y=i,l}function bu(e,t){return _u.map(n=>{e.add(yu(t,n));let r=n.width/2+.065,i=Math.abs(Math.cos(n.yaw))*r+.09,a=Math.abs(Math.sin(n.yaw))*r+.09;return[n.x-i,n.x+i,n.z-a,n.z+a]})}var xu=[...kt,[10.4,22,16.1,19.9],[-49,-27,-20,21]],Su=1e-5,Cu=Math.PI/2;function wu(e,t,n){let r=K.boundary;return r.every(([i,a],o)=>{let[s,c]=r[(o+1)%r.length];return(s-i)*(t-a)-(c-a)*(e-i)>=n*Math.hypot(s-i,c-a)})}function Tu(e,t,n){let[r,i,a,o]=K.bounds;return e-n<r||e+n>i||t-n<a||t+n>o||!wu(e,t,n)||Ta(e,t,n)?!0:xu.some(([r,i,a,o])=>{let s=e-Math.max(r,Math.min(i,e)),c=t-Math.max(a,Math.min(o,t));return Math.hypot(s,c)<n})}function Eu(e,t,n){let r=Math.sin(n),i=Math.cos(n);return K.collisionDiscs.every(([n,a])=>!Tu(e+r*n,t+i*n,a))}function Du(e){return K.docks.reduce((t,n)=>Ou(e,n)<Ou(e,t)?n:t,K.docks[0])}function Ou(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}function ku(e,t,n){if(n<=0)return;let r=-Math.max(-1,Math.min(1,t/(n*K.maxTurnRate)))*K.maxBank;e.bank+=(r-e.bank)*Ro(n,K.bankTime)}function Au(e,t,n){let{step:r,ice:i}=n,a=(e,t,n)=>Eu(e,t,n)&&!K.collisionDiscs.some(([r,a])=>{let o=e+Math.sin(n)*r,s=t+Math.cos(n)*r;return[[0,0],[a,0],[-a,0],[0,a],[0,-a]].some(([e,t])=>Qo(o+e,s+t,i))}),o=t.z*(t.z<0?K.reverseSpeed:K.forwardSpeed*(t.sprint?K.sprint:1)),s=t.z?K.accelerationTime:K.coastingTime;e.speed+=(o-e.speed)*Ro(r,s),e.turn+=(t.x-e.turn)*Ro(r,K.turnTime);let c=Math.min(1,Math.abs(e.speed)/K.forwardSpeed),l=K.minTurnFactor+c*(1-K.minTurnFactor),u=(K.invertSteerWhenReversing&&e.speed<0?e.turn:-e.turn)*K.maxTurnRate*l*r,d=e.yaw+u,f=a(e.x,e.z,d);f&&(e.yaw=d),ku(e,f?u:0,r);let p=Math.sin(e.yaw)*e.speed*r,m=Math.cos(e.yaw)*e.speed*r,h={x:e.x,z:e.z};a(e.x+p,e.z,e.yaw)&&(e.x+=p),a(e.x,e.z+m,e.yaw)&&(e.z+=m),Math.abs(p)+Math.abs(m)>Su&&Ou(h,e)<Su&&(e.speed=0)}function ju(e,t,n=()=>0){let r=e.map(({id:e,group:t})=>(t.rotation.reorder(`YXZ`),{id:e,group:t,helm:K.helm[e]??{height:K.helmHeight,offset:0},vessel:{x:t.position.x,z:t.position.z,yaw:t.rotation.y+Cu,speed:0,turn:0,bank:0}})),i=r[0],a=e=>{e.group.position.x=e.vessel.x,e.group.position.z=e.vessel.z,e.group.rotation.y=e.vessel.yaw-Cu},o=()=>{let{vessel:e,helm:n}=i;a(i),t.sailing&&Object.assign(t,{x:e.x+Math.sin(e.yaw)*n.offset,z:e.z+Math.cos(e.yaw)*n.offset,facing:e.yaw,height:n.height,speed:0,airborne:!1,landing:0})};function s(e){let t=r.find(t=>t!==i&&Ou(t.vessel,e)<=2.4);if(t){let e=K.docks.find(e=>e.boat===t.id)??K.docks[0];Object.assign(t.vessel,{x:e.x,z:e.z,yaw:e.yaw,speed:0,turn:0,bank:0}),a(t)}Object.assign(i.vessel,{x:e.x,z:e.z,yaw:e.yaw,speed:0,turn:0,bank:0}),o()}return{get vessel(){return i.vessel},nearbyDock(){if(t.sailing){let e=Du(i.vessel);return Ou(i.vessel,e)<=e.berthRadius?e:null}let e=K.docks.find(e=>Ou(t,e.land)<=K.boardingRadius);return e&&r.some(t=>Ou(t.vessel,e)<=e.berthRadius)?e:null},toggle(e){if(!t.sailing){let n=r.find(t=>Ou(t.vessel,e)<=e.berthRadius);return n&&(i=n,t.sailing=!0,s(e)),null}let n=Du(i.vessel);return t.sailing=!1,s(n),n.land},respawn(){s(Du(i.vessel))},disembark(){t.sailing=!1,s(Du(i.vessel))},startTour(){let e=r.find(e=>e.id===`skiff`)??r[0],n=K.docks[0];return Ou(e.vessel,n)>n.berthRadius?!1:(i=e,t.sailing=!0,s(n),!0)},finishTour(e=K.docks[0]){return t.sailing=!1,s(e),e.land},followRoute(e,t){return Eu(e.x,e.z,e.yaw)?(ku(i.vessel,e.yaw-i.vessel.yaw,t),Object.assign(i.vessel,e),o(),!0):!1},teleport(e){return Eu(e.x,e.z,i.vessel.yaw)?(Object.assign(i.vessel,e,{speed:0,turn:0,bank:0}),o(),!0):!1},update(e,t){Au(i.vessel,e,{step:t,ice:n()}),o()},stop(){i.vessel.speed=0,i.vessel.turn=0,i.vessel.bank=0}}}function Mu(e){let t=Number(e),n=t,r=t,i=Ut.transitionSeconds;return{setNight(e){Number(e)!==r&&(n=t,r=Number(e),i=0)},step(e){i=Math.min(Ut.transitionSeconds,i+e);let a=i/Ut.transitionSeconds;return t=n+(r-n)*(a*a*(3-2*a)),t}}}function Nu(e,t){let n={particles:!0,snow:!0,islands:!0,residents:!0,scenery:!0,gulls:!0,cloth:!0,shadows:!e,beam:!0,reflections:!0,halos:!0,wake:!e},r=0,i=0,a=0;return{flags:n,simplified:e,get tier(){return a},sample(e){if(!e||a>=Vt.order.length||(r+=Math.min(e,Vt.maxSampleSeconds),i++,r<Vt.sampleSeconds))return;let o=i/r;if(r=0,i=0,!(o>=Vt.minimumFps)){for(;a<Vt.order.length&&!n[Vt.order[a]];)a++;a>=Vt.order.length||(n[Vt.order[a]]=!1,t(`${Vt.noticePrefix}${Vt.notices[a]}。`),a++)}}}}var Pu={seed:841,count:4,baseZ:23.5,stride:5.3,rise:1.52,rows:5,startX:-23,widthStep:6.8,width:39,depth:21};function Fu(){let e=Wt(Pu.seed);return Array.from({length:Pu.count},(t,n)=>{let r=Pu.baseZ+n*Pu.stride;return{tier:n,y:W.upperY+n*Pu.rise,z:r,lots:Array.from({length:Pu.rows},(t,r)=>({x:Pu.startX+Pu.widthStep*r+e()*1.5,house:n<Pu.count-1&&(r+n)%Pu.rows!==0?{width:3.2+e(),height:2.2+e(),color:(r+n)%4}:void 0,treeScale:1.15+e()*.85}))}})}var Iu=Fu();function Lu(e,t,n){return[e-n/2,e+n/2,t-1.7,t+1.7]}var Ru=Iu.flatMap(({y:e,z:t,lots:n})=>n.flatMap(({x:n,house:r})=>r?[{footprint:Lu(n,t+2.3,r.width),base:e,height:r.height+r.width*.31}]:[])),zu=Iu[0].lots.map(({x:e,treeScale:t})=>{let n=.16*t;return[e+2.8-n,e+2.8+n,Iu[0].z+2.7-n,Iu[0].z+2.7+n]}),Bu=Iu.slice(1).map(({tier:e,y:t,z:n})=>{let r=Pu.width-e*2.8;return{footprint:[-9-r/2,-9+r/2,n-.5,n+20.5],base:0,height:t}}),Vu=2.15,Hu=.018,Uu=.74,Wu=.17;function Gu(e){let t=new ve(Uu,Wu),n=Array.from({length:K.wakeLimit},()=>{let n=new I({color:K.wakeColor,transparent:!0,depthWrite:!1}),r=new L(t,n);return r.rotation.x=-Math.PI/2,r.visible=!1,e.add(r),{mesh:r,remaining:0}}),r=0,i=0;return(e,t,a)=>{if(i+=e,a&&i>=K.wakeInterval&&t.speed>K.wakeMinimumSpeed){let e=n[r++%n.length];e.remaining=K.wakeLife,e.mesh.position.set(t.x-Math.sin(t.yaw)*Vu,Hu,t.z-Math.cos(t.yaw)*Vu),e.mesh.rotation.z=t.yaw,i=0}for(let t of n)if(t.remaining-=e,t.mesh.visible=a&&t.remaining>0,t.mesh.visible){let e=t.remaining/K.wakeLife;t.mesh.material.opacity=e*.58,t.mesh.scale.x=2-e}}}var Ku=[`#805843`,`wood`],qu=[`#ad9e8d`,`brick`],Ju=[`#ceb28a`],Yu=2.65;function Xu([e,t,n,r],i=0){let a=[],o=0;for(let s=e+.35;s<t;s+=Yu,o++)o<i||a.push([s,n+.1],[s,r-.1]);return a}function Zu(e,t,n){let[r,i,a,o]=t;return e.box([(r+i)/2,J-.48,(a+o)/2],[i-r,.96,o-a],n)}function Qu(e,t,n){let r=n.area,[i,a,o,s]=r,c=n.deckFrom??i,l=Wt(113),u=(o+s)/2,d=Math.ceil((a-c)/.37),f=(a-c)/d;for(let n=0;n<d;n++){let r=c+(n+.5)*f,i=[`#a07655`,`#b48b65`,`#ba916b`,`#a57b5c`][Math.floor(l()*4)],a=u+(n%3-1)*.62;for(let[n,c]of[[o,a],[a+.023,s]])e.add(t.box([r,J-.08,(n+c)/2],[f-.014,.16,c-n],[i,`wood`]))}for(let n of[o+.1,s-.1])e.add(t.box([(c+a)/2,.44,n],[a-c,.24,.2],Ku));for(let[i,a]of Xu(r,n.postSkip))e.add(t.box([i,.34,a],[.31,1.91,.33],Ku)),e.add(t.box([i,.96,a],[.345,.15,.36],Ju)),e.add(t.box([i,1.31,a],[.35,.09,.36],[`#91674c`,`wood`]))}function $u(e,t,[n,,r]){let i=r>.6?-1:1;e.add(t.box([n,J+1.18,r],[.105,2.36,.105],[`#595655`])),e.add(t.box([n,J+2.36,r+.24*i],[.105,.1,.54],[`#595655`])),e.add(da(t.box([n,J+2.25,r+.47*i],[.24,.22,.24],[`#efc481`]),`street`)),e.add(t.box([n,J+2.41,r+.47*i],[.33,.1,.34],[`#595655`]))}function ed(e,t,[n,r,i],a){let o=new f;o.name=`harbor-tree`,o.add(t.box([0,.75,0],[.27,1.5,.28],Ku)),o.add(t.box([0,1.23,0],[1.67,.57,1.42],[`#547262`,`grass`])),o.add(t.box([.04,1.68,.02],[1.26,.42,1.16],[`#6d8868`,`grass`])),o.add(t.box([.1,1.98,.04],[.77,.31,.82],[`#88966e`,`grass`])),o.position.set(n,r,i),o.scale.setScalar(a),e.add(o)}function td(e,t,[n,r,i],a){let o=t.cylinder([n,r,i],[.69,1,1,6],[`#888a83`,`brick`]);o.scale.set(...a),o.rotation.y=n,e.add(o)}function nd(e,t,[n,r,i],a){e.add(t.cylinder([n,r,i],[.22,.29,.27,8],[a])),e.add(t.cylinder([n,r+.17,i],[.09,.15,.12,8],[`#f0cd8b`]))}function rd(e,t){let n=Wt(251);e.add(Zu(t,Ot,[`#8ca06a`,`grass`])),e.add(Zu(t,[Mt[0],Ot[1],Mt[2],Ot[2]],[`#8ca06a`,`grass`])),e.add(Zu(t,[Ot[1],Mt[1],Mt[2],Mt[3]],[`#8ca06a`,`grass`])),e.add(Zu(t,Ft,qu)),e.add(Zu(t,[10.4,22,16.1,19.9],qu)),e.add(t.box([-10,J-.012,12.2],[31,.026,2.4],[`#c7b299`,`brick`]));for(let r=0;r<18;r++){let i=-13+r*1.21,a=-11.7+n()*.26,o=[.54+n()*.44,.48+n()*.75,.64];r>1&&td(e,t,[i,.18,a],o),td(e,t,[11.4+r*.58,.12,15.95],[.55,.57,.62])}for(let r=0;r<16;r++){td(e,t,[8.25+n(),.23,-12.4-r*.83],[.67,.74,.69]);let i=-28+n()*2.6,a=-19+r*2.57,o=.9+n()*.65;(a<-12.3||a>-8.4)&&!(i>=-30&&i<=-12&&a>=-21&&a<=22)&&ed(e,t,[i,J,a],o)}}var id=[{wall:`#d0a16b`,roof:`#97685e`,trim:`#f1dbc2`},{wall:`#c28b79`,roof:`#6b7880`,trim:`#f3ddbd`},{wall:`#a9af94`,roof:`#836c6a`,trim:`#f0d7b3`},{wall:`#abc1c0`,roof:`#926556`,trim:`#ecd4af`}];function ad(e,t,n){let r=_a(t,id[n.color],n.size);r.name=`harbor-house`,r.position.set(...n.position),r.rotation.y=n.yaw??0,e.add(r)}var od=[4.4,2.43,4],sd=[{position:[-3,J,17.5],color:0,name:`船夫小屋`},{position:[6,J,19.2],color:3,name:`渔民小屋`}];function cd(e,t){for(let{position:n,color:r,name:i}of sd)ad(e,t,{position:n,size:od,color:r}),e.add(xs(i,[n[0],J+bs.mountHeight,n[2]-od[2]/2-.06],Math.PI))}function ld(e,t){cd(e,t),ad(e,t,{position:[-2.69,J,-21.21],size:od,color:2,yaw:Math.PI}),ad(e,t,{position:[-24.7,J,-3],size:od,color:1,yaw:-Math.PI/2});for(let{tier:n,y:r,z:i,lots:a}of Iu){e.add(t.box([-9,r-2.4,i+10],[39-n*2.8,4.8,21],[`#8a9b76`,`grass`]));let o=n===0?W.ramp[0]+28:38-n*2.8,s=n===0?(W.ramp[0]-28)/2:-9;e.add(t.box([s,r-.62,i-.49],[o,1.24,.55],qu));let c=Math.max(...a.map(e=>e.x));for(let{x:n,house:o,treeScale:s}of a)o&&ad(e,t,{position:[n,r,i+2.3],size:[o.width,o.height,3.4],color:o.color}),n!==c&&ed(e,t,[n+2.8,r,i+2.7],s)}}function ud(e,t){let n=14.3;for(let r of[-1.2,1.2])e.add(t.box([3+r,1.52,n],[.13,1.74,.13],Ku));e.add(t.box([3,2.28,n],[2.55,.13,.14],Ku));for(let r=0;r<=12;r++){let i=1.89+r*.185;e.add(t.beam([[i,2.22,n],[i+.07,1.26,n]],.023,[`#93a291`]))}for(let r=0;r<6;r++)e.add(t.box([3,1.3+r*.17,n],[2.29,.025,.026],[`#93a291`]));for(let r of[-.82,.55,.98])nd(e,t,[3+r,1.29,n],`#c58d58`);let r=2.86,i=14.21;for(let n=0;n<8;n+=1){let a=n*Math.PI/4,o=t.box([r+Math.cos(a)*.28,1.86+Math.sin(a)*.28,i],[.215,.075,.07],n%2?[`#efe6d4`]:[`#c0553f`]);o.rotation.z=a+Math.PI/2,e.add(o)}e.add(t.beam([[r,2.28,14.290000000000001],[r,2.17,i]],.035,[`#7a6a52`]))}function dd(e,t){ud(e,t);for(let[n,r]of[[-1.2,2.34],[-1.2,-2.34],[9,2.34],[9,-2.34]])$u(e,t,[n,J,r]);for(let[n,r]of[[0,12.2],[-6.9,15.9]])e.add(t.box([n,.91,r],[.65,.52,.61],[`#bc8a59`,`wood`])),e.add(t.box([n,1.19,r],[.68,.08,.64],Ku)),nd(e,t,[n-.46,.81,r],`#bd6951`);for(let[n,r]of[[-16,9.1]]){e.add(t.cylinder([n,.99,r],[.35,.31,.68,9],Ku));for(let i of[.78,1.18])e.add(t.cylinder([n,i,r],[.355,.355,.08,9],[`#69645c`]))}}function fd(e,t){let n=[`#c1a784`,`grass`];for(let[r,i]of[[-21,-2.6],[2.6,11]])e.add(t.box([-11.8,J-.02-.2,(r+i)/2],[1.2,.4,i-r],n))}function pd(e){let t=new Map;e.updateMatrixWorld(!0),e.traverse(e=>{if(!(e instanceof L)||e.geometry.type!==`BoxGeometry`)return;let n=e.material,r=`${n.id}:${e.userData.harborGlow??``}`,i=t.get(r);i?i.blocks.push(e):t.set(r,{material:n,blocks:[e]})});for(let{material:n,blocks:r}of t.values()){if(r.length<2)continue;let t=new A(r[0].geometry,n,r.length);r[0].userData.harborGlow&&(t.userData.harborGlow=r[0].userData.harborGlow,t.userData.glowPoints=r.map(e=>new O().setFromMatrixPosition(e.matrixWorld))),r.forEach((e,n)=>{t.setMatrixAt(n,e.matrixWorld),e.removeFromParent()}),e.add(t)}}var md=`vessel`;function hd(e,t){let n=[{id:md,point:[-.3,.025,8.8],yaw:.13,size:1,color:`#65866e`},{id:`east-shoal`,point:[42,.03,-8],yaw:.62,size:.75,color:`#7a827d`},{id:`outer-cay`,point:[64,.03,-26],yaw:-.28,size:.8,color:`#9c785b`}],r=n.map(({id:n,point:r,yaw:i,size:a,color:o})=>{let s=xa(t,o);return s.name=`harbor-boat-${n}`,s.position.set(r[0],r[1],r[2]),s.rotation.y=i,s.scale.setScalar(a),s.traverse(e=>{e.raycast=()=>{}}),e.add(s),s}),i=r[n.findIndex(e=>e.id===md)]??r[0],a=Sa(t);return a.name=`harbor-yacht`,a.position.set(16.45,.03,21.3),a.rotation.y=-.06,a.traverse(e=>{e.raycast=()=>{}}),e.add(a),{boats:r,vessel:i,yacht:a,bases:n.map(e=>e.point)}}var gd=[{footprint:[5.15,8.25,-23.1,-20],height:10.4},{footprint:[-4.94,-.44,-23.26,-19.16],height:3.9},{footprint:[-5.25,-.75,15.45,19.55],height:3.9},{footprint:[3.75,8.25,17.15,21.25],height:3.9},{footprint:[-26.9,-22.5,-5.3,-.7],height:3.9}],_d=Ru.map(e=>({footprint:e.footprint,height:(e.base??W.upperY)-W.upperY+e.height})),vd=[...gd.map(e=>e.footprint),...Ru.map(e=>e.footprint),...zu,...Gs,[-30,W.ramp[0],22.74,23.29],[-30,-25,-21,-12.32],[-30,-25,-8.38,22],[1.7,4.3,14.16,14.44],[-.78,.35,11.87,12.53],[-7.7,-6.56,15.57,16.23],[.24,.96,1.87,2.55],[11.54,12.26,2.59,3.31],[-16.36,-15.64,8.74,9.46],[-1.29,-1.11,2.27,2.43],[8.91,9.09,2.27,2.43],[8.91,9.09,-2.43,-2.27],[-21.71,-21.49,-11.11,-10.89],[-21.71,-21.49,-4.01,-3.79],[-21.71,-21.49,3.09,3.31]];function yd(e){let t=[],n=new H;return e.traverse(e=>{if(e.name!==`harbor-tree`&&e.name!==`harbor-house`&&e.name!==`harbor-tower`)return;n.setFromObject(e);let{min:r,max:i}=n;t.push({footprint:[r.x,i.x,r.z,i.z],base:r.y,height:i.y-r.y})}),t}for(let[e,t]of[...Xu(Dt,1),...Xu(Rt)])vd.push([e-.18,e+.18,t-.18,t+.18]);function bd(e,t){e.add(t.cylinder([21.8,J+.22,17.87],[.23,.25,.42,10],[`#8a6a4a`]))}function xd(e){let t=new H,n=[];return e.traverse(e=>{if(e.name!==`harbor-tree`)return;t.setFromObject(e);let r=.14,i=(t.min.x+t.max.x)/2,a=(t.min.z+t.max.z)/2,o=t.max.y-J-lt(i,a);o<.8||t.max.x-t.min.x<r*3||n.push({footprint:[t.min.x+r,t.max.x-r,t.min.z+r,t.max.z-r],height:o,supportOnly:!0})}),n}function Sd(e,t=ga()){let n=new f;rd(n,t),bd(n,t),Qu(n,t,{area:Dt,deckFrom:Ot[1],postSkip:1}),Qu(n,t,{area:Rt}),ld(n,t),dd(n,t),fd(n,t),Zs(n,t);let r=ya(t);r.name=`harbor-tower`,r.position.set(6.7,J,-21.55),n.add(r);for(let[e,r,i]of[[17,-6,`#c97959`],[23,-12,`#d1ab63`],[14,9,`#bf7154`],[30,-3,`#cfac62`]])nd(n,t,[e,.18,r],i);nu(n,t);let i=yd(n),a=xd(n);pd(n),e.add(n);let{boats:o,vessel:s,yacht:c,bases:l}=hd(e,t);return{animate:(e,t)=>{o.forEach((n,r)=>{if(n!==s){let t=l[r],i=3.2+r*.8,a=e*.16+r*1.7;n.position.x=t[0]+Math.cos(a)*i,n.position.z=t[2]+Math.sin(a)*i,n.rotation.y=-a+Math.PI*.5}n.position.y=.033+Math.sin(e*1.41+r)*.043,n.rotation.z=Math.sin(e*.96+r*.71)*.025,n.rotation.x=Math.sin(e*.88+r*.65)*.045+(n===s?t:0)})},vessel:s,yacht:c,flightVolumes:i,treeTops:a}}var Cd=400,wd=720,Td={high:1,medium:.83,low:.65},Ed=2.45,Dd=1,Od=.26,kd=.3;function Ad(e,t){let n=new Ne(1,1,{magFilter:Ze,minFilter:Ze,generateMipmaps:!1}),r=new _e,i=new L(new ve(2,2),new I({map:n.texture,depthTest:!1})),a=new he(-1,1,1,-1,0,1),o=ou(),s=new O;i.frustumCulled=!1,r.add(i);let c={width:1,height:1},l=t();function u(){let{width:e,height:t}=c,r=Td[l],i=Math.min(wd*r/e,Cd*r/t,1);n.setSize(Math.max(Dd,Math.round(e*i)),Math.max(Dd,Math.round(t*i)))}return{resize(t,n){e.setPixelRatio(1),e.setSize(t,n,!1),Object.assign(c,{width:t,height:n}),u()},draw(i,c,d){let f=t();f!==l&&(l=f,u());let{player:p,align:m}=d;window.__harborPlayer=p,s.set(p.x,J+U.focusHeight+p.height+p.elevation,p.z),m&&o(c,s,n),e.setRenderTarget(n),e.render(i,c),e.setRenderTarget(null),e.render(r,a)},dispose(){n.dispose(),i.geometry.dispose(),i.material.dispose()}}}function jd(e){let t=new Set,n=new Set,r=new Set;e.traverse(e=>{if(e instanceof A&&e.dispose(),e instanceof L||e instanceof Ge){e instanceof L&&t.add(e.geometry);let i=Array.isArray(e.material)?e.material:[e.material];for(let e of i)n.add(e),`map`in e&&e.map instanceof Oe&&r.add(e.map)}}),t.forEach(e=>e.dispose()),n.forEach(e=>e.dispose()),r.forEach(e=>e.dispose()),e.clear()}function Md(e){let t=new AbortController,{signal:n}=t,r=window.matchMedia(`(prefers-reduced-motion: reduce)`),i=/[?&]debug/.test(location.search)?(()=>{let e=document.createElement(`div`);return e.style.cssText=`position:fixed;left:14px;bottom:78px;z-index:9999;background:rgba(20,28,32,.82);color:#f2ead8;font:14px/1.4 ui-monospace,monospace;padding:6px 10px;border-radius:6px;pointer-events:none`,document.body.appendChild(e),e})():null,a=0,o,s=0,c=!1;function l(t){let n=o===void 0?0:(t-o)/1e3,c=Math.min(n,jt.maxFrameStep);if(o=t,r.matches||(s+=c),i){let e=window.__harborPlayer;e&&(i.textContent=`x `+e.x.toFixed(2)+`   z `+e.z.toFixed(2))}e(c,s,r.matches,n),a=requestAnimationFrame(l)}function u(){cancelAnimationFrame(a),o=void 0,!c&&!document.hidden&&document.hasFocus()&&(a=requestAnimationFrame(l))}return window.addEventListener(`blur`,u,{signal:n}),window.addEventListener(`focus`,u,{signal:n}),document.addEventListener(`visibilitychange`,u,{signal:n}),{start(){u()},stop(){c=!0,u(),t.abort()}}}function Nd(e,t,n){let r=new le,i=e.map(e=>e.frame);return a=>{if(n.player.sailing)return;r.setFromCamera(a,t);let o=r.intersectObjects(i,!0),s=e.find(e=>o[0]?.object.parent===e.frame);if(!s)return;let c=Pl(s);Il(n.player,c)&&n.tracker.open(c)}}var Pd=[...gd.slice(1),..._d],Fd=2.2,Id=new Map;for(let e of[...zu,...Gs])Id.set(e.join(`,`),Fd);function Ld(e){return Pd.find(t=>t.footprint.every((t,n)=>t===e[n]))?.height}function Rd(e,t=[]){let{x:n,z:r}=pt.position,i=Od,a=[n-i,n+i,r-i,r+i];return[...[...vd,xc.footprint,...hl,...ru,a,...e].map(e=>({footprint:e,height:vt.vaultable.find(t=>t.footprint.every((t,n)=>t===e[n]))?.height??Ld(e)??Id.get(e.join(`,`))})),...t]}function zd(e,t,n){let r=Ll(e,n),i=t.nearby(e);return r?.kind===`fishing`||r?.kind===`wishing`||r?.kind===`captain`||r?.kind===`lookout`||r?.kind===`sunset`||!i?r:{id:i.resident.id,...i.position,radius:Ac.interactRadius,kind:`animal`,label:`${Ac.petLabel} ${i.resident.name}`}}function Bd(e){let t=Math.hypot(e.x-G.center.x,e.z-G.center.z);return t>=G.lanternRadius&&t<=G.outerRadius}function Vd(e,t,n){let{exhibits:r,canvas:i,propObstacles:a,yacht:o,animals:s,obstacles:c,extension:l}=n,{scope:u}=l,{pastimes:d}=n,{fishing:f}=d,p=zl({open:e.onOpen,leave:e.onLeave}),m=[...gd,xc,...Ru,...Bu,d.altar,...a.map(e=>({footprint:e,height:Ed}))],h=hu(c),{player:g}=h,_=()=>!1,v=fc(g,rc(c,[...m,...n.flightVolumes,..._l,...qs]),{change:e.onFlight,notice:e.onFlightNotice,land:e=>Bd(e)?_():Ct(e.x,e.z,{obstacles:[],height:0})?h.teleport(e,e.y):h.swim(e),recover:h.respawn}),y=ju([{id:`skiff`,group:n.vessel},{id:`yacht`,group:o}],g,()=>l.weather.frame.ice),b=Gl(t,m),x=fs(t),S=Rl(r),C=kc({motion:h,orbit:b,sailing:y,onMode:e.onMode,onRequest:e.onActivityRequest,onCue:e.onCue,onNotice:e.onQuality});_=()=>C.act(`lookout`,!1);let w=!1,T=!1,E=!1,D=0,ee=0,te=()=>{k.clear(),e.onSailing(g.sailing)};function O(){if(v.active||f.active||u.active||D)return null;if(C.mode===`lookout`)return Yo(g);if(C.mode===`drive`){let e=y.nearbyDock();return e?{kind:`dock`,id:e.id,label:K.dockPrompt,x:e.x,z:e.z,radius:e.berthRadius}:null}if(C.mode)return null;let e=zd(g,s,r);if(e?.kind===`fishing`||e?.kind===`wishing`)return e;let t=l.gulls.hotspot(g)??l.residents.hotspot(g);if(t)return t;if(e&&e.kind!==`landmark`)return e;let n=y.nearbyDock();return n?{kind:`dock`,id:n.id,label:K.boardLabel,x:n.land.x,z:n.land.z,radius:K.boardingRadius}:e}function ne(){let{x:e,z:t}=ht.place;!g.airborne&&h.teleport({x:e,z:t})&&(k.clear(),document.pointerLockElement===i&&document.exitPointerLock(),g.sitting=!0,g.height=.3,g.facing=Math.atan2(ht.float.x-g.x,ht.float.z-g.z),b.aim(null,{yaw:g.facing+Math.PI,pitch:ht.pitch}),i.focus({preventScroll:!0}),f.cast())}function re(){if(E||w||p.hasOpen())return;if(u.active){u.close();return}if(f.active){d.reel();return}let t=O();if(!t)C.mode===`lookout`&&e.onActivityRequest(`leave-lookout`);else if(t.kind===`fishing`)ne();else if(t.kind===`wishing`&&d.chooseWish(),t.kind===`telescope`)document.pointerLockElement===i&&document.exitPointerLock(),u.open().catch(()=>e.onQuality(`望远镜细节暂不可用。`));else if(t.kind===`dock`)e.onActivityRequest(g.sailing?`dock`:`board`);else if(t.kind===`chair`){let e=h.player;e.sitting?(e.sitting=!1,e.x=t.x+.9,e.z=t.z,e.height=0,e.facing=Math.PI):(e.sitting=!0,e.x=t.x,e.z=t.z,e.height=Number(t.note)||.35,e.facing=Math.PI/2)}else if(t.kind===`gull`)l.gulls.pet(t=>e.play(`gull`,{distance:t}));else if(t.kind===`resident`&&e.play(`greeting`,{pitch:.84+Number(t.id.slice(-1))*.09}),t.kind===`captain`&&e.play(`greeting`,{pitch:.76}),t.kind===`mayor`)e.play(`knock`),ee=window.setTimeout(()=>e.play(`knock`),115),D=window.setTimeout(()=>{D=0,p.open(t)},245);else if(t.kind===`lookout`||t.kind===`sunset`)g.airborne||e.onActivityRequest(t.kind);else if(t.kind===`animal`){let t=s.nearby(g);t&&(s.pet(t),e.play(t.resident.species))}else p.open(t)}let k=cl({canvas:i,motion:h,orbit:b,sailing:y,flight:v,canFly:()=>!f.active&&!w&&!p.hasOpen()&&!E&&!C.mode&&!u.active&&!D,flightEnabled:()=>e.settings().flight,canJump:()=>!f.active&&!w&&!p.hasOpen()&&!E&&!C.mode,canMove:()=>!h.player.sitting&&!f.active&&!E&&!T&&!u.active&&(C.mode===null||C.mode===`lookout`||C.mode===`drive`),canLook:()=>!E&&!w&&C.mode!==`sunset`&&C.mode!==`tour`,canSteer:()=>!E&&!T&&C.mode===`drive`,sprintEnabled:()=>!T,lockPointer:()=>!f.active&&!w&&!u.active,leftLock:()=>e.settings().view===`first`&&!f.active&&!w&&!u.active,specialLook:{active:()=>u.active,look:u.look,zoom:u.zoom},onInteract:re,onPick(e){if(v.active||f.active||w||p.hasOpen()||C.mode||E)return;let n=Il(g,St.place)?d.pickWish(e,t):void 0;n?(d.chooseWish(n),p.open(St.place)):A(e)}}),A=Nd(r,t,{player:g,tracker:p}),j=Hd({motion:h,obstacles:c,sailing:y},S,e=>{v.reset(),b.setFlight(!1),te(),b.setSailing(g.sailing),e===W.id&&(g.facing=W.arrivalYaw+Math.PI,b.center(g.facing)),b.update(g,0,!0)});return{...k,player:g,places:S,sailing:y,flight:v,tracker:p,cameraObstacles:m,activity:C,getInteraction:O,scope:u,viewYaw:()=>b.yaw,pastimes:d,stopFishing(){f.stop(),g.sitting=!1,g.height=0,i.focus({preventScroll:!0})},openCatchRecords(){f.active&&(d.showRecords(),p.open(ht.place))},dispose(){k.dispose(),u.close(),window.clearTimeout(D),window.clearTimeout(ee)},setPanelOpen(e,t=!1){w=e,(t&&!T||v.active&&e&&!w)&&k.clear(),T=t,e&&document.pointerLockElement===i&&document.exitPointerLock()},setTransition(e){E=e,e&&k.clear()},advanceActivity(e){E||C.step(e)},performAction(e){if(v.active||f.active)return!1;let t=matchMedia(`(prefers-reduced-motion: reduce)`).matches,n=C.act(e,t);return n&&(te(),(e!==`sunset`||t)&&b.update(g,0,!0)),n},focusPlace(e){return C.focusAt(S.find(t=>t.hotspot.id===e))},updateFirst(e,t,n){return b.setFirstPerson(t.view===`first`),x.update(g,b.angles,{enabled:t.view===`first`&&C.mode!==`sunset`&&!u.active,step:e,instant:n,bob:t.bob&&!n&&!v.active}),{blend:x.blend,yaw:x.heading}},travel(e){return!C.mode&&!f.active&&j(e)}}}function Hd(e,t,n){let{motion:r,obstacles:i,sailing:a}=e;return e=>{let o=t.find(t=>t.hotspot.id===e);if(!o||o.requiresBoat&&!r.player.sailing)return!1;let s=o.requiresBoat?(e,t)=>Eu(e,t,a.vessel.yaw):(e,t)=>Ct(e,t,{obstacles:i,height:0}),c=Yt(o.hotspot,s);return c?(o.requiresBoat?a.teleport(c):(r.player.sailing&&a.disembark(),r.teleport(c)),n(e),!0):!1}}function Ud(e,t,n){let{session:r,avatar:i,animate:a,animals:o,forest:s,extension:c,mayor:l,syncActors:u}=n,{player:d,tracker:f,places:p,cameraObstacles:m,sailing:h,activity:g,flight:_,pastimes:v}=r,{scene:y,camera:b,output:x,canvas:S}=t,C=Nl(y),w=ql(p,m),T=Mu(e.night),E=Nu(e.simplified,e.onQuality),D=ha(y,e.simplified),ee=Gu(y),te,O=!1,ne=0,re=pc(e.play);return{draw:(t,n,p,m)=>{let k=e.settings();p||=k.reduced,r.advanceActivity(g.mode===`sunset`?Math.min(m,.25):t),r.update(t),d.swimming!==O&&(O=d.swimming,e.onFlightNotice(O?q.ui.swim:q.ui.shore)),d.swimming?(ne+=t,ne>=At.paddleInterval&&(ne=0,d.speed>jt.movementThreshold&&e.play(`swim`,{volume:Math.min(.85,.35+d.speed*.14)}))):ne=0,E.sample(m);let A=T.step(Math.min(m,.25)),j=g.dusk,ie=r.updateFirst(t,k,p),M=c.weather.update(k.weather,b,{step:t,quality:k.quality,tier:E.tier,reduced:p}),ae=Math.max(M.rain,M.snow),oe=k.quality===`low`,N=p?0:n,P=v.update(d,{step:t,frameTime:m,time:N,night:A,low:oe||!E.flags.cloth,reduced:p,weather:k.weather});i(d,{fishingArm:P,settings:k,rain:M.rain,first:ie.blend,seconds:t,reduced:p,simplified:!E.flags.cloth,yaw:ie.yaw,flying:_.active,bank:_.bank}),c.residents.update(d,t,{night:A,rain:M.rain,snow:M.snow,reduced:p,limit:oe?3:E.flags.residents?1/0:4}),l.update(A,M.rain,t,p),u(),c.gulls.update(d,{time:N,step:t,rain:M.rain,snow:M.snow,night:A,reduced:p,low:oe||!E.flags.gulls},t=>e.play(`gull`,{distance:t})),c.islands.update(N,{weather:ae,tier:oe?3:E.tier}),c.seaLife.update(N,{reduced:p||oe}),c.chimney.update(t,p||oe),c.ambience(d,{mode:g.mode,speed:h.vessel.speed,weather:M,mobile:e.simplified,flightWind:re(t,_.active,_.speed)}),c.scope.update(A>.5,ae),a(N,A,{reflections:E.flags.reflections,dusk:j,reduced:p,weather:M,bank:p?0:h.vessel.bank,edgeFog:_.active?ec(d)*q.edgeFog:0}),D(Math.max(A*(1-j),j*.86,ae*.36),N,{...E.flags,pulse:v.beam}),o.update(d,t,{night:A>.5||M.rain>.54,reduced:p,scenery:E.flags.scenery}),s(d,j,{trees:E.flags.scenery,shadows:E.flags.shadows}),ee(t,h.vessel,d.sailing&&E.flags.wake&&!p&&!oe),f.update(d);let F=r.getInteraction(),se=F&&`${F.kind}:${F.id}`;(se??void 0)!==te&&(te=se??void 0,C.setHotspot(F),e.onHotspot(F)),(F?.kind===`animal`||F?.kind===`resident`||F?.kind===`gull`)&&C.setHotspot(F),C.setNight(A,E.flags.halos),x.draw(y,b,{player:d,align:ie.blend<.35&&!c.scope.active}),e.onHintPosition(C.project(b)),e.onLabels(g.mode||_.active||v.fishing.active?[]:w(b,d,{width:S.width,height:S.height,elapsed:n}))},setNight:T.setNight}}function Wd({mount:e,onError:t},n,r){let{renderer:{domElement:i},camera:a,output:o}=n,s=()=>{let t=Math.max(Dd,e.clientWidth),n=Math.max(Dd,e.clientHeight);a.aspect=t/n,a.updateProjectionMatrix(),o.resize(t,n)},c=new ResizeObserver(s),l=new AbortController,{signal:u}=l;return i.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),t()},{signal:u}),window.addEventListener(`blur`,r.clear,{signal:u}),document.addEventListener(`visibilitychange`,r.clear,{signal:u}),i.tabIndex=0,i.setAttribute(`aria-label`,`渔港场景，拖动环绕人物，使用方向键移动`),e.append(i),c.observe(e),s(),()=>{l.abort(),c.disconnect()}}function Gd(e,t,n){let{renderer:r,scene:i}=t,a=new We(U.fov,1,U.near,U.far),o=Ad(r,()=>e.settings().quality);n.push(o.dispose);let s=ga(),c=el(i),l=Sd(i,s);Cc(i,s);let u=xl(i,s),d=ll(i,{kit:s,vessel:l.vessel}),f=El(i,s,e.artworks);n.push(f.dispose);let p=bu(i,s),m=r.domElement,h=Ga(i,s,{play:e.play,notice:e.onQuality,fishing:e.onFishing,landed:()=>e.onOpen(ht.place)}),g=[...f.obstacles,...p],_=[...Rd(g,l.treeTops),h.altar],v=js(i,s,[..._]),y=Uc({scene:i,kit:s,obstacles:[..._],simplified:e.simplified}),b=ds({scene:i,camera:a,kit:s},{obstacles:[..._],animals:y,onChange:e.onScope,setAmbience:e.setAmbience}),x=[{pose:v.pose,avatar:v.avatar},...b.residents.followers].map(e=>({...e,follow:wt(kd)}));for(let{follow:e}of x)_.push(e.obstacle);let S=()=>{for(let{pose:e,avatar:t,follow:n}of x)t.visible?n.move(e):n.hide()};S();let C=Vd(e,a,{exhibits:f.exhibits,canvas:m,propObstacles:g,vessel:l.vessel,yacht:l.yacht,animals:y,obstacles:_,extension:b,flightVolumes:l.flightVolumes,pastimes:h});n.push(C.dispose);let w=ys(i,s),{draw:T,setNight:E}=Ud(e,{scene:i,camera:a,output:o,canvas:m},{session:C,avatar:w,forest:u,animals:y,extension:b,mayor:v,syncActors:S,animate(e,t,n){l.animate(e,n.bank),d(e,n.reduced),c(e,t,n)}}),D=Md(T);n.push(D.stop),n.push(Wd({...e,onError(){D.stop(),e.onError()}},{renderer:r,camera:a,output:o},C)),T(0,0,!0,0),D.start();let ee;return{...C,setNight:E,dismissPanel:C.tracker.dismiss,async bakeMap(){let e=await Lt(()=>import(`./harbor-map-bake-Bke6LL2m.js`),__vite__mapDeps([6,4,1,2,3,5]));return ee??=e.captureHarborMap(r,i),ee()}}}function Kd(e){let t=document.createElement(`canvas`),n=t.getContext(`webgl2`,{antialias:!1,powerPreference:`low-power`});if(!n)throw Error(`WebGL 2 unavailable`);let r=new sa({canvas:t,context:n}),i=new _e,a=[],o=()=>{for(let e of a.reverse())e();jd(i),r.dispose(),r.forceContextLoss(),t.remove()};try{return{...Gd(e,{renderer:r,scene:i},a),focus:()=>t.focus({preventScroll:!0}),dispose:o}}catch(e){throw o(),e}}export{Kd as mountHarbor,wa as n,ga as r,Da as t};