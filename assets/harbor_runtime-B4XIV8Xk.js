const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/harbor-scope-detail-D0ZqTQiB.js","assets/harbor-scope-config-BM7BHeQB.js","assets/three.core-BdF-6bIW.js","assets/harbor-map-bake-BgbywwXI.js","assets/pixel_harbor-CgBN-cbw.js","assets/index-FOibTEpR.js","assets/index-CIzAk-IY.css","assets/pixel_harbor-Cvwzo-kC.css"])))=>i.map(i=>d[i]);
import{$ as e,$t as t,A as n,An as r,B as i,Bn as a,C as o,Cn as s,D as c,Dn as l,E as u,En as d,F as f,Fn as p,G as m,H as h,Hn as g,I as _,In as v,J as y,Jt as b,K as x,Kt as S,L as C,Ln as w,M as T,Mn as E,N as ee,Nn as te,O as ne,On as D,Pn as re,Q as ie,Qt as O,R as k,Rn as A,S as j,T as M,Tn as ae,U as oe,Un as se,V as N,Vn as ce,W as le,Wn as ue,X as P,Xt as de,Y as F,Yt as fe,Z as I,_ as pe,_n as me,a as he,at as ge,b as _e,cn as ve,ct as ye,d as L,dt as be,en as xe,et as Se,f as Ce,fn as we,g as Te,gn as Ee,gt as De,h as Oe,hn as ke,ht as Ae,i as je,it as Me,j as Ne,jn as Pe,k as Fe,kn as Ie,l as Le,ln as Re,lt as ze,m as Be,mn as Ve,n as R,nt as He,o as Ue,on as We,ot as Ge,p as z,pn as Ke,q as B,qt as qe,r as Je,rt as Ye,sn as Xe,st as Ze,tn as Qe,tt as $e,u as et,un as tt,v as nt,vn as rt,w as it,wn as at,x as ot,xn as st,y as ct,yn as lt,zn as ut}from"./three.core-BdF-6bIW.js";import{a as dt,c as ft,d as pt,f as mt,i as ht,l as gt,m as _t,n as vt,o as yt,p as bt,r as xt,s as St,t as Ct,u as wt}from"./pixel_harbor-CgBN-cbw.js";import{a as V,c as Tt,d as Et,i as H,l as Dt,n as Ot,o as kt,r as U,s as At,t as jt,u as Mt}from"./harbor-scope-config-BM7BHeQB.js";import{n as Nt,s as W,t as Pt,u as Ft}from"./index-FOibTEpR.js";function It(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Lt(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var G={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},K={common:{diffuse:{value:new L(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new B}},envmap:{envMap:{value:null},envMapRotation:{value:new B},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new B}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new B}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new B},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new B},normalScale:{value:new l(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new B},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new B}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new B}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new B}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new L(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new L(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0},uvTransform:{value:new B}},sprite:{diffuse:{value:new L(16777215)},opacity:{value:1},center:{value:new l(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}}},Rt={basic:{uniforms:ce([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:G.meshbasic_vert,fragmentShader:G.meshbasic_frag},lambert:{uniforms:ce([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new L(0)},envMapIntensity:{value:1}}]),vertexShader:G.meshlambert_vert,fragmentShader:G.meshlambert_frag},phong:{uniforms:ce([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new L(0)},specular:{value:new L(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:G.meshphong_vert,fragmentShader:G.meshphong_frag},standard:{uniforms:ce([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new L(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag},toon:{uniforms:ce([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new L(0)}}]),vertexShader:G.meshtoon_vert,fragmentShader:G.meshtoon_frag},matcap:{uniforms:ce([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:G.meshmatcap_vert,fragmentShader:G.meshmatcap_frag},points:{uniforms:ce([K.points,K.fog]),vertexShader:G.points_vert,fragmentShader:G.points_frag},dashed:{uniforms:ce([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:G.linedashed_vert,fragmentShader:G.linedashed_frag},depth:{uniforms:ce([K.common,K.displacementmap]),vertexShader:G.depth_vert,fragmentShader:G.depth_frag},normal:{uniforms:ce([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:G.meshnormal_vert,fragmentShader:G.meshnormal_frag},sprite:{uniforms:ce([K.sprite,K.fog]),vertexShader:G.sprite_vert,fragmentShader:G.sprite_frag},background:{uniforms:{uvTransform:{value:new B},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:G.background_vert,fragmentShader:G.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new B}},vertexShader:G.backgroundCube_vert,fragmentShader:G.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:G.cube_vert,fragmentShader:G.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:G.equirect_vert,fragmentShader:G.equirect_frag},distance:{uniforms:ce([K.common,K.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:G.distance_vert,fragmentShader:G.distance_frag},shadow:{uniforms:ce([K.lights,K.fog,{color:{value:new L(0)},opacity:{value:1}}]),vertexShader:G.shadow_vert,fragmentShader:G.shadow_frag}};Rt.physical={uniforms:ce([Rt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new B},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new B},clearcoatNormalScale:{value:new l(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new B},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new B},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new B},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new B},sheen:{value:0},sheenColor:{value:new L(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new B},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new B},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new B},transmissionSamplerSize:{value:new l},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new B},attenuationDistance:{value:0},attenuationColor:{value:new L(0)},specularColor:{value:new L(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new B},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new B},anisotropyVector:{value:new l},anisotropyMap:{value:null},anisotropyMapTransform:{value:new B}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag};var zt={r:0,b:0,g:0},Bt=new y,Vt=new B;Vt.set(-1,0,0,0,1,0,0,0,1);function Ht(e,t,n,r,i,a){let o=new L(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new F(new je(1,1,1),new Re({name:`BackgroundCubeMaterial`,uniforms:te(Rt.backgroundCube.uniforms),vertexShader:Rt.backgroundCube.vertexShader,fragmentShader:Rt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Bt.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Vt),l.material.toneMapped=Ce.getTransfer(i.colorSpace)!==Xe,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new F(new ye(2,2),new Re({name:`BackgroundMaterial`,uniforms:te(Rt.background.uniforms),vertexShader:Rt.background.vertexShader,fragmentShader:Rt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ce.getTransfer(i.colorSpace)!==Xe,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(zt,ut(e)),n.buffers.color.setClear(zt.r,zt.g,zt.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ut(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Wt(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Gt(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(se(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&se(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&se(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Kt(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ze,s=new B,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var qt=class extends Pe{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Te(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new je(5,5,5),i=new Re({name:`CubemapFromEquirect`,uniforms:te(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new F(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=N),new Be(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Jt=256,Yt=3,Xt=20,Zt=256,Qt=16,$t=3,en=new D,tn=new L,nn=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Be(1,10,null),this._boxMesh=new F(new je(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=en}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(tn));let h=new Be(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=un(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ln(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Jt,w(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Jt:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=rn(e,!1,!1),n=Math.log2(e)-Yt;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=rn(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=un()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ln()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=on(),this._integrationMaterial=sn());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Qt);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-$t)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Zt*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=cn());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function rn(e,t,n){return new qt(e,{minFilter:h,generateMipmaps:t,type:_,colorSpace:le,depthBuffer:n})}function an(e,t,n){return new Re({name:e,uniforms:t,vertexShader:G.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function on(){return an(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Zt}u

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
	`)}function sn(){return an(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Qt}},`

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
	`)}function cn(){return an(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Xt}
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
	`)}function ln(){return an(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

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
	`)}function un(){return an(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function dn(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new qt(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new nn(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new nn(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function fn(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ue(`WebGLRenderer: `+e+` extension not supported.`),t}}}function pn(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?me:Ee)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function mn(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function hn(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:v(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function gn(e,t,r){let i=new WeakMap,a=new Ie;function o(o,s,c){let u=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,f=d===void 0?0:d.length,p=i.get(s);if(p===void 0||p.count!==f){p!==void 0&&p.texture.dispose();let e=s.morphAttributes.position!==void 0,r=s.morphAttributes.normal!==void 0,o=s.morphAttributes.color!==void 0,c=s.morphAttributes.position||[],u=s.morphAttributes.normal||[],d=s.morphAttributes.color||[],m=0;e===!0&&(m=1),r===!0&&(m=2),o===!0&&(m=3);let h=s.attributes.position.count*m,g=1;h>t.maxTextureSize&&(g=Math.ceil(h/t.maxTextureSize),h=t.maxTextureSize);let _=new Float32Array(h*g*4*f),v=new ct(_,h,g,f);v.type=n,v.needsUpdate=!0;let y=m*4;for(let t=0;t<f;t++){let n=c[t],i=u[t],s=d[t],l=h*g*4*t;for(let t=0;t<n.count;t++){let c=t*y;e===!0&&(a.fromBufferAttribute(n,t),_[l+c+0]=a.x,_[l+c+1]=a.y,_[l+c+2]=a.z,_[l+c+3]=0),r===!0&&(a.fromBufferAttribute(i,t),_[l+c+4]=a.x,_[l+c+5]=a.y,_[l+c+6]=a.z,_[l+c+7]=0),o===!0&&(a.fromBufferAttribute(s,t),_[l+c+8]=a.x,_[l+c+9]=a.y,_[l+c+10]=a.z,_[l+c+11]=s.itemSize===4?a.w:1)}}p={count:f,texture:v,size:new l(h,g)},i.set(s,p);function b(){v.dispose(),i.delete(s),s.removeEventListener(`dispose`,b)}s.addEventListener(`dispose`,b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(e,`morphTexture`,o.morphTexture,r);else{let t=0;for(let e=0;e<u.length;e++)t+=u[e];let n=s.morphTargetsRelative?1:1-t;c.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),c.getUniforms().setValue(e,`morphTargetInfluences`,u)}c.getUniforms().setValue(e,`morphTargetsTexture`,p.texture,r),c.getUniforms().setValue(e,`morphTargetsTextureSize`,p.size)}return{update:o}}function _n(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var vn={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function yn(e,t,n,r,i,a){let s=new Pe(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,l=null,u=null,d=new Ue;d.setAttribute(`position`,new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute(`uv`,new Fe([0,2,0,0,2,0],2));let f=new b({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new F(d,f),m=new ge(-1,1,1,-1,0,1),h=null,g=null,v=!1,y,x=null,S=[],C=!1;this.setSize=function(e,t){s.setSize(e,t),c!==null&&c.setSize(e,t),l!==null&&l.setSize(e,t);for(let n=0;n<S.length;n++){let r=S[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){S=e,C=S.length>0&&S[0].isRenderPass===!0;let t=s.width,n=s.height;S.length>0&&c===null&&(c=new Pe(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),l=new Pe(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&S.some(e=>e.needsDepthTexture===!0);r!==(s.depthTexture!==null)&&(r===!0&&u===null&&(u=new o(t,n),a===!0&&(u.format=j,u.type=st)),s.dispose(),s.depthTexture=r?u:null,s.resolveDepthBuffer=r,s.storeMultisampledDepthBuffer=r);for(let e=0;e<S.length;e++){let i=S[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(u)}},this.begin=function(e,t){if(v||e.toneMapping===0&&S.length===0)return!1;if(x=t,t!==null){let e=t.width,n=t.height;(s.width!==e||s.height!==n)&&this.setSize(e,n)}return C===!1&&e.setRenderTarget(s),y=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return C},this.end=function(e,t){e.toneMapping=y,v=!0;let n=s,r=c;for(let i=0;i<S.length;i++){let a=S[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===c?l:c))}if(h!==e.outputColorSpace||g!==e.toneMapping){h=e.outputColorSpace,g=e.toneMapping,f.defines={},Ce.getTransfer(h)===`srgb`&&(f.defines.SRGB_TRANSFER=``);let t=vn[g];t&&(f.defines[t]=``),f.needsUpdate=!0}f.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(x),e.render(p,m),x=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.dispose(),c!==null&&c.dispose(),l!==null&&l.dispose(),d.dispose(),f.dispose()}}var bn=new ke,xn=new o(1,1),Sn=new Oe(1),Cn=new ct,wn=new nt,Tn=new Te,En=[],Dn=[],On=new Float32Array(16),kn=new Float32Array(9),An=new Float32Array(4);function jn(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=En[i];if(a===void 0&&(a=new Float32Array(i),En[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Mn(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Nn(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Pn(e,t){let n=Dn[t];n===void 0&&(n=new Int32Array(t),Dn[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Fn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function In(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;e.uniform2fv(this.addr,t),Nn(n,t)}}function Ln(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Mn(n,t))return;e.uniform3fv(this.addr,t),Nn(n,t)}}function Rn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;e.uniform4fv(this.addr,t),Nn(n,t)}}function zn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Mn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Nn(n,t)}else{if(Mn(n,r))return;An.set(r),e.uniformMatrix2fv(this.addr,!1,An),Nn(n,r)}}function Bn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Mn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Nn(n,t)}else{if(Mn(n,r))return;kn.set(r),e.uniformMatrix3fv(this.addr,!1,kn),Nn(n,r)}}function Vn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Mn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Nn(n,t)}else{if(Mn(n,r))return;On.set(r),e.uniformMatrix4fv(this.addr,!1,On),Nn(n,r)}}function Hn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Un(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;e.uniform2iv(this.addr,t),Nn(n,t)}}function Wn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;e.uniform3iv(this.addr,t),Nn(n,t)}}function Gn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;e.uniform4iv(this.addr,t),Nn(n,t)}}function Kn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function qn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;e.uniform2uiv(this.addr,t),Nn(n,t)}}function Jn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;e.uniform3uiv(this.addr,t),Nn(n,t)}}function Yn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;e.uniform4uiv(this.addr,t),Nn(n,t)}}function Xn(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Zn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Xn(xn):bn,n.setTexture2D(t||a,i)}function Qn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||wn,i)}function $n(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Xn(Sn):Tn,n.setTextureCube(t||a,i)}function er(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Cn,i)}function tr(e){switch(e){case 5126:return Fn;case 35664:return In;case 35665:return Ln;case 35666:return Rn;case 35674:return zn;case 35675:return Bn;case 35676:return Vn;case 5124:case 35670:return Hn;case 35667:case 35671:return Un;case 35668:case 35672:return Wn;case 35669:case 35673:return Gn;case 5125:return Kn;case 36294:return qn;case 36295:return Jn;case 36296:return Yn;case 35678:case 36198:case 36298:case 36306:case 35682:return Zn;case 35679:case 36299:case 36307:return Qn;case 35680:case 36300:case 36308:case 36293:return $n;case 36289:case 36303:case 36311:case 36292:return er}}function nr(e,t){e.uniform1fv(this.addr,t)}function rr(e,t){let n=jn(t,this.size,2);e.uniform2fv(this.addr,n)}function ir(e,t){let n=jn(t,this.size,3);e.uniform3fv(this.addr,n)}function ar(e,t){let n=jn(t,this.size,4);e.uniform4fv(this.addr,n)}function or(e,t){let n=jn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function sr(e,t){let n=jn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function cr(e,t){let n=jn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function lr(e,t){e.uniform1iv(this.addr,t)}function ur(e,t){e.uniform2iv(this.addr,t)}function dr(e,t){e.uniform3iv(this.addr,t)}function fr(e,t){e.uniform4iv(this.addr,t)}function pr(e,t){e.uniform1uiv(this.addr,t)}function mr(e,t){e.uniform2uiv(this.addr,t)}function hr(e,t){e.uniform3uiv(this.addr,t)}function gr(e,t){e.uniform4uiv(this.addr,t)}function _r(e,t,n){let r=this.cache,i=t.length,a=Pn(n,i);Mn(r,a)||(e.uniform1iv(this.addr,a),Nn(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Xn(xn):bn;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function vr(e,t,n){let r=this.cache,i=t.length,a=Pn(n,i);Mn(r,a)||(e.uniform1iv(this.addr,a),Nn(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||wn,a[e])}function yr(e,t,n){let r=this.cache,i=t.length,a=Pn(n,i);Mn(r,a)||(e.uniform1iv(this.addr,a),Nn(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Xn(Sn):Tn;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function br(e,t,n){let r=this.cache,i=t.length,a=Pn(n,i);Mn(r,a)||(e.uniform1iv(this.addr,a),Nn(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Cn,a[e])}function xr(e){switch(e){case 5126:return nr;case 35664:return rr;case 35665:return ir;case 35666:return ar;case 35674:return or;case 35675:return sr;case 35676:return cr;case 5124:case 35670:return lr;case 35667:case 35671:return ur;case 35668:case 35672:return dr;case 35669:case 35673:return fr;case 5125:return pr;case 36294:return mr;case 36295:return hr;case 36296:return gr;case 35678:case 36198:case 36298:case 36306:case 35682:return _r;case 35679:case 36299:case 36307:return vr;case 35680:case 36300:case 36308:case 36293:return yr;case 36289:case 36303:case 36311:case 36292:return br}}var Sr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tr(t.type)}},Cr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xr(t.type)}},wr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Tr=/(\w+)(\])?(\[|\.)?/g;function Er(e,t){e.seq.push(t),e.map[t.id]=t}function Dr(e,t,n){let r=e.name,i=r.length;for(Tr.lastIndex=0;;){let a=Tr.exec(r),o=Tr.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Er(n,l===void 0?new Sr(s,e,t):new Cr(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new wr(s),Er(n,e)),n=e}}}var Or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Dr(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function kr(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ar=37297,jr=0;function Mr(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Nr=new B;function Pr(e){Ce._getMatrix(Nr,Ce.workingColorSpace,e);let t=`mat3( ${Nr.elements.map(e=>e.toFixed(4))} )`;switch(Ce.getTransfer(e)){case m:return[t,`LinearTransferOETF`];case Xe:return[t,`sRGBTransferOETF`];default:return se(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Fr(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Mr(e.getShaderSource(t),r)}return i}function Ir(e,t){let n=Pr(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Lr={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Rr(e,t){let n=Lr[t];return n===void 0?(se(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var zr=new D;function Br(){return Ce.getLuminanceCoefficients(zr),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${zr.x.toFixed(4)}, ${zr.y.toFixed(4)}, ${zr.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Vr(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Wr).join(`
`)}function Hr(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ur(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Wr(e){return e!==``}function Gr(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Kr(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qr=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jr(e){return e.replace(qr,Yr)}function Yr(e,t){let n=G[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Jr(n)}var Xr=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zr(e){return e.replace(Xr,Qr)}function Qr(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function $r(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var ei={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ti(e){return ei[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ni={302:`ENVMAP_MODE_REFRACTION`};function ri(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ni[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ii={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ai(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ii[e.combine]||`ENVMAP_BLENDING_NONE`}function oi(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ti(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=ri(n),d=ai(n),f=Vr(n),p=Hr(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Wr).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Wr).join(`
`),g.length>0&&(g+=`
`)):(h=[$r(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Wr).join(`
`),g=[$r(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:G.tonemapping_pars_fragment,n.toneMapping===0?``:Rr(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,G.colorspace_pars_fragment,Ir(`linearToOutputTexel`,n.outputColorSpace),Br(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Wr).join(`
`)),o=Jr(o),o=Gr(o,n),o=Kr(o,n),s=Jr(s),s=Gr(s,n),s=Kr(s,n),o=Zr(o),s=Zr(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let y=_+h+o,b=_+g+s,x=kr(i,i.VERTEX_SHADER,y),S=kr(i,i.FRAGMENT_SHADER,b);i.attachShader(m,x),i.attachShader(m,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,x,S);else{let e=Fr(i,x,`vertex`),n=Fr(i,S,`fragment`);v(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):se(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(x),i.deleteShader(S),w=new Or(i,m),T=Ur(i,m)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(m,Ar)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jr++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=S,this}var si=0,ci=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new li(e),t.set(e,n)),n}},li=class{constructor(e){this.id=si++,this.code=e,this.usedTimes=0}};function ui(e){return e===1030||e===37490||e===36285}function di(e,t,n,r,a,o){let s=new i,c=new ci,l=new Set,u=[],d=new Map,f=r.logarithmicDepthBuffer,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return l.add(e),e===0?`uv`:`uv${e}`}function h(i,a,s,u,d,h){let g=u.fog,_=d.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=p[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&se(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,ee,te,ne;if(x){let e=Rt[x];E=e.vertexShader,ee=e.fragmentShader}else{E=i.vertexShader,ee=i.fragmentShader;let e=c.getVertexShaderStage(i),t=c.getFragmentShaderStage(i);c.update(i,e,t),te=e.id,ne=t.id}let D=e.getRenderTarget(),re=e.state.buffers.depth.getReversed(),ie=d.isInstancedMesh===!0,O=d.isBatchedMesh===!0,k=!!i.map,A=!!i.matcap,j=!!b,M=j&&b.isPMREMTexture===!0,ae=!!i.aoMap,oe=!!i.lightMap,N=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,P=!!i.metalnessMap,de=!!i.roughnessMap,F=i.anisotropy>0,fe=i.clearcoat>0,I=i.diffuseRoughness>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=F&&!!i.anisotropyMap,ye=fe&&!!i.clearcoatMap,L=fe&&!!i.clearcoatNormalMap,be=fe&&!!i.clearcoatRoughnessMap,xe=I&&!!i.diffuseRoughnessMap,Se=he&&!!i.iridescenceMap,we=he&&!!i.iridescenceThicknessMap,Te=ge&&!!i.sheenColorMap,Ee=ge&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=_e&&!!i.transmissionMap,je=_e&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,Fe=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Le=e.toneMapping);let Re=M?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,ze={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:ee,defines:i.defines,customVertexShaderID:te,customFragmentShaderID:ne,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:O,batchingColor:O&&d._colorsTexture!==null,instancing:ie,instancingColor:ie&&d.instanceColor!==null,instancingMorph:ie&&d.morphTexture!==null,outputColorSpace:D===null?e.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ce.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:k,matcap:A,envMap:j,envMapMode:j&&b.mapping,envMapPMREM:M,envMapMaxLod:M?Re.length-1:null,envMapSize:M?Re[0].width:null,aoMap:ae,lightMap:oe,bumpMap:N,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&ui(i.normalMap.format),metalnessMap:P,roughnessMap:de,anisotropy:F,anisotropyMap:ve,clearcoat:fe,clearcoatMap:ye,clearcoatNormalMap:L,clearcoatRoughnessMap:be,diffuseRoughness:I,diffuseRoughnessMap:xe,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:we,sheen:ge,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:_e,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:Fe,combine:i.combine,mapUv:k&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:N&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:P&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:L&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:xe&&m(i.diffuseRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ce||F),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:d.isPoints===!0&&!!_.attributes.uv&&(k||Ne),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:re,skinning:d.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:a.sun.length,numDirLights:a.directional.length,numPointLights:a.point.length,numSpotLights:a.spot.length,numSpotLightMaps:a.spotLightMap.length,numRectAreaLights:a.rectArea.length,numHemiLights:a.hemi.length,numSunLightShadows:a.sunShadowMap.length,numDirLightShadows:a.directionalShadowMap.length,numPointLightShadows:a.pointShadowMap.length,numSpotLightShadows:a.spotShadowMap.length,numSpotLightShadowsWithMaps:a.numSpotLightShadowsWithMaps,numLightProbes:a.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&s.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:k&&i.map.isVideoTexture===!0&&Ce.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||O)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.retroreflection&&s.enable(24),t.diffuseRoughness&&s.enable(25),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),t.packedNormalMap&&s.enable(22),t.vertexNormals&&s.enable(23),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),t.numLightProbeGrids>0&&s.enable(22),t.hasPositionAttribute&&s.enable(23),e.push(s.mask)}function y(e){let t=p[e.type],n;if(t){let e=Rt[t];n=rt.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=d.get(n);return r===void 0?(r=new oi(e,n,t,a),u.push(r),d.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function S(e){c.remove(e)}function C(){c.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:u,dispose:C}}function fi(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function pi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function mi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function hi(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||pi),r.length>1&&r.sort(t||mi),i.length>1&&i.sort(t||mi)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function gi(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new hi,e.set(t,[i])):n>=r.length?(i=new hi,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function _i(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new D,color:new L};break;case`SpotLight`:n={position:new D,direction:new D,color:new L,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new D,color:new L,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new D,skyColor:new L,groundColor:new L};break;case`RectAreaLight`:n={color:new L,position:new D,halfWidth:new D,halfHeight:new D}}return e[t.id]=n,n}}}function vi(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var yi=0;function bi(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function xi(e){let t=new _i,n=vi(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new D);let i=new D,a=new y,o=new y;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(bi);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=yi++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Si(e){let t=new xi(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Ci(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Si(e),t.set(n,[a])):r>=i.length?(a=new Si(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var wi=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ti=`uniform sampler2D shadow_pass;
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
}`,Ei=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Di=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Oi=new y,ki=new D,Ai=new D;function ji(e,t,r){let i=new T,a=new l,c=new l,u=new Ie,d=new I,f=new ie,p={},m=r.maxTextureSize,h={0:1,1:0,2:2},g=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new l},radius:{value:4}},vertexShader:wi,fragmentShader:Ti}),v=g.clone();v.defines.HORIZONTAL_PASS=1;let y=new Ue;y.setAttribute(`position`,new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new F(y,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let C=this.type;this.render=function(t,r,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(se(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),h=e.state;h.setBlending(0),h.buffers.depth.getReversed()===!0?h.buffers.color.setClear(0,0,0,0):h.buffers.color.setClear(1,1,1,1),h.buffers.depth.setTest(!0),h.setScissorTest(!1);let g=C!==this.type;g&&r.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let d=0,f=t.length;d<f;d++){let f=t[d],p=f.shadow;if(p===void 0){se(`WebGLShadowMap:`,f,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let v=p.getFrameExtents();a.multiply(v),c.copy(p.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(c.x=Math.floor(m/v.x),a.x=c.x*v.x,p.mapSize.x=c.x),a.y>m&&(c.y=Math.floor(m/v.y),a.y=c.y*v.y,p.mapSize.y=c.y));let y=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=y,p.map===null||g===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(f.isPointLight){se(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Pe(a.x,a.y,{format:S,type:_,minFilter:N,magFilter:N,generateMipmaps:!1}),p.map.texture.name=f.name+`.shadowMap`,p.map.depthTexture=new o(a.x,a.y,n),p.map.depthTexture.name=f.name+`.shadowMapDepth`,p.map.depthTexture.format=ot,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=$e,p.map.depthTexture.magFilter=$e}else f.isPointLight?(p.map=new qt(a.x),p.map.depthTexture=new Oe(a.x,s)):(p.map=new Pe(a.x,a.y),p.map.depthTexture=new o(a.x,a.y,s)),p.map.depthTexture.name=f.name+`.shadowMap`,p.map.depthTexture.format=ot,this.type===1?(p.map.depthTexture.compareFunction=y?518:515,p.map.depthTexture.minFilter=N,p.map.depthTexture.magFilter=N):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=$e,p.map.depthTexture.magFilter=$e);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let b=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();f.isPointLight!==!0&&p.updateMatrices(f,l);let x=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<b;t++){let n=p.getCamera(t);if(f.isPointLight){let e=p.camera,n=p.matrix,r=f.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ki.setFromMatrixPosition(f.matrixWorld),e.position.copy(ki),Ai.copy(e.position),Ai.add(Ei[t]),e.up.copy(Di[t]),e.lookAt(Ai),e.updateMatrixWorld(),n.makeTranslation(-ki.x,-ki.y,-ki.z),Oi.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Oi,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);u.set(c.x*n.x,c.y*n.y,c.x*n.z,c.y*n.w),h.viewport(u)}i=p.getFrustum(t),ee(r,l,n,f,x,this.type)}p.isPointLightShadow!==!0&&this.type===3&&w(p,l),p.needsUpdate=!1}C=this.type,x.needsUpdate=!1,e.setRenderTarget(d,f,p)};function w(n,r){let i=t.update(b);g.defines.VSM_SAMPLES!==n.blurSamples&&(g.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Pe(a.x,a.y,{format:S,type:_}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),g.uniforms.shadow_pass.value=n.map.depthTexture,g.uniforms.resolution.value.set(n.map.width,n.map.height),g.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,g,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function E(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?f:d,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=p[e];r===void 0&&(r={},p[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,te)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?h[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function ee(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=E(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=E(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)ee(l[e],r,a,o,s,c)}function te(e){e.target.removeEventListener(`dispose`,te);for(let t in p){let n=p[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Mi(e,t){function n(){let t=!1,n=new Ie,r=null,i=new Ie(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=xe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new L(0,0,0),E=0,ee=!1,te=null,ne=null,D=null,re=null,ie=null,O=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,A=0,j=e.getParameter(e.VERSION);j.indexOf(`WebGL`)===-1?j.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=A>=1);let M=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),N=new Ie().fromArray(oe),ce=new Ie().fromArray(se);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),P(e.CULL_FACE),he(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function F(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function I(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==ee){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:v(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:v(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:v(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:v(`WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,_=t,ee=u}}else a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(pe[n],pe[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),_=t,ee=!1}function ge(t,n){t.side===2?de(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){te!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),te=t)}function ve(t){t===0?de(e.CULL_FACE):(P(e.CULL_FACE),t!==ne&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ne=t}function ye(t){t!==D&&(k&&e.lineWidth(t),D=t)}function be(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(re!==n||ie!==r)&&(re=n,ie=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Se(t){t?P(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+O-1),M!==t&&(e.activeTexture(t),M=t)}function we(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+O-1:M);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Te(){let t=ae[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){v(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){v(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){v(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){v(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){v(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){v(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){v(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){v(`WebGLState:`,e)}}function Pe(){try{e.texImage2D(...arguments)}catch(e){v(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){v(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function ze(t){N.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),N.copy(t))}function Be(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function Ve(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function R(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function He(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,ae={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new L(0,0,0),E=0,ee=!1,te=null,ne=null,D=null,re=null,ie=null,N.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:de,bindFramebuffer:F,drawBuffers:fe,useProgram:I,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:Pe,texImage3D:Fe,pixelStorei:Re,getParameter:Le,updateUBOMapping:Ve,uniformBlockBinding:R,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:ze,viewport:Be,reset:He}}function Ni(e,n,r,i,a,o,s){let c=n.has(`WEBGL_multisampled_render_to_texture`)?n.get(`WEBGL_multisampled_render_to_texture`):null,u=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),d=new l,f=new WeakMap,g=new Set,_,y=new WeakMap,b=new Set,x=new FinalizationRegistry(e=>b.delete(e)),S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):p(`canvas`)}function w(e,t,n){let r=1,i=R(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);_===void 0&&(_=C(n,a));let o=t?C(n,a):_;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),se(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&se(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function T(e){return e.generateMipmaps}function E(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function te(t,r,i,a,o,s=!1){if(t!==null){if(e[t]!==void 0)return e[t];se(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let c;a&&(c=n.get(`EXT_texture_norm16`),c||se(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?m:Ce.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&n.get(`EXT_color_buffer_float`),l}function ne(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,se(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function D(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=new WeakRef(e);i.get(e).__ref=t,b.add(t),x.register(e,t,t)}function ie(e){let t=i.get(e).__ref;t!==void 0&&(b.delete(t),x.unregister(t))}function O(e){M(e.target)}function k(e){ae(e.target)}function M(e){e.removeEventListener(`dispose`,O),ie(e),le(e),e.isVideoTexture&&f.delete(e),e.isHTMLTexture&&g.delete(e)}function ae(e){e.removeEventListener(`dispose`,k),ie(e),P(e)}function ce(){for(let e of b){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ae(t):M(t))}b.clear(),g.clear()}function le(e){let t=i.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=y.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ue(e),Object.keys(r).length===0&&y.delete(n)}i.remove(e)}function ue(t){let n=i.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,a=y.get(r);delete a[n.__cacheKey],s.memory.textures--}function P(t){let n=i.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let r=t.depthTexture;if(r&&r.renderTarget===t&&M(r),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=i.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),s.memory.textures--),i.remove(a[t])}i.remove(t)}let de=0;function F(){de=0}function fe(){return de}function I(e){de=e}function pe(){let e=de;return e>=a.maxTextures&&se(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+a.maxTextures),de+=1,e}function me(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function he(t,n){let a=i.get(t);if(t.isVideoTexture&&Be(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)se(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)se(`WebGLRenderer: Texture marked for update but image is incomplete`);else{De(a,t,n);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);r.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+n)}function ge(t,n){let a=i.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?De(a,t,n):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),r.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+n))}function _e(t,n){let a=i.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?De(a,t,n):r.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+n)}function ve(t,n){let a=i.get(t);t.version>0&&a.__version!==t.version?Oe(a,t,n):r.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+n)}let ye={[t]:e.REPEAT,[et]:e.CLAMP_TO_EDGE,[Se]:e.MIRRORED_REPEAT},L={[$e]:e.NEAREST,[Ye]:e.NEAREST_MIPMAP_NEAREST,[He]:e.NEAREST_MIPMAP_LINEAR,[N]:e.LINEAR,[oe]:e.LINEAR_MIPMAP_NEAREST,[h]:e.LINEAR_MIPMAP_LINEAR},be={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function xe(t,r){if(r.type===1015&&n.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&se(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,ye[r.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,ye[r.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,ye[r.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,L[r.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,L[r.minFilter]),r.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,be[r.compareFunction])),n.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&n.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||i.get(r).__currentAnisotropy){let o=n.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,a.getMaxAnisotropy())),i.get(r).__currentAnisotropy=r.anisotropy}}}function we(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,O),re(n));let i=n.source,a=y.get(i);a===void 0&&(a={},y.set(i,a));let o=me(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ue(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function Te(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ee(t,n,i,a){let o=t.updateRanges;if(o.length===0)r.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,i,a,n.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],r=o[e],i=t.start+t.count,a=Te(r.start,n.width,4),c=Te(t.start,n.width,4);r.start<=i+1&&a===c&&Te(r.start+r.count-1,n.width,4)===a?t.count=Math.max(t.count,r.start+r.count-t.start):(++s,o[s]=r)}o.length=s+1;let c=r.getParameter(e.UNPACK_ROW_LENGTH),l=r.getParameter(e.UNPACK_SKIP_PIXELS),u=r.getParameter(e.UNPACK_SKIP_ROWS);r.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%n.width,d=Math.floor(c/n.width),f=l;r.pixelStorei(e.UNPACK_SKIP_PIXELS,u),r.pixelStorei(e.UNPACK_SKIP_ROWS,d),r.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,n.data)}t.clearUpdateRanges(),r.pixelStorei(e.UNPACK_ROW_LENGTH,c),r.pixelStorei(e.UNPACK_SKIP_PIXELS,l),r.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function De(t,n,s){let c=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(c=e.TEXTURE_3D);let l=we(t,n),u=n.source;r.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=i.get(u);if(u.version!==d.__version||l===!0){if(r.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Ce.getPrimaries(Ce.workingColorSpace),i=n.colorSpace===``?null:Ce.getPrimaries(n.colorSpace),a=n.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;r.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),r.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),r.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}r.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=w(n.image,!1,a.maxTextureSize);t=Ve(n,t);let i=o.convert(n.format,n.colorSpace),f=o.convert(n.type),p=te(n.internalFormat,i,f,n.normalized,n.colorSpace,n.isVideoTexture);xe(c,n);let m,h=n.mipmaps,_=n.isVideoTexture!==!0,v=d.__version===void 0||l===!0,y=u.dataReady,b=D(n,t);if(n.isDepthTexture)p=ne(n.format===j,n.type),v&&(_?r.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):r.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,i,f,null));else if(n.isDataTexture){if(h.length>0){_&&v&&r.texStorage2D(e.TEXTURE_2D,b,p,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)m=h[t],_?y&&r.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,i,f,m.data):r.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,i,f,m.data);n.generateMipmaps=!1}else _?(v&&r.texStorage2D(e.TEXTURE_2D,b,p,t.width,t.height),y&&Ee(n,t,i,f)):r.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,i,f,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){_&&v&&r.texStorage3D(e.TEXTURE_2D_ARRAY,b,p,h[0].width,h[0].height,t.depth);for(let a=0,o=h.length;a<o;a++)if(m=h[a],n.format!==1023){if(i!==null){if(_){if(y){if(n.layerUpdates.size>0){let t=A(m.width,m.height,n.format,n.type);for(let o of n.layerUpdates){let n=m.data.subarray(o*t/m.data.BYTES_PER_ELEMENT,(o+1)*t/m.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,o,m.width,m.height,1,i,n)}}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,m.width,m.height,t.depth,i,m.data)}}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,a,p,m.width,m.height,t.depth,0,m.data,0,0)}else se(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?y&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,m.width,m.height,t.depth,i,f,m.data):r.texImage3D(e.TEXTURE_2D_ARRAY,a,p,m.width,m.height,t.depth,0,i,f,m.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{_&&v&&r.texStorage2D(e.TEXTURE_2D,b,p,h[0].width,h[0].height);for(let t=0,a=h.length;t<a;t++)m=h[t],n.format===1023?_?y&&r.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,i,f,m.data):r.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,i,f,m.data):i===null?se(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?y&&r.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,i,m.data):r.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(n.isDataArrayTexture){if(_){if(v&&r.texStorage3D(e.TEXTURE_2D_ARRAY,b,p,t.width,t.height,t.depth),y){if(n.layerUpdates.size>0){let a=A(t.width,t.height,n.format,n.type);for(let o of n.layerUpdates){let n=t.data.subarray(o*a/t.data.BYTES_PER_ELEMENT,(o+1)*a/t.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,i,f,n)}n.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,i,f,t.data)}}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,i,f,t.data)}else if(n.isData3DTexture)_?(v&&r.texStorage3D(e.TEXTURE_3D,b,p,t.width,t.height,t.depth),y&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,i,f,t.data)):r.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,i,f,t.data);else if(n.isFramebufferTexture){if(v){if(_)r.texStorage2D(e.TEXTURE_2D,b,p,t.width,t.height);else{let n=t.width,a=t.height;for(let t=0;t<b;t++)r.texImage2D(e.TEXTURE_2D,t,p,n,a,0,i,f,null),n>>=1,a>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),g.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of g)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(_&&v){let t=R(h[0]);r.texStorage2D(e.TEXTURE_2D,b,p,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)m=h[t],_?y&&r.texSubImage2D(e.TEXTURE_2D,t,0,0,i,f,m):r.texImage2D(e.TEXTURE_2D,t,p,i,f,m);n.generateMipmaps=!1}else if(_){if(v){let n=R(t);r.texStorage2D(e.TEXTURE_2D,b,p,n.width,n.height)}y&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,i,f,t)}else r.texImage2D(e.TEXTURE_2D,0,p,i,f,t);T(n)&&n.mipmapsAutoUpdate===!0&&E(c),d.__version=u.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Oe(t,n,s){if(n.image.length!==6)return;let c=we(t,n),l=n.source;r.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=i.get(l);if(l.version!==u.__version||c===!0){r.activeTexture(e.TEXTURE0+s);let t=Ce.getPrimaries(Ce.workingColorSpace),i=n.colorSpace===``?null:Ce.getPrimaries(n.colorSpace),d=n.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;r.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),r.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),r.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),r.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=n.isCompressedTexture||n.image[0].isCompressedTexture,p=n.image[0]&&n.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=w(n.image[e],!0,a.maxCubemapSize):m[e]=p?n.image[e].image:n.image[e],m[e]=Ve(n,m[e]);let h=m[0],g=o.convert(n.format,n.colorSpace),_=o.convert(n.type),v=te(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=D(n,h);xe(e.TEXTURE_CUBE_MAP,n);let C;if(n.isDepthTexture){if(v=ne(n.format===j,n.type),b){if(y)r.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(f){y&&b&&r.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let i=0;i<C.length;i++){let a=C[i];n.format===1023?y?x&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,_,a.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,g,_,a.data):g===null?se(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,a.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,a.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=R(m[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let n=0;n<C.length;n++){let i=C[n].image[t].image;y?x&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,i.width,i.height,g,_,i.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let n=0;n<C.length;n++){let i=C[n];y?x&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,i.image[t]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,i.image[t])}}}T(n)&&n.mipmapsAutoUpdate===!0&&E(e.TEXTURE_CUBE_MAP),u.__version=l.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function ke(t,n,a,s,l,u){let d=o.convert(a.format,a.colorSpace),f=o.convert(a.type),p=te(a.internalFormat,d,f,a.normalized,a.colorSpace),m=i.get(n),h=i.get(a);if(h.__renderTarget=n,!m.__hasExternalTextures){let t=Math.max(1,n.width>>u),i=Math.max(1,n.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?r.texImage3D(l,u,p,t,i,n.depth,0,d,f,null):r.texImage2D(l,u,p,t,i,0,d,f,null)}r.bindFramebuffer(e.FRAMEBUFFER,t),ze(n)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,h.__webglTexture,0,Re(n)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,h.__webglTexture,u),r.bindFramebuffer(e.FRAMEBUFFER,null)}function Ae(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=ne(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ze(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],s=o.convert(a.format,a.colorSpace),l=o.convert(a.type),u=te(a.internalFormat,s,l,a.normalized,a.colorSpace);ze(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function je(t,n,a){let o=n.isWebGLCubeRenderTarget===!0;if(r.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let s=i.get(n.depthTexture);s.__renderTarget=n;let l=o?n.depthTexture.image[0]:n.depthTexture.image;s.__webglTexture&&l.width===n.width&&l.height===n.height||(l.width=n.width,l.height=n.height,n.depthTexture.needsUpdate=!0),o?ve(n.depthTexture,0):he(n.depthTexture,0);let u=s.__webglTexture,d=Re(n),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)ze(n)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(n.depthTexture.format===1027)ze(n)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Me(t){let n=i.get(t),a=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)je(n.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?je(n.__webglFramebuffer[0],t,0):je(n.__webglFramebuffer,t,0)}else if(a){n.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(r.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[i]),n.__webglDepthbuffer[i]===void 0)n.__webglDepthbuffer[i]=e.createRenderbuffer(),Ae(n.__webglDepthbuffer[i],t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[i];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?r.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):r.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Ae(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}r.bindFramebuffer(e.FRAMEBUFFER,null)}function Ne(t,n,r){let a=i.get(t);n!==void 0&&ke(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&Me(t)}function Pe(t){let n=t.texture,a=i.get(t),c=i.get(n);t.addEventListener(`dispose`,k),re(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=n.version,s.memory.textures++),u){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let r=0;r<n.mipmaps.length;r++)a.__webglFramebuffer[t][r]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=i.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),s.memory.textures++)}if(t.samples>0&&ze(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=o.convert(r.format,r.colorSpace),s=o.convert(r.type),c=te(r.internalFormat,i,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Re(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),Ae(a.__webglDepthRenderbuffer,t,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){r.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),xe(e.TEXTURE_CUBE_MAP,n);for(let r=0;r<6;r++)if(n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)ke(a.__webglFramebuffer[r][i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else ke(a.__webglFramebuffer[r],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);T(n)?E(e.TEXTURE_CUBE_MAP):n.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),r.unbindTexture()}else if(d){for(let n=0,o=l.length;n<o;n++){let o=l[n],s=i.get(o),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(c,s.__webglTexture),xe(c,o),ke(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+n,c,0),T(o)&&E(c)}r.unbindTexture()}else{let i=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(i=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(i,c.__webglTexture),xe(i,n),n.mipmaps.length>0)for(let r=0;r<n.mipmaps.length;r++)ke(a.__webglFramebuffer[r],t,n,e.COLOR_ATTACHMENT0,i,r);else ke(a.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,i,0);T(n)?E(i):n.mipmaps.length>0&&e.texParameteri(i,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),r.unbindTexture()}t.depthBuffer&&Me(t)}function Fe(e){let t=e.textures;for(let n=0,a=t.length;n<a;n++){let a=t[n];if(T(a)&&a.mipmapsAutoUpdate===!0){let t=ee(e),n=i.get(a).__webglTexture;r.bindTexture(t,n),E(t),r.unbindTexture()}}}let Ie=[];function Le(t){if(t.samples>0){if(ze(t)===!1){let n=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=i.get(t),d=n.length>1;if(d)for(let t=0;t<n.length;t++)r.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?r.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):r.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let r=0;r<n.length;r++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[r]);let t=i.get(n[r]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),u===!0&&(Ie.length=0,Ie.push(e.COLOR_ATTACHMENT0+r),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Ie.push(c),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ie))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<n.length;t++){r.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let a=i.get(n[t]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&u){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Re(e){return Math.min(a.maxSamples,e.samples)}function ze(e){let t=i.get(e);return e.samples>0&&n.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Be(e){let t=s.render.frame;f.get(e)!==t&&(f.set(e,t),e.update())}function Ve(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ce.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&se(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):v(`WebGLTextures: Unsupported texture color space:`,n)),t}function R(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(d.width=e.naturalWidth||e.width,d.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(d.width=e.displayWidth,d.height=e.displayHeight):(d.width=e.width,d.height=e.height),d}this.allocateTextureUnit=pe,this.resetTextureUnits=F,this.getTextureUnits=fe,this.setTextureUnits=I,this.setTexture2D=he,this.setTexture2DArray=ge,this.setTexture3D=_e,this.setTextureCube=ve,this.rebindTextures=Ne,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=ze,this.dispose=ce}function Pi(e,t){function n(n,r=``){let i,a=Ce.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Fi=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ii=`
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

}`,Li=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new c(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Re({vertexShader:Fi,fragmentShader:Ii,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new F(new ye(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ri=class extends u{constructor(e,t){super();let n=this,r=null,i=1,a=null,u=`local-floor`,d=1,f=null,p=null,m=null,h=null,g=null,_=null,v=typeof XRWebGLBinding<`u`,y=new Li,b={},x=t.getContextAttributes(),S=null,C=null,w=[],T=[],ee=new l,te=null,ne=null,D=new Ge;D.viewport=new Ie;let re=new Ge;re.viewport=new Ie;let ie=[D,re],O=new R,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=w[e];return t===void 0&&(t=new E,w[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=w[e];return t===void 0&&(t=new E,w[e]=t),t.getGripSpace()},this.getHand=function(e){let t=w[e];return t===void 0&&(t=new E,w[e]=t),t.getHandSpace()};function M(e){let t=T.indexOf(e.inputSource);if(t===-1)return;let n=w[t];n!==void 0&&(n.update(e.inputSource,e.frame,f||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,M),r.removeEventListener(`selectstart`,M),r.removeEventListener(`selectend`,M),r.removeEventListener(`squeeze`,M),r.removeEventListener(`squeezestart`,M),r.removeEventListener(`squeezeend`,M),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<w.length;e++){let t=T[e];t!==null&&(T[e]=null,w[e].disconnect(t))}k=null,A=null,y.reset();for(let e in b)delete b[e];if(e.setRenderTarget(S),g=null,h=null,m=null,r=null,C=null,P.stop(),n.isPresenting=!1,e.setPixelRatio(te),e.setSize(ee.width,ee.height,!1),ne!==null){let e=ne.camera;e.fov=ne.fov,e.zoom=ne.zoom,e.updateProjectionMatrix(),ne=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&se(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){u=e,n.isPresenting===!0&&se(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function(e){f=e},this.getBaseLayer=function(){return h===null?g:h},this.getBinding=function(){return m===null&&v&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(c){if(r=c,r!==null){if(S=e.getRenderTarget(),r.addEventListener(`select`,M),r.addEventListener(`selectstart`,M),r.addEventListener(`selectend`,M),r.addEventListener(`squeeze`,M),r.addEventListener(`squeezestart`,M),r.addEventListener(`squeezeend`,M),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),x.xrCompatible!==!0&&await t.makeXRCompatible(),te=e.getPixelRatio(),e.getSize(ee),v&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,c=null;x.depth&&(c=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=x.stencil?j:ot,a=x.stencil?st:s);let l={colorFormat:t.RGBA8,depthFormat:c,scaleFactor:i};m=this.getBinding(),h=m.createProjectionLayer(l),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),C=new Pe(h.textureWidth,h.textureHeight,{format:Ae,type:lt,depthTexture:new o(h.textureWidth,h.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let n={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:i};g=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),C=new Pe(g.framebufferWidth,g.framebufferHeight,{format:Ae,type:lt,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),f=null,a=await r.requestReferenceSpace(u),P.setContext(r),P.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=T.indexOf(n);r>=0&&(T[r]=null,w[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=T.indexOf(n);if(r===-1){for(let e=0;e<w.length;e++)if(e>=T.length){T.push(n),r=e;break}else if(T[e]===null){T[e]=n,r=e;break}if(r===-1)break}let i=w[r];i&&i.connect(n)}}function N(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;y.texture!==null&&(y.depthNear>0&&(t=y.depthNear),y.depthFar>0&&(n=y.depthFar)),O.near=re.near=D.near=t,O.far=re.far=D.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,D.layers.mask=O.layers.mask&-5,re.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;N(O,i);for(let e=0;e<a.length;e++)N(a[e],i);O.projectionMatrix.copy(D.projectionMatrix),O.projectionMatrixInverse.copy(D.projectionMatrixInverse),ne===null&&e.isPerspectiveCamera&&(ne={camera:e,fov:e.fov,zoom:e.zoom}),ce(e,O,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=be*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(h!==null||g!==null)return d},this.setFoveation=function(e){d=e,h!==null&&(h.fixedFoveation=e),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=e)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(O)},this.getCameraTexture=function(e){return b[e]};let le=null;function ue(t,i){if(p=i.getViewerPose(f||a),_=i,p!==null){let t=p.views;g!==null&&(e.setRenderTargetFramebuffer(C,g.framebuffer),e.setRenderTarget(C));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(g!==null)a=g.getViewport(r);else{let t=m.getViewSubImage(h,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(C,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(C))}let o=ie[n];o===void 0&&(o=new Ge,o.layers.enable(n),o.viewport=new Ie,ie[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&v){m=n.getBinding();let e=m.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&y.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&v){e.state.unbindTexture(),m=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=b[n];e||(e=new c,b[n]=e);let t=m.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<w.length;e++){let t=T[e],n=w[e];t!==null&&n!==void 0&&n.update(t,i,f||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),_=null}let P=new It;P.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},zi=new y,Bi=new B;Bi.set(-1,0,0,0,1,0,0,0,1);function Vi(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ut(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(zi.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Bi),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Hi(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?se(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):se(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Ui=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null;function Gi(){return Wi===null&&(Wi=new _e(Ui,16,16,S,_),Wi.name=`DFG_LUT`,Wi.minFilter=N,Wi.magFilter=N,Wi.wrapS=et,Wi.wrapT=et,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}var Ki=class{constructor(e={}){let{canvas:t=re(),context:n=null,depth:i=!0,stencil:o=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:p=`default`,failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:b=!1,outputBufferType:x=lt}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);S=n.getContextAttributes().alpha}else S=c;let C=x,w=new Set([De,qe,O]),E=new Set([lt,s,d,st,at,ae]),te=new Uint32Array(4),ne=new Int32Array(4),ie={textures:[],min:[],max:[],resolution:[]},k=null,A=null,j=[],M=[],oe=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,ce=!1,le=null,ue=null,P=null,de=null;this._outputColorSpace=We;let F=0,fe=0,I=null,pe=-1,me=null,he=new Ie,ge=new Ie,_e=null,ve=new L(0),ye=0,be=t.width,xe=t.height,Se=1,we=null,Te=null,Ee=new Ie(0,0,be,xe),Oe=new Ie(0,0,be,xe),ke=!1,Ae=new T,je=new ee,Me=!1,Ne=!1,Fe=new y,Le=new D,Re=new Ie,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function Ve(){return I===null?Se:1}let R=n;function He(e,n){return t.getContext(e,n)}let Ue,Ge,z,Ke,B,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,ot,ct,ut,dt,ft,pt,mt;try{let e={alpha:!0,depth:i,stencil:o,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:m};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,_t,!1),t.addEventListener(`webglcontextrestored`,vt,!1),t.addEventListener(`webglcontextcreationerror`,yt,!1),R===null){let t=`webgl2`;if(R=He(t,e),R===null)throw He(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ht()}catch(e){throw t.removeEventListener(`webglcontextlost`,_t,!1),t.removeEventListener(`webglcontextrestored`,vt,!1),t.removeEventListener(`webglcontextcreationerror`,yt,!1),v(`WebGLRenderer: `+e.message),e}function ht(){Ue=new fn(R),Ue.init(),ft=new Pi(R,Ue),Ge=new Gt(R,Ue,e,ft),z=new Mi(R,Ue),Ge.reversedDepthBuffer&&b&&z.buffers.depth.setReversed(!0),ue=R.createFramebuffer(),P=R.createFramebuffer(),de=R.createFramebuffer(),Ke=new hn(R),B=new fi,Je=new Ni(R,Ue,z,B,Ge,ft,Ke),Ye=new dn(N),Xe=new Lt(R),pt=new Ut(R,Xe),Ze=new pn(R,Xe,Ke,pt),Qe=new _n(R,Ze,Xe,pt,Ke),ct=new gn(R,Ge,Je),rt=new Kt(B),$e=new di(N,Ye,Ue,Ge,pt,rt),et=new Vi(N,B),tt=new gi,nt=new Ci(Ue),ot=new Ht(N,Ye,z,Qe,S,u),it=new ji(N,Qe,Ge),mt=new Hi(R,Ke,Ge,z),ut=new Wt(R,Ue,Ke),dt=new mn(R,Ue,Ke),Ke.programs=$e.programs,N.capabilities=Ge,N.extensions=Ue,N.properties=B,N.renderLists=tt,N.shadowMap=it,N.state=z,N.info=Ke}C!==1009&&(oe=new yn(C,t.width,t.height,l,i,o));let gt=new Ri(N,R);this.xr=gt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=Ue.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ue.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(e){e!==void 0&&(Se=e,this.setSize(be,xe,!1))},this.getSize=function(e){return e.set(be,xe)},this.setSize=function(e,n,r=!0){gt.isPresenting?se(`WebGLRenderer: Can't change size while VR device is presenting.`):(be=e,xe=n,t.width=Math.floor(e*Se),t.height=Math.floor(n*Se),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),oe!==null&&oe.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(be*Se,xe*Se).floor()},this.setDrawingBufferSize=function(e,n,r){be=e,xe=n,Se=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(C===1009)v(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){se(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}oe.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(he)},this.getViewport=function(e){return e.copy(Ee)},this.setViewport=function(e,t,n,r){e.isVector4?Ee.set(e.x,e.y,e.z,e.w):Ee.set(e,t,n,r),z.viewport(he.copy(Ee).multiplyScalar(Ve()).round())},this.getScissor=function(e){return e.copy(Oe)},this.setScissor=function(e,t,n,r){e.isVector4?Oe.set(e.x,e.y,e.z,e.w):Oe.set(e,t,n,r),z.scissor(ge.copy(Oe).multiplyScalar(Ve()).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(e){z.setScissorTest(ke=e)},this.setOpaqueSort=function(e){we=e},this.setTransparentSort=function(e){Te=e},this.getClearColor=function(e){return e.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(I!==null){let t=I.texture.format;e=w.has(t)}if(e){let e=I.texture.type,t=E.has(e),n=ot.getClearColor(),r=ot.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(te[0]=i,te[1]=a,te[2]=o,te[3]=r,R.clearBufferuiv(R.COLOR,0,te)):(ne[0]=i,ne[1]=a,ne[2]=o,ne[3]=r,R.clearBufferiv(R.COLOR,0,ne))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),le=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,_t,!1),t.removeEventListener(`webglcontextrestored`,vt,!1),t.removeEventListener(`webglcontextcreationerror`,yt,!1),ot.dispose(),tt.dispose(),nt.dispose(),Je.dispose(),B.dispose(),Ye.dispose(),Qe.dispose(),Ze.dispose(),pt.dispose(),mt.dispose(),$e.dispose(),gt.dispose(),gt.removeEventListener(`sessionstart`,Tt),gt.removeEventListener(`sessionend`,Et),H.stop()};function _t(e){e.preventDefault(),a(`WebGLRenderer: Context Lost.`),ce=!0}function vt(){a(`WebGLRenderer: Context Restored.`),ce=!1;let e=Ke.autoReset,t=it.enabled,n=it.autoUpdate,r=it.needsUpdate,i=it.type;ht(),Ke.autoReset=e,it.enabled=t,it.autoUpdate=n,it.needsUpdate=r,it.type=i}function yt(e){v(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function bt(e){let t=e.target;t.removeEventListener(`dispose`,bt),xt(t)}function xt(e){St(e),B.remove(e)}function St(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){$e.releaseProgram(e)}),e.isShaderMaterial&&$e.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ze);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ft(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;pt.setup(i,r,s,n,c);let h,g=ut;if(c!==null&&(h=Xe.get(c),g=dt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*Ve()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*Ve()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(Ue.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Xe.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ct(e,t,n,r){le!==null&&e.isNodeMaterial&&le.setObject(r,e),Me===!0&&rt.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Mt(e,t,r),e.side=0,e.needsUpdate=!0,Mt(e,t,r),e.side=2):Mt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),le!==null&&le.renderStart(e,t,n),A=nt.get(n),A.init(t),M.push(A),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),A.setupLights(),le!==null&&le.updateLights(A.state.lightsArray),Ne=this.localClippingEnabled,Me=rt.init(this.clippingPlanes,Ne),Me===!0&&rt.setGlobalState(this.clippingPlanes,t),le!==null&&it.render(A.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Ct(o,n,t,e),r.add(o)}else Ct(i,n,t,e),r.add(i)}}),A=M.pop(),le!==null&&le.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=B.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ue.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let wt=null;function V(e){wt&&wt(e)}function Tt(){H.stop()}function Et(){H.start()}let H=new It;H.setAnimationLoop(V),typeof self<`u`&&H.setContext(self),this.setAnimationLoop=function(e){wt=e,gt.setAnimationLoop(e),e===null?H.stop():H.start()},gt.addEventListener(`sessionstart`,Tt),gt.addEventListener(`sessionend`,Et),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){v(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ce===!0)return;le!==null&&le.renderStart(e,t);let n=gt.enabled===!0&&gt.isPresenting===!0,i=oe!==null&&(I===null||n)&&oe.begin(N,I);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(oe===null||oe.isCompositing()===!1)&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(t),t=gt.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,I),A=nt.get(e,M.length),A.init(t),A.state.textureUnits=Je.getTextureUnits(),M.push(A),Fe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?je.setFromArrayCamera(t):Ae.setFromProjectionMatrix(Fe,r,t.reversedDepth),Ne=this.localClippingEnabled,Me=rt.init(this.clippingPlanes,Ne),k=tt.get(e,j.length),k.init(),j.push(k),this.info.render.frame++,gt.enabled===!0&&gt.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&Dt(e,t,-1/0,N.sortObjects)}Dt(e,t,0,N.sortObjects),k.finish(),le!==null&&le.updateLights(A.state.lightsArray),N.sortObjects===!0&&k.sort(we,Te),Be=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,Be&&ot.addToRenderList(k,e),this.info.autoReset===!0&&this.info.reset(),Me===!0&&rt.beginShadows();let a=A.state.shadowsArray;if(it.render(a,e,t),Me===!0&&rt.endShadows(),(i&&oe.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(A.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];kt(n,r,e,a)}Be&&ot.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ot(k,e,n,n.viewport)}}else r.length>0&&kt(n,r,e,t),Be&&ot.render(e),Ot(k,e,t)}I!==null&&fe===0&&(Je.updateMultisampleRenderTarget(I),Je.updateRenderTargetMipmap(I)),i&&oe.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),pt.resetDefaultState(),pe=-1,me=null,M.pop(),M.length>0?(A=M[M.length-1],Je.setTextureUnits(A.state.textureUnits),Me===!0&&rt.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,j.pop(),k=j.length>0?j[j.length-1]:null,le!==null&&le.renderEnd()};function Dt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)A.pushLight(e),e.castShadow&&A.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?je:Ae;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Re.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Fe);let i=Qe.update(e),a=e.material;a.visible&&k.push(e,i,a,n,Re.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?je:Ae;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Qe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Re.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Re.copy(e.boundingSphere.center)),Re.applyMatrix4(e.matrixWorld).applyMatrix4(Fe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,Re.z,s,t)}}else a.visible&&k.push(e,i,a,n,Re.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Dt(i[e],t,n,r)}function Ot(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;A.setupLightsView(n),Me===!0&&rt.setGlobalState(N.clippingPlanes,n),r&&z.viewport(he.copy(r)),i.length>0&&U(i,t,n),a.length>0&&U(a,t,n),o.length>0&&U(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function kt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[r.id]===void 0){let e=Ue.has(`EXT_color_buffer_half_float`)||Ue.has(`EXT_color_buffer_float`);A.state.transmissionRenderTarget[r.id]=new Pe(1,1,{generateMipmaps:!0,type:e?_:lt,minFilter:h,samples:Math.max(4,Ge.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}let i=A.state.transmissionRenderTarget[r.id],a=r.viewport||he;i.setSize(a.z*N.transmissionResolutionScale,a.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),c=N.getActiveCubeFace(),l=N.getActiveMipmapLevel();N.setRenderTarget(i),N.getClearColor(ve),ye=N.getClearAlpha(),ye<1&&N.setClearColor(16777215,.5),N.clear(),Be&&ot.render(n);let u=N.toneMapping;N.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),A.setupLightsView(r),Me===!0&&rt.setGlobalState(N.clippingPlanes,r),U(e,n,r),Je.updateMultisampleRenderTarget(i),Je.updateRenderTargetMipmap(i),Ue.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,At(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Je.updateMultisampleRenderTarget(i),Je.updateRenderTargetMipmap(i))}N.setRenderTarget(s,c,l),N.setClearColor(ve,ye),d!==void 0&&(r.viewport=d),N.toneMapping=u}function U(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&At(o,t,n,s,l,c)}}function At(e,t,n,r,i,a){le!==null&&i.isNodeMaterial&&le.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function jt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Mt(e,t,n){t.isScene!==!0&&(t=ze);let r=B.get(e),i=A.state.lights,a=A.state.shadowsArray,o=i.state.version,s=$e.getParameters(e,i.state,a,t,n,A.state.lightProbeGridArray),c=$e.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ye.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,bt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Pt(e,s),d}else s.uniforms=$e.getUniforms(e),le!==null&&e.isNodeMaterial&&le.build(e,n,s),e.onBeforeCompile(s,N),d=$e.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=rt.uniform),Pt(e,s),r.needsLights=K(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=jt(A.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Nt(e,t,n,r,i){let a=B.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Mt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function W(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Or.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Pt(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ft(e,t,n,r,i){t.isScene!==!0&&(t=ze),Je.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=I===null?N.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ce.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ye.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=B.get(r),y=A.state.lights;if(Me===!0&&(Ne===!0||e!==me)){let t=e===me&&r.id===pe;rt.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==rt.numPlanes||v.numIntersection!==rt.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===jt(A.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Nt(r,t,i,s,h):Mt(r,t,i),le&&r.isNodeMaterial&&le.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),ee=v.uniforms;if(z.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==pe&&(pe=r.id,w=!0),C||me!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(R,`projectionMatrix`,e.projectionMatrix),E.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(R,Le.setFromMatrixPosition(e.matrixWorld)),Ge.logarithmicDepthBuffer&&E.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),me!==e&&(me=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(R,`sunShadowMap`,y.state.sunShadowMap,Je),y.state.directionalShadowMap.length>0&&E.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,Je),y.state.spotShadowMap.length>0&&E.setValue(R,`spotShadowMap`,y.state.spotShadowMap,Je),y.state.pointShadowMap.length>0&&E.setValue(R,`pointShadowMap`,y.state.pointShadowMap,Je)),i.isSkinnedMesh){E.setOptional(R,i,`bindMatrix`),E.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(R,`boneTexture`,e.boneTexture,Je))}i.isBatchedMesh&&(E.setOptional(R,i,`batchingTexture`),E.setValue(R,`batchingTexture`,i._matricesTexture,Je),E.setOptional(R,i,`batchingIdTexture`),E.setValue(R,`batchingIdTexture`,i._indirectTexture,Je),E.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(R,`batchingColorTexture`,i._colorsTexture,Je));let te=n.morphAttributes;if((te.position!==void 0||te.normal!==void 0||te.color!==void 0)&&ct.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(ee.envMapIntensity.value=t.environmentIntensity),ee.dfgLUT!==void 0&&(ee.dfgLUT.value=Gi()),w){if(E.setValue(R,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&G(ee,T),a&&r.fog===!0&&et.refreshFogUniforms(ee,a),et.refreshMaterialUniforms(ee,r,Se,xe,A.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=ie,t=0;for(let n of A.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;ee.probesSH.value=e.textures,ee.probesMin.value=e.min,ee.probesMax.value=e.max,ee.probesResolution.value=e.resolution}Or.upload(R,W(v),ee,Je)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Or.upload(R,W(v),ee,Je),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(R,`center`,i.center),E.setValue(R,`modelViewMatrix`,i.modelViewMatrix),E.setValue(R,`normalMatrix`,i.normalMatrix),E.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];mt.update(n,S),mt.bind(n,S)}}return S}function G(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function K(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return fe},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){I=e,F=t,fe=n;let r=null,i=!1,a=!1;if(e){let o=B.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),he.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest,z.viewport(he),z.scissor(ge),z.setScissorTest(_e),pe=-1;return}if(o.__webglFramebuffer===void 0)Je.setupRenderTarget(e);else if(o.__hasExternalTextures)Je.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Je.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Je.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,he.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest}else he.copy(Ee).multiplyScalar(Se).floor(),ge.copy(Oe).multiplyScalar(Se).floor(),_e=ke;if(n!==0&&(r=ue),z.bindFramebuffer(R.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(he),z.scissor(ge),z.setScissorTest(_e),i){let r=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=B.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}pe=-1};function Rt(e){let t=B.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ge.textureFormatReadable(e.format),t.__typeReadable=Ge.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){v(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){z.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=Rt(o);if(u.__formatReadable===!1){v(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){v(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,ft.convert(c),ft.convert(l),a)}finally{let e=I===null?null:B.get(I).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=Rt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,ft.convert(l),ft.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=I===null?null:B.get(I).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await g(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Je.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ft.convert(t.format),_=ft.convert(t.type),v;t.isData3DTexture?(Je.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Je.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(Je.setTexture2D(t,0),v=R.TEXTURE_2D),z.activeTexture(R.TEXTURE0),z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(R.UNPACK_ROW_LENGTH),b=z.getParameter(R.UNPACK_IMAGE_HEIGHT),x=z.getParameter(R.UNPACK_SKIP_PIXELS),S=z.getParameter(R.UNPACK_SKIP_ROWS),C=z.getParameter(R.UNPACK_SKIP_IMAGES);z.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(R.UNPACK_SKIP_PIXELS,l),z.pixelStorei(R.UNPACK_SKIP_ROWS,u),z.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(R.READ_FRAMEBUFFER,P),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,de);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.COLOR_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(R.UNPACK_ROW_LENGTH,y),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(R.UNPACK_SKIP_PIXELS,x),z.pixelStorei(R.UNPACK_SKIP_ROWS,S),z.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&R.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&Je.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Je.setTextureCube(e,0):e.isData3DTexture?Je.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Je.setTexture2DArray(e,0):Je.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){F=0,fe=0,I=null,z.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return r}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ce._getUnpackColorSpace()}},qi=24,Ji=[11,8,5,2],Yi=.26;function Xi(e,t){return e.userData.harborGlow=t,e}function Zi(){let{canvas:e,context:t}=Dt(qi,qi);for(let e of Ji){t.fillStyle=`rgba(255,255,255,0.20)`;let n=qi/2;for(let r=-e;r<=e;r++){let i=Math.floor(Math.sqrt(e*e-r*r));t.fillRect(n-i,n+r,i*2+1,1)}}return Mt(e)}function Qi(e){let t=kt.beam,n=new f,r=new F(new z(t.radius,t.length,t.facets,1,!0),new P({color:t.color,transparent:!0,depthWrite:!1,side:2,blending:2}));return r.position.x=t.length/2,r.rotation.z=Math.PI/2,n.position.set(...t.position),n.add(r),e.add(n),(e,i,a)=>{n.visible=a.beam&&(e>0||a.pulse>0),n.rotation.y=i*t.turnSpeed,r.material.opacity=t.opacity*Math.min(1,e+a.pulse)*(1+a.pulse)}}function $i(t){let n=[],r=[];return t.updateMatrixWorld(!0),t.traverse(t=>{if(!(t instanceof F)||!t.userData.harborGlow)return;let i=t.userData.harborGlow,a=kt.glow[i];if(t.material instanceof e&&(t.material=t.material.clone(),t.material.emissive.set(a.color),n.push({kind:i,material:t.material})),t.userData.movingGlow)return;let o=t.userData.glowPoints;for(let e of o??[t.getWorldPosition(new D)])r.push({kind:i,point:e})}),{surfaces:n,anchors:r}}function ea(e,t){let n=Zi(),{surfaces:r,anchors:i}=$i(e),a=t?kt.simplifiedHaloLimit:kt.haloLimit;i.sort((e,t)=>kt.glow[t.kind].size-kt.glow[e.kind].size);let o=i.slice(0,a).map(({kind:t,point:r})=>{let i=kt.glow[t],a=new Ke(new Ve({map:n,color:i.color,transparent:!0,depthWrite:!1,blending:2}));return a.position.copy(r),a.scale.setScalar(i.size),a.visible=!1,e.add(a),{kind:t,halo:a}}),s=Qi(e),c=-1,l=!1;return(e,t,n)=>{if(s(e,t,{beam:n.beam,pulse:n.pulse??0}),e!==c||l!==n.halos){c=e,l=n.halos;for(let{kind:t,material:n}of r){let r=kt.glow[t];n.emissiveIntensity=x.lerp(r.day,r.night,e)}for(let{kind:t,halo:r}of o){let i=kt.glow[t],a=x.lerp(i.day,i.night,e);r.visible=n.halos&&e>0,r.material.opacity=a*e*Yi}}}}function ta(){let e=Tt(),t=new je;function n(n,r,i){let a=new F(t,e(...i));return a.position.set(...n),a.scale.set(...r),a}function r(t,n,r){let i=new F(new pe(...n),e(...r));return i.position.set(...t),i}function i(e,t,r){let i=new D(...e[0]),a=new D(...e[1]),o=a.clone().sub(i),s=n(i.lerp(a,.5).toArray(),[t,o.length(),t],r);return s.quaternion.setFromUnitVectors(Me.DEFAULT_UP,o.normalize()),s}return{box:n,cylinder:r,beam:i,surface:e}}function na(e,t,n){let r=new f,[i,a,o]=n,{box:s,surface:c}=e,l=i*.31;r.add(s([0,a/2,0],n,[t.wall,`brick`]));let u=new tt;u.moveTo(-i/2,0),u.lineTo(i/2,0),u.lineTo(0,l);let d=new F(new ne(u,{depth:o,bevelEnabled:!1}),c(t.wall));d.position.set(0,a,-o/2),r.add(d);for(let e of[-1,1]){let n=Math.atan2(l,i/2),c=s([e*i*.25,a+l/2,0],[Math.hypot(i/2,l)+.42,.16,o+.48],[t.roof,`roof`]);c.rotation.z=-e*n,r.add(c);let u=e*i*.29,d=-o/2-.035;r.add(s([u,a*.62,d],[.79,.82,.11],[t.trim]));for(let e of[-.15,.15])r.add(Xi(s([u+e,a*.62,d-.065],[.24,.58,.035],[`#e6b879`]),`window`))}return r.add(s([0,a*.29,-o/2],[.76,a*.58,.14],[`#455854`,`wood`])),r.add(s([i*.22,a+l*.75,o*.25],[.4,1.15,.45],[`#835e58`,`brick`])),r}function ra(e,t,n){let{box:r,beam:i,cylinder:a}=t,o=[`#a74338`,`roof`],s=[`#544b49`];e.add(a([0,n,0],[U.outerRadius,1.04,.25,12],o)),e.add(Xi(a([0,n+.36,0],[.61,.64,.57,12],[`#fff1ad`]),`lighthouse`)),e.add(a([0,n+.71,0],[.86,.86,.15,12],o)),e.add(a([0,n+1.04,0],[.21,.83,.53,12],o)),e.add(a([0,n+1.34,0],[.06,.19,.1,10],o)),e.add(r([0,n+1.47,0],[.077,.23,.077],s));for(let t=0;t<12;t++){let a=t*Math.PI/6,o=a+Math.PI/6,c=Math.cos(a),l=Math.sin(a);e.add(r([c*.62,n+.4,l*.62],[.07,.62,.07],s));let u=U.outerRadius-.067;e.add(r([c*u,n+.37,l*u],[.06,.54,.06],s));for(let t of[n+.36,n+.62])e.add(i([[c*u,t,l*u],[Math.cos(o)*u,t,Math.sin(o)*u]],.045,s))}}function ia(e){let t=new f,{box:n,cylinder:r}=e,i=1.7;t.add(r([0,.13,0],[1.46,1.55,.26,12],[`#ada191`,`brick`]));for(let e=0;e<5;e++){let a=1.23-e*.092,o=e%2==0?`#eee4cc`:`#ba5147`,s=.24+(e+.5)*i;t.add(r([0,s,0],[a-.092,a,i,12],[o,`brick`])),e>0&&(t.add(n([0,s+.22,a-.004],[.39,.59,.1],[`#886e65`])),t.add(n([0,s+.22,a+.057],[.25,.45,.05],[`#f0c583`])))}return t.add(n([0,.85,1.18],[.65,1.36,.17],[`#52605a`,`wood`])),ra(t,e,8.84),t}function aa(e,t){let n=new tt;n.moveTo(-2.05,-.64),n.lineTo(.85,-.78),n.lineTo(1.65,-.55),n.lineTo(2.48,0),n.lineTo(1.65,.55),n.lineTo(.85,.78),n.lineTo(-2.05,.64),n.closePath();let r=new f,i=[{y:.08,height:.15,scale:.86,paint:[`#774942`,`wood`]},{y:.23,height:.31,scale:.96,paint:[`#e5d9bd`,`wood`]},{y:.54,height:.12,scale:1,paint:[t,`wood`]}];for(let{y:t,height:a,scale:o,paint:s}of i){let i=new F(new ne(n,{depth:a,bevelEnabled:!1}),e.surface(s[0],s[1]));i.rotation.x=-Math.PI/2,i.position.y=t,i.scale.set(o,o,1),r.add(i)}return r}function oa(e,t){let n=aa(e,t),{box:r,beam:i,cylinder:a}=e;n.add(r([-.53,1.01,0],[1.02,.83,1.02],[`#f3dfc1`,`wood`])),n.add(r([-.53,1.48,0],[1.2,.15,1.22],[t]));for(let e of[-1,1]){n.add(r([-.49,1.18,e*.53],[.7,.32,.045],[`#587981`])),n.add(r([-.48,1.18,e*.56],[.055,.35,.035],[`#ecd8b6`]));let t=a([-1.18,.43,e*.72],[.19,.19,.12,10],[`#465456`]);t.rotation.x=Math.PI/2,n.add(t)}return n.add(r([0,1.17,0],[.05,.32,.67],[`#688890`])),n.add(i([[.78,.66,0],[.51,2.56,0]],.074,[`#8c6b51`])),n.add(r([.37,2.43,0],[.31,.19,.045],[`#c97155`])),n.add(r([1.38,.77,.17],[.48,.24,.45],[`#c08a58`,`wood`])),n.add(a([.85,.74,-.28],[.24,.3,.16,8],[`#668c76`,`grass`])),n}function sa(e){let t=new f,{box:n,cylinder:r}=e,i=[`#e9e4d7`,`wood`],a=[`#3f5a68`],o=[`#c4a882`,`wood`],s=[`#b59a74`,`wood`],c=[`#8a8f8a`],l=[`#455a63`];t.add(n([-.2,.38,0],[4.6,.64,2.2],i)),t.add(n([2.6,.4,0],[1,.56,1.2],i)),t.add(n([-2.95,.4,0],[.9,.6,1.9],i)),t.add(n([-.2,.52,0],[4.64,.12,2.24],a)),t.add(n([2,.74,0],[2,.08,2.1],o)),t.add(n([-2.65,.74,0],[1.5,.08,2.1],o));for(let e of[-1,1])t.add(n([-.45,.74,e*.98],[2.9,.08,.24],o));t.add(n([-.45,.52,0],[2.9,.08,1.72],s));for(let e of[-1.9,1])t.add(n([e,.63,0],[.12,.3,1.72],i));t.add(n([.75,.85,0],[.36,.58,1.1],i)),t.add(n([.95,1,0],[.06,.36,1.1],l)),t.add(n([-2.6,1.16,0],[1.34,.78,1.86],i)),t.add(n([-2.6,1.24,0],[1.36,.3,1.9],l)),t.add(n([-2.6,1.58,0],[1.5,.08,1.96],i)),t.add(r([-2.6,1.95,0],[.05,.07,.68,6],c)),t.add(n([-2.6,2.3,0],[.06,.06,.6],c));for(let e of[-1,1]){t.add(n([2,1,e*.98],[2,.05,.05],c));for(let r of[1.2,2.6])t.add(n([r,.9,e*.98],[.05,.24,.05],c))}return t.add(n([-3.6,.3,0],[.3,.2,1.6],o)),t.add(n([-2.6,1.24,.94],[.26,.26,.06],[`#c0553f`])),t}function ca(e){let{box:t}=e,n=new f;return n.add(t([0,0,0],[.27,.16,.39],[`#fff0d5`])),n.add(t([0,.11,-.15],[.15,.15,.15],[`#fff7e2`])),n.add(t([0,.08,-.25],[.08,.055,.13],[`#d89c4f`])),n.add(t([.079,.13,-.17],[.025,.028,.028],[`#354a52`])),{bird:n,wings:[-1,1].map(e=>{let r=new f;return r.add(t([e*.205,.03,.018],[.28,.065,.16],[`#aab9bc`])),r.add(t([e*.39,.03,.074],[.16,.052,.1],[`#6c7f8a`])),n.add(r),r})}}var la={count:8,sides:13,detailedSides:28,seed:6322,positions:[[43,-18,8,4],[96,-6,17,10],[119,21,20,12],[58,47,13,6],[11,84,17,8],[-81,41,23,14],[-94,-30,19,11],[-5,-97,18,10]],routes:[[57,-34,68,-27],[64,17,81,23],[52,-61,79,-66],[40,57,51,62]]};function ua(e,t,n){return la.positions.some(([r,i,a])=>{let o=a*.93+n,s=a*.64+n;return((e-r)/o)**2+((t-i)/s)**2<1})}function da(e,t,n,r){let[i,a,o,s]=t,c=r?la.detailedSides:la.sides,l=Et(la.seed+n),u=Array.from({length:c},()=>.72+l()*.36),d=[[-.17,1,`#b1ae9d`],[.07,.92,`#a79783`],[.29,.78,`#8d8d78`],[.61,.54,`#758e7d`],[.87,.23,`#677e73`]],f=d.flatMap(([e,t],r)=>u.flatMap((l,u)=>{let d=u/c*Math.PI*2,f=.8+.2*Math.cos(d*2+n)+.1*Math.sin(d*3);return[i+Math.cos(d)*l*o*t+r*.09*o,e*s*f,a+Math.sin(d)*l*o*t*.65]})),p=[],m=new Ue;for(let e=1;e<d.length;e++){let t=p.length;for(let t=0;t<c;t++){let n=(t+1)%c,r=(e-1)*c+t,i=(e-1)*c+n,a=e*c+t,o=e*c+n;p.push(r,a,i,i,a,o)}if(e===d.length-1){let t=f.length/3;f.push(i+o*.25,s,a);for(let n=0;n<c;n++)p.push(e*c+n,t,e*c+(n+1)%c)}m.addGroup(t,p.length-t,e-1)}return m.setAttribute(`position`,new Fe(f,3)),m.setIndex(p),m.computeVertexNormals(),new F(m,d.slice(0,-1).map(([,,t])=>e.surface(t)))}function fa(e,t,n,r=!1){let i=new f;i.add(da(e,t,n,r));let[a,o,s,c]=t;if(r||n<4){let t=na(e,{wall:`#d9b085`,roof:`#826059`,trim:`#e9d6bc`},[2.3,1.5,1.9]);t.position.set(a+s*.58,c*.3,o+1.6),i.add(t);let n=e.cylinder([a+s*.62,c*.24,o-1.25],[.35,.54,2.4,7],[`#e4d3b9`]),l=e.cylinder([a+s*.62,c*.24+1.1,o-1.25],[.13,.62,.46,7],[`#aa6557`]);i.add(n,l,e.box([a+s*.65,.15,o+4],[2.7,.28,1.2],[`#92765f`]));let u=e.box([0,0,0],[1,1,1],[`#6d866f`]),d=new k(u.geometry,u.material,r?14:5),f=new Me;for(let e=0;e<d.count;e++)f.position.set(a+s*.31+Math.cos(e*2.4)*s*.33,c*.51+Math.sin(e*.8)*c*.1,o+Math.sin(e*2.4)*s*.29),f.scale.set(.88,1.38,.89),f.updateMatrix(),d.setMatrixAt(e,f.matrix);i.add(d)}return i}function pa(e,t){let n=la.positions.slice(0,la.count).map((n,r)=>{let i=fa(t,n,r);return e.add(i),{id:`island-${r}`,object:i,position:new D(n[0],n[3]*.68,n[1])}}),r=la.routes.map((n,r)=>{let i=oa(t,[`#697e8b`,`#b27e63`,`#738b78`,`#a68c5e`][r]);i.scale.setScalar(.86);let a=Xi(t.box([.36,1.8,0],[.15,.16,.14],[`#f4d397`]),`street`);return a.userData.movingGlow=!0,i.add(a),e.add(i),{id:`distant-ship-${r}`,object:i,route:n}});return{islands:n,ships:r,update(e,t){r.forEach(({object:n},i)=>{let[a,o,s]=la.positions[i%la.positions.length],c=s*.9+3.4+i*2.2,l=e*.16+i*1.3;for(let t of r.keys()){if(t===i)continue;let n=la.positions[t%la.positions.length],r=n[2]*.9+3.4+t*2.2,s=e*.16+t*1.3,u=a+Math.cos(l)*c-(n[0]+Math.cos(s)*r),d=o+Math.sin(l)*c-(n[1]+Math.sin(s)*r);Math.hypot(u,d)<7&&(l+=.28)}n.position.set(a+Math.cos(l)*c,.04+Math.sin(e+i)*.03,o+Math.sin(l)*c),n.rotation.y=-l+Math.PI*.5,n.visible=i===0||t.weather<.45&&t.tier<3}),n.forEach(({object:e},n)=>{e.visible=t.tier<3||n%2==0})}}}function ma({night:e,weather:t},n){let r=mt.pool.map(n=>n.weight*(e?n.night:1)*(t===`clear`?1:t===`storm`?n.rain*1.25:n[t])),i=n()*r.reduce((e,t)=>e+t,0);return mt.pool[r.findIndex(e=>(i-=e)<0)]??mt.pool[0]}function ha({play:e,change:t,landed:n},r=Math.random){let i=`idle`,a=0,o;function s(e,n=0){i=e,a=n,t(e)}function c(){e(`fishCast`),s(`casting`,mt.castSeconds)}return{get phase(){return i},get active(){return i!==`idle`},get castProgress(){return i===`casting`?1-a/mt.castSeconds:i===`reeling`?a/mt.reelSeconds:1},cast:c,stop(){o=void 0,i!==`idle`&&s(`idle`)},act(t){if(i===`miss`)return c();i===`bite`&&(e(`fishReel`),o=ma(t,r),s(`reeling`,mt.reelSeconds))},step(t){if(i!==`idle`&&i!==`miss`&&(a-=t,!(a>0))){if(i===`casting`){e(`fishSplash`);let[t,n]=mt.waitSeconds;s(`waiting`,t+(n-t)*r())}else if(i===`waiting`)e(`fishBite`),s(`bite`,mt.responseSeconds);else if(i===`reeling`&&o){let e=o;o=void 0,s(`idle`),n(e)}else s(`miss`)}}}}var q=.65,ga=[V.ramp,V.terrace];if(ga.reduce((e,[t,n,r,i])=>e+(n-t)*(i-r),0)>V.maxAddedArea)throw RangeError(`后村地形超出配置的面积上限`);function _a(e,t){let n=pt(e,t);if(n)return n;let[r,i,a,o]=V.ramp;if(e>=r&&e<=i&&t>=a&&t<=o)return(V.upperY-q)*Math.min(1,(t-a)/(V.terrace[2]-a));let[s,c,l,u]=V.terrace;return e>=s&&e<=c&&t>=l&&t<=u?V.upperY-q:0}function va(e,t){let n=q+_a(e,t);if(e>=-30&&e<=12&&t>=23.05){let n=t<28.3?0:t<33.6?1:t<38.9?2:3,r=39-n*2.8;if(e>=-9-r/2&&e<=-9+r/2)return 2+n*1.52+.03}return n}function ya(e,t,n){for(let[r,i,a,o]of n)if(e>=r&&e<=i&&t>=a&&t<=o)return q+_a(e,t);return 0}var ba={armPivot:.995,armReach:.36,gripX:.267,length:1.24,sweep:1.05,readyArm:-.98,castArm:-1.62,pitch:.45,handle:.23,width:.036,wood:`#7c4b37`,tip:`#eac17e`,grip:`#46352e`,line:`#fff4d8`},xa={waterline:.065,sink:-.12,rock:.026,arc:1.38,hitch:.038,scale:.95};function Sa(e){let t=new f;return t.add(e.box([0,0,ba.handle/2],[ba.width*2,ba.width*2,ba.handle],[ba.grip])),t.add(e.box([0,0,ba.length/2],[ba.width,ba.width,ba.length],[ba.wood])),t.add(e.box([0,0,ba.length-ba.handle/2],[ba.width*.7,ba.width*.7,ba.handle],[ba.tip])),t}function Ca(e){let t=new f;return t.add(e.box([0,-.025,0],[.12,.095,.12],[`#fff4ca`])),t.add(e.box([0,.045,0],[.093,.06,.093],[`#c54a3f`])),t.add(e.box([0,.097,0],[.036,.06,.036],[`#ffcf69`])),t.scale.setScalar(xa.scale),t}function wa(e,t){let n=new f,r=Sa(t),i=Ca(t),a=t.box([0,0,0],[xa.hitch,1,xa.hitch],[ba.line]);n.name=`harbor-fishing-rig`,n.add(r,i,a),n.visible=!1,e.add(n);let o=new D,s=new D,c=new D;return(e,t)=>{if(n.visible=t.phase!==`idle`,!n.visible)return;let l=t.reduced?0:Math.sin(Math.PI*t.cast),u=x.lerp(ba.readyArm,ba.castArm,l),d=Math.cos(e.facing)*ba.gripX-Math.sin(e.facing)*Math.sin(u)*ba.armReach,f=-Math.sin(e.facing)*ba.gripX-Math.cos(e.facing)*Math.sin(u)*ba.armReach;return r.position.set(e.x+d,q+ba.armPivot-Math.cos(u)*ba.armReach,e.z+f),r.rotation.set(-ba.pitch-l*ba.sweep,e.facing,0,`YXZ`),r.updateMatrixWorld(!0),r.localToWorld(o.set(0,0,ba.length)),c.set(mt.float.x,t.phase===`bite`?xa.sink:xa.waterline,mt.float.z),i.position.copy(o).lerp(c,t.reduced?1:t.cast),i.position.y+=l*xa.arc+Math.sin(t.time*3)*xa.rock,i.rotation.z=Math.sin(t.time*2)*xa.rock,a.visible=t.phase!==`miss`,i.visible=a.visible,s.subVectors(i.position,o),a.position.copy(o).lerp(i.position,.5),a.scale.y=s.length(),a.quaternion.setFromUnitVectors(Me.DEFAULT_UP,s.normalize()),u}}var Ta={startY:q+1.28,width:.23,height:.27,depth:.21,trim:`#9e5a3a`,paper:`#fff1c7`,warm:`#ffc269`,fadeOutAt:.78,day:.26,night:.93,retainedRadius:.8,retainedLift:.24,retainedStep:.18},Ea=Math.PI*2,Da=[[0,0,0,Ta.width,Ta.height,Ta.depth,0],[0,.155,0,.16,.04,.16,1],[0,-.155,0,.18,.039,.17,1],[0,.016,0,.265,.035,.237,1]];function Oa(e,t){let{altar:n,altarWidth:r,altarHeight:i}=bt,a=new f;a.position.set(n.x,q,n.z),a.add(t.box([0,.09,0],[r,.18,r],[`#9f9485`,`brick`])),a.add(t.box([0,.44,0],[.54,.7,.54],[`#b6a390`,`brick`])),a.add(t.box([0,.84,0],[.71,.14,.7],[`#cbb397`,`brick`])),a.add(Xi(t.box([0,.99,0],[.22,.18,.22],[`#ffcd85`]),`street`)),a.add(t.box([0,i,0],[.29,.05,.29],[`#956756`])),e.add(a);let o=r/2;return{footprint:[n.x-o,n.x+o,n.z-o,n.z+o],height:i}}function ka(e,t){let n=new je;return Array.from({length:t},()=>{let t=new f,r=new P({color:Ta.paper,transparent:!0,depthWrite:!1}),i=new P({color:Ta.trim,transparent:!0,depthWrite:!1}),a={value:``};for(let[e,a,o,s,c,l,u]of Da){let d=new F(n,u?i:r);d.position.set(e,a,o),d.scale.set(s,c,l),t.add(d)}return t.visible=!1,e.add(t),{group:t,paper:r,trim:i,id:a,opacity:0}})}var Aa=new L(Ta.warm);function ja(e,t,n){e.group.visible=t>0,e.paper.color.set(Ta.paper).lerp(Aa,n),e.paper.opacity=t*x.lerp(Ta.day,Ta.night,n),e.trim.opacity=t}function Ma(e,t,n){let r=n.low?Math.floor(bt.lights.retained/2):bt.lights.retained,i=t.slice(0,r);for(let t of e){let e=i.some(e=>e.id===t.id.value);e||(t.opacity=n.reduced?0:Math.max(0,t.opacity-n.step/bt.lights.fadeSeconds)),!t.opacity&&!e&&(t.id.value=``)}for(let t of i){let r=e.find(e=>e.id.value===t.id)??e.find(e=>!e.id.value);r&&(r.id.value=t.id,r.opacity=n.reduced?1:Math.min(1,r.opacity+n.step/bt.lights.fadeSeconds))}e.forEach((e,t)=>{let r=t/bt.lights.retained*Ea;e.group.position.set(bt.altar.x+Math.cos(r)*Ta.retainedRadius,Ta.startY+Ta.retainedLift+t*Ta.retainedStep,bt.altar.z+Math.sin(r)*Ta.retainedRadius),ja(e,e.opacity,n.night)})}function Na(e){let{altar:t,lights:n}=bt,r=ka(e,n.retained+1),i=ka(e,n.flying).map(e=>({...e,age:Number(n.flightSeconds)})),a=new de,o=0;return{release(){let e=i.reduce((e,t)=>t.age>e.age?t:e);e.age=0,o=n.beamSeconds},get beam(){return o/n.beamSeconds},pick(e,t,n){a.setFromCamera(e,t);let i=r.filter(e=>e.group.visible&&n.some(t=>t.id===e.id.value)),o=a.intersectObjects(i.map(e=>e.group),!0)[0];return i.find(e=>e.group===o?.object.parent)?.id.value},update(e,a){o=Math.max(0,o-a.step),Ma(r,e,a);let{drift:s,flightSeconds:c}=n,l=a.low?Math.max(1,Math.floor(n.flying/2)):n.flying;i.forEach(e=>{e.age+=a.step});let u=[...i].sort((e,t)=>e.age-t.age).slice(0,l);i.forEach(e=>{let n=Math.min(1,e.age/c),r=a.reduced?.2:n,i=u.includes(e)?Math.min(1,(1-n)/(1-Ta.fadeOutAt)):0;e.group.position.set(t.x+r*s.x,Ta.startY+r*s.y,t.z+r*s.z),ja(e,i,a.night)})}}}function Pa(e,t,n){let r=Oa(e,t),i=Na(e),a=gt(),o=wa(e,t),s,c,l={night:!1,weather:`clear`},u=ha({play:n.play,change:n.fishing,landed(e){s=e,a.catchFish(e),n.landed(e)}});return{altar:r,fishing:u,reel(){u.act(l)},get result(){return s},get chosenWish(){return c},showRecords(){s=void 0,u.stop()},chooseWish(e){c=e},get beam(){return i.beam},pickWish(e,t){return i.pick(e,t,a.wishes().items)},catches:a.catches,wishes:a.wishes,deleteWish:a.deleteWish,clearWishes:a.clearWishes,releaseWish(e){return a.writeWish(e)?(i.release(),n.play(`wishChime`),n.notice(a.wishes().warning||bt.ui.saved),!0):!1},update(e,t){return l={night:t.night>=.5,weather:t.weather},u.step(t.frameTime),i.update(a.wishes().items,t),o(e,{phase:u.phase,cast:u.castProgress,time:t.time,reduced:t.reduced})}}}var Fa={id:`pier-gull`,title:`栈桥海鸥`,action:`逗海鸥`,perch:[3.25,1.51,-2.44],cover:[8.05,2.95,-5.02],cautious:3.6,flee:.95,interact:2.15,flight:7,cooldown:9,hop:1.25,flock:5,reducedFlock:2,route:{x:5.4,z:-.4,width:5.2,depth:4.3,rise:3.1}};function Ia(e,t){let n=t.box([0,0,0],[1,1,1],[`#f1e5ce`]),r=new k(n.geometry,n.material,Fa.flock*3);r.frustumCulled=!1,e.add(r);let i=new Me;return(e,t)=>{r.count=t*3;for(let n=0;n<t;n++){let t=e*.145+n*1.72,a=2+Math.cos(t)*12,o=-11+Math.sin(t)*8,s=5.25+n*.62+Math.sin(t*2)*.27;for(let c=0;c<3;c++){let l=c-1;i.position.set(a+Math.cos(t)*l*.31,s+(l?Math.sin(e*4+n)*.09:0),o+Math.sin(t)*l*.31),i.rotation.set(0,-t,l*Math.sin(e*4+n)*.25),i.scale.set(l?.35:.22,l?.065:.13,.23),i.updateMatrix(),r.setMatrixAt(n*3+c,i.matrix)}}r.instanceMatrix.needsUpdate=!0}}function La(e,t){let n=ca(t),r=Ia(e,t);e.add(n.bird);let i=new D(...Fa.perch),a=new D(...Fa.cover),o=0,s=0,c=0,l=0;return{actor:n.bird,update(e,t,u){let{step:d,time:f,rain:p,snow:m,night:h}=t,g=Math.hypot(e.x-i.x,e.z-i.z),_=g<Fa.cautious&&!e.sailing&&!e.lookout,v=p>.45;s=Math.max(0,s-d),c=Math.max(0,c-d),o=Math.max(0,o-d),!o&&!s&&!c&&_&&g<Fa.flee&&!v&&(o=Fa.flight,s=Fa.flight+Fa.cooldown);let y=o?(1-o/Fa.flight)*Math.PI*2:0,b=Math.sin(y*.5),x=Fa.route;n.bird.position.copy(i).lerp(a,Math.min(1,p*2)),n.bird.position.add(new D((x.x-i.x+Math.cos(y)*x.width)*b,b*x.rise+Math.abs(Math.sin(c*Math.PI*2/Fa.hop))*.17,(x.z-i.z+Math.sin(y)*x.depth)*b)),n.bird.scale.y=1-m*.26,n.bird.rotation.y=o?-y:_?Math.atan2(e.x-i.x,e.z-i.z)+Math.PI:-1.1,n.wings.forEach((e,n)=>{e.scale.x=o||c?1:.46,e.rotation.z=(n?1:-1)*(t.reduced?.15:o||c?Math.sin(f*12)*.81:_?Math.sin(f*9)*.18:.3)}),r(f,t.low||v||h>.5?Fa.reducedFlock:Fa.flock),l+=d,l>16&&(l=0,!t.low&&!v&&h<.5&&u(g+4))},pet(e){c=Fa.hop,s=Fa.cooldown,e(0)},hotspot(e){return o||c||e.sailing||e.lookout||Math.hypot(e.x-n.bird.position.x,e.z-n.bird.position.z)>Fa.interact?null:{id:Fa.id,title:Fa.title,kind:`gull`,label:Fa.action,x:n.bird.position.x,z:n.bird.position.z,radius:Fa.interact}}}}var Ra={center:{x:30.96,z:-16.48},innerRadius:8,radius:22,gulls:3,fish:26,gullHeight:1.95,spoutPeriod:9,spoutLife:1.3,burstPeriod:9.5,burstLife:2.6,gravity:9.4,launch:{min:1,max:3.4},lift:{min:4.6,max:7.4},delay:.42,keepOut:[34.6,51.4,-24.4,-11.6],colors:{fish:`#a8c3cc`,gull:`#f1e5ce`,water:`#dcf0ee`}},za=-60;function Ba(e,t){let[n,r,i,a]=Ra.keepOut;return e>=n&&e<=r&&t>=i&&t<=a}function Va(e,t){let n=Et(t),r=[];for(;r.length<e;){let e=n()*Math.PI*2,t=Ra.innerRadius+n()*(Ra.radius-Ra.innerRadius),i=Ra.center.x+Math.cos(e)*t,a=Ra.center.z+Math.sin(e)*t;Ba(i,a)||r.push({x:i,z:a,yaw:n()*Math.PI*2})}return r}var Ha=Va(Ra.gulls,331),Ua=Va(6,977),Wa={x:0,y:0,z:0,yaw:0,sx:1,sy:1,sz:1},Ga=new Me;function Ka(e,t){Ga.position.set(Wa.x,Wa.y,Wa.z),Ga.rotation.set(0,Wa.yaw,0),Ga.scale.set(Wa.sx,Wa.sy,Wa.sz),Ga.updateMatrix(),e.setMatrixAt(t,Ga.matrix)}function qa(e,t){Object.assign(Wa,{x:0,y:za,z:0,yaw:0,sx:.001,sy:.001,sz:.001}),Ka(e,t)}function Ja(e,t,n,r){let i=t.box([0,za,0],[1,1,1],[n]),a=new k(i.geometry,i.material,r);return a.frustumCulled=!1,a.count=r,a.raycast=()=>{},e.add(a),a}function Ya(e,t){let n=Math.floor(t/Ra.burstPeriod),r=t-n*Ra.burstPeriod,i=Ua[n%Ua.length],a=Et(917+n*37);for(let t=0;t<Ra.fish;t++){let n=a()*Math.PI*2,o=Ra.launch.min+a()*(Ra.launch.max-Ra.launch.min),s=Ra.lift.min+a()*(Ra.lift.max-Ra.lift.min),c=r-a()*Ra.delay,l=s*c-Ra.gravity*c*c/2,u=t*2;if(c<=0||l<=0){qa(e,u),qa(e,u+1);continue}let d=i.x+Math.cos(n)*o*c,f=i.z+Math.sin(n)*o*c;Object.assign(Wa,{x:d,y:l,z:f,yaw:-n,sx:.2,sy:.3,sz:.62}),Ka(e,u),Object.assign(Wa,{x:d-Math.cos(n)*.36,y:l,z:f-Math.sin(n)*.36,yaw:-n,sx:.14,sy:.22,sz:.3}),Ka(e,u+1)}e.instanceMatrix.needsUpdate=!0}function Xa(e,t,n){for(let r=0;r<Ra.gulls;r++){let i=Ha[r],a=Ra.gullHeight+Math.sin(n*.85+r*1.9)*.18,o=Math.sin(n*5.2+r)*.1;Object.assign(Wa,{x:i.x,y:a,z:i.z,yaw:i.yaw,sx:.3,sy:.2,sz:.44}),Ka(e,r*3);for(let t of[-1,1])Object.assign(Wa,{x:i.x+t*.24,y:a+o,z:i.z,yaw:i.yaw,sx:.28,sy:.07,sz:.26}),Ka(e,r*3+(t>0?2:1));let s=(n+r*3.1)%Ra.spoutPeriod,c=s<Ra.spoutLife?Math.sin(s/Ra.spoutLife*Math.PI):0;Object.assign(Wa,{x:i.x,y:a*c/2,z:i.z,yaw:0,sx:.12,sy:Math.max(.001,a*c),sz:.12}),Ka(t,r*2),Object.assign(Wa,{x:i.x,y:.04,z:i.z,yaw:0,sx:.4*c+.001,sy:.05,sz:.4*c+.001}),Ka(t,r*2+1)}e.instanceMatrix.needsUpdate=!0,t.instanceMatrix.needsUpdate=!0}function Za(e,t){let n=Ja(e,t,Ra.colors.gull,Ra.gulls*3),r=Ja(e,t,Ra.colors.water,Ra.gulls*2),i=Ja(e,t,Ra.colors.fish,Ra.fish*2);function a(e,t){if(t.reduced)for(let e=0;e<Ra.fish*2;e++)qa(i,e);else Ya(i,e);Xa(n,r,e)}return a(0,{reduced:!1}),{update:a}}var J={radius:1.55,activityRadius:13,speed:1.35,cadence:.3,greet:`打招呼`,placeholder:`待填写`,homes:[[-3,19.2],[6,19.2],[-2.69,-21.21],[-24.7,-3]],shelterNight:.6,shelterRain:.4,shelterDistance:.75,patrolRate:.8,gazeYaw:Math.PI/2,carryArm:-.15,watchArm:-1.75,post:{x:6.57,z:-13.9},seat:{x:6.22,z:-13.9},lamp:{x:6.95,z:-14.45},seatHeight:.3,sitSeconds:11,standSeconds:7,lookEvery:8,lookLength:3,people:[{spot:[13.5,16.3],facing:Math.PI,homeDoor:[6,16.6],hair:`#655d57`,skin:`#c89773`,shirt:`#426d78`,trousers:`#58483d`,hat:!1,build:[1,1.02,1],headwear:`straw`,fishing:!0,name:``,job:``,line:``},{spot:[6.57,-13.9],facing:Math.PI/2,hair:`#463a30`,skin:`#d8ae90`,shirt:`#2f3f57`,trousers:`#243040`,hat:!1,build:[1.04,1.06,1.04],headwear:`helmet`,apron:`#e6e2d4`,guard:!0,post:!0,name:`守塔人`,job:``,line:``}]},Qa=.35;function $a(e,t,n){e.updateMatrix(),n.copy(e.matrix);for(let r=e.parent;r&&r!==t;r=r.parent)r.updateMatrix(),n.premultiply(r.matrix);return n}function eo(e){let t=new Map;e.traverse(e=>{if(!(e instanceof F)||e.geometry.type!==`BoxGeometry`||Array.isArray(e.material))return;let n=t.get(e.material);n?n.push(e):t.set(e.material,[e])});let n=new y,r=[...t.entries()].filter(([,e])=>e.length>1).map(([t,n])=>{let r=new k(n[0].geometry,t,n.length);return r.instanceMatrix.setUsage(M),n.forEach(e=>{e.visible=!1}),e.add(r),{mesh:r,parts:n}});function i(){for(let{mesh:t,parts:i}of r)i.forEach((r,i)=>t.setMatrixAt(i,$a(r,e,n))),t.instanceMatrix.needsUpdate=!0}i();for(let{mesh:e}of r)e.computeBoundingSphere(),e.boundingSphere&&(e.boundingSphere.radius+=Qa);return i}var to={hair:`#644939`,shirt:`#a85d48`,trousers:`#536b70`,hat:!0},no={walkSpeed:3.25,sprintMultiplier:1.5,accelerationTime:.22,decelerationTime:.17,turnTime:.15,playerRadius:.32,maxFrameStep:.1,maxCollisionStep:1/120,movementThreshold:.025},Y={fov:59,near:.06,far:270,focusHeight:1.13,distance:4.15,minDistance:2.05,maxDistance:7.3,pitch:.18,minPitch:-1.45,maxPitch:1.1,firstMinPitch:-1.5,firstMaxPitch:.9,flightMinPitch:-1.4,flightMaxPitch:1.1,verticalLookSensitivity:.004,floorClearance:.28,aimTime:.55,lookSensitivity:.004,distancePerWheelStep:.42,followTime:.155,orbitTime:.14,zoomTime:.18,obstacleClearance:.23,minObstructedDistance:.28,vesselDistance:6.6,swimDistance:-.9},ro={waterLevel:0,floatSink:.7,speedFactor:.55,paddleInterval:.85,lean:.38,armSweep:.85,armSpread:.3,kick:.42,bob:.05,strokeRate:2.2},io={lift:4.5,gravity:12,landingTolerance:.012,recovery:.18,launchPoseTime:.095,launchSquat:.075,landingSquat:.088,airArm:.53,airLeg:.32,shadowScaleAtPeak:.59,vaultable:[{footprint:[-7.7,-6.56,15.57,16.23],height:.58},{footprint:[-21.8,-20.66,2.27,2.93],height:.58},{footprint:[-16.36,-15.64,8.74,9.46],height:.68}]},X={forwardSpeed:6,reverseSpeed:2.3,accelerationTime:.85,coastingTime:1.16,turnTime:.31,maxTurnRate:1.72,minTurnFactor:.32,invertSteerWhenReversing:!1,maxBank:.14,bankTime:.28,bounds:[-70,100,-70,60],boundary:[[-68,-30],[-50,-64],[52,-64],[94,-42],[98,-6],[80,46],[48,58],[-48,58],[-68,28]],sprint:1.38,berthGrip:.39,dockPrompt:`靠岸`,collisionDiscs:[[-1.36,.76],[0,.8],[1.55,.69]],berthRadius:2.1,boardingRadius:1.55,helmHeight:.05,helm:{skiff:{height:.05,offset:0},yacht:{height:-.06,offset:.25}},wakeLimit:14,wakeLife:.85,wakeInterval:.11,wakeColor:`#a2cfcb`,wakeMinimumSpeed:.62,docks:[{id:`south-dock`,title:`南湾码头`,note:`绿船初始停泊处。`,boat:`skiff`,x:-.3,z:8.8,yaw:Math.PI/2+.13,land:{x:-.3,z:11.42},berthRadius:2.1},{id:`pier-dock`,title:`栈桥泊位`,note:`绿船可在此靠泊。`,boat:`skiff`,x:-4.55,z:-5.15,yaw:Math.PI/2,land:{x:-4.55,z:-1.7},berthRadius:2.1},{id:`east-dock`,title:`东堤码头`,note:`南湾东侧的石堤，可在此靠岸与上下船。`,boat:`yacht`,x:16.45,z:21.3,yaw:Math.PI/2-.06,land:{x:16.45,z:19.39},berthRadius:5.6}],boardLabel:`上船`,dockLabel:`下船`,noBoatLabel:`船不在这个码头，先把船开回来。`,requiredLabel:`需乘船前往`},ao=[{id:`sea-east`,kind:`sea`,title:`东侧浮标`,label:`查看东侧浮标`,x:17,z:-6,radius:3.5},{id:`sea-north`,kind:`sea`,title:`北湾浮标`,label:`查看北湾浮标`,x:23,z:-12,radius:3.5},{id:`sea-shoal`,kind:`sea`,title:`外湾浮标`,label:`查看外湾浮标`,x:30,z:-3,radius:3.5}].map(e=>({...e,kind:`sea`,note:`地点介绍待填写`})),oo={sheepPen:{x0:-27,x1:-21,z0:14,z1:20},cowPen:{x0:-20,x1:-14,z0:14,z1:20},roam:{x0:-29,x1:-12.6,z0:-19.5,z1:21.5},gateWidth:2,fenceHeight:1.05,postStep:1.5,milk:{x:-16.4,z:19.4,radius:2},sheep:[[-25.4,15.7],[-23.6,16.5],[-24.7,17.9]],cows:[[-18.8,15.7],[-15.9,16.9]],dogHome:[-21.6,14.6],dogRetarget:[1.1,1.9],sheepRetarget:[.9,1.7],dogSpeed:1.95,sheepSpeed:1.15,cowSpeed:.42,flockDistance:[1.4,3.2]},so=[`#8a6a4a`,`wood`],co=[`#a9855f`,`wood`],lo=[`#d8b96b`],uo=[`#ece6d8`],fo=[`#4a4038`],po=[`#efe9de`],mo=[`#3b3632`],ho=[`#d8a29a`],go=[`#c08a5a`],_o=[`#7d5636`];function vo(e,t,n,r){let i=Math.hypot(r[0]-n[0],r[1]-n[1]),a=Math.max(2,Math.round(i/oo.postStep)+1);for(let i=0;i<a;i+=1){let o=i/(a-1);e.add(t.box([n[0]+(r[0]-n[0])*o,q+oo.fenceHeight/2,n[1]+(r[1]-n[1])*o],[oo.fenceHeight/9,oo.fenceHeight,oo.fenceHeight/9],so))}for(let i of[.38,.78])e.add(t.beam([[n[0],q+i,n[1]],[r[0],q+i,r[1]]],.08,co))}function yo(e,t,n){let r=oo.gateWidth/2,i=(n.x0+n.x1)/2;vo(e,t,[n.x0,n.z0],[i-r,n.z0]),vo(e,t,[i+r,n.z0],[n.x1,n.z0]),vo(e,t,[n.x1,n.z0],[n.x1,n.z1]),vo(e,t,[n.x1,n.z1],[n.x0,n.z1]),vo(e,t,[n.x0,n.z1],[n.x0,n.z0]);for(let a of[-1,1])e.add(t.box([i+a*r,q+.68,n.z0],[.22,1.36,.22],so));e.add(t.box([n.x1-.9,q+.42,n.z1-.9],[1.1,.84,1.1],lo)),e.add(t.box([n.x1-.9,q+.9,n.z1-.9],[.9,.2,.9],lo)),e.add(t.box([n.x0+1.1,q+.28,n.z1-.8],[1.5,.56,.62],so)),e.add(t.box([n.x0+1.1,q+.5,n.z1-.8],[1.3,.1,.44],[`#7fa7b8`]))}function bo(e){let t=oo.gateWidth/2,n=(e.x0+e.x1)/2,r=.18;return[[e.x0-r,n-t,e.z0-r,e.z0+r],[n+t,e.x1+r,e.z0-r,e.z0+r],[e.x1-r,e.x1+r,e.z0,e.z1],[e.x0-r,e.x1+r,e.z1-r,e.z1+r],[e.x0-r,e.x0+r,e.z0,e.z1],[e.x1-1.5,e.x1-.3,e.z1-1.5,e.z1-.3],[e.x0+.3,e.x0+1.9,e.z1-1.2,e.z1-.4]]}var xo=[...bo(oo.sheepPen),...bo(oo.cowPen)];function So(e,t){yo(e,t,oo.sheepPen),yo(e,t,oo.cowPen)}function Co(e){let t=new f,n=[];t.add(e.box([0,.5,0],[.62,.44,.84],uo)),t.add(e.box([0,.76,.02],[.5,.16,.64],[`#f4f0e5`])),t.add(e.box([0,.46,-.44],[.5,.34,.3],uo));let r=e.box([0,.6,-.62],[.26,.28,.28],fo);t.add(r),t.add(e.box([0,.74,-.58],[.34,.08,.12],[`#d9d3c6`]));for(let[r,i]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let a=e.box([r*.19,.14,i*.28],[.09,.3,.09],fo);n.push(a),t.add(a)}return{group:t,legs:n,head:r}}function wo(e){let t=new f,n=[];t.add(e.box([0,.74,0],[.78,.62,1.22],po)),t.add(e.box([0,.82,.24],[.8,.34,.44],mo)),t.add(e.box([0,.72,-.3],[.8,.28,.3],mo));let r=e.box([0,.92,-.78],[.36,.38,.34],po);t.add(r),t.add(e.box([0,.78,-.92],[.3,.18,.16],[`#e0c2b6`]));for(let n of[-1,1])t.add(e.box([n*.2,1.14,-.72],[.07,.16,.07],[`#d9cfa8`]));t.add(e.box([0,.44,.1],[.34,.24,.34],ho));for(let[r,i]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let a=e.box([r*.26,.2,i*.42],[.13,.4,.13],[`#ddd5c6`]);n.push(a),t.add(a)}return{group:t,legs:n,head:r}}function To(e){let t=new f,n=[];t.add(e.box([0,.36,0],[.3,.26,.56],go));let r=e.box([0,.46,-.38],[.24,.22,.24],go);t.add(r),t.add(e.box([0,.5,-.5],[.14,.1,.12],_o));for(let n of[-1,1])t.add(e.box([n*.1,.6,-.34],[.06,.14,.08],_o));t.add(e.box([0,.46,.34],[.07,.07,.24],_o));for(let[r,i]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let a=e.box([r*.1,.12,i*.2],[.07,.24,.07],_o);n.push(a),t.add(a)}return{group:t,legs:n,head:r}}function Eo(e,t,n,r){return t>e.x0+r&&t<e.x1-r&&n>e.z0+r&&n<e.z1-r}function Do(e,t,n){let r=Et(4821),i=[];function a(n,a,o,s){let c=n===`sheep`?Co(t):n===`cow`?wo(t):To(t);c.group.rotation.order=`YXZ`,e.add(c.group),i.push({kind:n,root:c.group,legs:c.legs,head:c.head,x:a,z:o,yaw:r()*Math.PI*2,speed:0,phase:r()*6,home:{x:a,z:o},target:{x:a,z:o},timer:r()*2,pen:s})}for(let[e,t]of oo.sheep)a(`sheep`,e,t,oo.sheepPen);for(let[e,t]of oo.cows)a(`cow`,e,t,oo.cowPen);a(`dog`,oo.dogHome[0],oo.dogHome[1],oo.sheepPen);let o=e=>({x:(e.x0+e.x1)/2,z:e.z0}),s=oo.roam,c=()=>i.find(e=>e.kind===`dog`);function l(e,t){if(Eo(e.pen,e.x,e.z,.5)===Eo(e.pen,t.x,t.z,.5))return t;let n=o(e.pen);return Math.hypot(n.x-e.x,n.z-e.z)<.4?t:n}function u(e){if(e.kind===`cow`){for(let t=0;t<12;t+=1){let t=e.pen.x0+1.4+r()*(e.pen.x1-e.pen.x0-2.8),i=e.pen.z0+1.4+r()*(e.pen.z1-e.pen.z0-2.8);if(n(t,i)){e.target={x:t,z:i};return}}e.target={...e.home};return}if(e.kind===`dog`){for(let t=0;t<24;t+=1){let t=s.x0+1+r()*(s.x1-s.x0-2),i=s.z0+1+r()*(s.z1-s.z0-2);if(n(t,i)){e.target={x:t,z:i};return}}e.target={x:e.pen.x0+3,z:e.pen.z0-2};return}let t=c();for(let i=0;i<12;i+=1){let i=oo.flockDistance[0]+r()*(oo.flockDistance[1]-oo.flockDistance[0]),a=r()*Math.PI*2,o=t.x+Math.cos(a)*i,c=t.z+Math.sin(a)*i;if(o>s.x0&&o<s.x1&&c>s.z0&&c<s.z1&&n(o,c)){e.target={x:o,z:c};return}}e.target={x:t.x,z:t.z}}return{update(e,t){for(let a of i){n(a.x,a.z)||(a.x=a.home.x,a.z=a.home.z),a.timer-=e;let i=t.night,o=i?a.kind===`dog`?{x:oo.dogHome[0],z:oo.dogHome[1]}:a.home:a.target;if(a.timer<=0&&!i){u(a);let[e,t]=a.kind===`dog`?oo.dogRetarget:a.kind===`sheep`?oo.sheepRetarget:[2.5,4];a.timer=e+r()*(t-e)}let s=l(a,o),c=s.x-a.x,d=s.z-a.z,f=Math.hypot(c,d),p=a.kind===`dog`?oo.dogSpeed:a.kind===`sheep`?oo.sheepSpeed:oo.cowSpeed;if(f>.06&&!(i&&f<.2)){let r=Math.min(p*e,f),i=a.x+c/f*r,o=a.z+d/f*r,s=0;n(i,o)?(s=Math.hypot(i-a.x,o-a.z),a.x=i,a.z=o):n(i,a.z)?(s=Math.abs(i-a.x),a.x=i):n(a.x,o)?(s=Math.abs(o-a.z),a.z=o):a.timer=0,s>1e-4&&(a.yaw+=Math.atan2(Math.sin(Math.atan2(c,d)-a.yaw),Math.cos(Math.atan2(c,d)-a.yaw))*Math.min(1,e*8)),a.speed=t.reduced?0:s/Math.max(e,1e-4)}else a.speed=0,a.timer=Math.min(a.timer,.15);let m=t.night&&a.speed<.02;a.root.position.set(a.x,q,a.z),a.root.rotation.y=a.yaw,a.root.scale.y=m?.82:1,a.phase+=(t.reduced?0:e)*a.speed*9;let h=t.reduced?0:Math.sin(a.phase)*Math.min(.4,a.speed*.3);a.legs.forEach((e,t)=>{e.rotation.x=t%2?h:-h}),a.head.rotation.x=m?.25:Math.sin(a.phase*.5)*.05}}}}var Oo=.02,ko={x:-4,z:.65,yaw:-1.02},Ao=[-13,10,-2.55,2.55],jo=[10,17,-3.65,3.65],Mo=[-30,-12,-21,22],No=[-17,8,-25,-12],Po=[-30,-17,-25,-21],Fo=[-30,-28.5,22,44],Io=[-18,11,11,25],Lo=[-18,-12,22,25],Ro=[11,22,16.1,19.9],zo=[Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,[36.6,49.4,-22.4,-13.6],[46.9,69.1,39.7,54.3],...ga,...wt.footprints],Bo=[ko,{x:6.6,z:.25},{x:12.8,z:-.45},{x:-16,z:.6},{x:-7,z:-17},{x:-14.4,z:8},{x:-10,z:13.8},V.position,H.position,wt.position],Vo={fishing:mt.place,wishing:bt.place,chair:{kind:`chair`,id:`chair`,label:`坐到摇椅上`,x:-22.15,z:.62,radius:1.8},notice:{kind:`notice`,id:`notice`,label:`查看公告`,x:-22.57,z:4.54,radius:2.5},cow:{kind:`cow`,id:`cow`,label:`挤牛奶`,x:oo.milk.x,z:oo.milk.z,radius:oo.milk.radius},eval:{kind:`eval`,id:`eval`,label:ft.prompt,x:-23.94,z:9.18,radius:2.2},mayor:{kind:`mayor`,id:Ft.id,label:Ft.action,...Ft.position,radius:Ft.radius},lookout:{kind:`lookout`,id:U.id,label:U.action,...U.position,radius:U.exitRadius},sunset:{kind:`sunset`,id:H.id,label:H.action,...H.position,radius:H.radius},village:{kind:`landmark`,id:V.id,label:V.title,...V.position,radius:V.radius,note:V.note},captain:{kind:`captain`,id:yt.id,label:yt.action,...yt.position,radius:yt.radius},hill:{kind:`landmark`,id:wt.id,label:wt.title,...wt.position,radius:wt.radius,note:wt.caption},keeper:{kind:`landmark`,id:Ot.id,label:Ot.action,...Ot.door,radius:Ot.hotspot.radius,note:Ot.note}},Ho=[{id:`mayor-name`,x:-22.15,z:.55,radius:1.6,label:`村长`,note:`欢迎来到我的岛屿。`},{id:`sunrise`,x:15.5,z:-.7,radius:2,label:`日出观景台`,note:`从这里能看到朝阳下的浮标与远航渔船。`},...X.docks.map(e=>({id:e.id,...e.land,radius:X.boardingRadius,label:e.title,note:e.note}))];function Uo([e,t,n,r],i,a){return i>=e&&i<=t&&a>=n&&a<=r}function Wo(){let e=[...new Set(zo.flatMap(([e,t])=>[e,t]))].sort((e,t)=>e-t),t=[...new Set(zo.flatMap(([,,e,t])=>[e,t]))].sort((e,t)=>e-t),n=[];for(let r=1;r<e.length;r++)for(let i=1;i<t.length;i++){let a=[e[r-1],e[r],t[i-1],t[i]],[o,s,c,l]=a;zo.some(e=>Uo(e,(o+s)/2,(c+l)/2))||n.push(a)}return{bounds:[e[0],e.at(-1),t[0],t.at(-1)],cells:n}}var Go=Wo();function Ko([e,t,n,r],[i,a,o,s]){return e<a&&t>i&&n<s&&r>o}var qo=1.75;function Jo(e){let t=[0,0,0,0];return{obstacle:{footprint:t,height:qo},move(n){t[0]=n.x-e,t[1]=n.x+e,t[2]=n.z-e,t[3]=n.z+e},hide(){t[0]=t[1]=t[2]=t[3]=999}}}function Yo(e,t,n){return Zo(e,t,{obstacles:n.map(e=>({footprint:e})),height:0})}function Xo(e,t,n=no.playerRadius){return[e-n,e+n,t-n,t+n]}function Zo(e,t,{obstacles:n,height:r,radius:i}){let a=Xo(e,t,i),o=ht(e,t);return(o===void 0?Uo(Go.bounds,a[0],a[2])&&Uo(Go.bounds,a[1],a[3])&&!Go.cells.some(e=>Ko(a,e)):o)&&!n.some(e=>!e.supportOnly&&(e.height===void 0||r+Oo<e.height)&&Ko(a,e.footprint))}function Qo(e,t,{obstacles:n,height:r}){let i=Xo(e,t),a=0,o=dt(e,t);o!==null&&(a=Math.max(a,o-q));for(let e of n)e.height!==void 0&&e.height<=r+Oo&&Ko(i,e.footprint)&&(a=Math.max(a,e.height));return a}function $o(e,t){let n,r=1/0;for(let i of Bo){let a=Math.hypot(i.x-e.x,i.z-e.z);a>=r||!Yo(i.x,i.z,t)||(n=i,r=a)}return n}var es=.065,ts=`#d49f78`,ns=`#5a443a`,rs=`#c19459`,is=`#815841`,as=1.65,os=.57,ss=.038,cs=Math.PI*2,ls=.29,us=8,ds=.005,fs=.26,ps=io.lift**2/(2*io.gravity);function Z([e,t,n]){return[e*es,t*es,n*es]}function ms(e,t,n){let r=n.headwear??(n.hat?`straw`:`none`);if(r===`straw`)e.add(t.box(Z([0,22.25,.35]),Z([9.5,.9,8.5]),[rs])),e.add(t.box(Z([0,23.45,0]),Z([7.25,1.45,6.3]),[is])),e.add(t.box(Z([0,24.15,0]),Z([6.65,1.03,5.75]),[rs]));else if(r===`cap`)e.add(t.box(Z([0,22.9,0]),Z([7.6,2.1,6.8]),[`#5d5a52`])),e.add(t.box(Z([0,22.5,3.4]),Z([7.9,.55,2.2]),[`#4e4b45`]));else if(r===`souwester`){let r=n.headwearColors?.crown??rs,i=n.headwearColors?.band??is;e.add(t.box(Z([0,22.35,-.25]),Z([9.3,.8,9.4]),[r])),e.add(t.box(Z([0,21.45,-3.9]),Z([8.3,2.1,1.7]),[r])),e.add(t.box(Z([0,23.15,0]),Z([7.8,1.5,6.85]),[i])),e.add(t.box(Z([0,24.05,0]),Z([6.2,1,5.5]),[r]))}else r===`helmet`?(e.add(t.box(Z([0,22,0]),Z([8.3,.7,7.7]),[`#7f878d`])),e.add(t.box(Z([0,22.95,0]),Z([7,1.3,6.6]),[`#8d949a`])),e.add(t.box(Z([0,23.8,0]),Z([4.6,.6,5.4]),[`#8d949a`])),e.add(t.box(Z([0,24.05,0]),Z([1.1,.5,5.8]),[`#6f767c`]))):r===`bandana`&&(e.add(t.box(Z([0,21.7,0]),Z([7.7,1.5,6.8]),[`#a2544c`])),e.add(t.box(Z([0,21.1,-3.05]),Z([2,1.6,1.4]),[`#8d453f`])))}function hs(e,t){let n=new f,{hair:r}=t,i=t.skin??ts;n.add(e.box(Z([0,19,0]),Z([7,6,6]),[i])),n.add(e.box(Z([0,20.5,-1.6]),Z([7.4,4.2,3.6]),[r])),n.add(e.box(Z([0,22,0]),Z([7.4,1.7,6.4]),[r]));for(let t of[-1,1])n.add(e.box(Z([t*1.72,19.2,3.05]),Z([.83,1.04,.16]),[`#403733`])),n.add(e.box(Z([t*3.65,18.6,.7]),Z([.83,1.48,1.35]),[i]));if(t.traveler){let i=t.hairstyle===`tuft`?.87:-1.75;n.add(e.box(Z([i,22.9,.45]),Z([3.65,1.9,4]),[r])),n.add(e.box(Z([i+.7,24.05,.1]),Z([1.8,.87,2.1]),[r]))}if(t.faceVariant!==void 0){let i=t.faceVariant;n.add(e.box(Z([0,17.7+i%3*.19,3.05]),Z([1.1+i%3*.38,.27,.15]),[`#614947`])),n.add(e.box(Z([i%2?1.42:-1.52,22.8,-.97]),Z([3.2,1.6+i*.1,3.3]),[r]))}return ms(n,e,t),n}function gs(e,{side:t,kind:n,appearance:r}){let i=new f,a=n===`arm`;return i.position.set(...Z([t*(a?4.1:1.68),a?15.3:7.1,0])),a?(i.add(e.box(Z([0,-2.32,0]),Z([2.18,5.25,2.98]),[r.shirt])),i.add(e.box(Z([0,-5.6,0]),Z([1.91,1.62,2.1]),[r.skin??ts]))):(i.add(e.box(Z([0,-2.65,0]),Z([2.65,5.55,3.4]),[r.trousers])),i.add(e.box(Z([0,-6.08,.58]),Z([2.74,2.03,4.25]),[r.boots??ns]))),i}function _s(){let e=new F(new Le(ls,us),new P({color:`#443830`,opacity:fs,transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=ds,e}function vs(e,t,n){for(let r=0;r<=5;r++){let i=r/5;e.add(t.box(Z([-2.55+i*5,15.5-i*5.9,2.06]),Z([.72,.72,.36]),[n]))}for(let r=0;r<8;r++){let i=r/8*Math.PI*2;e.add(t.box(Z([2.15+Math.cos(i)*.62,9.5+Math.sin(i)*.62,1.95]),Z([.62,.62,.42]),[n]))}}function ys(e,t,n){let r=new f;if(n.traveler){e.add(t.box(Z([0,13.9,0]),Z([5.7,4.3,4.07]),[n.shirt]));for(let[e,i]of[[11.2,6.28],[9.65,6.92],[8.1,7.48]])r.add(t.box(Z([0,e,0]),Z([i,1.59,4.18]),[n.shirt]));let i=t.cylinder(Z([1.4,13.1,2.1]),[.06,.06,.03,8],[n.badge??`#78844D`]);i.rotation.x=Math.PI/2,e.add(i,r)}else e.add(t.box(Z([0,12.31,0]),Z([6.05,7.5,4.02]),[n.shirt]));if(!n.traveler||n.shoulderBag){let r=n.traveler?2.7:0;e.add(t.box(Z([r,12.95,-2.17]),Z([4.45,4.68,1.99]),[`#816c4d`])),e.add(t.box(Z([r,14.38,-3.23]),Z([4.33,1.24,.32]),[`#b39561`]))}return n.rope&&vs(e,t,n.rope.color),r}function bs(e,t=to){let n=new f,r=new f,i=gs(e,{side:-1,kind:`arm`,appearance:t}),a=gs(e,{side:1,kind:`arm`,appearance:t}),o=gs(e,{side:-1,kind:`leg`,appearance:t}),s=gs(e,{side:1,kind:`leg`,appearance:t});r.add(e.box(Z([0,8.45,0]),Z([6.13,2.25,4.03]),[t.trousers]));let c=ys(r,e,t),l=hs(e,t);r.add(l,i,a,o,s);let u=eo(r),d=_s();n.add(r,d);let p,m=0,h=0,g={blend:0,lean:0,bank:0,arms:0};return{avatar:n,detailAnchor:r,head:l,rightArm:a,setFishingArm(e){p=e},swingCoat(e){c.rotation.x=e},wave(e){a.rotation.z=e},setFlightPose(e){!e.blend&&g.blend&&(i.rotation.z=a.rotation.z=0),g=e},update(e,t,c){n.position.set(e.x,q+e.elevation,e.z),n.rotation.y=e.facing;let l=e.speed<no.movementThreshold||c||e.sailing||e.airborne||e.swimming?0:Math.min(e.speed/no.walkSpeed,1),f=e.speed*t/as*cs;m=(m+f)%cs;let _=Math.sin(m)*l*os,v=e.airborne?Math.max(0,1-e.jumpAge/io.launchPoseTime):0,y=c?0:Math.sin(Math.PI*e.landing/io.recovery);r.position.y=e.height+Math.abs(Math.sin(m))*l*ss,r.scale.y=1-v*io.launchSquat-y*io.landingSquat,i.rotation.z=0,a.rotation.z=0;let b=e.airborne?io.airArm*(1-v):0,S=e.airborne?io.airLeg*(1-v):0;o.rotation.x=_+S,s.rotation.x=-_-S,i.rotation.x=-_-b,a.rotation.x=p??_-b,d.scale.setScalar(x.lerp(1,io.shadowScaleAtPeak,Math.min(1,e.height/ps))),e.sitting&&(r.position.y-=.29,o.rotation.x=s.rotation.x=-Math.PI*.45,i.rotation.x=a.rotation.x=-.18);let{blend:C,lean:w,bank:T,arms:E}=g;if(r.rotation.set(w,0,T),C&&(r.scale.y=x.lerp(r.scale.y,1,C),i.rotation.x*=1-C,a.rotation.x*=1-C,i.rotation.z=-E,a.rotation.z=E,o.rotation.x*=1-C,s.rotation.x*=1-C),e.swimming&&!C){h=(h+t*(ro.strokeRate+e.speed*.9))%cs;let n=c?.35:Math.sin(h),l=c?.2:Math.sin(h*2.3);r.rotation.set(ro.lean,0,0),r.position.y=e.height+(c?0:Math.sin(h*2)*ro.bob),i.rotation.x=-ro.armSweep*(.5+.5*n),a.rotation.x=-ro.armSweep*(.5-.5*n),i.rotation.z=ro.armSpread,a.rotation.z=-ro.armSpread,o.rotation.x=l*ro.kick,s.rotation.x=-l*ro.kick}d.visible=!C&&!e.swimming,u()}}}var xs={displayName:`星旅人`,mutedMix:.13,neutral:`#8b806b`,reference:{hair:`#E0A83C`,skin:`#DEB781`,coat:`#9DB787`,scarf:`#CC6047`,trousers:`#625756`,boots:`#1E1715`,badge:`#78844D`,shoulderBag:!1,hairstyle:`tuft`},variant:{hair:``,coat:``,scarf:``,shoulderBag:!0,hairstyle:`side`},variantPreview:{hair:`#855943`,coat:`#5b6086`,scarf:`#be914a`},scarfSegments:4,lowSegments:2,wind:.095,scarfResponse:.21,scarfWidth:.095,umbrella:`#a16f56`,coatSwing:.042,first:{transition:.4,eye:1.285,seatEye:.88,helmEye:1.32,near:.035,bob:.032,bobHz:8.2,hatBlend:.27,hideBlend:.52}};function Ss(e){let t=new f,n=e.cylinder([0,.58,0],[.18,.65,.24,8],[xs.umbrella]);return t.add(n,e.box([0,.3,0],[.045,.57,.045],[`#725c4a`])),t.visible=!1,t}var Cs=-Math.log1p(-.9),ws=2*Math.PI;function Ts(e,t){return-Math.expm1(-Cs*e/t)}function Es(e,t,n){let r=t-e;return e+(r-ws*Math.round(r/ws))*n}function Ds(e,t){return J.homes.reduce((n,r)=>Math.hypot(e-r[0],t-r[1])<Math.hypot(e-n[0],t-n[1])?r:n,J.homes[0])}function Os(e,t,n){let[r,i]=t.spot,a=t,o=bs(e,{...t,traveler:!1,faceVariant:n});a.build&&o.avatar.scale.set(a.build[0],a.build[1],a.build[2]),a.apron&&o.detailAnchor.add(e.box([0,.55,.155],[.3,.42,.04],[a.apron]));let s;if(a.guard){s=new f;for(let t of[-1,1]){let n=e.cylinder([0,0,0],[.04,.048,.2,6],[`#4e463c`]);n.rotation.x=Math.PI/2,n.position.set(t*.112,1.248,.36),s.add(n);let r=e.cylinder([0,0,0],[.056,.056,.035,6],[`#a98a52`]);r.rotation.x=Math.PI/2,r.position.set(t*.112,1.248,.455),s.add(r)}s.add(e.box([0,1.248,.33],[.1,.05,.06],[`#3d3830`])),s.visible=!1,o.head.add(s)}if(a.fishing){o.setFishingArm(-1.18),o.rightArm.add(e.beam([[0,-.364,.01],[0,.354,1.551]],.032,[`#8a6a4a`])),o.rightArm.add(e.beam([[0,.354,1.551],[-.12,-1.94,1.88]],.013,[`#cdd8d6`])),o.rightArm.add(e.box([-.12,-1.94,1.88],[.1,.13,.1],[`#c0553f`])),o.avatar.add(e.cylinder([0,.22,0],[.23,.25,.42,10],[`#8a6a4a`]));let t=-.87,n=-.04;o.avatar.add(e.cylinder([t,.19,n],[.26,.24,.38,9],[`#7b6248`]));for(let r of[.1,.3])o.avatar.add(e.cylinder([t,r,n],[.27,.27,.05,9],[`#5d4a36`]));o.avatar.add(e.box([t,.36,n],[.4,.04,.4],[`#4d6b73`])),o.avatar.add(e.box([-.9299999999999999,.4,-.010000000000000002],[.2,.07,.09],[`#9aa6a8`])),o.avatar.add(e.box([-.8,.4,-.08],[.17,.06,.08],[`#b0bbbd`]))}a.guard&&(o.detailAnchor.add(e.beam([[-.16,.52,-.17],[.22,1.3,-.15]],.07,[`#5b4636`,`wood`])),o.detailAnchor.add(e.beam([[.22,1.3,-.15],[.26,1.47,-.14]],.04,[`#3d444a`])));let c=Ss(e);return c.position.set(.25,1.02,.13),o.avatar.add(c),{actor:o,pose:{x:r,z:i,facing:a.facing??n,elevation:_a(r,i),speed:0,height:a.fishing?.3:0,landing:0,jumpAge:0,airborne:!1,lookout:!1,sitting:!!a.fishing,sailing:!1,swimming:!1},umbrella:c,glass:s,spot:{x:r,z:i},index:n,time:n*3,accumulated:0,home:Ds(r,i),homeDoor:a.homeDoor??[r,i],homeFacing:a.facing??n,sheltering:!1,fishing:!!a.fishing,guard:!!a.guard,post:!!a.post,seated:!1,hold:J.standSeconds,look:J.lookEvery,arm:void 0,watching:!1,title:t.name||`村民 ${n+1}`,note:[t.job,t.line].filter(Boolean).join(` · `)||J.placeholder}}function ks(e,t,n,r){let{pose:i}=e,a=t-i.x,o=n-i.z,s=Math.hypot(a,o),c=J.speed*r.step,l=Math.atan2(a,o),u=i.x+Math.sin(l)*Math.min(c,s),d=i.z+Math.cos(l)*Math.min(c,s);i.speed=0,Zo(u,d,{obstacles:r.obstacles,height:0,radius:.23})&&(i.speed=J.speed,Object.assign(i,{x:u,z:d,elevation:_a(u,d),facing:Es(i.facing,l,Ts(r.step,.28))}))}function As(e,t,n){let{pose:r,spot:i,time:a,index:o}=e,s=J.speed*n.step,c=i.x+Math.sin(a*J.patrolRate+o)*1.6,l=i.z+Math.cos(a*J.patrolRate)*.7,u=c-r.x,d=l-r.z,f=Math.hypot(u,d),p=Math.hypot(t.x-r.x,t.z-r.z)<1.02&&!t.lookout?Math.atan2(r.x-t.x,r.z-t.z):Math.atan2(u,d),m=r.x+Math.sin(p)*Math.min(s,f),h=r.z+Math.cos(p)*Math.min(s,f),g={obstacles:n.obstacles,height:0,radius:.23};if(r.speed=0,Zo(m,h,g)){let e=Math.hypot(m-r.x,h-r.z);r.speed=e>1e-4?Math.min(J.speed,e/Math.max(n.step,1e-4)):0,Object.assign(r,{x:m,z:h,elevation:_a(m,h),facing:Es(r.facing,p,Ts(n.step,.28))})}}function js(e,t,n,r){let i=r.rain>J.shelterRain||r.snow>.45;e.hold-=n,i?(e.seated=!1,e.hold=J.standSeconds):e.hold<=0&&(e.seated=!e.seated,e.hold=e.seated?J.sitSeconds:J.standSeconds);let a=e.seated?J.seat:J.post;t.x+=(a.x-t.x)*Ts(n,.35),t.z+=(a.z-t.z)*Ts(n,.35),t.facing=Es(t.facing,J.gazeYaw,Ts(n,.5)),t.sitting=e.seated,t.height=e.seated?J.seatHeight:0,t.speed=0,e.look=i?J.lookLength:e.look-n,e.look<=0&&(e.look=J.lookEvery+J.lookLength),e.watching=!i&&e.look>J.lookEvery;let o=e.watching?J.watchArm:J.carryArm;e.arm=e.arm===void 0?o:e.arm+(o-e.arm)*Ts(n,.25),e.actor.setFishingArm(e.arm),e.glass&&(e.glass.visible=e.watching&&e.arm<-1.1)}function Ms(e,t,n){let r=J.people.map((e,n)=>Os(t,e,n));r.forEach(({actor:t,pose:n})=>{t.update(n,0,!0),e.add(t.avatar)}),e.add(t.cylinder([J.seat.x,q+.22,J.seat.z],[.23,.25,.42,10],[`#8a6a4a`])),e.add(t.box([J.lamp.x,q+.45,J.lamp.z],[.1,.9,.1],[`#595655`]));let i=new F(new je,new P({color:`#ffd79b`}));i.scale.set(.24,.24,.24),i.position.set(J.lamp.x,q+.98,J.lamp.z);let a=new F(new je,new P({color:`#ffd79b`,transparent:!0,opacity:.24}));a.scale.set(.66,.66,.66),a.position.copy(i.position);let o=new f;return o.add(i,a),o.visible=!1,e.add(o),{update(e,t,i){let a=i.night>J.shelterNight||i.rain>J.shelterRain;o.visible=i.night>.5;for(let o of r){let{index:r,pose:s,actor:c}=o;if(a&&!o.guard){if(o.fishing){if(o.sheltering){c.avatar.visible=!1;continue}let e=o.homeDoor;if(Math.hypot(e[0]-s.x,e[1]-s.z)<.5){c.avatar.visible=!1,o.sheltering=!0;continue}if(c.avatar.visible=!0,s.sitting=!1,s.height=0,o.accumulated+=t,o.accumulated<J.cadence)continue;let r=o.accumulated;o.accumulated=0,ks(o,e[0],e[1],{step:r,obstacles:n}),o.umbrella.visible=i.rain>.32,c.update(s,r,i.reduced);continue}if(Math.hypot(o.home[0]-s.x,o.home[1]-s.z)<J.shelterDistance){c.avatar.visible=!1,o.sheltering=!0;continue}if(c.avatar.visible=r<i.limit||o.fishing,o.accumulated+=t,o.accumulated<J.cadence)continue;let e=o.accumulated;o.accumulated=0,s.sitting=!1,ks(o,o.home[0],o.home[1],{step:e,obstacles:n}),o.umbrella.visible=i.rain>.32&&!o.guard,c.update(s,e,i.reduced);continue}if(!a&&o.fishing&&o.sheltering){let e=Math.hypot(o.spot.x-s.x,o.spot.z-s.z);if(c.avatar.visible=!0,s.sitting=!1,s.height=0,o.accumulated+=t,o.accumulated<J.cadence)continue;let r=o.accumulated;o.accumulated=0,e<.4?(o.sheltering=!1,Object.assign(s,{x:o.spot.x,z:o.spot.z,height:.3,sitting:!0})):ks(o,o.spot.x,o.spot.z,{step:r,obstacles:n}),c.update(s,r,i.reduced);continue}o.sheltering=!1,c.avatar.visible=r<i.limit||o.fishing;let l=Math.hypot(e.x-s.x,e.z-s.z)<J.activityRadius;if(o.accumulated+=t,!l&&o.accumulated<J.cadence)continue;let u=o.accumulated;o.accumulated=0,o.time+=u,o.fishing&&Math.hypot(o.spot.x-s.x,o.spot.z-s.z)>.4?(s.sitting=!1,s.height=0,ks(o,o.spot.x,o.spot.z,{step:u,obstacles:n}),c.update(s,u,i.reduced)):(o.fishing&&(s.height=.3,s.facing=Es(s.facing,o.homeFacing,Ts(u,.6))),s.sitting=o.fishing||r%3==0&&Math.sin(o.time*.22)<-.28,s.speed=0,o.post&&js(o,s,u,{rain:i.rain,snow:i.snow}),o.post||o.fishing||s.sitting||As(o,e,{step:u,obstacles:n}),o.umbrella.visible=i.rain>.32&&!o.watching,c.update(s,u,i.reduced||!l))}},hotspot(e){let t=r.find(({actor:t,pose:n})=>t.avatar.visible&&Math.hypot(e.x-n.x,e.z-n.z)<J.radius);return t?{id:`resident-${t.index}`,kind:`resident`,title:t.title,label:J.greet,note:t.note,x:t.pose.x,z:t.pose.z,radius:J.radius}:null},targets:r.map(e=>({id:`resident-${e.index}`,object:e.actor.avatar,detailAnchor:e.actor.detailAnchor,title:e.title,height:1.28})),followers:r.map(e=>({pose:e.pose,avatar:e.actor.avatar}))}}var Ns=.35,Ps=208;function Fs(e,t){let[n,r,i]=jt.eye,a=t.box([n-.14,r-.56,i],[.11,.88,.11],[`#715b4c`]),o=t.beam([[n-.3,r-.2,i+.13],[n+.48,r+.03,i-.14]],.23,[`#67817e`]);e.add(a,o,t.box([n+.47,r+.03,i-.14],[.11,.24,.26],[`#ccab78`]))}function Is(e){let{x:t,z:n}=jt.position;return!e.lookout||Math.hypot(e.x-t,e.z-n)>jt.promptRadius?null:{kind:`telescope`,id:jt.id,label:jt.action,x:t,z:n,radius:jt.promptRadius}}function Ls(e,t){let{camera:n,onChange:r,targets:i}=t,a=new D(.93,.107,-.36),o=new D(...kt.moonDirection),s=new D(...jt.eye);i.push({id:`sun`,title:`太阳`,position:a.normalize().multiplyScalar(Ps),night:!1},{id:`moon`,title:`月亮`,position:o.normalize().multiplyScalar(Ps),night:!0});let c=new D,l=new D,u=new D,d=!1,f=jt.starting,p=jt.yaw,m=jt.pitch,h=jt.pitchLimit,g=null,_=null,v=``,y=!1,b=0,S;function C(){let e=g?.id??``,t=[e,f,y,!!_].join(`:`);t!==v&&(v=t,r({zoom:f,name:jt.titles[e]||g?.title||(g?`观察目标`:``),caption:e===`sun`?jt.sunHint||jt.captions[e]||`待填写`:g?.caption||jt.captions[e]||(g?`待填写`:``),locked:!!_,loading:y}))}async function w(t){if(d)return;let n=++b,r=!!t?.eye;d=!0,y=!r,v=``,_=null,f=jt.starting,p=jt.yaw,m=t?.pitch??jt.pitch,h=t?.pitchLimit??jt.pitchLimit;let a=t?.eye??jt.eye;if(s.set(a[0],a[1],a[2]),C(),!r)try{let t=await Pt(()=>import(`./harbor-scope-detail-D0ZqTQiB.js`),__vite__mapDeps([0,1,2]));d&&n===b&&(S=t.mountScopeDetails(e,i))}catch{n===b&&(S=void 0)}finally{n===b&&(y=!1,d&&C())}}function T(e,t){return e.position?t.copy(e.position):(e.object?.getWorldPosition(t),t.y+=e.height??.8,t)}function E(e,t){let n=jt.aimTolerance/Math.sqrt(f)*Math.max(Ns,1-t*.38),r=null;for(let t of i){if(t.night!==void 0&&t.night!==e||!t.position&&t.object&&!t.object.visible)continue;let i=u.subVectors(T(t,u),s).normalize().angleTo(l);i<n&&(n=i,r=t)}return r}return{get active(){return d},open:w,close(){return d?(d=!1,++b,S?.dispose(),S=void 0,g=_=null,n.fov=Y.fov,n.updateProjectionMatrix(),r(null),!0):!1},look(e,t){_=null,p=x.clamp(p-e*jt.sensitivity,jt.yaw-jt.yawLimit,jt.yaw+jt.yawLimit),m=x.clamp(m+t*jt.sensitivity,-h,h)},zoom(e){f=x.clamp(f+e*jt.step,jt.minimum,jt.maximum),C()},lock(){_=_?null:g,C()},update(e,t){d&&(n.position.copy(s),_?l.subVectors(T(_,c),s).normalize():l.set(-Math.sin(p)*Math.cos(m),-Math.sin(m),-Math.cos(p)*Math.cos(m)),n.lookAt(c.copy(s).add(l)),n.fov=Y.fov/f,n.updateProjectionMatrix(),g=_??E(e,t),S?.update(f),C())}}}var Rs={transition:4.2,snowBuild:18,snowMelt:14,iceDelay:9,iceBuild:25,iceMelt:15,maximumIce:.4,wetFog:.025,snowFog:.018,rainLight:.61,snowLight:.8,rainSky:`#778e9f`,snowSky:`#bac6cc`,snowTint:`#e8e7dc`,particles:{high:490,medium:250,low:82},volume:[21,15,21],iceBounds:[-24,27,-24,23],safeChannels:[[-6,13,6,11],[8,29,-14,10],[3.5,8.5,-8.5,-2.5],[-8,-1.5,-7.4,-2.4]]};function zs(e,t,n){let[r,i,a,o]=Rs.iceBounds;if(n<=0||e<r||e>i||t<a||t>o||Rs.safeChannels.some(([n,r,i,a])=>e>=n&&e<=r&&t>=i&&t<=a))return!1;let s=Math.min(Math.abs(t+2.55),Math.abs(t-11),Math.abs(e+12),Math.abs(t+18)),c=.14*Math.sin(e*.83+t*.51)*Math.sin(t*1.25-e*.34);return s*.16+c<n}var Bs=193,Vs=.024,Hs=.42,Us=.075;function Ws(e,t,n,r){return e+Math.sign(t-e)*Math.min(Math.abs(t-e),n/r)}function Gs(e){let t=Et(Bs),[n,r,i]=Rs.volume,a=Array.from({length:Rs.particles.high},()=>({x:t()*n-n/2,y:t()*r,z:t()*i-i/2,drift:t()})),o=new P({color:`#d9e4df`,transparent:!0,opacity:.64,depthWrite:!1}),s=new k(new je,o,a.length);s.instanceMatrix.setUsage(M),s.frustumCulled=!1,e.add(s);let c=new Me;return(e,t,n)=>{let{frame:i,limit:l}=n,u=i.rain>i.snow;if(s.count=Math.min(a.length,Math.round(l*Math.max(i.rain,i.snow))),s.visible=s.count>0,s.visible){o.color.set(u?`#a7bfca`:`#ecebe0`),o.opacity=u?.46:.81,c.scale.set(u?Vs:Us,u?Hs:Us,Us),c.rotation.z=u?-.16:0;for(let n=0;n<s.count;n++){let i=a[n],o=x.euclideanModulo(i.y-t*(u?12:1.2+i.drift),r),l=u?(o-r/2)*.18:Math.sin(t+i.drift*8)*.64;c.position.set(e.position.x+i.x+l,e.position.y+o-r/2,e.position.z+i.z),c.updateMatrix(),s.setMatrixAt(n,c.matrix)}s.instanceMatrix.needsUpdate=!0}}}function Ks(t,n){let r=new Set;t.traverse(t=>{if(!(t instanceof F))return;let i=Array.isArray(t.material)?t.material:[t.material];for(let t of i){if(!(t instanceof e)||r.has(t))continue;r.add(t);let i=t.onBeforeCompile.bind(t);t.onBeforeCompile=(e,t)=>{i(e,t),e.uniforms.harborSnow=n.snow,e.uniforms.harborRain=n.ripple,e.uniforms.harborWeatherTime=n.time,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
             #include <opaque_fragment>`)},t.customProgramCacheKey=()=>`harbor-surface-weather`,t.needsUpdate=!0}})}function qs(e){let t={value:0},n={value:0},r={value:0};Ks(e,{snow:t,ripple:n,time:r});let i=Gs(e),a={rain:0,snow:0,cover:0,ice:0,low:!1,flash:0},o=0,s=0,c=new f;for(let e=0;e<7;e+=1){let t=new F(new je(.5,2.4,.5),new P({color:e%2?`#c9a6ff`:`#a272f5`,transparent:!0,opacity:0,depthWrite:!1}));t.position.set((e%3-1)*.55,e*2.1,e%2*.3),c.add(t)}c.visible=!1,e.add(c);let l=3,u=0;return{frame:a,update(e,d,f){let{step:p,quality:m,tier:h,reduced:g}=f;if(a.low=m===`low`||h>=2,a.rain=Ws(a.rain,Number(e===`rain`||e===`storm`),p,Rs.transition),a.snow=Ws(a.snow,Number(e===`snow`),p,Rs.transition),o=e===`snow`?o+p:0,e===`storm`&&!g&&(l-=p,l<=0)){l=4+Math.random()*6,u=1;let e=Math.random()*Math.PI*2;c.position.set(Math.cos(e)*120,22,Math.sin(e)*120),c.rotation.y=e}u=Math.max(0,u-p*3.6),a.flash=u,c.visible=u>.05;for(let e of c.children){let t=e.material;t.opacity=u>.4?1:u}a.cover=Ws(a.cover,Number(e===`snow`),p,e===`snow`?Rs.snowBuild:Rs.snowMelt);let _=o>=Rs.iceDelay;return a.ice=Ws(a.ice,_?Rs.maximumIce:0,p,(_?Rs.iceBuild:Rs.iceMelt)/Rs.maximumIce),t.value=a.low?Number(a.cover>=.6)*.66:a.cover,s+=g?0:p,n.value=a.low?0:a.rain,r.value=s,i(d,s,{frame:a,limit:h>=1||g?Rs.particles.low:Rs.particles[m]}),a}}}var Js={origin:[-25.7,q+4.06,-2.03],count:18,life:4.4,rise:1.7,drift:.7,color:`#d3d7da`,opacity:.42,startSize:.16,endSize:.62};function Ys(e){let t=Array.from({length:Js.count},(t,n)=>{let r=new P({color:Js.color,transparent:!0,opacity:0,depthWrite:!1}),i=new F(new je,r);return i.raycast=()=>{},i.visible=!1,e.add(i),{mesh:i,material:r,seed:n*.83,age:n*Js.life/Js.count}});return{update(e,n){for(let r of t){r.age+=e,r.age>Js.life&&(r.age-=Js.life);let t=r.age/Js.life,i=Js.startSize+t*(Js.endSize-Js.startSize);r.mesh.visible=!n,r.mesh.scale.set(i,i*.9,i),r.mesh.position.set(Js.origin[0]+Math.sin(r.seed)*Js.drift*t+t*t*.3,Js.origin[1]+t*Js.rise,Js.origin[2]+Math.cos(r.seed)*Js.drift*t*.7),r.material.opacity=Math.sin(Math.PI*Math.min(1,t*1.12))*Js.opacity}}}}var Xs={domeRadius:190,constellationSeconds:45,starSize:1.5,meteorCount:14,meteorPeriod:[3,7],meteorLife:.75,meteorLength:16,telescope:{x:-45.74,z:-9.17},daytimeLabel:`看星空（白天看不到星星）`,daytimeNote:`太阳还没落山，星星都被阳光盖住了。等天黑了再来。`},Zs=[{name:`白羊座`,stars:[[0,0],[1.6,.5],[2.7,.1],[3.6,1]],intro:`白羊座是黄道第一宫，春分点所在的方向，代表新的开始。`},{name:`金牛座`,stars:[[0,0],[1.3,.7],[2.2,1.5],[3.1,1.2],[2.6,.3]],intro:`金牛座里有昴星团和蟹状星云，是冬天最亮眼的星座之一。`},{name:`双子座`,stars:[[0,0],[1.1,.9],[2.2,1.6],[.9,-.8],[2,-1.3]],intro:`双子座的两颗主星北河二、北河三，在夜空中像一对并肩的兄弟。`},{name:`巨蟹座`,stars:[[0,0],[1.2,.5],[2.3,.2],[1.7,-.9]],intro:`巨蟹座很暗，但中间的蜂巢星团用肉眼就能看到一团朦胧的光。`},{name:`狮子座`,stars:[[0,0],[1.4,.4],[2.6,.7],[2.4,-.7],[1.2,-1]],intro:`狮子座春天的代表星座，轩辕十四是它最亮的那颗星。`},{name:`处女座`,stars:[[0,0],[1.5,.6],[2.6,.3],[3.4,.9],[2.2,-.8]],intro:`处女座是黄道上面积第二大的星座，角宿一是全天第 16 亮星。`},{name:`天秤座`,stars:[[0,0],[1.2,.6],[2.2,.2],[1.4,-.6]],intro:`天秤座原本是 Scorpius 的一对钳子，后来才独立成"秤"。`},{name:`天蝎座`,stars:[[0,0],[.9,.8],[1.5,1.7],[1.9,.9],[2.4,.1],[2.9,-.8]],intro:`天蝎座的心宿二是红色超巨星，夏天南天最漂亮的一串星。`},{name:`射手座`,stars:[[0,0],[1.2,.7],[2.4,.4],[1,-.8],[2.2,-1.1]],intro:`射手座方向就是银河系中心，那里藏着一个超大质量黑洞。`},{name:`摩羯座`,stars:[[0,0],[1.3,.4],[2.5,.1],[2.1,-.9]],intro:`摩羯座形状像个倒三角，是黄道上最暗的星座之一。`},{name:`水瓶座`,stars:[[0,0],[1.4,.5],[2.4,1],[2.9,.1],[2,-.7]],intro:`水瓶座在秋天出现，附近有著名的宝瓶座流星雨。`},{name:`双鱼座`,stars:[[0,0],[1.2,.4],[2.3,.8],[3.2,.4],[2.6,-.6]],intro:`双鱼座是黄道最后一宫，春分点现在就落在它里面。`}],Qs=Zs[0];function $s(){return Qs}function ec(e){return e*(Math.PI*2/Zs.length)+.4}function tc(e){return .62+e%3*.12}function nc(){return Zs.map((e,t)=>({id:`zodiac-`+e.name,title:e.name,night:!0,caption:e.intro,position:rc(ec(t),tc(t),Xs.domeRadius*.8)}))}function rc(e,t,n){return new D(Math.cos(t)*Math.cos(e)*n,Math.sin(t)*n,Math.cos(t)*Math.sin(e)*n)}function ic(e){let t=Zs.map((t,n)=>{let r=new f,i=ec(n),a=tc(n);for(let[e,n]of t.stars){let t=rc(i+e*.045,a+n*.045,Xs.domeRadius),o=new F(new je,new P({color:`#fdf6e3`,transparent:!0,opacity:0,depthWrite:!1}));o.raycast=()=>{},o.position.copy(t),o.scale.setScalar(Xs.starSize),o.lookAt(0,0,0),r.add(o)}return r.visible=!1,e.add(r),{group:r,stars:r.children}}),n=Et(4711),r=Array.from({length:Xs.meteorCount},()=>{let t=new P({color:`#fff6dd`,transparent:!0,opacity:0,depthWrite:!1}),r=new F(new je,t);return r.raycast=()=>{},e.add(r),{mesh:r,material:t,age:1,wait:n()*6,from:new D,direction:new D}}),i=0;return{update(e,a){i+=e;let o=a.night>.5,s=Math.floor(i/Xs.constellationSeconds)%Zs.length;Qs=Zs[s],t.forEach((e,t)=>{e.group.visible=o;let n=i%Xs.constellationSeconds/Xs.constellationSeconds,r=Math.min(1,Math.min(n,1-n)*6);for(let n of e.stars){let e=n.material;e.opacity=o&&t===s?.55+r*.45:0}});for(let t of r){if(!o||a.reduced){t.material.opacity=0,t.age=1;continue}if(t.age>Xs.meteorLife){if(t.wait-=e,t.wait>0){t.material.opacity=0;continue}let i=n()*Math.PI*2,a=.85+n()*.5;t.from.copy(rc(i,a,Xs.domeRadius*.9)),t.direction.set(n()*2-1,-.45-n()*.3,n()*2-1).normalize(),t.age=0;let o=n(),s=o<.62?1:o<.88?2+Math.floor(n()*2):5+Math.floor(n()*5),c=0;for(let e of r){if(c>=s)break;e.age<=Xs.meteorLife||(e.from.copy(rc(n()*Math.PI*2,.8+n()*.55,Xs.domeRadius*.9)),e.direction.set(n()*2-1,-.45-n()*.35,n()*2-1).normalize(),e.age=-c*.12,e.wait=Xs.meteorPeriod[0]+n()*(Xs.meteorPeriod[1]-Xs.meteorPeriod[0]),c+=1)}t.wait=Xs.meteorPeriod[0]+n()*(Xs.meteorPeriod[1]-Xs.meteorPeriod[0])}if(t.age+=e,t.age<0){t.material.opacity=0;continue}let i=Math.min(1,t.age/Xs.meteorLife),s=t.from.clone().addScaledVector(t.direction,i*90);t.mesh.position.copy(s),t.mesh.quaternion.setFromUnitVectors(new D(0,0,1),t.direction);let c=Xs.meteorLength*(1-i*.35);t.mesh.scale.set(.5,.5,c),t.material.opacity=(1-i)*.9}},current(){return Zs[Math.floor(i/Xs.constellationSeconds)%Zs.length]}}}function ac(e,t){let{x:n,z:r}=Xs.telescope,i=q+_a(n,r),a=new f;for(let[e,o]of[[.34,.2],[-.34,.2],[0,-.38]])a.add(t.beam([[n,i+1.05,r],[n+e,i,r+o]],.09,[`#6b5a49`,`wood`]));let o=t.cylinder([n,i+1.28,r],[.19,.24,1.5,8],[`#8a7a63`]);o.rotation.z=Math.PI/2,o.rotation.y=-.55,a.add(o),a.add(t.cylinder([n-.72,i+1.3,r+.42],[.15,.13,.22,8],[`#3f4a52`])),a.add(t.box([n,i+1.06,r],[.34,.1,.34],[`#7a6a58`,`wood`])),e.add(a)}var oc=[Xs.telescope.x+.2,q+_a(Xs.telescope.x,Xs.telescope.z)+1.32,Xs.telescope.z-.15],sc=[Xs.telescope.x-.5,Xs.telescope.x+.5,Xs.telescope.z-.5,Xs.telescope.z+.5],cc=5;function lc(e){return(t,n)=>{let r=Math.abs(n.speed);e(`engine`,{volume:t.sailing?(n.mode===`tour`?.29:.67)*Math.min(1,.28+r*.11):0,pitch:.77+r*.13});let i=Math.hypot(t.x-U.center.x,t.z-U.center.z),a=n.mobile?cc:Nt.effects.machine.range;e(`machine`,{volume:Math.max(0,1-i/a)*(t.lookout?.3:.52),pitch:t.lookout?.73:1});let{rain:o,snow:s}=n.weather;e(`rain`,{volume:o*.66}),e(`wind`,{volume:Math.max(s*.41,n.flightWind)})}}function uc({scene:e,camera:t,kit:n},r){let i=Ms(e,n,r.obstacles),a=pa(e,n),o=La(e,n),s=Za(e,n);return Fs(e,n),{residents:i,islands:a,gulls:o,seaLife:s,weather:qs(e),chimney:Ys(e),scope:Ls(e,{camera:t,onChange:r.onChange,targets:[...a.islands,...a.ships,...i.targets,...r.animals.targets,...nc(),{id:Fa.id,title:Fa.title,object:o.actor,height:.1}]}),ambience:lc(r.setAmbience)}}function dc(e){let{first:t}=xs,n=new D,r=new D,i=new ze,a=new Ge,o=0,s=0,c=0;return{get blend(){return o},get heading(){return c},update(l,u,d){let f=Number(d.enabled);o=d.instant?f:o+Math.sign(f-o)*Math.min(Math.abs(f-o),d.step/t.transition);let p=o*o*(3-2*o),m=u.yaw;if(c=m,s+=d.step*l.speed,!o){e.near!==Y.near&&(e.near=Y.near,e.updateProjectionMatrix());return}let h=d.bob&&!l.airborne&&!l.sailing?Math.sin(s*t.bobHz)*t.bob:0,g=l.sailing?t.helmEye:l.sitting?t.seatEye:t.eye;n.set(l.x,q+l.elevation+l.height+g+h,l.z);let _=Math.cos(u.pitch);r.set(-Math.sin(m)*_,-Math.sin(u.pitch),-Math.cos(m)*_).add(n),a.position.copy(n),a.lookAt(r),i.copy(e.quaternion),e.position.lerp(n,p),e.quaternion.copy(i).slerp(a.quaternion,p),e.near=x.lerp(Y.near,t.near,p),e.updateProjectionMatrix()}}}var fc=2,pc=.015;function mc(e){let t=W.cape,n=Math.min(t.rows,Math.floor(t.maxSegments/fc)),r=e.surface(t.color),i=new k(new je,r,n*fc);i.name=`harbor-flight-cape`,i.instanceMatrix.setUsage(M),i.visible=!1,i.frustumCulled=!1;let a=new Me;function o(e){if(i.visible=e.open>pc||t.alwaysVisible,!i.visible)return;let r=e.low?Math.ceil(n/2):n,o=Math.min(1,e.speed/W.speed),s=t.length*n/r*(.23+e.open*.77),c=e.open*(.16+t.flow*o),l=t.shoulder,u=t.rootBack;i.count=r*fc;for(let n=0;n<r;n++){let o=e.reduced?0:Math.sin(e.time*t.waveRate-n)*t.breeze,d=c+o*e.open,f=-e.bank*t.bank*e.open*n/r;for(let c=0;c<fc;c++){let p=t.width+e.open*t.spread*n/r;a.position.set(f+(c-.5)*p,l-Math.cos(d)*s/2,u-Math.sin(d)*s/2),a.rotation.set(d,0,o),a.scale.set(p,s+t.thickness/4,t.thickness),a.updateMatrix(),i.setMatrixAt(n*fc+c,a.matrix)}l-=Math.cos(d)*s,u-=Math.sin(d)*s}i.instanceMatrix.needsUpdate=!0}return{mesh:i,update:o}}function hc(e,t){let n=xs.reference,r=xs.variantPreview,i=t?{...n,...xs.variant,hair:xs.variant.hair||r.hair,coat:xs.variant.coat||r.coat,scarf:xs.variant.scarf||r.scarf}:n,a=e=>`#`+new L(e).lerp(new L(xs.neutral),xs.mutedMix).getHexString();return{...bs(e,{hair:a(i.hair),shirt:a(i.coat),trousers:i.trousers,boots:i.boots,hat:!1,skin:i.skin,badge:i.badge,hairstyle:i.hairstyle,traveler:!0,shoulderBag:i.shoulderBag}),scarfColor:i.scarf}}function gc(e,t){let n=new f,r=xs.scarfWidth;n.add(e.box([0,0,.01],[.41,.088,.4],[t]));let i=Array.from({length:xs.scarfSegments},()=>{let n=new f;return n.add(e.box([0,-.056,0],[r,.133,.046],[t])),n}),a=n;return i.forEach((e,t)=>{e.position.set(t?0:-.14,t?-.106:0,t?0:-.195),a.add(e),a=e}),{root:n,segments:i}}function _c(e,t,n){e.root.position.set(0,1.1+t.height,0);let r=n.reduced?.1:n.rain>.3?.38:1;e.segments.forEach((e,i)=>{e.visible=!n.low||i<xs.lowSegments;let a=Math.sin(n.time*1.5+i*.54)*xs.wind,o=Math.min(t.speed*.17,.54),s=t.airborne?Math.max(-.27,Math.min(.32,n.vertical*.095)):0,c=(i?a*.7:-o-s+a)*r,l=Ts(n.step,xs.scarfResponse+i*.035);e.rotation.x=x.lerp(e.rotation.x,c,l),e.rotation.z=x.lerp(e.rotation.z,(a+n.turn*.8)*r,l)})}function vc(e,t){let n={traveler:hc(t,!1),variant:hc(t,!0),original:bs(t)},r={traveler:gc(t,n.traveler.scarfColor),variant:gc(t,n.variant.scarfColor)};n.traveler.avatar.add(r.traveler.root),n.variant.avatar.add(r.variant.root);let i=Ss(t);i.name=`harbor-player-umbrella`;let a=mc(t);e.add(...Object.values(n).map(e=>e.avatar),i);let o=0,s=0,c=0,l=0;return(e,t)=>{let{appearance:u}=t.settings,d=n[u],f=t.simplified||t.settings.quality===`low`;for(let e of Object.values(n))e.avatar.visible=e===d&&t.first<xs.first.hideBlend&&!t.mounted;o+=t.seconds;let p=(e.height-s)/Math.max(t.seconds,.016),m=Math.atan2(Math.sin(e.facing-c),Math.cos(e.facing-c));s=e.height,c=e.facing;let h=Number(t.flying),g=t.seconds/W.cape.transition;l=t.reduced?h:l+Math.sign(h-l)*Math.min(g,Math.abs(h-l));let _=l*l*(3-2*l);a.mesh.parent!==d.detailAnchor&&d.detailAnchor.add(a.mesh),a.update({open:_,time:o,low:f,speed:e.speed,reduced:t.reduced,bank:t.bank}),d.setFlightPose({blend:_,lean:_*W.pose.lean*Math.min(1,e.speed/W.speed),bank:-_*t.bank*W.pose.bank,arms:_*W.pose.arms}),d.setFishingArm(t.fishingArm),d.update(e,t.seconds,t.reduced),d.swingCoat(f||t.reduced?0:Math.sin(o*6.6)*Math.min(e.speed*.015,xs.coatSwing)),u!==`original`&&_c(r[u],e,{time:o,step:t.seconds,rain:t.rain,reduced:t.reduced,low:f,turn:m,vertical:p}),i.visible=!t.flying&&t.fishingArm===void 0&&t.rain>.25;let v=t.first>xs.first.hatBlend,y=v?t.yaw+Math.PI:e.facing,b=Math.cos(y)*.29+Math.sin(y)*(v?.41:.08),x=-Math.sin(y)*.29+Math.cos(y)*(v?.41:.08);i.position.set(e.x+b,q+e.elevation+e.height+(v?1.3:1.01),e.z+x),i.rotation.set(0,y,t.reduced?0:Math.sin(o*6)*e.speed*.012)}}var yc={background:`#8a694c`,text:`#fff0d4`,font:`"Microsoft YaHei", sans-serif`,width:1.38,height:.34,mountHeight:1.83,canvas:[144,35],fontSize:19};function bc(e,t,n){let{canvas:r,context:i}=Dt(yc.canvas[0],yc.canvas[1]);i.fillStyle=yc.background,i.fillRect(0,0,r.width,r.height),i.fillStyle=yc.text,i.textAlign=`center`,i.textBaseline=`middle`,i.font=`bold ${yc.fontSize}px ${yc.font}`,i.fillText(e,r.width/2,r.height/2);let a=new F(new ye(yc.width,yc.height),new P({map:Mt(r),side:2}));return a.position.set(t[0],t[1],t[2]),a.rotation.y=n,a}var xc={route:[[-21.3,-3.9],[-21.1,2.9]],door:{x:-22.15,z:-2.9},doorApproach:{x:-21.9,z:.2},walkSpeed:1.4,radius:.26,restYaw:Math.PI/2,nightFrom:.6,rainFrom:.4,hideDistance:.3},Sc={x:-22.15,z:.55,yaw:Math.PI/2,elevation:q},Cc=[`#6b4a34`],wc=[`#4a3324`],Tc=[`#d8894a`];function Ec(e,t){let n=e.box([.02,1.15,.28],[.022,.022,.16],Cc);n.rotation.x=-.22,t.add(n);let r=e.box([.02,1.14,.37],[.045,.05,.045],wc);t.add(r),t.add(e.box([.02,1.17,.37],[.03,.012,.03],Tc))}var Dc=[`#8a6b4e`,`wood`],Oc=[`#c8b79a`,`wood`];function kc(e){let t=new f;t.add(e.box([0,.28,0],[.92,.1,.56],Dc)),t.add(e.box([0,.36,0],[.8,.06,.48],Oc));let n=e.box([0,.95,-.69],[.94,1.1,.1],Dc);n.rotation.x=-.62;let r=e.box([0,1.5,-.79],[1.02,.1,.14],Dc);r.rotation.x=-.62,t.add(r,n);for(let n of[-1,1])t.add(e.box([n*.42,.14,.22],[.08,.28,.08],Dc)),t.add(e.box([n*.42,.2,-.24],[.08,.4,.08],Dc));for(let n of[-1,1])for(let r=0;r<9;r++){let i=(r+.5)/9-.5,a=.16*i*i*4,o=e.box([n*.42,.04+a,i*1.34],[.09,.06,.16088888888888891],Dc);o.rotation.x=-i*1.15,t.add(o)}return t}function Ac(e,t,n){let r=bs(t,{hair:`#cdc6bd`,skin:`#d9b394`,shirt:`#4d5a68`,trousers:`#3d454e`,hat:!1,headwear:`bandana`});Ec(t,r.head),e.add(r.avatar),e.add(bc(`守塔人小屋`,[-2.69,q+yc.mountHeight,-19.15],0));let i=kc(t);i.rotation.order=`YXZ`,i.rotation.y=Sc.yaw,i.position.set(Sc.x,q+_a(Sc.x,Sc.z),Sc.z),e.add(i);let a=0,[o,s]=xc.route[0],c={x:o,z:s,facing:xc.restYaw,speed:0,height:0,elevation:0,airborne:!1,jumpAge:0,landing:0,sailing:!1,sitting:!1,lookout:!1,swimming:!1},l=1,u=!1,d=0;function f(e,t,o,s){a+=o,i.rotation.x=Math.sin(a*1.1)*.045;let f=e>xc.nightFrom||t>xc.rainFrom;if(f&&!u){let e=xc.doorApproach,t=c.x<-22.2&&Math.hypot(e.x-c.x,e.z-c.z)>.5?e:xc.door,n=t.x-c.x,i=t.z-c.z,a=Math.hypot(n,i);a<xc.hideDistance&&t===xc.door?(u=!0,r.avatar.visible=!1):p(n,i,a,o)}else if(!f&&u)u=!1,r.avatar.visible=!0,Object.assign(c,{x:xc.door.x,z:xc.door.z,speed:0}),l=0;else if(u){r.update(c,o,s);return}else if(d>0)d-=o,c.speed=0;else{let[e,t]=xc.route[l],n=e-c.x,r=t-c.z,i=Math.hypot(n,r);i<.18?(l=(l+1)%xc.route.length,d=1.2+Math.random()*1.6,c.speed=0):p(n,r,i,o)||(d=.8,l=(l+1)%xc.route.length)}c.elevation=_a(c.x,c.z),c.height=0,r.update(c,o,s);function p(e,t,r,i){let a=Math.min(xc.walkSpeed*i,r),o=c.x+e/r*a,s=c.z+t/r*a;return Zo(o,s,{obstacles:n,height:0,radius:xc.radius})?(c.x=o,c.z=s,c.facing=Es(c.facing,Math.atan2(e,t),Ts(i,.22)),c.speed=xc.walkSpeed,!0):(c.speed=0,!1)}}return{update:f,pose:c,avatar:r.avatar}}var jc=`#819471`,Mc=`#8c8878`;function Nc(e,t){return q+pt(e,t)}function Pc(e,t){let[n,r,i,a]=t,o=[[n,i],[r,i],[r,a],[n,a]],s=o.flatMap(([e,t])=>[e,Nc(e,t),t]).concat(o.flatMap(([e,t])=>[e,-.72,t])),c=new Ue;return c.setAttribute(`position`,new Fe(s,3)),c.setAttribute(`uv`,new Fe([0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1],2)),c.setIndex([0,2,1,0,3,2,0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6,3,0,4,3,4,7]),c.addGroup(0,6,0),c.addGroup(6,24,1),c.computeVertexNormals(),new F(c,[e.surface(jc,`grass`),e.surface(Mc,`brick`)])}var Fc=wt.footprints.flatMap(([e,t,n,r])=>{let i=[e,...[wt.summitAt,wt.riseFrom].filter(n=>n>e&&n<t),t];return i.slice(1).map((e,t)=>[i[t],e,n,r])});function Ic(){let e=Et(wt.treeSeed);return Array.from({length:wt.treeCount},(t,n)=>{let[r,i,a,o]=wt.footprints[n%wt.footprints.length];return{x:r+(i-r)*(.08+e()*.84),z:n%2==0?a+.48:o-.48,size:.8+e()*.45}}).filter(({x:e})=>e>wt.summitAt).filter(({x:e,z:t})=>Math.hypot(e+46.5,t+6)>5).filter(({x:e,z:t})=>Math.hypot(e+47.1,t+7.8)>2.1)}var Lc=Ic();function Rc(e,t,n){return[e-n,e+n,t-n,t+n]}var zc=Lc.map(({x:e,z:t})=>Rc(e,t,.14)),Bc=[[.62,.24,1.24,`#725440`],[1.39,.92,.77,`#c0562f`],[1.89,.63,.41,`#d98736`]],Vc=Lc.flatMap(({x:e,z:t,size:n})=>Bc.map(([r,i,a])=>({footprint:Rc(e,t,i*n/2),base:Nc(e,t)+(r-a/2)*n,height:a*n})));function Hc(e,t){let n=new Me;for(let[r,i,a,o]of Bc){let s=t.box([0,0,0],[1,1,1],[o]),c=new k(s.geometry,s.material,Lc.length);Lc.forEach(({x:e,z:t,size:o},s)=>{n.position.set(e,Nc(e,t)+r*o,t),n.scale.set(i*o,a*o,i*o),n.updateMatrix(),c.setMatrixAt(s,n.matrix)}),e.add(c)}}function Uc(e,t){for(let n of Fc)e.add(Pc(t,n));Hc(e,t);let{canvas:n,context:r}=Dt(128,32);r.fillStyle=`#896a50`,r.fillRect(0,0,128,32),r.fillStyle=`#fff0d4`,r.font=`bold 19px sans-serif`,r.textAlign=`center`,r.fillText(wt.title,64,23);let i=new F(new ye(1.12,.28),new P({map:Mt(n),side:2}));i.position.set(-24.8,q+1.26,-11.88),i.rotation.y=Math.PI/2,e.add(i,t.box([-24.8,q+.61,-11.88],[.12,1.22,.12],[`#896a50`]))}var Wc={x:-7.76,z:-20.84,trunkHeight:2.2,crown:3.3,petalCount:26,petalColor:[`#f3c9d6`,`#eab4c6`,`#f7dde6`],fallTop:4.1,fallSpeed:.62,driftRadius:1.7},Gc=[`#6b4f43`,`wood`],Kc=[`#e7b6c6`,`grass`],qc=[`#f2cdd9`,`grass`],Jc=[`#d79cb0`,`grass`],Yc=[Wc.x-.35,Wc.x+.35,Wc.z-.35,Wc.z+.35];function Xc(e,t){let{x:n,z:r}=Wc,i=Wc.trunkHeight;e.add(t.box([n,q+i/2,r],[.36,i,.36],Gc));for(let a of[-1,1])e.add(t.beam([[n,q+i*.62,r],[n+a*1.05,q+i+.45,r+a*.35]],.2,Gc));let a=[Wc.crown,Wc.crown*.78,Wc.crown*.5],o=[.52,.44,.34],s=[0,.46,.86],c=[Kc,qc,Jc];a.forEach((a,l)=>{e.add(t.box([n,q+i+s[l]+o[l]/2,r],[a,o[l],a*.94],c[l]))})}function Zc(e){let t=Et(9137),n=Array.from({length:Wc.petalCount},(n,r)=>{let i=new P({color:Wc.petalColor[r%Wc.petalColor.length],side:2}),a=new F(new je,i);return a.raycast=()=>{},e.add(a),{mesh:a,offset:t()*Wc.fallTop,angle:t()*Math.PI*2,radius:.5+t()*Wc.driftRadius,spin:.6+t()*1.4,size:.09+t()*.07}}),r=0;return{update(e,t){r+=e;for(let e of n){if(t){e.mesh.visible=!1;continue}e.mesh.visible=!0;let n=(r*Wc.fallSpeed+e.offset)%Wc.fallTop,i=q+Wc.fallTop-n,a=Math.sin(r*.7+e.angle)*.45;e.mesh.position.set(Wc.x+Math.cos(e.angle+a*.4)*(e.radius+n*.16),i,Wc.z+Math.sin(e.angle+a*.4)*(e.radius+n*.16)),e.mesh.rotation.set(r*e.spin+e.angle,r*e.spin*.7,a*.8),e.mesh.scale.set(e.size,e.size*.32,e.size)}}}}var Qc={x:-48.12,z:-4.79,trunkHeight:3.8,crown:10.5,leafCount:44,fallTop:9.9,fallSpeed:.52,driftRadius:4.4,colors:[`#c0562f`,`#cf7a34`,`#d9a13d`,`#a8432a`]},$c=[`#6b4f43`,`wood`],el=[Qc.x-.5,Qc.x+.5,Qc.z-.5,Qc.z+.5];function tl(e){return[Qc.colors[e%Qc.colors.length],`grass`]}function nl(e,t){let{x:n,z:r}=Qc,i=q+_a(n,r),a=Qc.trunkHeight;e.add(t.box([n,i+a/2,r],[.72,a,.72],$c));for(let[o,s]of[[1,1],[1,-1],[-1,1],[-1,-1]])e.add(t.beam([[n,i+a*.72,r],[n+o*3.1,i+a+1.9,r+s*1.5]],.3,$c));[{y:6,width:Qc.crown,depth:Qc.crown*.95,height:1.7},{y:7.3,width:Qc.crown*.82,depth:Qc.crown*.78,height:1.6},{y:8.4,width:Qc.crown*.6,depth:Qc.crown*.57,height:1.4},{y:9.3,width:Qc.crown*.34,depth:Qc.crown*.32,height:1.1}].forEach((a,o)=>{e.add(t.box([n,i+a.y,r],[a.width,a.height,a.depth],tl(o)))})}function rl(e){let t=Et(5527),n=q+_a(Qc.x,Qc.z),r=Array.from({length:Qc.leafCount},(n,r)=>{let i=new P({color:Qc.colors[r%Qc.colors.length],side:2}),a=new F(new je,i);return a.raycast=()=>{},e.add(a),{mesh:a,offset:t()*Qc.fallTop,angle:t()*Math.PI*2,radius:1.2+t()*Qc.driftRadius,spin:.8+t()*1.8,size:.2+t()*.12}}),i=0;return{update(e,t){i+=e;for(let e of r){if(t){e.mesh.visible=!1;continue}e.mesh.visible=!0;let r=(i*Qc.fallSpeed+e.offset)%Qc.fallTop,a=Math.sin(i*.8+e.angle)*.6;e.mesh.position.set(Qc.x+Math.cos(e.angle+a*.5)*(e.radius+r*.1),n+Qc.fallTop-r,Qc.z+Math.sin(e.angle+a*.5)*(e.radius+r*.1)),e.mesh.rotation.set(i*e.spin+e.angle,i*e.spin*.8,a),e.mesh.scale.set(e.size,e.size*.16,e.size*.8)}}}}var Q={center:{x:-25.25,z:-21.52},area:{x0:-29.2,x1:-21.3,z0:-24.4,z1:-17.2},count:36,height:[4.6,7.2],seed:7731,pandaCount:3,pandaWalk:.55,climbSpeed:.32,sitTime:[5,10],topTime:[6,11]},il=[`#8aae5f`],al=[`#7a9c53`],ol=[`#6f9e52`,`grass`],sl=[`#efe9df`],cl=[`#2f2b28`],ll=[`#7d6248`,`wood`],ul=[`#94775a`,`wood`],dl={x0:-29.2,x1:-21.3,z0:-24.4,z1:-17.2,gateWidth:2.6,height:1},fl=(()=>{let{x0:e,x1:t,z0:n,z1:r,gateWidth:i}=dl,a=Q.center.x,o=i/2,s=.14;return[[e-s,t+s,n-s,n+s],[e-s,e+s,n,r],[t-s,t+s,n,r],[e-s,a-o,r-s,r+s],[a+o,t+s,r-s,r+s]]})();function pl(e,t){let{x0:n,x1:r,z0:i,z1:a,gateWidth:o,height:s}=dl,c=Q.center.x,l=o/2,u=(n,r,i,a)=>{let o=Math.hypot(i-n,a-r),c=Math.max(2,Math.round(o/1.5)+1);for(let o=0;o<c;o+=1){let l=o/(c-1);e.add(t.box([n+(i-n)*l,q+s/2,r+(a-r)*l],[s/9,s,s/9],ll))}for(let o of[.36,.74])e.add(t.beam([[n,q+o,r],[i,q+o,a]],.07,ul))};u(n,i,r,i),u(n,i,n,a),u(r,i,r,a),u(n,a,c-l,a),u(c+l,a,r,a);for(let n of[-1,1])e.add(t.box([c+n*l,q+s*.62,a],[.2,s*1.24,.2],ll))}function ml(e,t=30){let n=Et(9187),r=[`#7fa855`,`#93b96a`,`#6b9448`],i=Array.from({length:t},(t,i)=>{let a=new P({color:r[i%r.length],side:2}),o=new F(new je,a);return o.raycast=()=>{},e.add(o),{mesh:o,offset:n()*5,angle:n()*Math.PI*2,x:Q.area.x0+n()*(Q.area.x1-Q.area.x0),z:Q.area.z0+n()*(Q.area.z1-Q.area.z0),spin:.7+n()*1.6,size:.16+n()*.12}}),a=0;return{update(e,t){a+=e;for(let e of i){if(t){e.mesh.visible=!1;continue}e.mesh.visible=!0;let n=(a*.42+e.offset)%5,r=Math.sin(a*.9+e.angle)*.5;e.mesh.position.set(e.x+r,q+5.4-n,e.z+Math.cos(a*.7+e.angle)*.4),e.mesh.rotation.set(a*e.spin+e.angle,a*e.spin*.6,r),e.mesh.scale.set(e.size*.5,e.size*.1,e.size)}}}}function hl(){let e=Et(Q.seed),t=[],n=0;for(;t.length<Q.count&&n<Q.count*40;){n+=1;let r=Q.area.x0+e()*(Q.area.x1-Q.area.x0),i=Q.area.z0+e()*(Q.area.z1-Q.area.z0);if(!ht(r,i))continue;let a=Q.height[0]+e()*(Q.height[1]-Q.height[0]);t.push({x:r,z:i,height:a,lean:(e()-.5)*.14})}return t}function gl(e,t){let n=hl(),r=new Me,i=new pe(.085,.12,1,6),a=new k(i,t.surface(...il),n.length);a.frustumCulled=!1,a.raycast=()=>{};let o=t.box([0,0,0],[1,1,1],ol),s=new k(o.geometry,o.material,n.length*3);return s.frustumCulled=!1,s.raycast=()=>{},n.forEach((e,t)=>{let n=q+_a(e.x,e.z);r.position.set(e.x,n+e.height/2,e.z),r.rotation.set(e.lean,0,e.lean*.6),r.scale.set(1,e.height,1),r.updateMatrix(),a.setMatrixAt(t,r.matrix);for(let i=0;i<3;i+=1){let a=(t*1.7+i*2.1)%(Math.PI*2),o=n+e.height*(.62+i*.13);r.position.set(e.x+Math.cos(a)*.45,o,e.z+Math.sin(a)*.45),r.rotation.set(0,a,0),r.scale.set(1.05,.1,.55),r.updateMatrix(),s.setMatrixAt(t*3+i,r.matrix)}}),a.instanceMatrix.needsUpdate=!0,s.instanceMatrix.needsUpdate=!0,e.add(a,s),{stalks:n}}function _l(e){let t=new f,n=[];t.add(e.box([0,.62,0],[.95,.72,1.22],sl)),t.add(e.box([0,.62,-.2],[.97,.5,.62],cl));let r=e.box([0,1.08,-.86],[.56,.5,.5],sl);t.add(r);for(let n of[-1,1])t.add(e.box([n*.26,1.34,-.86],[.16,.16,.1],cl)),t.add(e.box([n*.16,1.1,-1.11],[.15,.16,.04],cl)),t.add(e.box([n*.3,.62,-.42],[.18,.62,.18],cl));t.add(e.box([0,.52,-1.05],[.16,.12,.12],cl));for(let[r,i]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let a=e.box([r*.3,.18,i*.4],[.22,.36,.22],cl);n.push(a),t.add(a)}let i=e.box([.34,.86,-1.16],[.07,.07,1.1],al);return i.rotation.x=.5,t.add(i),{root:t,legs:n,head:r,snack:i}}function vl(e,t,n){let r=Et(2917),i=[];for(let n=0;n<Q.pandaCount;n+=1){let a=_l(t),o=n*2.1+.6,s=Q.center.x+Math.cos(o)*2.6,c=Q.center.z+Math.sin(o)*1.6;a.root.rotation.order=`YXZ`,e.add(a.root),i.push({root:a.root,legs:a.legs,head:a.head,snack:a.snack,x:s,z:c,yaw:r()*Math.PI*2,phase:0,state:`sit`,timer:3+r()*4,climb:0,goingUp:!0,stalk:null,target:{x:s,z:c}})}let a=()=>({x:Q.area.x0+1+r()*(Q.area.x1-Q.area.x0-2),z:Q.area.z0+1+r()*(Q.area.z1-Q.area.z0-2)});return{update(e,t){let o=i.filter(e=>e.state===`climb`).length;for(let s of i){let i=0;if(s.state===`climb`&&s.stalk){let t=Math.hypot(s.stalk.x-s.x,s.stalk.z-s.z);if(s.climb===0&&t>.55){let n=Math.atan2(s.stalk.x-s.x,s.stalk.z-s.z),r=Math.min(Q.pandaWalk*e,t);s.x+=Math.sin(n)*r,s.z+=Math.cos(n)*r,s.yaw+=Math.atan2(Math.sin(n-s.yaw),Math.cos(n-s.yaw))*Math.min(1,e*8)}else s.goingUp?(s.climb=Math.min(1,s.climb+e*Q.climbSpeed),s.climb>=1&&(s.timer-=e,s.timer<=0&&(s.goingUp=!1))):(s.climb=Math.max(0,s.climb-e*Q.climbSpeed*1.4),s.climb===0&&(s.state=`sit`,s.timer=Q.sitTime[0]+r()*(Q.sitTime[1]-Q.sitTime[0]),s.stalk=null));i=s.climb*Math.max(0,(s.stalk?.height??0)-1.5)}else if(s.state===`walk`){let n=Math.hypot(s.target.x-s.x,s.target.z-s.z),i=Math.atan2(s.target.x-s.x,s.target.z-s.z),a=Math.min(Q.pandaWalk*e,n);n>.2?(s.x+=Math.sin(i)*a,s.z+=Math.cos(i)*a,s.yaw+=Math.atan2(Math.sin(i-s.yaw),Math.cos(i-s.yaw))*Math.min(1,e*7)):(s.state=`sit`,s.timer=Q.sitTime[0]+r()*(Q.sitTime[1]-Q.sitTime[0])),s.phase+=(t.reduced?0:e)*9}else s.timer-=e,s.phase+=(t.reduced?0:e)*2.2,s.timer<=0&&(o===0&&n.length>0&&r()<.55?(s.state=`climb`,s.climb=0,s.goingUp=!0,s.stalk=n[Math.floor(r()*n.length)],s.timer=Q.topTime[0]+r()*(Q.topTime[1]-Q.topTime[0])):(s.state=`walk`,s.target=a()));let c=q+_a(s.x,s.z);s.root.position.set(s.x,c+i,s.z),s.root.rotation.y=s.yaw,s.root.rotation.x=s.state===`climb`?-.18:0,s.snack.visible=s.state===`sit`;let l=t.reduced?0:Math.sin(s.phase)*.22;s.legs.forEach((e,t)=>{e.rotation.x=t%2?l:-l}),s.head.rotation.x=s.state===`sit`?.18+Math.sin(s.phase*.8)*.08:0}}}}var yl={id:`swordsman`,name:`宁归一`,route:[[-40.6,-5.6],[-37.4,-7.6]],walkSpeed:1.3,flightEvery:[13,19],flightSeconds:5.2,flightHeight:3.2},bl=[`#cfd6dc`],xl=[`#b08a4e`];function Sl(e,t){let n=bs(t,{hair:`#2f3237`,shirt:`#41506b`,trousers:`#2c313a`,hat:!1,headwear:`bandana`}),r=t.box([0,.62,-.2],[.07,1.5,.12],xl);r.rotation.z=.5,n.detailAnchor.add(r);let i=new f;i.add(t.box([0,0,.15],[.26,.06,1.9],bl)),i.add(t.box([0,0,1.22],[.18,.05,.3],bl)),i.add(t.box([0,0,-.92],[.4,.08,.12],xl)),i.add(t.box([0,0,-1.12],[.13,.09,.3],xl)),i.visible=!1,n.avatar.add(i),n.avatar.add(bc(yl.name,[0,yc.mountHeight+.28,0],0)),e.add(n.avatar);let[a,o]=yl.route[0],s={x:a,z:o,facing:0,speed:0,height:0,elevation:_a(a,o),airborne:!1,jumpAge:0,landing:0,sailing:!1,sitting:!1,lookout:!1,swimming:!1},c=1,l=7,u=-1,d={x:a,z:o},p={x:a,z:o};function m(e,t){let r=yl.route;if(u>=0){u=Math.min(1,u+e/yl.flightSeconds);let t=u;s.x=d.x+(p.x-d.x)*t,s.z=d.z+(p.z-d.z)*t,s.height=Math.sin(Math.PI*t)*yl.flightHeight,s.airborne=!0,s.facing=Es(s.facing,Math.atan2(p.x-d.x,p.z-d.z),Ts(e,.3)),i.visible=!0,u>=1&&(u=-1,s.airborne=!1,s.height=0,i.visible=!1,l=yl.flightEvery[0])}else if(l-=e,l<=0){d={x:s.x,z:s.z};let e=r[c%r.length];p={x:e[0],z:e[1]},u=0}else{let t=r[c],n=t[0]-s.x,i=t[1]-s.z,a=Math.hypot(n,i);if(a<.25)c=(c+1)%r.length,s.speed=0;else{let t=Math.min(yl.walkSpeed*e,a);s.x+=n/a*t,s.z+=i/a*t,s.facing=Es(s.facing,Math.atan2(n,i),Ts(e,.25)),s.speed=yl.walkSpeed}}s.elevation=_a(s.x,s.z),i.position.y=-s.height+.04,i.rotation.z=s.airborne?.1:0,n.update(s,t?0:e,t)}return{update:m,pose:s,avatar:n.avatar}}yl.route[0][0],yl.route[0][1];var Cl={bed:{x:-7.49,z:-6.57,radius:7.5},pod:{x:-9,z:6.78,radius:1.9},critters:18,pickRadius:3.2,pickChance:.45,bob:.05},wl=[[`#e8d6b8`],[`#d8a58a`],[`#f0e2c6`],[`#c9b190`]];function Tl(e){let t=new f;t.add(e.box([0,.1,0],[.3,.14,.26],[`#c1553f`])),t.add(e.box([0,.12,.16],[.22,.12,.12],[`#d76b4c`]));for(let n of[-1,1]){t.add(e.box([n*.14,.18,.16],[.03,.14,.03],[`#3f3330`]));for(let r of[-1,0,1])t.add(e.box([n*.2,.06,r*.1],[.18,.03,.03],[`#a8412f`]))}return t}function El(e){let t=new f;return t.add(e.box([0,.07,0],[.11,.09,.3],[`#e79c86`])),t.add(e.box([0,.07,.2],[.09,.08,.12],[`#f0b3a0`])),t.add(e.box([0,.1,-.2],[.12,.03,.12],[`#d98a76`])),t}function Dl(e,t){let n=new f;return n.add(e.box([0,.03,0],[.18,.06,.16],t)),n.add(e.box([0,.06,-.02],[.12,.05,.1],t)),n}function Ol(e,t){let n=Et(6067),r=[],i=0;for(;r.length<Cl.critters&&i<Cl.critters*60;){i+=1;let a=n()*Math.PI*2,o=Math.sqrt(n())*Cl.bed.radius,s=Cl.bed.x+Math.cos(a)*o,c=Cl.bed.z+Math.sin(a)*o;if(ht(s,c))continue;let l=n(),u=l<.34?`crab`:l<.62?`shrimp`:`shell`,d=u===`crab`?Tl(t):u===`shrimp`?El(t):Dl(t,wl[Math.floor(n()*wl.length)]),f=n()*Math.PI*2;d.rotation.y=f,d.position.set(s,.07,c),d.scale.setScalar(.8+n()*.5),e.add(d),r.push({mesh:d,kind:u,x:s,z:c,bob:n()*12,period:8+n()*6,taken:!1,yaw:f})}let a=[0,1].map(n=>{let r=new f;r.add(t.box([0,.12,0],[.46,.4,1.5],[`#8fb0bd`])),r.add(t.box([0,.02,0],[.42,.16,1.4],[`#dcecef`])),r.add(t.box([0,.06,.78],[.24,.18,.4],[`#8fb0bd`])),r.add(t.box([0,.3,-.1],[.1,.34,.3],[`#7c9aa8`])),r.add(t.box([0,.12,-.82],[.5,.07,.34],[`#7c9aa8`])),r.add(t.box([0,.16,-.82],[.1,.22,.3],[`#7c9aa8`]));for(let e of[-1,1])r.add(t.box([e*.19,.2,.5],[.04,.04,.04],[`#2f3238`]));return r.rotation.order=`YXZ`,e.add(r),{group:r,angle:n*Math.PI,pet:0,hop:0,time:0,offset:n*5.5}});function o(e,t){for(let n of r){if(n.taken)continue;n.bob+=e;let r=n.bob%n.period<3.2?.07+(t?0:Math.sin(n.bob*1.6)*Cl.bob):-.22,i=n.mesh.position.y+(r-n.mesh.position.y)*Math.min(1,e*4);n.mesh.position.y=i,n.mesh.visible=i>-.05}for(let t of a){t.time+=e;let n=t.pet>0?1.1:.34,r=t.angle+e*n,i=Cl.pod.radius,a=e=>ht(Cl.pod.x+Math.cos(e)*i,Cl.pod.z+Math.sin(e)*i)===!1;if(!a(r)){for(let e=1;e<=8;e+=1)if(a(r+e*.25)){r+=e*.25;break}}t.angle=r,t.pet>0&&(t.pet=Math.max(0,t.pet-e));let o=Cl.pod.x+Math.cos(t.angle)*i,s=Cl.pod.z+Math.sin(t.angle)*i,c=(t.time+t.offset)%12,l=c<4?Math.min(1,c/.9):Math.max(0,1-(c-4)/1.4),u=t.pet>0?Math.sin((1-t.pet/1.4)*Math.PI)*.55:0;t.group.position.set(o,-.5+l*.66+u,s),t.group.rotation.y=-t.angle-Math.PI/2,t.group.rotation.z=t.pet>0?Math.sin(t.pet*14)*.2:0,t.group.visible=l>.05||u>.01}}return o(0,!0),{update:o,pick(e,t){let n=r.filter(n=>!n.taken&&n.mesh.position.y>-.02&&Math.hypot(n.x-e,n.z-t)<=Cl.pickRadius);if(!n.length||Math.random()>Cl.pickChance)return null;let i=n[Math.floor(Math.random()*n.length)];return i.taken=!0,i.mesh.visible=!1,i.kind===`crab`?`一只小螃蟹`:i.kind===`shrimp`?`一只小虾`:`一枚贝壳`},nearestDolphin(e,t){let n=null,r=3.6;for(let i of a){let a=Math.hypot(i.group.position.x-e,i.group.position.z-t);a<r&&(r=a,n=i)}return n},pet(e){e.pet=1.4},inBed(e,t){return Math.hypot(e-Cl.bed.x,t-Cl.bed.z)<=Cl.bed.radius}}}var kl={top:6.56,beds:[{x:-4,z:52.5,w:4,d:3,crops:[`cabbage`,`radish`]},{x:-4,z:56.5,w:4,d:3,crops:[`chili`,`strawberry`]},{x:2,z:52.5,w:4,d:3,crops:[`watermelon`]}]},Al=[`#3d2f26`],jl=[`#8a6a4a`,`wood`],Ml=[`#6f9e52`,`grass`],Nl=[`#557f43`];function Pl(e,t,n){let r=new f;if(t===`cabbage`)r.add(e.box([0,.12,0],[.34,.24,.34],Ml)),r.add(e.box([0,.24,0],[.24,.16,.24],Nl));else if(t===`radish`)r.add(e.box([0,.18,0],[.22,.12,.22],[`#e8ddd0`])),r.add(e.box([0,.26,0],[.1,.14,.1],[`#c15a6a`])),r.add(e.box([0,.36,0],[.22,.1,.22],Ml));else if(t===`chili`){r.add(e.box([0,.2,0],[.26,.4,.26],Nl));for(let[t,i]of[[.1,.1],[-.1,.05],[.02,-.11]])r.add(e.box([t,.32+n%2*.06,i],[.06,.16,.06],[`#cf4b3a`]))}else if(t===`strawberry`){r.add(e.box([0,.14,0],[.3,.2,.3],Ml));for(let[t,n]of[[.08,.08],[-.09,.02],[.01,-.1]])r.add(e.box([t,.22,n],[.08,.08,.08],[`#d7455a`]))}else{r.add(e.box([0,.1,0],[.42,.14,.42],Nl)),r.add(e.box([0,.24,0],[.36,.24,.34],[`#5f8b42`]));for(let t of[-.09,.09])r.add(e.box([t,.24,0],[.05,.25,.35],[`#3f6b30`]))}return r}function Fl(e,t){for(let n of kl.beds){let{x:r,z:i,w:a,d:o,crops:s}=n,c=kl.top;e.add(t.box([r,c+.06,i],[a,.12,o],Al));for(let n of[-1,1])e.add(t.box([r,c+.16,i+n*o/2],[a+.16,.2,.12],jl)),e.add(t.box([r+n*a/2,c+.16,i],[.12,.2,o+.16],jl));for(let n=0;n<2;n+=1){let l=s[n%s.length];for(let s=0;s<4;s+=1){let u=r-a/2+(s+.5)*(a/4),d=i-o/2+(n+.5)*(o/2),f=Pl(t,l,s+n);f.position.set(u,c+.12,d),f.rotation.y=(s*1.3+n)%(Math.PI*2),e.add(f)}}}}var Il=[`#6b4f43`,`wood`],Ll=[`#5d7f4a`,`grass`],Rl=[`#8a6a48`,`wood`],zl=[`#4f7d46`,`grass`],Bl=[`#d8c8a6`],Vl=[`#5f8b42`],Hl={ground:6.59,rowZ:58.6,trees:[{x:-22.8,name:`橘子`,fruit:`#e8933a`,leaf:`#5f8f46`},{x:-20.4,name:`苹果`,fruit:`#c8402f`,leaf:`#4f7d3f`},{x:-18,name:`桃子`,fruit:`#e394a8`,leaf:`#5f8f46`},{x:-15.6,name:`柠檬`,fruit:`#e8cf4a`,leaf:`#6a9a4a`},{x:-13.2,name:`梨`,fruit:`#a8c35a`,leaf:`#4f7d3f`},{x:-10.8,name:`樱桃`,fruit:`#b8324a`,leaf:`#5f8f46`},{x:-8.4,name:`橘子`,fruit:`#e8933a`,leaf:`#5f8f46`},{x:-6,name:`苹果`,fruit:`#c8402f`,leaf:`#4f7d3f`},{x:-3.6,name:`桃子`,fruit:`#e394a8`,leaf:`#5f8f46`},{x:-1.2,name:`柠檬`,fruit:`#e8cf4a`,leaf:`#6a9a4a`},{x:1.2,name:`梨`,fruit:`#a8c35a`,leaf:`#4f7d3f`},{x:3.6,name:`樱桃`,fruit:`#b8324a`,leaf:`#5f8f46`}],coconuts:[{x:-25.3,z:42,ripe:!0},{x:-25.3,z:48,ripe:!1},{x:-25.3,z:54,ripe:!0},{x:7.2,z:42,ripe:!1},{x:7.2,z:48,ripe:!0},{x:7.2,z:54,ripe:!1}],coconutGround:5.04};function Ul(e,t,n){let r=new f;r.add(e.box([0,1,0],[.28,2,.28],Il));let i=n;r.add(e.box([0,2.5,0],[2.2,1.2,2.1],[i,`grass`])),r.add(e.box([.3,3.25,-.2],[1.5,.9,1.5],[n,`grass`])),r.add(e.box([-.7,2.15,.5],[1.1,.8,1.1],Ll));for(let[n,i,a]of[[1.05,2.55,.75],[-.95,2.9,-.55],[.25,2.05,-1.05],[-1.25,2.3,.35],[.75,3.05,-.95],[1.2,2.25,-.2]])r.add(e.box([n,i,a],[.42,.42,.42],[t]));return r}function Wl(e,t){let n=new f;n.add(e.box([0,2.2,0],[.32,4.4,.32],Rl)),n.add(e.box([.1,4.45,0],[.24,.3,.24],Rl));for(let t=0;t<6;t+=1){let r=t*Math.PI/3,i=e.box([Math.cos(r)*1,4.55,Math.sin(r)*1],[2.1,.14,.5],zl);i.rotation.y=-r,i.rotation.z=.18,n.add(i)}let r=t?Bl:Vl;for(let[t,i]of[[.3,.12],[-.26,.26],[.02,-.32]])n.add(e.box([t,4.16,i],[.3,.3,.3],r));return n}function Gl(e,t){for(let n of Hl.trees){let r=Ul(t,n.fruit,n.leaf);r.position.set(n.x,Hl.ground,Hl.rowZ),r.rotation.y=n.x*.7%(Math.PI*2),e.add(r)}for(let n of Hl.coconuts){let r=Wl(t,n.ripe);r.position.set(n.x,Hl.coconutGround,n.z),r.rotation.y=n.z*.5%(Math.PI*2),e.add(r)}}var Kl={store:{x:-17.9,z:-21.21,w:3.2,d:3.4,h:2.3,label:`云港小卖部`},fortune:{x:-13.1,z:-21.21,w:3.2,d:3.4,h:2.3,label:`算子铺`},counter:.86},ql=[`#b08a63`,`wood`],Jl=[`#96724f`,`wood`],Yl=[`#8a5348`,`roof`],Xl=[`#7d5f42`,`wood`],Zl=[`#8c7154`,`wood`],Ql=[Kl.store,Kl.fortune].map(e=>[e.x-e.w/2,e.x+e.w/2,e.z-e.d/2,e.z+e.d/2]);function $l(e,t,n,r){let{x:i,z:a,w:o,d:s,h:c}=n,l=q+_a(i,a);e.add(t.box([i,l+.03,a],[o,.06,s],Zl)),e.add(t.box([i,l+c/2,a-s/2+.1],[o,c,.2],ql));for(let n of[-1,1])e.add(t.box([i+n*(o/2-.1),l+c/2,a],[.2,c,s],Jl));for(let n of[-1,1]){let r=t.box([i,l+c+.34,a+n*s/4],[o+.36,.18,s/2+.5],Yl);r.rotation.x=n*.36,e.add(r)}if(e.add(t.box([i,l+Kl.counter/2,a+s/2-.25],[o-.3,Kl.counter,.28],Xl)),n===Kl.store){let n=[[`#c8402f`],[`#e0b64a`],[`#4a7fb5`],[`#5f9b56`],[`#d35242`],[`#8a5bb0`]];for(let r=0;r<6;r+=1){let c=i-(o-1)/2+r*((o-1)/5),u=r%2==0;e.add(t.box([c,l+Kl.counter+.16,a+s/2-.25],u?[.16,.3,.16]:[.26,.16,.24],n[r]))}}e.add(t.box([i,l+Kl.counter+.1,a+s/2-.25],[o-.2,.1,.4],Xl)),r(e,l,t);let u=bc(n.label,[i,l+c+.95,a+s/2-.1],0);return u.scale.setScalar(1.1),e.add(u),l}function eu(e,t,n){let{x:r,z:i}=Kl.store;for(let a of[-1,1]){e.add(n.box([r+a*1.05,t+1,i-.7],[.5,1.9,1.7],[`#6b5136`,`wood`]));let o=[[`#d35242`],[`#4a7fb5`],[`#e0b64a`],[`#5f9b56`],[`#c9713f`]];for(let s=0;s<3;s+=1)for(let c=0;c<3;c+=1)e.add(n.box([r+a*1.05,t+.55+s*.52,i-1.15+c*.55],[.34,.34,.34],o[(s+c+(a>0?2:0))%o.length]))}}function tu(e,t,n){let{x:r,z:i}=Kl.fortune;e.add(n.box([r,t+.42,i-.55],[1.5,.08,.9],[`#6e4f39`,`wood`]));for(let a of[-1,1])e.add(n.box([r+a*.6,t+.2,i-.55],[.1,.4,.1],[`#5b4130`]));e.add(n.box([r,t+.58,i-.55],[.3,.26,.3],[`#cfe3e8`])),e.add(n.box([r-.5,t+1.9,i-1.2],[.32,.5,.02],[`#e0cf9b`])),e.add(n.box([r+.5,t+1.9,i-1.2],[.32,.5,.02],[`#e0cf9b`]))}function nu(e,t){$l(e,t,Kl.store,eu),$l(e,t,Kl.fortune,tu)}function ru(e,t){let n=q+_a(Kl.store.x,Kl.store.z),r=q+_a(Kl.fortune.x,Kl.fortune.z),i=bs(t,{hair:`#3b2f2a`,shirt:`#3f6b78`,trousers:`#3a3a40`,hat:!1});i.avatar.position.set(Kl.store.x,n,Kl.store.z+.95);let a=[`#c0392b`];i.avatar.add(t.box([0,1.72,0],[.58,.14,.58],a)),i.avatar.add(t.box([0,1.66,.3],[.5,.05,.3],a)),e.add(i.avatar);let o=bs(t,{hair:`#5a5348`,shirt:`#4a3f56`,trousers:`#3a3440`,hat:!1});o.avatar.position.set(Kl.fortune.x,r,Kl.fortune.z+.9),o.avatar.add(t.box([0,1.62,.26],[.44,.12,.06],[`#1c1c20`])),o.avatar.add(t.box([0,1.62,.2],[.5,.03,.12],[`#2a2a30`])),e.add(o.avatar);let s=new f,c=Kl.store;s.add(t.box([c.x,n+c.h+.5,c.z+c.d/2-.1],[.08,.5,.08],[`#5b4130`]));let l=new F(new je(.3,.34,.3),new P({color:`#ffe4a3`}));l.position.set(c.x,n+c.h+.26,c.z+c.d/2-.1),s.add(l);let u=new F(new je(1.1,1.1,1.1),new P({color:`#ffd98a`,transparent:!0,opacity:.14,depthWrite:!1}));u.position.copy(l.position),s.add(u),s.visible=!1,e.add(s);let d=bc(`白日再来`,[Kl.fortune.x,r+1.55,Kl.fortune.z+Kl.fortune.d/2-.05],0);d.visible=!1,e.add(d);let p=0;return{update(e,t,r){p+=e;let a=t>.5;s.visible=a,d.visible=a;let c=r?0:Math.sin(p*.9)*.05;i.avatar.rotation.x=a?.16+c:0,i.avatar.position.y=n-(a?.03:0),o.avatar.rotation.x=0}}}var iu={washer:{say:[`「今天日头好，衣裳干得快。」`,`「桶里这件是给船夫补的袖口，别碰散了。」`,`「你也要洗？那得排队。」`],gift:`洗好的衣裳`},farmer:{say:[`「来点水果和蔬菜吗？刚摘的。」`],gift:``,giftChance:1},pilot:{say:[`「想要开飞机吗？」`,`「风从东南来，今天适合起飞。」`]},shopClerk:{say:[`「要点什么？架子上都标了价。」`]},fortuneTeller:{say:[`「要来算上一卦吗？」`]},captain:{say:[`「坐吧，看海不着急。」`,`「这一带的水我熟，跟着灯走就行。」`]},keeper:{say:[`「灯塔不能灭。」`,`「船要看着灯回来。」`]},fisherman:{say:[`「今天风向不对，鱼不开口。」`,`「早上的海最听话。」`]},mayor:{say:[`「欢迎来到我的岛屿。」`]}},au=[`草莓`,`西瓜`,`辣椒`,`白菜`,`萝卜`],ou=[`瓶可乐`,`包薯片`,`盒火锅底料`,`瓶冰红茶`,`包饼干`],su=[`今天是个好天气，你必有大事发生。`,`宜出海，忌回头。往东走三步会遇见一个人。`,`卦象是「水上有风」：想做的事，今晚就会有个说法。`,`你最近在等一个消息。别催，它已经在路上了。`,`破财之相，但破的是小财，换的是大运。`,`你心里那个人，比你以为的更早注意到你。`,`三年之内会搬一次家，方向朝海。`,`做事要赶早，明天日头偏西就不灵了。`,`卦上说：少想，多走。脚比脑子准。`,`今日忌口舌，宜一个人吃饭。`],$={ground:6.59,pond:{x:3.2,z:41.4,w:2.9,d:2.3},coop:{x:-1.6,z:44.8,w:1.7,d:1.5},yard:{x:-1.6,z:44.8,w:3.6,d:3,gate:.9},roam:{x0:-4.6,x1:5.6,z0:39.6,z1:58.6},flock:4},cu=[`#8f8577`,`brick`],lu=[`#776f63`],uu=[`#5f9fb0`],du=[`#4f7d46`,`grass`],fu=[`#6fae3a`,`grass`],pu=[`#8a6a4a`,`wood`],mu=[`#3f3f45`,`brick`],hu=[`#efe3bd`],gu=[`#f2ede2`],_u=[`#c8402f`],vu=[`#3a2f22`],yu=[[$.coop.x-$.coop.w/2,$.coop.x+$.coop.w/2,$.coop.z-$.coop.d/2,$.coop.z+$.coop.d/2],[$.pond.x-$.pond.w/2,$.pond.x+$.pond.w/2,$.pond.z-$.pond.d/2,$.pond.z+$.pond.d/2]];function bu(e,t){let n=$.ground,r=$.pond;e.add(t.box([r.x,n+.02,r.z],[r.w,.08,r.d],uu));let i=Et(3131),a=(r,a)=>{for(let o=0;o<r;o+=1){let[r,s]=a(o),c=.3+i()*.34,l=t.box([r,n+c*.35,s],[c*1.3,c,c*1.1],i()>.45?cu:lu);l.rotation.y=i()*Math.PI,e.add(l)}},o=r.w/2+.16,s=r.d/2+.16;a(6,e=>[r.x-o+e*(r.w+.32)/5,r.z-s]),a(6,e=>[r.x-o+e*(r.w+.32)/5,r.z+s]),a(4,e=>[r.x-o,r.z-s+.5+e*(r.d-.6)/3]),a(4,e=>[r.x+o,r.z-s+.5+e*(r.d-.6)/3]);let c=[[r.x-.6,r.z-.35],[r.x+.55,r.z+.3],[r.x-.1,r.z+.55]];for(let[r,i]of c){e.add(t.box([r,n+.07,i],[.62,.02,.62],du)),e.add(t.box([r+.14,n+.12,i+.1],[.16,.1,.16],fu));for(let a of[-1,1])e.add(t.box([r+.14+a*.05,n+.18,i+.08],[.04,.05,.04],[`#2f3b2a`]))}let l=$.coop;e.add(t.box([l.x,n+.42,l.z-.1],[l.w,.84,.18],pu));for(let r of[-1,1])e.add(t.box([l.x+r*(l.w/2-.08),n+.42,l.z],[.16,.84,l.d],pu));for(let r of[-1,1]){let i=t.box([l.x,n+.96,l.z+r*.42],[l.w+.3,.12,1],[`#7a5a44`,`wood`]);i.rotation.x=r*.3,e.add(i)}e.add(t.box([l.x,n+.03,l.z+.1],[l.w-.1,.06,l.d-.2],hu));let u=$.yard,d=(r,i,a,o)=>{let s=Math.max(2,Math.round(Math.hypot(a-r,o-i)/.8)+1);for(let c=0;c<s;c+=1){let l=c/(s-1);e.add(t.box([r+(a-r)*l,n+.28,i+(o-i)*l],[.09,.56,.09],pu))}for(let s of[.22,.42])e.add(t.beam([[r,n+s,i],[a,n+s,o]],.06,pu))},{x:f,z:p,w:m,d:h}=u;d(f-m/2,p-h/2,f+m/2,p-h/2),d(f-m/2,p-h/2,f-m/2,p+h/2),d(f+m/2,p-h/2,f+m/2,p+h/2),d(f-m/2,p+h/2,f-m/2+$.yard.gate,p+h/2),d(f+m/2,p+h/2,f+m/2-$.yard.gate,p+h/2);for(let r of[-1,1])e.add(t.box([f+r*(m/2-.42),n+.16,p],[.5,.3,h-1.2],mu)),e.add(t.box([f+r*(m/2-.42),n+.32,p],[.34,.04,h-1.4],hu))}function xu(e){let t=new f;t.add(e.box([0,.3,0],[.34,.34,.46],gu)),t.add(e.box([0,.56,.2],[.22,.24,.22],gu)),t.add(e.box([0,.7,.2],[.05,.14,.05],_u)),t.add(e.box([0,.56,.33],[.08,.06,.1],[`#e0a23c`]));for(let n of[-1,1])t.add(e.box([n*.16,.55,.24],[.03,.05,.03],[`#2f2f2f`])),t.add(e.box([n*.09,.09,0],[.05,.18,.05],[`#d99a3c`]));return t.add(e.box([0,.44,-.28],[.16,.18,.12],gu)),t}var Su=(e,t)=>Math.abs(e-$.yard.x)<$.yard.w/2+.2&&Math.abs(t-$.yard.z)<$.yard.d/2+.2;function Cu(e,t){let n=Et(8081),r=Array.from({length:$.flock},()=>{let r=xu(t),i=$.coop.x+(n()-.5)*1.2,a=$.coop.z+(n()-.5)*1;r.position.set(i,$.ground,a);let o=t.box([0,-.1,0],[.1,.05,.12],vu);return o.visible=!1,e.add(o),e.add(r),{model:r,bug:o,x:i,z:a,facing:n()*6.28,targetX:i,targetZ:a,wait:n()*3,peck:0,bugTimer:2+n()*4,home:!1}});function i(e,t){if(t)e.targetX=$.coop.x+(n()-.5)*1,e.targetZ=$.coop.z+(n()-.5)*.7,e.home=!0,e.wait=3+n()*3;else{e.home=!1;for(let t=0;t<8;t+=1){let{x0:t,x1:r,z0:i,z1:a}=$.roam,o=t+n()*(r-t),s=i+n()*(a-i);if(!Su(o,s)){e.targetX=o,e.targetZ=s,e.wait=2+n()*4;return}}}}return{update(e,t,a){let o=a>.22;for(let a of r){let r=a.targetX-a.x,s=a.targetZ-a.z,c=Math.hypot(r,s);if(c<.25){a.wait-=e,a.wait<=0&&i(a,o),a.bugTimer>0&&(a.bugTimer-=e),!o&&!t&&(a.bugTimer<=0&&!a.bug.visible&&(a.bug.position.set(a.x+(n()-.5)*.7,$.ground+.03,a.z+.35+n()*.3),a.bug.visible=!0,a.bugTimer=6+n()*8),a.bug.visible?(a.peck=Math.min(1,a.peck+e*2.4),a.model.position.y=$.ground-Math.sin(a.peck*Math.PI)*.05,a.peck>=1&&(a.bug.visible=!1,a.peck=0)):a.model.position.y=$.ground);continue}let l=Math.min((o?.78:.62)*e,c),u=a.x+r/c*l,d=a.z+s/c*l;!o&&Su(u,d)&&!Su(a.x,a.z)?i(a,o):(a.x=u,a.z=d,a.facing=Es(a.facing,Math.atan2(r,s),Ts(e,.2)),a.model.position.set(a.x,$.ground+(t?0:Math.abs(Math.sin(a.x*4))*.03),a.z),a.model.rotation.y=a.facing)}}}}var wu={ground:6.59,z:39.75,from:-22,to:5.4,spacing:4.2,trunk:[`#6b4f43`,`wood`],bark:[`#7d5c45`,`wood`]},Tu=[[`#3f6b3a`,`grass`],[`#4a7a42`,`grass`],[`#356030`,`grass`]],Eu=[`#8a5a38`],Du=[`#6b4a2e`];function Ou(e,t){let n=new f;n.add(e.box([0,.9*t,0],[.34*t,1.8*t,.34*t],wu.trunk));for(let[r,i]of[{y:1.7,w:2,h:1.1},{y:2.6,w:1.55,h:1},{y:3.45,w:1.05,h:.9}].entries())n.add(e.box([0,i.y*t,0],[i.w*t,i.h*t,i.w*t],Tu[r%Tu.length]));return n}function ku(e){let t=new f;return t.add(e.box([0,.14,0],[.2,.18,.26],Eu)),t.add(e.box([0,.26,.13],[.15,.14,.14],Eu)),t.add(e.box([0,.32,.14],[.05,.06,.05],[`#3a2a1f`])),t.add(e.box([0,.16,-.2],[.1,.3,.1],[`#9c6a42`])),t.add(e.box([0,.12,.22],[.1,.1,.1],Du)),t}function Au(e,t){let n=Et(9191),r=Math.floor((wu.to-wu.from)/wu.spacing)+1;for(let i=0;i<r;i+=1){let r=wu.from+i*wu.spacing,a=.85+n()*.3,o=Ou(t,a);o.position.set(r,wu.ground,wu.z+(n()-.5)*.3),o.rotation.y=n()*Math.PI,e.add(o);let s=ku(t),c=i%2==0;s.position.set(r+(n()-.5)*.8,wu.ground+(c?1.55*a:0),wu.z+.5+n()*.4),s.rotation.y=n()*Math.PI*2,e.add(s)}}var ju=[`#7d5f42`,`wood`],Mu=[`#9a6a55`,`roof`];function Nu(e,t,n){let r=new f,i=q+_a(n.x,n.z),a=2.1;for(let e of[-1,1])for(let o of[-1,1])r.add(t.box([n.x+e*(n.w/2-.2),i+a/2,n.z+o*(n.d/2-.2)],[.14,a,.14],ju));for(let e of[-1,1]){let o=t.box([n.x,i+a+.24,n.z+e*n.d/4],[n.w+.3,.14,n.d/2+.3],Mu);o.rotation.x=e*.3,r.add(o)}return r.visible=!1,e.add(r),r}function Pu(e,t){let n=oo.sheepPen,r=oo.cowPen,i=[Nu(e,t,{x:(n.x0+n.x1)/2,z:(n.z0+n.z1)/2,w:n.x1-n.x0,d:n.z1-n.z0}),Nu(e,t,{x:(r.x0+r.x1)/2,z:(r.z0+r.z1)/2,w:r.x1-r.x0,d:r.z1-r.z0}),Nu(e,t,{x:$.yard.x,z:$.yard.z,w:$.yard.w,d:$.yard.d})];return{update(e){let t=e>.22;for(let e of i)e.visible=t}}}var Fu={x:-29.2,zFrom:20.6,zTo:-7.8,count:7,trunk:[`#6b5540`,`wood`]},Iu=[[`#7fa855`,`grass`],[`#6d9a4a`,`grass`],[`#8cb35f`,`grass`]];function Lu(e,t,n){let r=new f;r.add(e.box([0,1.6*t,0],[.42*t,3.2*t,.42*t],Fu.trunk));let i=e.box([0,3.5*t,0],[2.6*t,1*t,2.4*t],Iu[0]);r.add(i),r.add(e.box([0,4.1*t,0],[1.7*t,.7*t,1.6*t],Iu[1]));let a=[];for(let i=0;i<14;i+=1){let o=i/14*Math.PI*2,s=(1+n()*.25)*t,c=(.9+n()*.9)*t,l=e.box([Math.cos(o)*s,3.3*t-c/2,Math.sin(o)*s],[.09*t,c,.09*t],Iu[2]);l.userData.phase=n()*Math.PI*2,l.userData.base=3.3*t-c/2,r.add(l),a.push(l)}return{group:r,strands:a}}function Ru(e,t){let n=Et(5151),r=Array.from({length:Fu.count},(r,i)=>{let a=Fu.count===1?.5:i/(Fu.count-1),o=Fu.zFrom+(Fu.zTo-Fu.zFrom)*a,s=Fu.x+(n()-.5)*.3,{group:c,strands:l}=Lu(t,.85+n()*.3,n);return c.position.set(s,q+_a(s,o),o),c.rotation.y=Math.PI/2+(n()-.5)*.2,e.add(c),l}),i=0;return{update(e,t){if(i+=e,!t)for(let e of r)for(let t of e){let e=t.userData.phase;t.rotation.z=Math.sin(i*1.4+e)*.06,t.rotation.x=Math.cos(i*1.1+e)*.05}}}}var zu={x:19.6,z:-25.5,size:6,top:.72,launch:28},Bu=[`#2f6f9e`],Vu=[`#eef3f7`],Hu=[`#d9772f`],Uu=[`#1f4f74`],Wu=[`#4b8fb8`];function Gu(e,t){let{x:n,z:r,size:i,top:a}=zu;e.add(t.box([n,a-.34,r],[i+.4,.5,i+.4],Uu));let o=i/4;for(let s=0;s<4;s+=1){let c=s%2==0?Bu:Vu;e.add(t.box([n-i/2+o*(s+.5),a-.08,r],[o,.16,i],c))}for(let o of[-1,1])for(let s of[-1,1])e.add(t.box([n+o*(i/2-.6),a+.02,r+s*(i/2-.6)],[1.1,.2,1.1],Hu));e.add(t.box([n,a+.06,r],[i-1.6,.06,i-1.6],Wu));for(let o of[-1,1])e.add(t.box([n+o*(i/2+.14),a+.14,r],[.28,.24,i+.56],Vu)),e.add(t.box([n,a+.14,r+o*(i/2+.14)],[i+.56,.24,.28],Vu))}var Ku={x:15.37,z:-2.58};zu.x-zu.size/2,zu.x+zu.size/2,zu.z-zu.size/2,zu.z+zu.size/2;var qu={x:19.66,z:-20.64,rise:7.5,count:22},Ju=[`#d8c9a0`,`brick`],Yu=[[`#ff8f6b`],[`#ffd166`],[`#8fd3f4`],[`#c9a6ff`],[`#9be89b`],[`#ff9ecb`]];function Xu(e,t){let{x:n,z:r}=qu;e.add(t.box([n,q+.06,r],[2.2,.12,2.2],Ju)),e.add(t.box([n,q+.16,r],[1.2,.08,1.2],[`#b8a37a`]));for(let[i,a]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]])e.add(t.box([n+i,q+.28,r+a],[.16,.4,.16],[`#a9855f`,`wood`]))}function Zu(e){let t=[],n=new je(.18,.18,.18);for(let r=0;r<qu.count;r+=1){let r=new P({color:`#ffffff`,transparent:!0,opacity:0}),i=new F(n,r);i.visible=!1,e.add(i),t.push({mesh:i,velocity:new D,life:0})}let r=0;return{get ready(){return r<=0},launch(){if(r>0)return!1;r=2.2;let{x:e,z:n}=qu;for(let[r,i]of t.entries()){let a=r/t.length*Math.PI*2+Math.random()*.3,o=1.6+Math.random()*2.4;i.mesh.position.set(e,q+.4,n),i.velocity.set(Math.cos(a)*o,qu.rise+Math.random()*3,Math.sin(a)*o),i.life=1.6+Math.random()*.6,i.mesh.material.color.set(Yu[r%Yu.length][0]),i.mesh.visible=!0}return!0},update(e){r=Math.max(0,r-e);for(let n of t){if(n.life<=0){n.mesh.visible=!1;continue}n.life-=e,n.velocity.y-=6*e,n.mesh.position.addScaledVector(n.velocity,e);let t=n.mesh.material;t.opacity=Math.max(0,Math.min(1,n.life))}}}}var Qu={x:-11.75,z:-8.45,facing:Math.PI/2},$u=[`#d8b393`],ed=[`#cfcac2`],td=[`#5d6470`],nd=[`#8f9a86`],rd=[`#8a6a4a`,`wood`],id=[`#d5e0e8`],ad=[`#d99b8a`],od=[`#a9855f`,`wood`],sd=[`#7fa9b5`];function cd(e,t){let n=q+_a(Qu.x,Qu.z),r=new f;r.position.set(Qu.x,n,Qu.z),r.rotation.y=Qu.facing;let i=new f;r.add(i),i.position.y=.34;let a=new f;a.rotation.x=.42,a.position.y=.42,i.add(a),a.add(t.box([0,.2,0],[.42,.52,.28],td)),a.add(t.box([0,.18,.16],[.36,.4,.06],nd)),a.add(t.box([0,.52,.06],[.28,.28,.26],$u)),a.add(t.box([0,.68,.02],[.32,.13,.3],ed)),a.add(t.box([0,.62,-.12],[.2,.16,.14],ed));for(let e of[-1,1])a.add(t.box([e*.09,.55,.18],[.05,.05,.04],[`#3a3a3a`]));i.add(t.box([0,.08,.16],[.36,.16,.42],td)),i.add(t.box([0,.05,-.12],[.34,.1,.24],[`#4a4f58`]));let o=[];for(let e of[-1,1]){let n=new f;n.position.set(e*.11,.62,0),n.add(t.box([0,-.3,0],[.15,.6,.17],td)),n.add(t.box([0,-.58,.02],[.17,.1,.24],[`#4a4f58`])),n.visible=!1,r.add(n),o.push(n)}let s=new f;s.position.set(.22,.42,.12),a.add(s),s.add(t.box([0,-.16,.04],[.11,.34,.11],td));let c=t.box([0,-.42,.12],[.08,.52,.09],od);c.rotation.x=.7,s.add(c),a.add(t.box([-.24,.16,.1],[.11,.34,.11],td)),r.add(t.cylinder([.05,.2,.72],[.26,.28,.4,10],rd)),r.add(t.box([.05,.41,.72],[.44,.03,.44],sd)),r.add(t.box([.05,.45,.72],[.34,.08,.32],id)),r.add(t.cylinder([-.72,.2,.22],[.24,.26,.4,10],rd)),r.add(t.box([-.72,.42,.22],[.34,.12,.34],ad)),r.add(t.box([-.7,.5,.24],[.26,.1,.26],id)),e.add(r);let l={x:-22,z:-2.9},u=!1,d=0,p=0,m=7+Math.random()*5;return{update(e,t,c=0){if(d+=e,c>.55&&u)return;c<=.55&&u&&(r.position.set(l.x+.6,n,l.z+.6),r.visible=!0,u=!1);let f=c>.55?l:{x:Qu.x,z:Qu.z},h=f.x-r.position.x,g=f.z-r.position.z,_=Math.hypot(h,g);if(_>.4){let c=Math.min(.62*e,_);r.position.x+=h/_*c,r.position.z+=g/_*c,r.rotation.y=Math.atan2(h,g),i.position.y=.6,a.rotation.x=.12,s.rotation.x=-.25,o[0].visible=!0,o[1].visible=!0;let l=t?0:Math.sin(d*7)*.55;o[0].rotation.x=l,o[1].rotation.x=-l,t||(r.position.y=n+Math.abs(Math.sin(d*7))*.03);return}if(r.position.y=n,r.rotation.y=Qu.facing,o[0].visible=!1,o[1].visible=!1,c>.55){u=!0,r.visible=!1;return}if(i.position.y=c>.55?.3:.34,c>.55){a.rotation.x=.2,s.rotation.x=-.3;return}if(t){s.rotation.x=-.2,s.rotation.z=0;return}if(p>0){p=Math.max(0,p-e/2.4);let t=1-p,n=Math.sin(Math.min(1,t*1.6)*Math.PI/2);s.rotation.x=-.2-n*1.9,s.rotation.z=-n*.32,a.rotation.x=.42-n*.2,p<=0&&(m=8+Math.random()*6);return}if(m-=e,m<=0){p=1;return}let v=Math.sin(d*2.6);s.rotation.x=-.2+v*.5,s.rotation.z=Math.sin(d*1.3)*.1,a.rotation.x=.42+Math.sin(d*2.6)*.03}}}var ld=[`#eef3f7`],ud=[`#cfe1ea`],dd=[`#3f6d8c`],fd=[`#4a6b86`,`roof`],pd=[`#2f4a63`],md=[`#ffe6a8`],hd=[`#d8d2c4`],gd=[[`#4a7fa8`],[`#b4553f`],[`#5f7f5a`],[`#8a6a9c`]],_d=[`#6b5a49`],vd=[];function yd(e,t,n){let{x:r,y:i,z:a,w:o,h:s,d:c}=n;vd[n.index]=n,e.add(t.box([r,i+.16,a],[o+.2,.32,c+.2],[`#8b8f94`,`brick`])),e.add(t.box([r,i+.32+(s-.32)/2,a],[o,s-.32,c],ud)),e.add(t.box([r,i+s-.22,a],[o+.12,.22,c+.12],ld)),e.add(t.box([r,i+.32+.62,a-c/2-.02],[.62,1.24,.08],pd));for(let n of[-1,1])e.add(t.box([r+n*(o/2-.55),i+s-.85,a-c/2-.03],[.48,.48,.06],md)),e.add(t.box([r+n*(o/2-.55),i+s-.85,a-c/2-.06],[.56,.56,.02],dd));let l=.95,u=(c/2+.15)/Math.cos(l);for(let n of[-1,1]){let d=t.box([r,i+s+.62,a+n*c/4],[o+.4,.14,u],fd);d.rotation.x=n*l,e.add(d);let f=t.box([r,i+s+.72,a+n*c/4],[o+.46,.08,u*.92],ld);f.rotation.x=n*l,e.add(f)}e.add(t.box([r,i+s+1.02,a],[o+.4,.14,.2],dd)),e.add(t.box([r+o/4,i+s+1.05,a-.4],[.3,.9,.3],[`#7d5f4a`,`brick`]))}function bd(e,t,n){let r=new f;r.add(e.box([0,.5,0],[.42,.72,.3],t)),r.add(e.box([0,1,0],[.4,.3,.36],t)),r.add(e.box([0,1.02,.16],[.26,.24,.06],[`#e3c9a8`])),r.add(e.box([0,1.16,0],[.44,.12,.4],hd));for(let n of[-1,1])r.add(e.box([n*.24,.54,0],[.12,.5,.12],t)),r.add(e.box([n*.1,.1,0],[.16,.2,.2],_d));return r.scale.setScalar(.94+n%3*.05),r}function xd(e,t){let n=Et(4242),r=vd.filter(Boolean).map((r,i)=>{let a=bd(t,gd[i%gd.length],i),o={x:r.x,z:r.z-r.d/2-.35};return a.position.set(o.x,va(o.x,o.z),o.z),e.add(a),{model:a,home:o,x:o.x,z:o.z,targetX:o.x,targetZ:o.z,facing:0,wait:n()*3}});return{update(e,t,i,a){let o=i&&t<.5;for(let t of r){o?Math.hypot(t.targetX-t.x,t.targetZ-t.z)<.3&&(t.wait-=e,t.wait<=0&&(t.targetX=t.home.x+(n()-.5)*5,t.targetZ=Math.max(23.6,t.home.z-n()*.4),t.wait=2.5+n()*4)):(t.targetX=t.home.x,t.targetZ=t.home.z);let r=t.targetX-t.x,i=t.targetZ-t.z,s=Math.hypot(r,i);if(s>.12){let n=Math.min((o?.55:.4)*e,s);t.x+=r/s*n,t.z+=i/s*n,t.facing=Math.atan2(r,i)}t.model.position.set(t.x,va(t.x,t.z),t.z),t.model.rotation.y=t.facing,a||(t.model.position.y+=Math.abs(Math.sin(t.x*5))*.02)}}}}var Sd={x:30.25,z:35.4,top:30,size:15,swing:{x:24.2,z:31,seat:.55},chapel:{x:33,z:33.6}},Cd=Sd.top-q+Sd.swing.seat,wd={x:15.8,z:1.9,label:`云迁层传输点`},Td=[[`#eef2f5`],[`#e2e8ef`],[`#f6f8fa`]],Ed=[`#dfe0dc`],Dd=[`#f3e4b4`],Od=[`#e3cd95`],kd=[`#fdf8ea`],Ad=[`#f0d998`,`roof`],jd=[`#ffe9a8`],Md=[`#ffdf9a`],Nd=[`#8a7a52`],Pd=[`#f7f2e4`],Fd=[`#e9c97a`],Id=[`#f0d6bb`],Ld=[`#2b2530`],Rd=[`#f6f8fa`],zd=[[`#f7a8c4`],[`#f28fb0`],[`#ffc6dd`],[`#e97aa0`]],Bd=[`#c9b48d`];function Vd(e,t,n){let{x:r,z:i,top:a,size:o}=Sd;for(let s=0;s<22;s+=1){let c=s/22*Math.PI*2,l=o*(.34+n()*.2),u=r+Math.cos(c)*l,d=i+Math.sin(c)*l*.9,f=3.2+n()*2.4,p=1.4+n()*1.2;e.add(t.box([u,a-p/2-.3,d],[f,p,f*.9],Td[s%Td.length]))}for(let s=0;s<10;s+=1){let c=r+(n()-.5)*o*.6,l=i+(n()-.5)*o*.55;e.add(t.box([c,a-1.4,l],[4.2,2.4,4],Td[s%Td.length]))}e.add(t.box([r,a-.06,i],[o*1.02,.16,o*.94],Td[0])),e.add(t.box([r,a-.02,i],[o*.94,.12,o*.86],Ed))}function Hd(e,t){let{x:n,z:r}=Sd.chapel,i=Sd.top;e.add(t.cylinder([n,i+.15,r],[4.2,4.4,.3,12],Od)),e.add(t.cylinder([n,i+.4,r],[3.6,3.8,.24,12],Dd)),e.add(t.cylinder([n,i+1.5,r],[3.5,3.5,2.2,12],Dd));for(let a=0;a<8;a+=1){let o=a/8*Math.PI*2;e.add(t.cylinder([n+Math.cos(o)*3.55,i+1.5,r+Math.sin(o)*3.55],[.18,.18,2.2,6],kd))}e.add(t.box([n-2.4,i+1.2,r],[1,1.6,.9],Nd)),e.add(t.cylinder([n,i+2.7,r],[3.9,3.9,.3,12],Ad)),e.add(t.cylinder([n,i+3.1,r],[3.1,3.4,.55,12],Ad)),e.add(t.cylinder([n,i+3.6,r],[2,2.6,.5,12],Ad));for(let a=0;a<9;a+=1){let o=-.9+a/8*2.6;e.add(t.box([n+Math.cos(o)*1.9,i+4.6+Math.sin(o)*1.5,r+Math.sin(o)*.6],[.42,.42,.42],jd))}for(let a=0;a<4;a+=1){let o=a/4*Math.PI*2+.4;e.add(t.box([n+Math.cos(o)*3.2,i+2.5,r+Math.sin(o)*3.2],[.22,.26,.22],Md))}}function Ud(e,t){let n=Sd.chapel.x-6.2,r=Sd.chapel.z+1.6,i=Sd.top;e.add(t.cylinder([n,i+.06,r],[.9,1,.12,10],kd)),e.add(t.box([n,i+.5,r],[.44,.8,.34],Pd)),e.add(t.box([n,i+1,r],[.4,.36,.3],Pd)),e.add(t.box([n,i+.9,r+.17],[.26,.3,.06],Fd));for(let a of[-1,1])e.add(t.box([n+a*.32,i+.7,r+.1],[.1,.9,.08],Fd));e.add(t.box([n,i+1.32,r],[.26,.26,.24],Id));for(let a of[-1,1])e.add(t.box([n+a*.06,i+1.34,r+.125],[.05,.05,.02],[`#3a3240`]));e.add(t.box([n,i+1.25,r+.125],[.06,.02,.02],[`#c9737f`])),e.add(t.box([n,i+1.45,r-.04],[.3,.16,.26],Ld)),e.add(t.box([n,i+1.16,r-.2],[.18,.46,.1],Ld)),e.add(t.box([n,i+1.62,r-.12],[.13,.13,.13],Ld))}function Wd(e,t){let n=[{x:Sd.chapel.x-4.2,z:Sd.chapel.z-2.4},{x:Sd.chapel.x-3,z:Sd.chapel.z+2.6}];for(let[r,i]of n.entries()){let{x:n,z:a}=i,o=Sd.top;e.add(t.box([n,o+.22,a],[.34,.3,.44],Rd)),e.add(t.box([n,o+.42,a+.2],[.24,.24,.24],Rd));for(let r of[-1,1])e.add(t.box([n+r*.08,o+.66,a+.16],[.07,.3,.06],Rd)),e.add(t.box([n+r*.19,o+.44,a+.2],[.04,.04,.04],[`#c94f6a`]));e.add(t.box([n,o+.42,a+.07],[.1,.08,.06],[`#e8a3b4`])),e.add(t.box([n,o+.2,a-.26],[.16,.16,.14],[`#f3f6f8`])),r===0&&(e.add(t.box([n+.24,o+.34,a+.22],[.08,.34,.08],[`#d9c48a`])),e.add(t.box([n+.24,o+.16,a+.22],[.2,.12,.2],[`#b9a06a`])))}}function Gd(e,t,n){let{x:r,z:i}=Sd.swing,a=Sd.top;for(let n of[-1,1])e.add(t.box([r,a+1.1,i+n*.95],[.16,2.2,.16],[`#8a6a4a`,`wood`]));e.add(t.beam([[r,a+2.18,i-1],[r,a+2.18,i+1]],.14,[`#8a6a4a`,`wood`]));for(let o=0;o<26;o+=1){let s=o/25,c=i-1+s*2,l=Math.sin(s*Math.PI)*.42,u=zd[Math.floor(n()*zd.length)];e.add(t.box([r+(n()-.5)*.22,a+2.2+l,c],[.2,.2,.2],u))}for(let n of[-1,1])e.add(t.box([r,a+1.35,i+n*.42],[.04,1.62,.04],Bd));e.add(t.box([r,a+Sd.swing.seat-.08,i],[.9,.12,1],[`#c9a27a`,`wood`]));for(let n=0;n<12;n+=1){let o=n/12*Math.PI*2;e.add(t.box([r+Math.cos(o)*.5,a+Sd.swing.seat-.02,i+Math.sin(o)*.52],[.18,.14,.18],zd[n%zd.length]))}}function Kd(e,t){let n=Et(7777);Vd(e,t,n),Hd(e,t),Ud(e,t),Wd(e,t),Gd(e,t,n)}var qd={seed:841,count:4,baseZ:23.5,stride:5.3,rise:1.52,rows:5,startX:-23,widthStep:6.8,width:39,depth:21};function Jd(){let e=Et(qd.seed);return Array.from({length:qd.count},(t,n)=>{let r=qd.baseZ+n*qd.stride;return{tier:n,y:V.upperY+n*qd.rise,z:r,lots:Array.from({length:qd.rows},(t,r)=>({x:qd.startX+qd.widthStep*r+e()*1.5,house:n<qd.count-1&&(r+n)%qd.rows!==0?{width:3.2+e(),height:2.2+e(),color:(r+n)%4}:void 0,treeScale:1.15+e()*.85}))}})}var Yd=Jd();function Xd(e,t,n){return[e-n/2,e+n/2,t-1.7,t+1.7]}var Zd=Yd.flatMap(({y:e,z:t,lots:n})=>n.flatMap(({x:n,house:r})=>r?[{footprint:Xd(n,t+2.3,r.width),base:e,height:r.height+r.width*.31}]:[])),Qd=Yd[0].lots.map(({x:e,treeScale:t})=>{let n=.16*t;return[e+2.8-n,e+2.8+n,Yd[0].z+2.7-n,Yd[0].z+2.7+n]}),$d=Yd.slice(1).map(({tier:e,y:t,z:n})=>{let r=qd.width-e*2.8;return{footprint:[-9-r/2,-9+r/2,n-.5,n+20.5],base:0,height:t}}),ef=[`#b28b63`,`wood`],tf=[`#88664e`,`wood`],nf=.56,rf=.12,af=[{x:-18,near:23.3,far:V.terrace[3]}],of=[V.ramp[0],V.ramp[1]].map(e=>[e-rf/2,e+rf/2,V.ramp[2],V.terrace[2]]);function sf(e,t){let[n,r,i]=V.ramp,a=V.terrace[2],o=V.upperY-q,s=Math.atan2(o,a-i),c=t.box([(n+r)/2,q+o/2-.07,(a+i)/2],[r-n,.14,Math.hypot(o,a-i)+.1],ef);c.rotation.x=-s,e.add(c);for(let o of[n,r])e.add(t.beam([[o,q+.45,i],[o,V.upperY+.45,a]],rf,tf)),e.add(t.box([o,q+.22,i],[.15,.48,.16],tf)),e.add(t.box([o,V.upperY+.22,a],[.15,.48,.16],tf));e.add(t.box([-4.05,V.upperY+.012,23.75],[27.8,.024,1.2],[`#b29b7d`,`brick`]));for(let{x:n,near:r,far:i}of af){e.add(t.beam([[n,V.upperY+.49,r],[n,V.upperY+.49,i]],rf,tf));for(let a of[r,(r+i)/2,i])e.add(t.box([n,V.upperY+.26,a],[.15,.53,.16],tf))}e.add(bc(V.title,[9.62,2.35,23.65],Math.PI))}function cf(e,t){let n=new f;n.add(t.box([0,.37,0],[1.03,.1,.42],ef)),n.add(t.box([0,.68,-.18],[1.03,.25,.08],tf));for(let e of[-1,1])n.add(t.box([e*.42,.25,0],[.1,.5,.37],tf));n.position.set(H.seat.x,q+_a(H.seat.x,H.seat.z),H.seat.z),n.rotation.y=Math.atan2(H.direction[0],H.direction[2]),e.add(n)}function lf(e,t){let n=new f;sf(n,t),cf(n,t),n.add(bc(Ft.title,[-22.57,q+yc.mountHeight,-3],Math.PI/2)),e.add(n)}var uf=[[H.seat.x-nf,H.seat.x+nf,H.seat.z-nf,H.seat.z+nf],[H.sign.x-.1,H.sign.x+.1,H.sign.z-.1,H.sign.z+.1],...af.map(({x:e,near:t,far:n})=>[e-rf,e+rf,t,n]),...of],df=[`#8a6a4a`,`wood`],ff=[`#b08a5f`,`wood`],pf=[`#7d6248`,`wood`],mf=2.6,hf=mf/2-.08,gf=.95,_f=[{x:-29.09,z:21.8,y:2},{x:-28,z:24.1,y:2},{x:-26.4,z:28.31,y:3.52},{x:-26.4,z:29.4,y:3.52},{x:-25,z:33.61,y:5.04},{x:-25,z:34.7,y:5.04},{x:-23.6,z:38.91,y:6.56}];function vf(e,t,n,r){let i=r.x-n.x,a=r.z-n.z,o=r.y-n.y,s=Math.hypot(i,a),c=Math.hypot(s,o),l=Math.atan2(i,a),u=Math.atan2(o,s),d=(n.x+r.x)/2,f=(n.z+r.z)/2,p=o===0?1:Math.max(6,Math.round(s/.55)),m=s/p;for(let r=0;r<p;r+=1){let s=(r+.5)/p,h=n.x+i*s,g=n.z+a*s,_=n.y+o*s;if(p===1){let r=t.box([d,n.y+.06-.07,f],[mf,.14,c+.1],df);r.rotation.order=`YXZ`,r.rotation.y=l,r.rotation.x=-u,e.add(r)}else{let n=t.box([h,_+.06-.25,g],[mf,.5,Math.max(.4,m+.06)],df);n.rotation.y=l,e.add(n)}}let h=Math.cos(l),g=-Math.sin(l);for(let s of[-1,1]){let l=h*hf*s,u=g*hf*s,d=Math.max(2,Math.round(c/1.15)+1);for(let r=0;r<d;r+=1){let s=r/(d-1),c=n.x+i*s+l,f=n.z+a*s+u,p=n.y+o*s;e.add(t.box([c,p+gf/2,f],[.1,gf,.1],pf))}for(let i of[.5,.9])e.add(t.beam([[n.x+l,n.y+i,n.z+u],[r.x+l,r.y+i,r.z+u]],.07,ff))}}function yf(e,t){for(let n=1;n<_f.length;n+=1)vf(e,t,_f[n-1],_f[n])}var bf={x:96.68,z:-6.28,top:9.6,size:9,skirt:2.8},xf=[`#7a7d80`,`brick`],Sf=[`#8b8172`,`brick`],Cf=[`#a09684`,`brick`],wf=[`#e9e7e0`];function Tf(e,t){let{x:n,z:r,top:i,size:a,skirt:o}=bf;e.add(t.box([n,i-o*.72,r],[a+2.4,o*1.15,a+2.4],Sf)),e.add(t.box([n,i-o*.22,r],[a+.8,o*.5,a+.8],Cf)),e.add(t.box([n,i-.12,r],[a,.24,a],xf));for(let a of[-1,1])e.add(t.box([n+a*1.1,i+.06,r],[.5,.02,3],wf));e.add(t.box([n,i+.06,r],[1.6,.02,.5],wf));for(let a=0;a<12;a+=1){let o=a*Math.PI/6,s=t.box([n+Math.cos(o)*3.4,i+.06,r+Math.sin(o)*3.4],[.16,.02,1.4],wf);s.rotation.y=-o,e.add(s)}for(let[o,s]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.add(t.box([n+o*(a/2-.5),i+.12,r+s*(a/2-.5)],[.28,.2,.28],[`#ffd79b`]))}var Ef=[],Df=[`#d9cfe8`,`brick`],Of=[`#c3b3d9`,`brick`],kf=[`#f4f1f7`],Af=[`#dcb96a`],jf=[`#b39ccb`,`roof`],Mf=[`#ffeec2`];function Nf(e,t,n){let{x:r,y:i,z:a,w:o,h:s,d:c}=n;Ef[n.index]=n,e.add(t.box([r,i+.16,a],[o+.7,.32,c+.7],kf)),e.add(t.box([r,i+.32+(s-.32)/2,a],[o,s-.32,c],Df)),e.add(t.box([r,i+s-.3,a],[o+.1,.3,c+.1],Of));for(let n of[-1,1])for(let l of[-1,1])e.add(t.box([r+n*(o/2-.1),i+s/2,a+l*(c/2-.08)],[.22,s,.22],kf)),e.add(t.box([r+n*(o/2-.1),i+s-.2,a+l*(c/2-.08)],[.3,.16,.3],Af));e.add(t.box([r,i+.32+.7,a-c/2-.02],[1.1,1.4,.1],Of)),e.add(t.box([r,i+.32+1.42,a-c/2-.05],[1.4,.14,.14],Af));for(let n of[-1,1])e.add(t.box([r+n*(o/2-.8),i+s-.86,a-c/2-.03],[.5,.8,.06],Mf)),e.add(t.box([r+n*(o/2-.8),i+s-.86,a-c/2-.06],[.6,.06,.04],Af));for(let[n,l]of[[0,0],[1,.5]]){let u=o+.9-l;for(let o of[-1,1]){let l=t.box([r,i+s+.2+n*.42,a+o*(c/4+.12)],[u,.14,(c/2+.42)/Math.cos(.34)],jf);l.rotation.x=o*.34,e.add(l);let d=t.box([r,i+s+.12+n*.42,a+o*(c/2+.42)],[u+.12,.1,.14],kf);d.rotation.x=o*.34,e.add(d)}}e.add(t.box([r,i+s+.62,a],[o+1,.12,.22],kf)),e.add(t.box([r,i+s+.9,a],[.4,.5,.4],Of)),e.add(t.box([r,i+s+1.2,a],[.16,.3,.16],Af))}var Pf=[[`#cdbfe6`],[`#e2d8f0`],[`#b9a7d4`],[`#f0eaf7`]],Ff=[`#d8b25e`],If=[`#2b2530`],Lf=[`#d7dde3`],Rf=[`#b08a4e`],zf=[`#e6c8ab`];function Bf(e,t,n,r){let i=new f;i.add(e.box([0,.34,0],[n?.44:.5,.68,.34],t)),i.add(e.box([0,.86,0],[.42,.4,.3],t)),i.add(e.box([0,.98,.15],[.28,.2,.06],[`#f7f2ff`]));let a=[];for(let n of[-1,1]){let r=new f;r.position.set(n*.3,.98,0),r.add(e.box([0,-.18,0],[.16,.36,.2],t)),i.add(r),a.push(r)}i.add(e.box([0,.7,0],[.44,.1,.32],Ff)),i.add(e.box([0,1.18,0],[.26,.26,.24],zf)),i.add(e.box([0,1.34,-.02],[.3,.14,.28],If)),n?(i.add(e.box([0,1.44,-.1],[.34,.14,.16],If)),i.add(e.box([0,1.36,.12],[.3,.1,.06],If))):i.add(e.box([0,1.44,-.08],[.16,.16,.16],If));for(let t of[-1,1])i.add(e.box([t*.09,1.18,.13],[.04,.04,.04],[`#3a3240`]));let o=e.box([0,.95,-.22],[.09,1.15,.1],[`#4a4250`]);o.rotation.z=.55,i.add(o);let s=e.box([.36,1.42,-.22],[.08,.3,.08],Rf);s.rotation.z=.55,i.add(s),i.add(e.box([.42,1.56,-.22],[.16,.05,.08],Lf));let c=new f;return c.add(e.box([0,0,.1],[.22,.05,1.7],Lf)),c.add(e.box([0,0,1.02],[.15,.04,.26],Lf)),c.add(e.box([0,0,-.82],[.34,.07,.1],Rf)),c.add(e.box([0,0,-.98],[.11,.08,.26],Rf)),c.visible=!1,i.add(c),i.scale.setScalar(.94+r%3*.05),{group:i,arms:a,board:c}}function Vf(e,t){let n=Ef.filter(Boolean),r=n.map((r,i)=>{let a=i%2==1,o=Bf(t,Pf[i%Pf.length],a,i),s=o.group,c={x:r.x,z:r.z+r.d/2+1};return s.position.set(c.x,va(c.x,c.z),c.z),e.add(s),{model:s,arms:o.arms,board:o.board,female:a,home:c,x:c.x,z:c.z,facing:Math.PI,spot:em(i+.4,n.length),route:0,exercising:0,clock:i*2.1,partner:-1}}),i=r.map((e,t)=>e.female?t:-1).filter(e=>e>=0);return i.length===2&&(r[i[0]].partner=i[1],r[i[1]].partner=i[0]),{update(e,t,n,i){let a=n&&t<.5;for(let[t,n]of r.entries())if($p(n,a,e,i,n.female?2.8:2.6,`fly`),n.board.visible=n.route<5,n.board.visible&&(n.board.position.y=-.44),!a||n.route<5)n.model.position.y=va(n.x,n.z);else if(n.clock+=e,n.partner>=0){let e=r[n.partner],a=Math.atan2(e.x-n.x,e.z-n.z);n.facing=a,n.model.rotation.y=a;let o=Math.sin(n.clock*5+t%2*Math.PI);n.arms[0].rotation.x=-1.2+o*1.1,n.arms[1].rotation.x=-.4-o*.5,i||(n.model.position.y=va(n.x,n.z)+Math.abs(o)*.12)}else{if(i)continue;let e=Math.sin(n.clock*4.2);n.arms[0].rotation.x=-1.6+e*1,n.arms[1].rotation.x=-.6,n.model.rotation.y=Math.atan2(n.x- -16.72,n.z- -10.67)+e*.6,n.model.position.y=va(n.x,n.z)+Math.abs(e)*.08}}}}var Hf={x:24,z:-25.5,w:15,d:11,top:.55,tents:[{x:27.6,z:-22.4,color:`#f2e6d2`},{x:27.6,z:-28.2,color:`#e8d5c4`}]},Uf=[`#dfe9ee`,`wood`],Wf=[`#7fb2cf`,`wood`],Gf=[`#f4fbff`],Kf=[`#4f89ab`],qf=[`#c9b48d`];function Jf(e,t){let{x:n,z:r,w:i,d:a,top:o}=Hf;e.add(t.box([n,o-.25,r],[i+.6,.5,a+.6],[`#8a8f97`])),e.add(t.box([n,o-.04,r],[i,.16,a],Uf)),e.add(t.box([n,o+.05,r-a/2+.35],[i-.6,.04,.3],Wf)),e.add(t.box([n,o+.05,r+a/2-.35],[i-.6,.04,.3],Wf)),e.add(t.box([n-i/2+.35,o+.05,r],[.3,.04,a-1.2],Wf)),e.add(t.box([n+i/2-.35,o+.05,r],[.3,.04,a-1.2],Wf));let s=(n,r)=>{e.add(t.box([n,o+.42,r],[.1,.84,.1],Kf))},c=(n,r,i,a)=>{for(let s of[.36,.72])e.add(t.beam([[n,o+s,r],[i,o+s,a]],.07,Gf))},l=n-i/2+.15,u=n+i/2-.15,d=r-a/2+.15,f=r+a/2-.15;for(let e of[l,u]){for(let t=0;t<=3;t+=1)s(e,d+(f-d)*t/3);c(e,d,e,f)}for(let e=0;e<=4;e+=1)s(l+(u-l)*e/4,d);c(l,d,u,d),c(l,f,l+2,f),c(u-2,f,u,f);for(let n of Hf.tents){let{x:r,z:i}=n,a=[`#e8944a`],s=[`#f6efe2`];for(let n of[-1,1])for(let a of[-1,1])e.add(t.box([r+n*1.5,o+1.4,i+a*1.4],[.1,2.8,.1],qf));for(let n=0;n<4;n+=1){let c=4.2-n*.95;e.add(t.box([r,o+2.95+n*.34,i],[c,.36,c],n%2==0?a:s))}e.add(t.box([r,o+4.35,i],[.14,.4,.14],a));for(let n of[-1,1])e.add(t.box([r,o+2.7,i+n*1.5],[3,.3,.08],s))}}Hf.x-Hf.w/2,Hf.x+Hf.w/2,Hf.z-Hf.d/2,Hf.z+Hf.d/2;var Yf=[`#805843`,`wood`],Xf=[`#ad9e8d`,`brick`],Zf=[`#a9a293`],Qf=[`#d3d1c9`,`grass`],$f=[`#a8a196`,`brick`],ep=[`#c6c0d2`,`brick`],tp=[`#ceb28a`],np=2.65;function rp([e,t,n,r],i=0){let a=[],o=0;for(let s=e+.35;s<t;s+=np,o++)o<i||a.push([s,n+.1],[s,r-.1]);return a}function ip(e,t,n){let[r,i,a,o]=t;return e.box([(r+i)/2,q-.48,(a+o)/2],[i-r,.96,o-a],n)}function ap(e,t,n){let r=n.area,[i,a,o,s]=r,c=n.deckFrom??i,l=Et(113),u=(o+s)/2,d=Math.ceil((a-c)/.37),f=(a-c)/d;for(let n=0;n<d;n++){let r=c+(n+.5)*f,i=[`#a07655`,`#b48b65`,`#ba916b`,`#a57b5c`][Math.floor(l()*4)],a=u+(n%3-1)*.62;for(let[n,c]of[[o,a],[a+.023,s]])e.add(t.box([r,q-.08,(n+c)/2],[f-.014,.16,c-n],[i,`wood`]))}for(let n of[o+.1,s-.1])e.add(t.box([(c+a)/2,.44,n],[a-c,.24,.2],Yf));for(let[i,a]of rp(r,n.postSkip))e.add(t.box([i,.34,a],[.31,1.91,.33],Yf)),e.add(t.box([i,.96,a],[.345,.15,.36],tp)),e.add(t.box([i,1.31,a],[.35,.09,.36],[`#91674c`,`wood`]))}function op(e,t,[n,,r]){let i=r>.6?-1:1;e.add(t.box([n,q+1.18,r],[.105,2.36,.105],[`#595655`])),e.add(t.box([n,q+2.36,r+.24*i],[.105,.1,.54],[`#595655`])),e.add(Xi(t.box([n,q+2.25,r+.47*i],[.24,.22,.24],[`#efc481`]),`street`)),e.add(t.box([n,q+2.41,r+.47*i],[.33,.1,.34],[`#595655`]))}function sp(e,t,[n,r,i],a){let o=new f;o.name=`harbor-tree`,o.add(t.box([0,.75,0],[.27,1.5,.28],Yf)),o.add(t.box([0,1.23,0],[1.67,.57,1.42],[`#547262`,`grass`])),o.add(t.box([.04,1.68,.02],[1.26,.42,1.16],[`#6d8868`,`grass`])),o.add(t.box([.1,1.98,.04],[.77,.31,.82],[`#88966e`,`grass`])),o.position.set(n,r,i),o.scale.setScalar(a),e.add(o)}function cp(e,t,[n,r,i],a){let o=t.cylinder([n,r,i],[.69,1,1,6],[`#888a83`,`brick`]);o.scale.set(...a),o.rotation.y=n,e.add(o)}function lp(e,t,[n,r,i],a){e.add(t.cylinder([n,r,i],[.22,.29,.27,8],[a])),e.add(t.cylinder([n,r+.17,i],[.09,.15,.12,8],[`#f0cd8b`]))}var up={x0:-11,x1:11.02,z0:10.98,z1:22.42,cols:2,rows:3};function dp(e,t){let{x0:n,x1:r,z0:i,z1:a,cols:o,rows:s}=up,c=(r-n)/o,l=(a-i)/s;for(let r=0;r<o;r+=1)for(let a=0;a<s;a+=1)e.add(t.box([n+c*(r+.5),q+.001-.06,i+l*(a+.5)],[c,.12,l],Xf))}function fp(e,t){let n=Et(251);e.add(ip(t,Mo,[`#8ca06a`,`grass`])),e.add(ip(t,[No[0],Mo[1],No[2],Mo[2]],[`#8ca06a`,`grass`])),e.add(ip(t,[Mo[1],No[1],No[2],No[3]],[`#8ca06a`,`grass`])),e.add(ip(t,Po,[`#8ca06a`,`grass`]));let[r,i,a,o]=Fo;e.add(t.box([(r+i)/2,V.upperY-2.4,(a+o)/2],[i-r,4.8,o-a],[`#8ca06a`,`grass`])),e.add(ip(t,[Mo[1],Io[1],Io[2],Io[3]],[`#8ca06a`,`grass`])),e.add(ip(t,Lo,[`#8ca06a`,`grass`])),e.add(ip(t,Ro,Xf));for(let r=0;r<18;r++){let i=-13+r*1.21,a=-11.7+n()*.26,o=[.54+n()*.44,.48+n()*.75,.64];r>1&&cp(e,t,[i,.18,a],o),cp(e,t,[11.4+r*.58,.12,15.95],[.55,.57,.62])}for(let r=0;r<16;r++){cp(e,t,[8.25+n(),.23,-12.4-r*.83],[.67,.74,.69]);let i=-28+n()*2.6,a=-19+r*2.57,o=.9+n()*.65;(a<-12.3||a>-8.4)&&!(i>=-30&&i<=-12&&a>=-21&&a<=22)&&sp(e,t,[i,q,a],o)}}var pp=[{wall:`#d0a16b`,roof:`#97685e`,trim:`#f1dbc2`},{wall:`#c28b79`,roof:`#6b7880`,trim:`#f3ddbd`},{wall:`#a9af94`,roof:`#836c6a`,trim:`#f0d7b3`},{wall:`#abc1c0`,roof:`#926556`,trim:`#ecd4af`}];function mp(e,t,n){let r=na(t,pp[n.color],n.size);r.name=`harbor-house`,r.position.set(...n.position),r.rotation.y=n.yaw??0,e.add(r)}var hp=[4.4,2.43,4],gp=[{position:[-3,q,19.2],color:0,name:`船夫小屋`},{position:[6,q,19.2],color:3,name:`渔民小屋`}];function _p(e,t){for(let{position:n,color:r,name:i}of gp)mp(e,t,{position:n,size:hp,color:r}),e.add(bc(i,[n[0],q+yc.mountHeight,n[2]-hp[2]/2-.06],Math.PI))}var vp={x:-13,z:50,size:12,gate:4,top:Yd[Yd.length-1].y};function yp(){let{x:e,z:t,size:n,gate:r}=vp,i=n/2,a=t-i,o=t+i,s=e-i,c=e+i,l=r/2;return[[s,a,c,a],[s,o,c,o],[s,a,s,o],[c,a,c,t-l],[c,t+l,c,o]]}var bp=[...yp().map(([e,t,n,r])=>[Math.min(e,n)-.08,Math.max(e,n)+.08,Math.min(t,r)-.08,Math.max(t,r)+.08]),[vp.x-.9,vp.x+.9,vp.z-1.85,vp.z+3.4]],xp=[`#7a7d80`,`brick`],Sp=[`#e9e7e0`];function Cp(e,t){let{x:n,z:r,size:i,top:a}=vp;e.add(t.box([n,a+.03,r],[i,.12,i],xp));for(let i of[-1,1])e.add(t.box([n+i*1.15,a+.1,r],[.55,.02,3.1],Sp));e.add(t.box([n,a+.1,r],[1.75,.02,.5],Sp));for(let i=0;i<16;i+=1){let o=i*Math.PI/8,s=t.box([n+Math.cos(o)*4.3,a+.1,r+Math.sin(o)*4.3],[.18,.02,1.72],Sp);s.rotation.y=-o,e.add(s)}}function wp(e,t){let{top:n}=vp;for(let[r,i,a,o]of yp()){let s=Math.hypot(a-r,o-i),c=Math.max(2,Math.round(s/2)+1);for(let s=0;s<c;s+=1){let l=s/(c-1);e.add(t.box([r+(a-r)*l,n+.55,i+(o-i)*l],[.12,1.1,.12],Yf))}for(let s of[.45,.95])e.add(t.beam([[r,n+s,i],[a,n+s,o]],.07,Yf))}}var Tp=[`#4aa6cf`],Ep=[`#eef1f2`],Dp=[`#343d43`],Op=[`#2e3a41`];function kp(e,t){let{x:n,z:r,top:i}=vp,a=new f;a.name=`harbor-helicopter`,a.position.set(n,i+.09,r),a.add(t.box([0,1.15,.1],[1.5,1.2,2.5],Tp)),a.add(t.box([0,.62,.1],[1.42,.3,2.4],Ep)),a.add(t.box([0,1.26,-1.45],[1.16,.6,.5],Tp)),a.add(t.box([0,1.48,-1.66],[1.06,.42,.12],Op)),a.add(t.box([0,1.3,2.3],[.34,.34,2],Tp)),a.add(t.box([0,1.3,2.3],[.38,.12,2],Ep)),a.add(t.box([0,1.72,3.15],[.12,.92,.46],Ep));let o=new f;o.position.set(.18,1.72,3.15);for(let e of[0,Math.PI/2]){let n=t.box([0,0,0],[.05,.92,.12],Dp);n.rotation.x=e,o.add(n)}a.add(o),a.userData.tailRotor=o;let s=new f;s.position.set(0,2,0),s.add(t.cylinder([0,0,0],[.16,.2,.3,8],Dp));for(let e of[0,Math.PI/2]){let n=t.box([0,.16,0],[5,.06,.26],Dp);n.rotation.y=e,s.add(n)}a.add(s),a.userData.rotor=s;for(let e of[-1,1]){a.add(t.box([e*.78,.06,.1],[.12,.12,2.5],Dp));for(let n of[-.7,.9])a.add(t.box([e*.62,.4,n],[.2,.62,.12],Dp))}return e.add(a),a}var Ap=[`#3d2f26`,`grass`];function jp(e,t){let{x0:n,x1:r,z0:i,z1:a}=Mp,o={x0:vp.x-vp.size/2,x1:vp.x+vp.size/2,z0:vp.z-vp.size/2,z1:vp.z+vp.size/2},s=(n,r,i,a)=>{r-n<=.01||a-i<=.01||e.add(t.box([(n+r)/2,Mp.y+.01,(i+a)/2],[r-n,.04,a-i],Ap))};s(n,r,i,o.z0),s(n,r,o.z1,a),s(n,o.x0,o.z0,o.z1),s(o.x1,r,o.z0,o.z1)}var Mp={x0:-24.3,x1:6.3,z0:38.9,z1:59.9,y:6.56,gate:2.4};function Np(e,t){let{x0:n,x1:r,z0:i,z1:a,y:o,gate:s}=Mp,c=(n,r,i,a)=>{let s=Math.hypot(i-n,a-r),c=Math.max(2,Math.round(s/1.5)+1);for(let s=0;s<c;s+=1){let l=s/(c-1);e.add(t.box([n+(i-n)*l,o+.5,r+(a-r)*l],[.12,1,.12],Yf))}for(let s of[.38,.78])e.add(t.beam([[n,o+s,r],[i,o+s,a]],.08,Yf))};c(n,i,n,a),c(n,a,r,a),c(r,a,r,i),c(r,i,n+s,i)}function Pp(e,t){_p(e,t),Cp(e,t),wp(e,t),mp(e,t,{position:[-2.69,q,-21.21],size:hp,color:2,yaw:Math.PI}),mp(e,t,{position:[-24.7,q,-3],size:hp,color:1,yaw:-Math.PI/2});for(let{tier:n,y:r,z:i,lots:a}of Yd){let o=n===Yd.length-1?Zf:[`#8ca06a`,`grass`];e.add(t.box([-9,r-2.4,i+10],[39-n*2.8,4.8,21],o));let s=r-4.8;if(s>-1){let r=-1.2;e.add(t.box([-9,(s+r)/2,i+10],[39-n*2.8,s-r,21],Xf))}let c=n===0?V.ramp[0]+28:38-n*2.8,l=n===0?(V.ramp[0]-28)/2:-9;e.add(t.box([l,r-.62,i-.49],[c,1.24,.55],Xf)),n===0&&(e.add(t.box([-9,r+.02,i+10],[39,.04,21],Qf)),e.add(t.box([-23.25,.38,22.4],[10.5,.76,.8],[`#8ca06a`,`grass`]))),n===1&&e.add(t.box([-9,r+.02,i+10],[36.2,.04,21],$f)),n===2&&e.add(t.box([-9,r+.02,i+10],[33.4,.04,21],ep));let u=Math.max(...a.map(e=>e.x));for(let{x:o,house:s,treeScale:c}of a){s&&n===2?Nf(e,t,{x:o,y:r,z:i+2.3,w:s.width+.2,h:s.height+.5,d:3.8,index:a.findIndex(e=>e.house===s)}):s&&n===1?lm(e,t,{x:o,y:r,z:i+2.3,w:s.width,h:s.height+.3,d:3.6,index:a.findIndex(e=>e.house===s)}):s&&n===0?yd(e,t,{x:o,y:r,z:i+2.3,w:s.width,h:s.height+.4,d:3.6,index:a.findIndex(e=>e.house===s)}):s&&mp(e,t,{position:[o,r,i+2.3],size:[s.width,s.height,3.4],color:s.color});let l=n===Yd.length-1||n===0||n===1||n===2;o!==u&&!l&&sp(e,t,[o+2.8,r,i+2.7],c)}}}function Fp(e,t){let n=14.3;for(let r of[-1.2,1.2])e.add(t.box([3+r,1.52,n],[.13,1.74,.13],Yf));e.add(t.box([3,2.28,n],[2.55,.13,.14],Yf));for(let r=0;r<=12;r++){let i=1.89+r*.185;e.add(t.beam([[i,2.22,n],[i+.07,1.26,n]],.023,[`#93a291`]))}for(let r=0;r<6;r++)e.add(t.box([3,1.3+r*.17,n],[2.29,.025,.026],[`#93a291`]));for(let r of[-.82,.55,.98])lp(e,t,[3+r,1.29,n],`#c58d58`);let r=2.86,i=14.21;for(let n=0;n<8;n+=1){let a=n*Math.PI/4,o=t.box([r+Math.cos(a)*.28,1.86+Math.sin(a)*.28,i],[.215,.075,.07],n%2?[`#efe6d4`]:[`#c0553f`]);o.rotation.z=a+Math.PI/2,e.add(o)}e.add(t.beam([[r,2.28,14.290000000000001],[r,2.17,i]],.035,[`#7a6a52`]))}function Ip(e,t){Fp(e,t);for(let[n,r]of[[-1.2,2.34],[-1.2,-2.34],[9,2.34],[9,-2.34]])op(e,t,[n,q,r]);for(let[n,r]of[[0,12.2],[-6.9,15.9]])e.add(t.box([n,.91,r],[.65,.52,.61],[`#bc8a59`,`wood`])),e.add(t.box([n,1.19,r],[.68,.08,.64],Yf)),lp(e,t,[n-.46,.81,r],`#bd6951`)}function Lp(e,t){let n=[`#c1a784`,`grass`];for(let[r,i]of[[-21,-2.6],[2.6,11]])e.add(t.box([-11.8,q-.02-.2,(r+i)/2],[1.2,.4,i-r],n))}function Rp(e){let t=new Map;e.updateMatrixWorld(!0),e.traverse(e=>{if(!(e instanceof F)||e.geometry.type!==`BoxGeometry`)return;let n=e.material,r=`${n.id}:${e.userData.harborGlow??``}`,i=t.get(r);i?i.blocks.push(e):t.set(r,{material:n,blocks:[e]})});for(let{material:n,blocks:r}of t.values()){if(r.length<2)continue;let t=new k(r[0].geometry,n,r.length);r[0].userData.harborGlow&&(t.userData.harborGlow=r[0].userData.harborGlow,t.userData.glowPoints=r.map(e=>new D().setFromMatrixPosition(e.matrixWorld))),r.forEach((e,n)=>{t.setMatrixAt(n,e.matrixWorld),e.removeFromParent()}),e.add(t)}}var zp=`vessel`;function Bp(e,t){let n=[{id:zp,point:[-.3,.025,8.8],yaw:.13,size:1,color:`#65866e`},{id:`east-shoal`,point:[42,.03,-8],yaw:.62,size:.75,color:`#7a827d`},{id:`outer-cay`,point:[64,.03,-26],yaw:-.28,size:.8,color:`#9c785b`}],r=n.map(({id:n,point:r,yaw:i,size:a,color:o})=>{let s=oa(t,o);return s.name=`harbor-boat-${n}`,s.position.set(r[0],r[1],r[2]),s.rotation.y=i,s.scale.setScalar(a),s.traverse(e=>{e.raycast=()=>{}}),e.add(s),s}),i=r[n.findIndex(e=>e.id===zp)]??r[0],a=sa(t);return a.name=`harbor-yacht`,a.position.set(16.45,.03,21.3),a.rotation.y=-.06,a.traverse(e=>{e.raycast=()=>{}}),e.add(a),{boats:r,vessel:i,yacht:a,bases:n.map(e=>e.point)}}function Vp(e,t){let n=0;for(let r=-30;r<=8.6;r+=1.15){n+=1;let i=.62+n%4*.06;cp(e,t,[r,.14,-25.8],[i,.9+n%3*.08,i])}for(let r=-25;r<=-11;r+=1.15){n+=1;let i=.6+n%6*.05;cp(e,t,[-30.4,.14,r],[i,.86+n%3*.08,i])}for(let r=-25;r<=-11.5;r+=1.15){n+=1;let i=.6+n%5*.05;cp(e,t,[8.9,.14,r],[i,.86+n%3*.08,i])}for(let r=-8.4;r<=21.6;r+=1.15){n+=1;let i=.6+n%6*.05;cp(e,t,[-30.4,.14,r],[i,.86+n%3*.08,i])}}function Hp(e,t){let n=0;for(let r=11;r>=-11;r-=1.15){n+=1;let i=.6+n%6*.05;cp(e,t,[r,.14,10.6],[i,.88+n%3*.08,i])}for(let r=11;r<=16;r+=1.15){n+=1;let i=.6+n%5*.05;cp(e,t,[11.4,.14,r],[i,.88+n%3*.08,i])}}var Up=[{footprint:[5.15,8.25,-23.1,-20],height:10.4},{footprint:[-4.94,-.44,-23.26,-19.16],height:3.9},{footprint:[-5.25,-.75,17.15,21.25],height:3.9},{footprint:[3.75,8.25,17.15,21.25],height:3.9},{footprint:[-26.9,-22.5,-5.3,-.7],height:3.9}],Wp=Zd.map(e=>({footprint:e.footprint,height:(e.base??V.upperY)-V.upperY+e.height})),Gp=[...Up.map(e=>e.footprint),...bp,...Zd.map(e=>e.footprint),...Qd,...zc,...xo,Yc,sc,...Ql,...yu,el,...fl,[-30,9.2,-26.9,-26.3],[-31.2,-30.6,-26.9,-10.4],[9.2,9.8,-26.9,-10.4],[-31.2,-30.6,-8.4,22],[-11.5,11.9,9.9,10.35],[11.75,12.25,10.35,16.1],[-30,-29.55,-8.38,22],[1.7,4.3,14.16,14.44],[-.78,.35,11.87,12.53],[-7.7,-6.56,15.57,16.23],[.24,.96,1.87,2.55],[11.54,12.26,2.59,3.31],[-1.29,-1.11,2.27,2.43],[8.91,9.09,2.27,2.43],[8.91,9.09,-2.43,-2.27]];function Kp(e){let t=[],n=new Je;return e.traverse(e=>{if(e.name!==`harbor-tree`&&e.name!==`harbor-house`&&e.name!==`harbor-tower`)return;n.setFromObject(e);let{min:r,max:i}=n;t.push({footprint:[r.x,i.x,r.z,i.z],base:r.y,height:i.y-r.y})}),t}for(let[e,t]of[...rp(Ao,1),...rp(jo)])Gp.push([e-.18,e+.18,t-.18,t+.18]);function qp(e,t){e.add(t.cylinder([21.8,q+.22,17.87],[.23,.25,.42,10],[`#8a6a4a`]))}function Jp(e){let t=new Je,n=[];return e.traverse(e=>{if(e.name!==`harbor-tree`)return;t.setFromObject(e);let r=.14,i=(t.min.x+t.max.x)/2,a=(t.min.z+t.max.z)/2,o=t.max.y-q-_a(i,a);o<.8||t.max.x-t.min.x<r*3||n.push({footprint:[t.min.x+r,t.max.x-r,t.min.z+r,t.max.z-r],height:o,supportOnly:!0})}),n}function Yp(e,t=ta()){let n=new f;fp(n,t),Hp(n,t),dp(n,t),Vp(n,t),qp(n,t),ap(n,t,{area:Ao,deckFrom:Mo[1],postSkip:1}),ap(n,t,{area:jo}),Pp(n,t),Ip(n,t),Lp(n,t),Uc(n,t);let r=ia(t);r.name=`harbor-tower`,r.position.set(6.7,q,-21.55),n.add(r);for(let[e,r,i]of[[17,-6,`#c97959`],[23,-12,`#d1ab63`],[14,9,`#bf7154`],[30,-3,`#cfac62`]])lp(n,t,[e,.18,r],i);lf(n,t),Xc(n,t),So(n,t),pl(n,t),yf(n,t),Tf(n,t),nu(n,t),bu(n,t),Kd(n,t),Jf(n,t),Xu(n,t),Gu(n,t),jp(n,t),Np(n,t);let i=Kp(n),a=Jp(n);Rp(n);let o=kp(n,t);e.add(n);let{boats:s,vessel:c,yacht:l,bases:u}=Bp(e,t);return{animate:(e,t)=>{s.forEach((n,r)=>{if(n!==c){let t=u[r],i=3.2+r*.8,a=e*.16+r*1.7;n.position.x=t[0]+Math.cos(a)*i,n.position.z=t[2]+Math.sin(a)*i,n.rotation.y=-a+Math.PI*.5}n.position.y=.033+Math.sin(e*1.41+r)*.043,n.rotation.z=Math.sin(e*.96+r*.71)*.025,n.rotation.x=Math.sin(e*.88+r*.65)*.045+(n===c?t:0)})},vessel:c,yacht:l,helicopter:o,flightVolumes:i,treeTops:a}}var Xp={x:-16.72,z:-10.67},Zp=[{x:-23.6,z:38},{x:-27,z:24.2},{x:-25,z:12},{x:-20,z:-3},{x:Xp.x,z:Xp.z}];function Qp(e,t,n,r,i=.5,a=0){let o=t.x-e.x,s=t.z-e.z,c=Math.hypot(o,s);if(c<=i)return!0;let l=Math.min(r*n,c),u=e.x+o/c*l,d=e.z+s/c*l;if(Zo(u,d,{obstacles:Gp.map(e=>({footprint:e,height:2.2})),height:0,radius:.28}))e.x=u,e.z=d;else if(Zo(u,e.z,{obstacles:Gp.map(e=>({footprint:e,height:2.2})),height:0,radius:.28}))e.x=u;else if(Zo(e.x,d,{obstacles:Gp.map(e=>({footprint:e,height:2.2})),height:0,radius:.28}))e.z=d;else return!0;return e.facing=Math.atan2(o,s),e.model.position.set(e.x,va(e.x,e.z)+a,e.z),e.model.rotation.y=e.facing,!1}function $p(e,t,n,r,i,a=`walk`){let o=a===`fly`?.45:0;if(t){if(e.route<Zp.length){let t=Zp[e.route];Qp(e,t,n,i,e.route===Zp.length-1?.8:1.2,o)&&(e.route+=1),e.exercising=0}else{if(r)return;e.exercising=Math.min(1,e.exercising+n),e.model.position.set(e.x,va(e.x,e.z)+Math.abs(Math.sin(e.exercising*3))*.07,e.z),e.facing+=n*.45,e.model.rotation.y=e.facing}}else if(e.exercising=0,e.route>0){let t=Zp[e.route-1];Qp(e,t,n,i,1,o)&&--e.route}else Qp(e,e.home,n,i*.8,.6,o)}function em(e,t){let n=e/Math.max(1,t)*Math.PI*2;return{x:Xp.x+Math.cos(n)*3.2,z:Xp.z+Math.sin(n)*2.6}}var tm=[],nm=[`#c9c3b5`,`brick`],rm=[`#b3ad9f`,`brick`],im=[`#6b6f76`,`roof`],am=[`#55585e`],om=[`#a8342c`],sm=[`#d8b25e`],cm=[`#ffe6a8`];function lm(e,t,n){let{x:r,y:i,z:a,w:o,h:s,d:c}=n;tm[n.index]=n,e.add(t.box([r,i+.14,a],[o+.5,.28,c+.5],rm)),e.add(t.box([r,i+.28+(s-.28)/2,a],[o,s-.28,c],nm));for(let n of[-1,1])for(let l of[-1,1])e.add(t.box([r+n*(o/2-.12),i+s/2,a+l*(c/2-.1)],[.2,s,.2],om));e.add(t.box([r,i+.28+.66,a-c/2-.02],[1,1.32,.1],[`#8f2a24`])),e.add(t.box([r,i+1.62,a-c/2-.06],[1.3,.16,.12],om));for(let n of[-.22,0,.22])e.add(t.box([r+n,i+.9,a-c/2-.08],[.1,.1,.04],sm));for(let n of[-1,1])e.add(t.box([r+n*(o/2-.75),i+s-.62,a-c/2-.03],[.62,.62,.06],cm)),e.add(t.box([r+n*(o/2-.75),i+s-.62,a-c/2-.07],[.7,.06,.03],om)),e.add(t.box([r+n*(o/2-.75),i+s-.62,a-c/2-.07],[.06,.7,.03],om));let l=.5;for(let n of[-1,1]){let u=t.box([r,i+s+.34,a+n*(c/4+.1)],[o+l*2,.18,(c/2+l)/Math.cos(.42)],im);u.rotation.x=n*.42,e.add(u);let d=t.box([r,i+s+.2,a+n*(c/2+l*.86)],[o+l*2,.12,.16],am);d.rotation.x=n*.42,e.add(d);let f=Math.max(5,Math.round((o+l*2)/.32));for(let u=0;u<f;u+=1){let d=r-(o/2+l)+.16+u*((o+l*2)/f),p=t.box([d,i+s+.44,a+n*(c/4+.1)],[.07,.05,(c/2+l)/Math.cos(.42)*.94],am);p.rotation.x=n*.42,e.add(p)}}e.add(t.box([r,i+s+.72,a],[o+l*2+.1,.16,.3],am));for(let n of[-1,1])e.add(t.box([r+n*(o/2+l),i+s+.84,a],[.22,.34,.26],am));for(let n of[-1,1])e.add(t.box([r+n*(o/2-.3),i+s-.1,a-c/2-.25],[.22,.28,.22],om))}var um=[[`#b8642f`],[`#a8863f`],[`#8f5a3c`],[`#c9a05a`]],dm=[`#7a4a2a`],fm=[`#e2c2a2`];function pm(e,t,n){let r=new f;r.add(e.box([0,.34,0],[.48,.68,.34],t)),r.add(e.box([0,.86,0],[.42,.4,.3],t)),r.add(e.box([0,.98,.15],[.28,.2,.06],[`#e8d8b8`]));let i=[];for(let n of[-1,1]){let a=new f;a.position.set(n*.28,.98,0),a.add(e.box([0,-.18,0],[.18,.36,.22],t)),r.add(a),i.push(a)}r.add(e.box([0,1,.17],[.34,.08,.08],dm)),r.add(e.box([0,.92,.2],[.16,.1,.06],dm)),r.add(e.box([0,1.2,0],[.3,.3,.28],fm));for(let t of[-.06,0,.06])r.add(e.box([t,1.33,.02],[.03,.03,.03],[`#b98a6a`]));for(let t of[-1,1])r.add(e.box([t*.1,1.2,.14],[.04,.04,.04],[`#3a3030`]));return r.scale.setScalar(.94+n%3*.05),{group:r,arms:i}}function mm(e,t){let n=tm.filter(Boolean),r=n.map((r,i)=>{let a=pm(t,um[i%um.length],i),o=a.group,s={x:r.x,z:r.z+r.d/2+.95};return o.position.set(s.x,va(s.x,s.z),s.z),e.add(o),{model:o,arms:a.arms,home:s,x:s.x,z:s.z,facing:Math.PI,spot:em(i,n.length),route:0,exercising:0,role:`monk`,clock:i*1.7}});return{update(e,t,n,i){let a=n&&t<.5;for(let t of r)if($p(t,a,e,i,2.5,`walk`),a&&t.route>=5){if(t.clock+=e,t.clock%16<8){if(i)continue;let e=Math.sin(t.clock*6);t.arms[0].rotation.x=-1.5+e*.9,t.arms[1].rotation.x=-1.5-e*.9,t.model.position.y=va(t.x,t.z)-.08}else t.arms[0].rotation.x=-.9,t.arms[1].rotation.x=-.9,t.model.position.y=va(t.x,t.z)-.28}}}}var hm={farmer:{x:-4.66,z:49.52,label:`果农`,line:`「来点水果和蔬菜吗？刚摘的。」`},pilot:{x:-14.2,z:42.4,label:`飞行员`,line:`「想要开飞机吗？」`}},gm=[`#e0bd97`],_m=[`#d9b866`,`grass`],vm=[`#7f8f5a`],ym=[`#c9b78f`],bm=[`#5a4a3a`],xm=[`#6b4a3a`],Sm=[`#4a5a6b`],Cm=[`#2a2a30`],wm=[`#c8402f`],Tm=[`#a9805a`,`wood`];function Em(e,t,n){let r=new f;r.add(e.box([0,1.36,0],[.22,.24,.22],gm)),r.add(e.box([0,1.02,0],[.46,.5,.28],t));for(let i of[-1,1])r.add(e.box([i*.3,.98,0],[.14,.44,.16],t)),r.add(e.box([i*.12,.38,0],[.16,.72,.2],n)),r.add(e.box([i*.12,.06,.03],[.18,.12,.26],[`#3a3230`]));for(let t of[-1,1])r.add(e.box([t*.08,1.38,.11],[.04,.04,.03],[`#3a3030`]));return r.add(e.box([0,1.5,-.01],[.24,.1,.24],[`#4a3b2f`])),r}function Dm(e,t){let n=[],r=Em(t,vm,bm);r.add(t.box([0,1.56,0],[.92,.08,.92],_m)),r.add(t.box([0,1.66,0],[.44,.2,.44],_m)),r.add(t.box([0,1,.16],[.4,.56,.05],ym)),r.add(t.box([.55,.22,.3],[.5,.44,.5],Tm));for(let[e,n]of[[-.1,0],[.1,.08],[0,-.12]])r.add(t.box([.55+e,.5,.3+n],[.16,.16,.16],wm));r.add(t.box([.26,.96,.22],[.14,.14,.14],wm));let i=va(hm.farmer.x,hm.farmer.z);r.position.set(hm.farmer.x,i,hm.farmer.z),r.rotation.y=Math.PI*.15,e.add(r),n.push(r);let a=Em(t,Sm,[`#3a4a55`]);a.add(t.box([0,1.6,0],[.44,.2,.44],xm)),a.add(t.box([0,1.54,.22],[.34,.1,.06],Cm)),a.add(t.box([0,1.5,.21],[.4,.04,.1],[`#8a7a68`])),a.add(t.box([0,1.18,0],[.5,.14,.34],[`#6b5540`,`wood`]));let o=va(hm.pilot.x,hm.pilot.z)+.09;a.position.set(hm.pilot.x,o,hm.pilot.z),a.rotation.y=Math.PI*.85,e.add(a),n.push(a);let s=0;return{update(e,t){if(s+=e,!t)for(let[e,t]of n.entries())t.rotation.z=Math.sin(s*(.9+e*.2)+e*1.6)*.02}}}var Om={area:{x0:-29.4,x1:-19.6,z0:-8,z1:13},seed:2671,flowers:64,tufts:46,stemHeight:[.2,.32],colors:[`#e6cf6a`,`#e59aa2`,`#f4f1e6`,`#c6a6e2`,`#e8b06a`],tuftColor:`#7f8f66`,keepOut:[[-27.4,-22,-6,-.2],[-23,-21.3,-.4,1.6],[-23.6,-21.5,3.4,5.7],[-25.8,-22.1,7.1,11.4],[-22.4,-20.4,-4.8,3.8]]};function km(e,t){return Om.keepOut.some(([n,r,i,a])=>e>=n&&e<=r&&t>=i&&t<=a)}function Am(e,t){let n=Et(t),r=[],i=0;for(;r.length<e&&i<e*40;){i+=1;let e=Om.area.x0+n()*(Om.area.x1-Om.area.x0),t=Om.area.z0+n()*(Om.area.z1-Om.area.z0);km(e,t)||r.push({x:e,z:t,size:.6+n()*.8,yaw:n()*Math.PI})}return r}var jm=new Me;function Mm(e,t,n,r){let i=t.box([0,0,0],[1,1,1],[n]),a=new k(i.geometry,i.material,r);return a.frustumCulled=!1,a.raycast=()=>{},e.add(a),a}function Nm(e,t,n,r,i,a,o,s,c){jm.position.set(n,r,i),jm.rotation.set(0,c,0),jm.scale.set(a,o,s),jm.updateMatrix(),e.setMatrixAt(t,jm.matrix)}function Pm(e,t){let n=Mm(e,t,`#6d7d52`,Om.flowers),r=Om.colors.map(n=>Mm(e,t,n,Om.flowers));Am(Om.flowers,Om.seed).forEach((e,t)=>{let i=Om.stemHeight[0]+(Om.stemHeight[1]-Om.stemHeight[0])*(t%4)/3;Nm(n,t,e.x,q+i/2,e.z,.035,i,.035,e.yaw);let a=t%r.length;r.forEach((n,r)=>{r===a?Nm(n,t,e.x,q+i+.05,e.z,.11*e.size,.08*e.size,.11*e.size,e.yaw):Nm(n,t,e.x,q+i+.05,e.z,1e-4,1e-4,1e-4,e.yaw)})});let i=Mm(e,t,Om.tuftColor,Om.tufts);return Am(Om.tufts,Om.seed+17).forEach((e,t)=>{Nm(i,t,e.x,q+.09,e.z,.2*e.size,.18*e.size,.2*e.size,e.yaw)}),n.instanceMatrix.needsUpdate=!0,r.forEach(e=>{e.instanceMatrix.needsUpdate=!0}),i.instanceMatrix.needsUpdate=!0,{}}var{playerRadius:Fm}=no,Im={left:_t.west-W.mapMargin,right:_t.east+W.mapMargin,near:_t.north-W.mapMargin,far:_t.south+W.mapMargin};function Lm({x:e,z:t}){let n=Math.min(e-Im.left,Im.right-e,t-Im.near,Im.far-t);return 1-Math.max(0,Math.min(1,n/W.edgeBrake))}function Rm({x:e,z:t}){let n=ya(e,t,zo);return Math.max(n,ya(e-Fm,t,zo),ya(e+Fm,t,zo),ya(e,t-Fm,zo),ya(e,t+Fm,zo))}function zm(e){let t=Rm(e);return t>0?t+W.groundClearance:W.waterClearance}function Bm(e,t){let n=[...t,...e.map(({footprint:e,height:t})=>{let[n,r,i,a]=e;return{footprint:e,base:Rm({x:(n+r)/2,z:(i+a)/2}),height:t??W.propHeight}})].map(({footprint:[e,t,n,r],base:i=q,height:a})=>({left:e-Fm,right:t+Fm,near:n-Fm,far:r+Fm,bottom:i,top:i+a})),r=({x:e,y:t,z:r})=>n.some(n=>e>n.left&&e<n.right&&r>n.near&&r<n.far&&t<n.top&&t+W.bodyHeight>n.bottom);return{landing({x:t,z:n}){if(!Zo(t,n,{height:0,obstacles:[]}))return ro.waterLevel;let i=Rm({x:t,z:n});if(Zo(t,n,{height:0,obstacles:e})&&!r({x:t,y:i,z:n}))return i;let a=Math.hypot(t-U.center.x,n-U.center.z);if(a>=U.lanternRadius&&a<=U.outerRadius)return q+U.platformOffset;let o=Qo(t,n,{obstacles:e,height:1/0});return o>0?i+o:i},clear({x:e,y:t,z:n},i){return e<Im.left||e>Im.right||n<Im.near||n>Im.far||t>W.maximumAltitude||t<(i?zm({x:e,z:n}):Rm({x:e,z:n}))?!1:!r({x:e,y:t,z:n})}}}var Vm={x:0,y:0,z:0},Hm=.13,Um=.04,Wm=.4,Gm=.88;function Km(e,t,n){let r=W.speed*(e.sprint?W.sprintMultiplier:1)*(1-n*n*Gm);return{x:(Math.cos(t)*e.x-Math.sin(t)*e.z)*r,z:(-Math.sin(t)*e.x-Math.cos(t)*e.z)*r,y:e.vertical*(e.vertical>0?W.climbSpeed:W.descentSpeed)}}function qm(e,t,n){let r={...Vm};for(let i of[`x`,`y`,`z`]){let a=i===`y`?W.verticalResponse:t.x||t.z?W.accelerationTime:W.brakingTime,o=Ts(n,a);r[i]=t[i]*n+(e[i]-t[i])*o*a/Cs,e[i]+=(t[i]-e[i])*o}return r}function Jm(e,t,n){let{velocity:r,target:i,step:a,clearance:o,committedLanding:s}=n,c=qm(r,i,a);for(let n of[`y`,`x`,`z`]){if(!c[n])continue;let i={...t,[n]:t[n]+c[n]};if(n===`y`){let e=o?zm(i):Rm(i),t=Math.min(W.maximumAltitude,Math.max(e,i.y));t!==i.y&&(r.y=0),i.y=t}let a=n!==`y`&&(!o||s)&&typeof e.landing(i)!=`number`;(!s||!a)&&e.clear(i,o||a)?t[n]=i[n]:r[n]=0}}function Ym(e,t,n){let r={...Vm},i={...Vm},a=`ground`,o={x:e.x,z:e.z},s=0,c=0,l=!1,u=()=>{Object.assign(i,Vm),c=0};function d(){a!==`ground`&&(a=`ground`,u(),s=0,n.notice(``),n.change(!1))}function f(){let e=t.landing(r);return typeof e!=`number`&&!l&&(n.notice(W.ui.blocked),l=!0),e}function p(e,o,s){if(a===`ground`||e<=0)return;o.vertical>=0&&(l=!1);let c=a===`land`||o.vertical<0?f():`blocked`,u=Km(o,s,Lm(r));a===`launch`&&Object.assign(u,{x:0,z:0,y:W.launchSpeed}),a===`land`&&Object.assign(u,{x:0,z:0,y:-W.landingSpeed});let p=(a===`land`||o.vertical<0)&&typeof c==`number`,h=a===`air`&&!p&&r.y<zm(r);h&&Object.assign(u,{x:0,z:0,y:Math.max(u.y,W.launchSpeed)});let g={...r},_=Math.ceil(e/no.maxCollisionStep);for(let n=0;n<_;n++)Jm(t,r,{velocity:i,target:u,step:e/_,clearance:a===`air`&&!p&&!h,committedLanding:a===`land`});if(a===`launch`&&r.y>=zm(r)&&(a=`air`),typeof c==`number`&&p&&r.y<c+Um&&n.land({...r,y:c})){let e=Math.hypot(r.x-U.center.x,r.z-U.center.z),t=e>=U.lanternRadius&&e<=U.outerRadius,i=c>Rm(r)+Wm;d(),t?n.notice(W.ui.platform):i&&n.notice(W.ui.roof)}else m(e,g)}function m(t,n){let i=r.x-n.x,a=r.z-n.z,o=_a(r.x,r.z);e.speed=Math.hypot(i,a)/t,c=Math.hypot(i,a,r.y-n.y)/t;let l=e.speed>no.movementThreshold?Es(e.facing,Math.atan2(i,a),Ts(t,W.turnTime)):e.facing,u=(l-e.facing)/t;s+=(Math.max(-1,Math.min(1,u))-s)*Ts(t,Hm),Object.assign(e,{x:r.x,z:r.z,elevation:o,facing:l,height:r.y-q-o,airborne:!0,jumpAge:0,landing:0})}return{get active(){return a!==`ground`},get bank(){return s},get speed(){return c},toggle(){if(a===`land`)a=`air`;else if(a!==`ground`){let t=r.y;a=`ground`,n.change(!1),n.notice(`斗篷收起——按住空格滑翔`),e.height=Math.max(0,t-q-_a(e.x,e.z)),e.airborne=!0,u()}else Object.assign(r,{x:e.x,z:e.z,y:q+e.elevation+e.height}),o={x:e.x,z:e.z},a=`launch`,u(),n.change(!0)},disable(){a!==`ground`&&a!==`land`&&(typeof t.landing(r)==`number`?a=`land`:(n.land({...o,y:.65+_a(o.x,o.z)})||n.recover(),d(),n.notice(W.ui.recovered)))},update:p,reset:d,clear:u}}function Xm(e){let{baseWind:t,speedWind:n,flapInterval:r,flapThreshold:i}=W.audio,a=r;return(o,s,c)=>{if(!s)return a=r,0;let l=Math.min(1,c/W.speed);return a+=o,a>=r&&l>=i&&(e(`cape`,{volume:l}),a=0),t+n*l}}var Zm=Vo.eval.x,Qm=9.26,$m=1.44,eh=2.65,th=112,nh=40,rh=[-1,1],ih={footprint:[Zm-$m,Zm-$m+.9,7.46,11.06],height:eh};function ah(){let{canvas:e,context:t}=Dt(th,nh);t.fillStyle=`#755440`,t.fillRect(0,0,th,nh),t.fillStyle=`#ac875e`,t.fillRect(3,3,106,34),t.fillStyle=`#fff0c9`,t.textAlign=`center`,t.textBaseline=`middle`,t.font=`bold 22px "Microsoft YaHei", "PingFang SC", sans-serif`,t.fillText(ft.title,th/2,nh/2);let n=new F(new ye(1.72,.59),new P({map:Mt(e)}));return n.position.set(0,2,-1.52),n.rotation.y=Math.PI,Xi(n,`station`)}function oh(e,t){let n=new f,{box:r}=t;n.add(r([0,.12,0],[3.6,.24,2.88],[`#9a7153`,`wood`])),n.add(r([0,1.1,1.23],[3.34,1.8,.2],[`#bdad88`,`wood`])),n.add(r([0,.71,-1.12],[3.38,.87,.58],[`#9c7457`,`wood`])),n.add(r([0,1.17,-1.15],[3.52,.12,.64],[`#cda77b`,`wood`]));for(let e of rh){for(let t of rh)n.add(r([1.56*e,1.2,1.17*t],[.17,2.4,.17],[`#765848`,`wood`]));let t=r([e*.82,2.42,0],[1.9,.16,3.05],[`#6b8279`,`roof`]);t.rotation.z=-.22*e,n.add(t)}n.add(r([-.84,1.25,-1.16],[.44,.09,.29],[`#d8c8a2`])),n.add(ah()),n.position.set(Zm,q,Qm),n.rotation.y=-Math.PI/2,e.add(n)}function sh(e,t,n){let r=e.vessel,i=t.x-r.x,a=t.z-r.z,o=Math.hypot(i,a);if(o<=St.positionTolerance)return`arrived`;let s=t.wait?Math.min(St.speed,Math.max(.8,o*1.6)):St.speed,c=r.speed+(s-r.speed)*Ts(n,St.startResponse),l=Es(r.yaw,Math.atan2(i,a),Ts(n,St.turnSeconds)),u=Math.min(o,c*n),d={x:r.x+i*u/o,z:r.z+a*u/o,yaw:l,speed:c};return e.followRoute(d,n)?`moving`:`blocked`}function ch(e,t){let n=0,r=0,i=!1;return{start(){n=0,r=0,i=!1,e.startTour()},update(a){if(i||!a)return null;if(r>0)return r=Math.max(0,r-a),r||t(null),null;let o=St.route[n],s=sh(e,o,a);return s===`blocked`?(i=!0,`blocked`):s===`moving`?null:(n++,n>=St.route.length?(i=!0,`finish`):(o.wait&&(e.stop(),r=o.wait,t({title:o.title,caption:o.caption||`待填写`,lookAt:`lookAt`in o?o.lookAt:void 0})),null))},stop(){return i=!0,t(null),e.finishTour()}}}function lh(e,t){let{player:n}=e.motion,[r,,i]=H.direction,a=_a(H.seat.x,H.seat.z);Object.assign(n,H.seat,{elevation:a+H.seatedElevation,height:0,airborne:!1,sitting:!0,facing:Math.atan2(r,i)}),e.orbit.aim(null,{yaw:Math.atan2(-r,-i)+H.cameraSideAngle,pitch:t?H.reducedPitch:H.pitch})}function uh(e,t,n){let[r,i,a]=t.anchor??[t.hotspot.x,1.2,t.hotspot.z];n.aim({x:r,y:i,z:a},{yaw:Math.atan2(e.x-r,e.z-a),pitch:U.startPitch})}function dh({motion:e,orbit:t}){e.climb(),t.setLookout(!0),t.center(U.arrivalFacing)}function fh(e){let{motion:t,orbit:n,sailing:r}=e,i=null,a=0,o=!1,s=null,c=null,l=H.position,u=ch(r,r=>{if(s=r,e.onCue(r),r?.lookAt){let[e,i,a]=r.lookAt;n.aim({x:e,y:i,z:a},{yaw:Math.atan2(t.player.x-e,t.player.z-a),pitch:.22})}}),d=t=>{i=t,a=0,o=!1,e.onMode(t)},f=r=>{t.teleport(u.stop()),n.setSailing(!1),n.center(t.player.facing),d(null),e.onNotice(r?St.failLabel:St.finishLabel)};function p(a,o){if(a===`lookout`&&!i)dh(e),d(a);else if(a===`leave-lookout`&&i===`lookout`)n.setLookout(!1),t.teleport(U.position),n.center(t.player.facing),d(null),c=null;else if(a===`sunset`&&!i)l={x:t.player.x,z:t.player.z},lh(e,o),d(a);else if(a===`leave-sunset`&&i===`sunset`)t.teleport(l),n.center(t.player.facing),d(null);else if(a===`drive`&&!i){if(!r.startTour())return e.onNotice(X.noBoatLabel),!1;n.setSailing(!0),n.center(t.player.facing,!0),d(a)}else if(a===`board`&&!i){let e=r.nearbyDock();if(!e)return!1;r.toggle(e),n.setSailing(!0),n.center(t.player.facing,!0),d(`drive`)}else if((a===`dock`||a===`return-drive`)&&i===`drive`){let i=a===`dock`?r.nearbyDock():void 0;if(a===`dock`&&!i)return!1;t.teleport(r.finishTour(i??void 0)),n.setSailing(!1),n.center(t.player.facing),d(null),e.onNotice(i?`已在${i.title}靠岸`:St.finishLabel)}else if(a===`tour`&&!i){if(!r.startTour())return e.onNotice(X.noBoatLabel),!1;u.start(),n.setSailing(!0),d(a)}else if((a===`return-tour`||a===`abort-tour`)&&i===`tour`)f(a===`abort-tour`);else return!1;return!0}function m(r){if(i===`sunset`&&(a=Math.min(H.duration,a+r)),i!==`tour`||o)return;let c=u.update(r);s||n.center(t.player.facing,!0),c&&(o=!0,e.onRequest(c===`blocked`?`abort-tour`:`return-tour`))}return{act:p,step:m,get mode(){return i},get dusk(){return i===`sunset`?a/H.duration:0},focusAt(e){return i===`lookout`?(!e||e.hotspot.id===c?(c=null,n.center(t.player.facing)):(c=e.hotspot.id,uh(U.center,e,n)),c):null}}}var ph={limit:5,simplifiedLimit:2,degradedLimit:1,speed:1.04,followSpeed:1.32,footprintRadius:.23,followDistance:4.2,followTime:4.7,followStopDistance:1.18,followCooldown:8,fullUpdateDistance:19,distantUpdateInterval:.25,interactRadius:1.28,nameDistance:2.9,reactionSeconds:1,petCooldown:4.3,petLabel:`摸摸`,palette:{shadow:`#42352d`,face:`#322a2a`,heart:`#da805f`,plate:`#332c29`},residents:[{id:`animal-cat-1`,species:`cat`,name:`猫 1`,x:-22,z:-1.2,radius:2,rest:{x:-22.1,z:-.42},fur:`#cd9564`,accent:`#f0d3ac`,size:.71},{id:`animal-dog-1`,species:`dog`,name:`山小`,x:-14.6,z:12.46,radius:2.6,rest:{x:-15.6,z:12.25},fur:`#bd936b`,accent:`#745e4f`,size:.88},{id:`animal-cat-2`,species:`cat`,name:`云好`,x:7.3,z:1.38,radius:2.1,rest:{x:8.9,z:-1.75},fur:`#93a2a3`,accent:`#d7d2c0`,size:.72},{id:`animal-fox-1`,species:`fox`,name:`青丘`,x:2.73,z:-18.12,radius:1.8,rest:{x:2.9,z:-18.6},fur:`#eef1f4`,accent:`#48535f`,size:.86},{id:`animal-lion-1`,species:`lion`,name:`萨坦`,x:1.4,z:-20.4,radius:2.6,rest:{x:1.2,z:-20.8},fur:`#f5f1e8`,accent:`#e0d4bd`,size:1.42}]},mh=[[-.19,-.32],[.19,.29],[.19,-.32],[-.19,.29]];function hh(e){let{canvas:t,context:n}=Dt(64,19);n.fillStyle=ph.palette.plate,n.fillRect(0,0,t.width,t.height),n.fillStyle=`#f7e2bb`,n.font=`12px "Microsoft YaHei",sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,t.width/2,t.height/2);let r=new Ke(new Ve({map:Mt(t),depthWrite:!1}));return r.scale.set(.54,.17,1),r.position.y=.93,r}function gh(){let{canvas:e,context:t}=Dt(9,9);t.fillStyle=ph.palette.heart,t.fillRect(1,1,3,4),t.fillRect(5,1,3,4),t.fillRect(2,4,5,2),t.fillRect(3,6,3,1),t.fillRect(4,7,1,1);let n=new Ke(new Ve({map:Mt(e),transparent:!0,depthWrite:!1}));return n.scale.setScalar(.22),n}function _h(e,t){return mh.map(([n,r])=>e.box([n,.19,r],[.14,.36,.15],[t.accent]))}function vh(e,t){let n=new f,r=new f,{box:i}=e,a=t.species===`dog`,o=t.species===`fox`,s=t.species===`lion`,c=_h(e,t),l=[-.115,.115].map(e=>i([e,.66,.61],[.037,.042,.017],[ph.palette.face])),u=o?i([0,.53,-.62],[.21,.24,.58],[t.fur]):s?i([0,.56,-.62],[.09,.09,.54],[t.fur]):i([0,.55,-.57],[.095,.1,.43],[t.accent]);r.add(i([0,.4,-.06],[.45,.39,.81],[t.fur]),i([0,.61,.39],[.44,.39,.42],[t.fur]),u,...c,...l),o&&(r.add(i([0,.53,-.93],[.19,.2,.14],[t.accent])),r.add(i([0,.55,.615],[.2,.14,.2],[t.fur]))),s&&(r.add(i([0,.62,.21],[.68,.6,.34],[t.accent])),r.add(i([0,.55,.62],[.22,.16,.22],[t.accent])),r.add(i([0,.56,-.9],[.14,.14,.14],[t.accent]))),a&&r.add(i([0,.55,.615],[.24,.17,.21],[t.accent]));for(let e of[-1,1]){let n=o?.93:s?.86:a?.75:.83,c=o?[.1,.26,.09]:s?[.13,.12,.12]:[.115,a?.19:.16,.16];r.add(i([e*.15,n,.36],c,[t.accent]))}let d=new F(new Le(.32,8),new P({color:ph.palette.shadow,transparent:!0,opacity:.23,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.y=.013;let p=gh(),m=hh(t.name);return p.visible=m.visible=!1,n.scale.setScalar(t.size),n.add(r,d,p,m),{root:n,body:r,legs:c,eyes:l,tail:u,heart:p,nameplate:m,updateBoxes:eo(r)}}var yh=.12;function bh(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}function xh(e,t){let n=vh(e,t);return n.root.position.set(t.x,q+_a(t.x,t.z),t.z),{resident:t,model:n,position:{x:t.x,z:t.z},random:Et(Math.abs(Math.floor(t.x*7523))),target:null,facing:0,state:`idle`,time:0,phase:0,idle:0,follow:0,cooldown:0,pet:0,followCooldown:0,speed:0,distant:0}}function Sh(e,t,n){let{resident:r,random:i,position:a}=e;if(e.pet>0)return null;if(r.species===`dog`&&!t.sailing&&!t.lookout&&!e.followCooldown&&bh(a,t)<ph.followDistance)return e.follow||=ph.followTime,bh(a,t)>ph.followStopDistance?t:null;if(n&&r.species===`cat`)return bh(a,r.rest)>yh?r.rest:null;if(e.target&&bh(a,e.target)>yh)return e.target;if(e.idle>0)return null;if(e.state===`walk`)return e.idle=.9+i()*2,null;if(bh(a,r)>r.radius)return r;let o=i()*Math.PI*2,s=i()*r.radius;return e.target={x:r.x+Math.cos(o)*s,z:r.z+Math.sin(o)*s},e.target}function Ch(e,t,n){let{position:r,resident:i}=e,{step:a,obstacles:o}=n,s=Math.atan2(t.x-r.x,t.z-r.z),c=e.follow>0?ph.followSpeed:ph.speed,l=Math.min(bh(r,t),c*a),u=Math.sin(s)*l,d=Math.cos(s)*l,f={obstacles:o,height:0,radius:ph.footprintRadius*i.size},p={...r};Zo(r.x+u,r.z,f)&&(r.x+=u),Zo(r.x,r.z+d,f)&&(r.z+=d),e.speed=bh(p,r)/a,e.speed<.02?(e.idle=.65,e.target=null):e.facing=Es(e.facing,Math.atan2(r.x-p.x,r.z-p.z),Ts(a,.24))}function wh(e,t,n){let{step:r,night:i,obstacles:a}=n;if(!r)return;e.speed=0,e.pet=Math.max(0,e.pet-r),e.idle=Math.max(0,e.idle-r),e.cooldown=Math.max(0,e.cooldown-r),e.followCooldown=Math.max(0,e.followCooldown-r),e.follow>0&&(e.follow=Math.max(0,e.follow-r),e.follow||(e.followCooldown=ph.followCooldown,e.target=null));let o=Sh(e,t,i);o&&Ch(e,o,{step:r,obstacles:a}),e.state=e.speed>.02?`walk`:e.pet>0?`sit`:i&&e.resident.species===`cat`&&bh(e.position,e.resident.rest)<.4?`sleep`:e.idle>1?`sit`:`idle`}function Th(e,t,n){let{position:r,model:i,resident:a}=e;i.root.position.set(r.x,q+_a(r.x,r.z),r.z),i.root.rotation.y=e.facing,e.phase+=n.step*e.speed*11;let o=n.reduced?0:Math.sin(e.phase)*Math.min(.48,e.speed*.43);i.body.scale.y=e.state===`sleep`?.58:e.state===`sit`?.79:1,i.legs.forEach((e,t)=>{e.rotation.x=t%2?o:-o}),i.tail.rotation.y=e.pet&&a.species===`dog`&&!n.reduced?Math.sin(e.pet*31)*.88:o,i.eyes.forEach(t=>{t.scale.y=e.pet||e.state===`sleep`?.012:.042}),i.nameplate.visible=!t.sailing&&!t.lookout&&bh(r,t)<=ph.nameDistance,i.heart.visible=e.pet>0,i.heart.position.y=1.18+(n.reduced?0:(1-e.pet/ph.reactionSeconds)*.35),i.updateBoxes()}function Eh(e){let{scene:t,kit:n,obstacles:r,simplified:i}=e,a=ph.residents.slice(0,Math.min(ph.limit,i?ph.simplifiedLimit:ph.limit)).map(e=>xh(n,e));return a.forEach(e=>t.add(e.model.root)),{targets:a.map(({resident:e,model:t})=>({id:e.id,title:e.name,object:t.root,height:.5,detailAnchor:t.body})),update(e,t,n){a.forEach((i,a)=>{let o=n.scenery||a<ph.degradedLimit;if(i.model.root.visible=o,!o)return;let s=bh(i.position,e)<=ph.fullUpdateDistance;i.distant+=t,!s&&i.distant<ph.distantUpdateInterval||(wh(i,e,{step:i.distant,night:n.night,obstacles:r}),Th(i,e,{step:i.distant,reduced:n.reduced||!s}),i.distant=0)})},nearby(e){return e.lookout||e.sailing||e.sitting?null:a.find(t=>t.model.root.visible&&!t.cooldown&&bh(t.position,e)<ph.interactRadius)??null},pet(e){e.pet=ph.reactionSeconds,e.cooldown=ph.petCooldown,e.speed=0}}}var Dh=([e,t,n,r])=>`(p.x >= ${e.toFixed(3)} && p.x <= ${t.toFixed(3)} && p.y >= ${n.toFixed(3)} && p.y <= ${r.toFixed(3)})`,Oh=`
  bool navigableIce(vec2 p, float strength) {
    if (strength <= 0.0 || !${Dh(Rs.iceBounds)}
      || ${Rs.safeChannels.map(Dh).join(` || `)}) return false;
    float edge = min(min(abs(p.y + 2.55), abs(p.y - 11.0)), min(abs(p.x + 12.0),abs(p.y + 18.0)));
    float noise = 0.14 * sin(p.x * 0.83 + p.y * 0.51) * sin(p.y * 1.25 - p.x * 0.34);
    return edge * 0.16 + noise < strength;
  }
`,kh=`
varying vec3 world;
void main() {
  world = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}`,Ah=`
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
      }`,jh=`
      varying vec3 world;
      uniform float time;
      uniform vec3 sun, mist, deep, shallow, gleam, crest;
      uniform vec3 nightWater, nightCrest, nightReflection, nightFog, moon;
      uniform vec2 shoreLights[3];
      uniform vec4 waveCells;
      uniform vec3 sunsetHaze;
      uniform float night, dusk, reflections;
      uniform float wet, ice, rippleFx, foamFx;
      ${Oh}
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
      }`,Mh=new D(.93,.107,-.36).normalize(),Nh=`#efd6b6`;function Ph(){let e=new Re({side:1,depthWrite:!1,uniforms:{sun:{value:Mh.clone()},blue:{value:new L(`#7fadc8`)},mist:{value:new L(Nh)},rose:{value:new L(`#f5c9b9`)},gold:{value:new L(`#ffedd0`)},white:{value:new L(`#fff6ce`)},night:{value:0},starDensity:{value:kt.starDensity},dusk:{value:0},sunsetZenith:{value:new L(H.sunsetZenith)},weatherSky:{value:new L(Rs.rainSky)},weatherShade:{value:0},sunsetHorizon:{value:new L(H.sunsetHorizon)},nightZenith:{value:new L(kt.nightZenith)},nightHorizon:{value:new L(kt.nightHorizon)},moonColor:{value:new L(kt.moonColor)},moon:{value:new D(...kt.moonDirection).normalize()}},vertexShader:kh,fragmentShader:Ah}),t=new F(new we(235,32,16),e);return t.renderOrder=-100,t}function Fh(){let e=new Re({uniforms:{time:{value:0},sun:{value:Mh},mist:{value:new L(Nh)},deep:{value:new L(`#4c8791`)},shallow:{value:new L(`#82afb0`)},gleam:{value:new L(`#eac795`)},crest:{value:new L(`#f9dfa8`)},night:{value:0},dusk:{value:0},reflections:{value:1},wet:{value:0},ice:{value:0},rippleFx:{value:1},foamFx:{value:1},sunsetHaze:{value:new L(H.sunsetHaze)},nightWater:{value:new L(kt.nightWater)},nightCrest:{value:new L(kt.nightCrest)},nightReflection:{value:new L(kt.nightReflection)},nightFog:{value:new L(kt.nightFog)},moon:{value:new D(...kt.moonDirection).normalize()},shoreLights:{value:kt.nightWaterLights.map(e=>new l(...e))},waveCells:{value:new Ie(kt.waveCells.near,kt.waveCells.far,kt.waveCells.blendStart,kt.waveCells.blendEnd)}},vertexShader:kh,fragmentShader:jh}),t=new F(new ye(440,440),e);return t.rotation.x=-Math.PI/2,t}function Ih(){let e=new f,{canvas:t,context:n}=Dt(100,22),r=Et(72),i=[`rgba(251,224,201,0.30)`,`rgba(255,230,205,0.44)`,`rgba(255,240,216,0.59)`];n.clearRect(0,0,t.width,t.height);for(let e=0;e<27;e++){let t=8+(r()*76|0),a=3+(r()*12|0),o=6+(r()*16|0);n.fillStyle=i[e%i.length],n.fillRect(t,a,o,1+e%3)}let a=new Ve({map:Mt(t),color:`#ffffff`,transparent:!0,alphaTest:.02,depthWrite:!1,fog:!1});for(let t=0;t<22;t++){let n=t*2.39996,i=new Ke(a);i.position.set(Math.cos(n)*128,8+r()*34,Math.sin(n)*128),i.scale.set(25+r()*44,7+r()*5,1),e.add(i)}return e}function Lh(e){let t=kt,n=new Ne(Nh,.009);e.fog=n;let r=new C(t.ambientColor,`#9b9aa0`,t.ambient),i=new it(t.sunColor,t.sun);i.position.set(40,14,-12);let a=Fh(),o=Ih(),s=Ph();e.add(s,a,o,i,r);let c={dawn:new L(Nh),nightFog:new L(t.nightFog),ambient:new L(t.ambientColor),nightAmbient:new L(t.nightAmbientColor),sun:new L(t.sunColor),nightSun:new L(t.nightSunColor),duskFog:new L(H.sunsetHaze),duskSun:new L(H.sunsetLight),duskAmbient:new L(H.sunsetAmbient)},l=new L(Rs.rainSky),u=new L(Rs.snowSky);return(e,d,f)=>{let{dusk:p,reflections:m}=f;s.material.uniforms.night.value=d,s.material.uniforms.dusk.value=p;let h=x.lerp(H.maxSunY,H.minSunY,p);s.material.uniforms.sun.value.set(H.direction[0],h,H.direction[2]).normalize(),a.material.uniforms.time.value=e,a.material.uniforms.night.value=d,a.material.uniforms.dusk.value=p,a.material.uniforms.reflections.value=Number(m),n.color.copy(c.dawn).lerp(c.nightFog,d).lerp(c.duskFog,p),n.density=x.lerp(.009,H.duskFog,p),r.color.copy(c.ambient).lerp(c.nightAmbient,d).lerp(c.duskAmbient,p),i.color.copy(c.sun).lerp(c.nightSun,d).lerp(c.duskSun,p),i.position.y=x.lerp(14,H.sunsetLightHeight,p),r.intensity=x.lerp(x.lerp(t.ambient,t.nightAmbient,d),H.sunsetAmbientPower,p),i.intensity=x.lerp(x.lerp(t.sun,t.nightSun,d),H.sunsetMainPower,p),o.rotation.y=e*.0013;let g=f.weather,_=g?.rain??0,v=g?.snow??0,y=Math.max(_,v);s.material.uniforms.weatherShade.value=y,s.material.uniforms.weatherSky.value.copy(l).lerp(u,v/(_+v||1)),a.material.uniforms.wet.value=_,a.material.uniforms.ice.value=g?.ice??0,a.material.uniforms.rippleFx.value=+!g?.low,a.material.uniforms.foamFx.value=+!g?.low,n.color.lerp(d>.5?c.nightFog:s.material.uniforms.weatherSky.value,y*.67),n.density=x.lerp(n.density,v>_?Rs.snowFog:Rs.wetFog,y),n.density=Math.max(n.density,f.edgeFog),i.intensity*=x.lerp(1,v>_?Rs.snowLight:Rs.rainLight,y),g?.flash&&(i.intensity*=1+g.flash*2.4);for(let e of o.children)e.material.opacity=(1-d*.91)*(1-y*.55)}}var Rh=new Map([[`KeyW`,`up`],[`ArrowUp`,`up`],[`KeyS`,`down`],[`ArrowDown`,`down`],[`KeyA`,`left`],[`ArrowLeft`,`left`],[`KeyD`,`right`],[`ArrowRight`,`right`]]),zh=4,Bh=new Set([`ShiftLeft`,`ShiftRight`]),Vh=new Set([`ControlLeft`,`ControlRight`,`KeyC`]);function Hh(e,t){let n=new AbortController,{signal:r}=n,i;return e.addEventListener(`pointerdown`,n=>{if(!(i||n.button!==0)){if(n.pointerType===`mouse`&&t.leftLock()&&!document.pointerLockElement&&e.requestPointerLock){let t=e.requestPointerLock();t&&t.catch(()=>e.focus({preventScroll:!0}))}else i={id:n.pointerId,x:n.clientX,y:n.clientY,travel:0},e.focus({preventScroll:!0}),e.setPointerCapture(n.pointerId)}},{signal:r}),e.addEventListener(`contextmenu`,e=>e.preventDefault(),{signal:r}),e.addEventListener(`pointerdown`,n=>{if(n.button!==2)return;if(n.preventDefault(),document.pointerLockElement===e){document.exitPointerLock();return}if(!t.lockPointer()||!e.requestPointerLock)return;let r=e.requestPointerLock();r&&r.catch(()=>e.focus({preventScroll:!0}))},{signal:r}),e.addEventListener(`pointermove`,n=>{if(document.pointerLockElement===e){t.look(n.movementX,n.movementY);return}if(i?.id!==n.pointerId)return;let r=n.clientX-i.x,a=n.clientY-i.y;i={id:i.id,x:n.clientX,y:n.clientY,travel:i.travel+Math.hypot(r,a)},i.travel>zh&&t.look(r,a)},{signal:r}),e.addEventListener(`pointerup`,n=>{if(i?.id===n.pointerId){if(i.travel<=zh){let r=e.getBoundingClientRect();t.pick(new l((n.clientX-r.left)/r.width*2-1,1-(n.clientY-r.top)/r.height*2))}i=void 0}},{signal:r}),e.addEventListener(`lostpointercapture`,()=>{i=void 0},{signal:r}),e.addEventListener(`wheel`,e=>{e.preventDefault(),t.zoom(Math.sign(e.deltaY))},{signal:r,passive:!1}),()=>n.abort()}function Uh(e){let t=new AbortController,{signal:n}=t;return window.addEventListener(`keydown`,t=>{if(t.defaultPrevented||t.metaKey||t.altKey)return;let n=t.target instanceof Element?t.target:null;if(n?.closest(`input, textarea, select, [contenteditable="true"]`))return;if((!t.ctrlKey||Vh.has(t.code))&&(t.code!==`Space`||!n?.closest(`button, a, video`))&&e.flight(t.code,t.repeat)){t.preventDefault();return}let r=Rh.get(t.code);(!t.ctrlKey||e.flying()&&r)&&(t.code.startsWith(`Arrow`)&&n?.closest(`.harbor-detail`)||(Bh.has(t.code)&&e.sprint(t.code),r&&(t.preventDefault(),e.move(t.code,r)),t.code===`KeyE`&&!t.repeat&&e.interact(),t.code===`Space`&&!t.repeat&&!n?.closest(`button, a, video`)&&(t.preventDefault(),e.jump())))},{signal:n}),window.addEventListener(`keyup`,t=>e.release(t.code),{signal:n}),()=>t.abort()}function Wh(e,t,n){let r=new Set(e.values()),i=Number(r.has(`right`))-Number(r.has(`left`))+t.x,a=Number(r.has(`up`))-Number(r.has(`down`))+t.z,o=n/Math.max(1,Math.hypot(i,a));return{x:i*o,z:a*o}}function Gh({canvas:e,motion:t,orbit:n,sailing:r,canJump:i,canMove:a,canLook:o,canSteer:s,lockPointer:c,leftLock:l,sprintEnabled:u,specialLook:d,onInteract:f,onPick:p,flight:m,canFly:h,flightEnabled:g}){let _=new Map,v=new Set,y={x:0,z:0},b=!1,x=new Set,S=new Set,C=(e,t)=>{a()&&_.set(e,t)},w=e=>{_.delete(e),v.delete(e),x.delete(e)},T=(e,t)=>{y.x=e,y.z=t},E=()=>{_.clear(),v.clear(),x.clear(),S.clear(),b=!1,T(0,0),t.clear(),r.stop(),m.clear()},ee=()=>{i()&&!m.active&&t.jump()};function te(){h()&&g()&&(m.active||(t.clear(),e.focus({preventScroll:!0})),m.toggle())}function ne(e,t){return e===`KeyF`?(t||te(),!0):!m.active||!Vh.has(e)&&e!==`Space`?!1:(h()&&x.add(e),!0)}function D(e,t){if(!h())return;g()||m.disable();let r=S.has(1)||x.has(`Space`),i=S.has(-1)||[...x].some(e=>Vh.has(e));m.update(e,{...Wh(_,y,1),vertical:Number(r)-Number(i),sprint:t},n.yaw)}let re=Uh({move:C,release:w,interact:f,jump:ee,sprint:e=>v.add(e),flight:ne,flying:()=>m.active}),ie=Hh(e,{look(e,t){d.active()?d.look(e,t):o()&&n.look(e,t)},zoom(e){d.active()?d.zoom(-e):o()&&n.zoom(e)},pick:p,lockPointer:c,leftLock:l});return n.update(t.player,0,!0),{moveAnalog:T,interact:f,clear:E,jump:ee,glide:e=>t.glide(e),unstuck:()=>t.unstuck(),boost:e=>t.boost(e),toggleFlight:te,setFlightVertical(e,t){t?S.add(e):S.delete(e)},setThrottle(e){b=e},update(e){let i=!!(v.size||b)&&u();if(t.player.sailing&&s())r.update({...Wh(_,y,1),sprint:i},e);else if(m.active)D(e,i);else if(a()&&!t.player.sailing){let r=no.walkSpeed*(i?no.sprintMultiplier:1);t.update(e,Wh(_,y,r),n.yaw)}n.setFlight(m.active),n.update(t.player,e)},respawn(){E(),t.player.sailing?r.respawn():t.respawn(),m.reset(),n.setFlight(!1),n.update(t.player,0,!0)},center(){n.center(t.player.facing,t.player.sailing)},dispose(){document.pointerLockElement===e&&document.exitPointerLock(),re(),ie()}}}function Kh(e,{kit:t,vessel:n}){let r=bs(t,yt.appearance),i={...yt.position,facing:yt.guardYaw,speed:0,height:yt.seatHeight,elevation:0,airborne:!1,jumpAge:0,landing:0,sailing:!1,sitting:!0,lookout:!1,swimming:!1},a=Xi(t.box([...St.lamp.position],[...St.lamp.size],[St.lamp.color]),`street`);a.userData.movingGlow=!0,n.add(a),e.add(t.cylinder([yt.position.x,q+.22,yt.position.z],[.23,.25,.42,10],[`#8a6a4a`]));let{x:o,z:s,color:c}=yt.guardLamp;e.add(t.box([o,q+.45,s],[.1,.9,.1],[`#595655`]));let l=new F(new je,new P({color:c}));l.scale.set(.24,.24,.24),l.position.set(o,q+.98,s);let u=new F(new je,new P({color:c,transparent:!0,opacity:.24}));u.scale.set(.66,.66,.66),u.position.copy(l.position);let d=new f;d.add(l,u),d.visible=!1,e.add(d);let p=Ss(t);return p.position.set(.3,1.36,.12),p.visible=!1,r.avatar.add(p),e.add(r.avatar),(e,t,n,a=0)=>{d.visible=t>yt.guardLamp.nightFrom,p.visible=a>.32,i.facing=yt.guardYaw+(n?0:Math.sin(e*.31)*.06),r.update(i,0,n)}}var qh={clusters:[{x:-15.4,z:25.2,seed:427,total:6,radius:1.18}],treeFoot:.18,trunk:`#765743`,lower:`#58766a`,upper:`#728d72`,shadowColor:`#272f3c`,shadowDay:.12,shadowDusk:.25,shadowLength:1,shadowLong:3.65,shadowWidth:.42},Jh=4;function Yh(){let e=Math.min(V.maxNewTrees,Math.floor(V.maxNewInstances/Jh));return qh.clusters.map(t=>{let n=Et(t.seed),r=Math.min(t.total,e);e-=r;let i=Array.from({length:r},(e,i)=>{let a=i*Math.PI*2/r,o=t.radius*(.65+n()*.35),s=t.x+Math.cos(a)*o,c=t.z+Math.sin(a)*o;return{x:s,z:c,y:q+_a(s,c),size:.74+n()*.34}}).filter(({x:e,z:t})=>Math.hypot(e-Ot.house.x,t-Ot.house.z)>Ot.clearRadius);return{...t,trees:i}})}var Xh=[[-15.65,-24.29],[-10.99,-20.67]],Zh=Yh().map(e=>({...e,trees:e.trees.filter(e=>!Xh.some(([t,n])=>Math.hypot(e.x-t,e.z-n)<1))})),Qh=Zh.flatMap(e=>e.trees.map(({x:e,z:t,size:n})=>{let r=qh.treeFoot*n;return[e-r,e+r,t-r,t+r]})),$h={radius:.62,base:1.42,top:2.88},eg=Zh.flatMap(e=>e.trees.flatMap(({x:e,y:t,z:n,size:r})=>{let i=qh.treeFoot*r,a=$h.radius*r;return[{footprint:[e-i,e+i,n-i,n+i],base:t,height:$h.base*r},{footprint:[e-a,e+a,n-a,n+a],base:t+$h.base*r,height:($h.top-$h.base)*r}]}));function tg(e,t,n){let r=e.box([0,0,0],n.size,[n.color]),i=new k(r.geometry,r.material,t.length),a=new Me;return t.forEach((e,t)=>{a.position.set(e.x,e.y+n.y*e.size,e.z),a.scale.set(...n.size.map(t=>t*e.size)),a.updateMatrix(),i.setMatrixAt(t,a.matrix)}),i}function ng(e,t,n,r){e.add(tg(t,n,{y:.83,size:[.23,1.66,.24],color:qh.trunk})),e.add(tg(t,n,{y:1.96,size:[1.23,1.07,1.15],color:qh.lower})),r&&e.add(tg(t,n,{y:2.62,size:[.79,.51,.72],color:qh.upper}))}function rg(e){let t=Zh.flatMap(e=>e.trees),n=new P({color:qh.shadowColor,transparent:!0,depthWrite:!1}),r=new k(new ye(1,1),n,t.length);r.frustumCulled=!1,e.add(r);let i=new Me,[a,,o]=H.direction,s=-1;return(e,c)=>{if(r.visible=c,!c||e===s)return;s=e;let l=x.lerp(qh.shadowLength,qh.shadowLong,e);n.opacity=x.lerp(qh.shadowDay,qh.shadowDusk,e),i.rotation.set(-Math.PI/2,0,Math.atan2(-o,a)),t.forEach(({x:e,y:t,z:n,size:s},c)=>{let u=l*s;i.position.set(e-a*u/2,t+.018,n-o*u/2),i.scale.set(u,qh.shadowWidth*s,1),i.updateMatrix(),r.setMatrixAt(c,i.matrix)}),r.instanceMatrix.needsUpdate=!0}}function ig(e,t){let n=rg(e),r=Zh.map(n=>{let r=new f,i=new f;return ng(r,t,n.trees,!0),ng(i,t,n.trees,!1),e.add(r,i),{x:n.x,z:n.z,near:r,far:i}});return(e,t,i)=>{n(t,i.shadows);for(let t of r){let n=Math.hypot(e.x-t.x,e.z-t.z);t.near.visible=n<V.forestLodDistance,t.far.visible=i.trees&&!t.near.visible&&n<V.forestLimitDistance}}}var ag=[{id:`moon-cabin`,x:-.35,z:1.65,yaw:-1.22},{id:`first-tide`,x:14.85,z:2.58,yaw:Math.PI},{id:`net-mender`,x:-4.85,z:14.32,yaw:Math.PI},{id:`dune-flowers`,x:-17.5,z:3.8,yaw:Math.PI/2},{id:`keeper-map`,x:-1.9,z:-21.2,yaw:0}],og=3.35,sg=1.74;function cg(e,t,n){let r=new f,{canvas:i,context:a}=Dt(120,84),o=Mt(i);a.fillStyle=`#a7aba0`,a.fillRect(0,0,i.width,i.height);let s=new Image;s.onload=()=>{a.imageSmoothingEnabled=!1;let e=Math.min(i.width/s.width,i.height/s.height),t=Math.round(s.width*e),n=Math.round(s.height*e);a.drawImage(s,(i.width-t)/2,(i.height-n)/2,t,n),o.needsUpdate=!0},s.src=t.image,n.push(()=>{s.onload=null});for(let t of[-.68,.68])r.add(e.box([t,.56,0],[.14,1.12,.17],[`#795947`,`wood`]));r.add(e.box([0,1.44,0],[sg,1.25,.17],[`#92674e`,`wood`])),r.add(e.box([0,1.43,.091],[1.63,1.11,.024],[`#dec6a0`])),r.add(e.box([0,2.1,0],[1.88,.14,.29],[`#617473`,`wood`]));let c=new F(new ye(1.49,1.043),new P({map:o}));return c.position.set(0,1.43,.107),r.add(c),r}function lg(e,t,n){let r=[],i=[];return{exhibits:ag.flatMap(a=>{let o=n.find(e=>e.id===a.id);if(!o)return[];let{x:s,z:c,yaw:l}=a,u=cg(t,o,r);u.position.set(s,q,c),u.rotation.y=l,e.add(u);let d=Math.abs(Math.cos(l))*sg/2+.16,f=Math.abs(Math.sin(l))*sg/2+.16;return i.push([s-d,s+d,c-f,c+f]),[{...a,artwork:o,frame:u}]}),obstacles:i,dispose:()=>r.forEach(e=>e())}}var ug=.018,dg=1.82,fg=32,pg={inner:.48,outer:.57,color:kt.glow.ring.color,opacity:.98},mg={inner:.39,outer:.66,color:`#ffb752`,opacity:.34};function hg(e){let t=new F(new Qe(e.inner,e.outer,fg),new P({color:e.color,transparent:!0,opacity:e.opacity,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t}function gg(e){let t=new f;t.scale.setScalar(.5);let n=new D,r=hg(mg),i=hg(pg);return i.position.y=ug,t.add(r,i),t.visible=!1,e.add(t),{setHotspot(e){t.visible=!!e,e&&t.position.set(e.x,(e.kind===`sea`?0:q+(e.kind===`telescope`?U.platformOffset:_a(e.x,e.z)))+ug,e.z)},setNight(e,t){let n=kt.glow.ring;i.material.opacity=x.lerp(n.day,n.night,e),r.visible=t||e===0},project(e){return!t.visible||(n.copy(t.position),n.y+=dg,n.project(e),Math.abs(n.x)>1||Math.abs(n.y)>1||Math.abs(n.z)>1)?null:{x:(n.x+1)*50,y:(1-n.y)*50}}}}function _g({id:e,x:t,z:n,artwork:r}){return{kind:`art`,id:e,x:t,z:n,label:r.title,radius:og}}function vg(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}function yg(e,t){return vg(e,t)<t.radius}function bg(e,t){if(e.sailing)return ao.find(t=>yg(e,t))??null;let n=Object.values(Vo).find(t=>yg(e,t));if(n)return n;let r=og,i=null;for(let n of t){let t=vg(e,n);t<r&&(r=t,i=_g(n))}if(i)return i;let a=Ho.find(t=>yg(e,t));return a?{kind:`landmark`,...a}:null}function xg(e){return[...Object.values(Vo),...Ho.map(e=>({...e,kind:`landmark`})),...e.map(_g),...ao].map(t=>{let n=vt.places[t.id];return n?{hotspot:t,...n,requiresBoat:!1}:t.kind===`sea`?{hotspot:t,title:t.title,iconType:`landmark`,blurb:t.note,anchor:[t.x,1.18,t.z],requiresBoat:!0}:t.kind===`landmark`?{hotspot:t,title:t.label,iconType:`landmark`,blurb:t.note,requiresBoat:!1}:{hotspot:t,title:t.label,iconType:`artwork`,blurb:e.find(e=>e.id===t.id)?.artwork.description??``,requiresBoat:!1}})}function Sg(e){let t=null,n=!1;return{open(n){t||(t=n,e.open(n))},dismiss(){t=null,n=!1},hasOpen(){return t!==null},update(r){!t||n||yg(r,t)||(n=!0,e.leave(t.id))}}}var Cg=Math.PI*2,wg=.13;function Tg(e,t){return e.map(({footprint:[e,n,r,i],height:a,base:o=q})=>new Je(new D(e-t,o,r-t),new D(n+t,o+a,i+t)))}function Eg(e,t,n){let r=new D,i=n;for(let n of t){if(n.containsPoint(e.origin))continue;let t=e.intersectBox(n,r);t&&(i=Math.min(i,Math.max(Y.minObstructedDistance,t.distanceTo(e.origin)-Y.obstacleClearance)))}return i}function Dg(e,t){let n=new D(ko.x,q+Y.focusHeight,ko.z),r=n.clone(),i=new D,a=new D,o=new fe(n,a),s=Tg(t,wg),c=Y.distance;return(t,l,u)=>{let{step:d,immediate:f}=u,p=f?1:Ts(d,Y.followTime),m=t.lookout?U.center:t,h=t.sitting?-.24:0;i.set(m.x,q+Y.focusHeight+t.elevation+t.height+h,m.z),n.lerp(i,p);let g=Math.cos(l.pitch);a.set(Math.sin(l.yaw)*g,Math.sin(l.pitch),Math.cos(l.yaw)*g);let _=Eg(o,s,l.distance),v=f?1:Ts(d,Y.zoomTime);c=Math.min(_,x.lerp(c,_,v)),e.position.copy(n).addScaledVector(a,c);let y=t.lookout?q+U.platformOffset:ya(e.position.x,e.position.z,zo);e.position.y=Math.max(e.position.y,y+Y.floorClearance),r.lerp(l.target?i.set(l.target.x,l.target.y,l.target.z):n,f?1:Ts(d,Y.aimTime)),e.lookAt(r)}}function Og(e,t){let n=Dg(e,t),r={yaw:ko.yaw,pitch:Y.pitch,distance:Y.distance},i={...r,target:null},a=!1,o=!1,s=!1,c=0;return{update(e,t,a=!1){let s=a?1:Ts(t,Y.orbitTime);i.yaw=Es(i.yaw,r.yaw,s);let l=o?x.clamp(r.pitch-W.camera.pitch-c*W.heli.pitchPull,Y.flightMinPitch,Y.flightMaxPitch):r.pitch;i.pitch=x.lerp(i.pitch,l,s);let u=r.distance+(o?W.camera.distance:0)+c*W.heli.cameraPull+(e.swimming?Y.swimDistance:0);i.distance=x.lerp(i.distance,u,a?1:Ts(t,Y.zoomTime)),n(e,i,{step:t,immediate:a})},get yaw(){return i.yaw},get angles(){return{yaw:i.yaw,pitch:i.pitch}},look(e,t){i.target=null,r.yaw=(r.yaw-e*Y.lookSensitivity)%Cg,r.pitch=x.clamp(r.pitch+t*Y.verticalLookSensitivity,a?U.minPitch:o?Y.flightMinPitch:s?Y.firstMinPitch:Y.minPitch,a?U.maxPitch:o?Y.flightMaxPitch:s?Y.firstMaxPitch:Y.maxPitch)},zoom(e){r.distance=x.clamp(r.distance+e*Y.distancePerWheelStep,a?U.minDistance:Y.minDistance,a?U.maxDistance:Y.maxDistance)},center(e,t=!1){i.target=null,Object.assign(r,{yaw:(e+Math.PI)%Cg,pitch:a?U.startPitch:Y.pitch,distance:a?U.distance:t?Y.vesselDistance:Y.distance})},setHeli(e){c=+!!e},setSailing(e){r.distance=e?Y.vesselDistance:Y.distance},setFlight(e){o=e,e||(r.pitch=x.clamp(r.pitch,Y.minPitch,Y.maxPitch))},setFirstPerson(e){s!==e&&(s=e,e||(r.pitch=x.clamp(r.pitch,Y.minPitch,Y.maxPitch)))},setLookout(e){a=e,i.target=null,Object.assign(r,{pitch:e?U.startPitch:Y.pitch,distance:e?U.distance:Y.distance})},aim(e,t){i.target=e,t&&Object.assign(r,t)}}}function kg(e,t,n){return n.some(n=>Math.abs(n.x-e)<vt.width&&Math.abs(n.y-t)<vt.height)}function Ag(e,t){let n=e.flatMap(e=>e.anchor?[{place:e,anchor:new D(...e.anchor)}]:[]),r=Tg(t,0),i=new fe,a=new D,o=new D;function s(e,t){i.origin.copy(e.position),i.direction.copy(t).sub(e.position).normalize();let n=e.position.distanceTo(t)-vt.occlusionMargin;return r.some(e=>!e.containsPoint(i.origin)&&i.intersectBox(e,a)!==null&&a.distanceTo(i.origin)<n)}return(e,t,r)=>{let i=n.map(({place:e,anchor:n})=>({place:e,anchor:n,distance:Math.hypot(t.x-e.hotspot.x,t.z-e.hotspot.z)})).filter(e=>e.distance<vt.maxDistance).sort((e,t)=>e.distance-t.distance),a=[];for(let{place:t,anchor:n,distance:c}of i){if(a.length>=vt.maxVisible)break;if(o.copy(n).project(e),Math.abs(o.z)>1||Math.abs(o.x)>1||Math.abs(o.y)>1)continue;let i=(o.x+1)*r.width/2,l=(1-o.y)*r.height/2+Math.sin(r.elapsed*vt.bobSpeed)*vt.bob;if(l<vt.visibleTop||kg(i,l,a)||s(e,n))continue;let u=x.clamp((vt.maxDistance-c)/(vt.maxDistance-vt.fadeStart),0,1);a.push({id:t.hotspot.id,x:i,y:l,opacity:u,showName:c<=vt.nameDistance})}return a}}var jg=1e-8;function Mg(e,t){let n=(e+1)*t/2;return(Math.floor(n+jg)+.5)*2/t-1}function Ng(){let e=new D;return(t,n,r)=>{let{width:i,height:a}=r,o=t.projectionMatrix.elements;t.updateProjectionMatrix(),t.updateMatrixWorld(),e.copy(n).project(t),o[8]-=Mg(e.x,i)-e.x,o[9]-=Mg(e.y,a)-e.y,t.projectionMatrixInverse.copy(t.projectionMatrix).invert()}}var Pg=8,Fg=-(q+ro.floatSink);function Ig(e){let[t,n,r,i]=X.bounds;return e.x>=t&&e.x<=n&&e.z>=r&&e.z<=i}function Lg(e,t,n){if(e.lookout){let e=Math.hypot(t.x-U.center.x,t.z-U.center.z);return e>=U.lanternRadius+no.playerRadius&&e<=U.outerRadius-no.playerRadius}if(e.swimming)return Ig(t);if(Zo(t.x,t.z,{obstacles:n,height:e.height}))return!0;if(e.airborne||e.height>.02||ht(t.x,t.z)!==!1||!Ig(t))return!1;let r=no.playerRadius;return!n.some(n=>!n.supportOnly&&(n.height===void 0||e.height+.02<n.height)&&t.x+r>n.footprint[0]&&t.x-r<n.footprint[1]&&t.z+r>n.footprint[2]&&t.z-r<n.footprint[3])}function Rg(e,t,n){let{axis:r,distance:i}=n;if(!i)return!1;let a=e[r],o=n=>Lg(e,{x:r===`x`?a+i*n:e.x,z:r===`z`?a+i*n:e.z},t);if(o(1))return e[r]+=i,!1;let s=0,c=1;for(let e=0;e<Pg;e++){let e=(s+c)/2;o(e)?s=e:c=e}return e[r]+=i*s,!0}function zg(e,t,n){let{velocity:r,target:i,seconds:a,response:o}=n,s=Ts(a,o),c=s*o/Cs,l=i.x*a+(r.x-i.x)*c,u=i.z*a+(r.z-i.z)*c;r.x+=(i.x-r.x)*s,r.z+=(i.z-r.z)*s;let d=Math.abs(l)>=Math.abs(u)?`x`:`z`,f={x:l,z:u};for(let n of[d,d===`x`?`z`:`x`])Rg(e,t,{axis:n,distance:f[n]})&&(r[n]=0)}function Bg(e,t){let n=0,r=!1,i=!1;return{jump(){if(e.airborne||e.sailing||e.lookout||e.sitting||e.swimming)return;let r=Qo(e.x,e.z,{obstacles:t,height:e.height});e.height>r+io.landingTolerance||(n=io.lift,e.jumpAge=0,e.airborne=!0)},update(a){let o=Qo(e.x,e.z,{obstacles:t,height:e.height});if(!e.airborne&&e.height<=o)return;e.airborne=!0,e.jumpAge+=a;let s=r&&n<0,c=s?io.gravity*.1:i&&n>0?io.gravity*1.8:io.gravity,l=s?Math.max(n,-1.7):n,u=e.height+(l-c*a/2)*a;n=s?Math.max(l-c*a,-1.7):l-c*a,n<=0&&u<=o+io.landingTolerance?(e.height=o,e.airborne=!1,e.landing=io.recovery,n=0):e.height=u},glide(e){r=e},isGliding(){return r&&e.airborne&&n<0},boost(t){e.sailing||e.lookout||e.sitting||e.swimming||(n=t,i=!0,e.jumpAge=0,e.airborne=!0)},reset(){n=0,r=!1,Object.assign(e,{height:0,airborne:!1,jumpAge:0,landing:0})}}}function Vg(e,t){let n=Math.sin(t),r=Math.cos(t);return{x:r*e.x-n*e.z,z:-n*e.x-r*e.z}}function Hg(e){let t={x:ko.x,z:ko.z,facing:ko.yaw+Math.PI,speed:0,height:0,airborne:!1,jumpAge:0,landing:0,sailing:!1,elevation:0,lookout:!1,sitting:!1,swimming:!1},n={x:0,z:0},r=Bg(t,e),i=e.map(e=>e.footprint);function a(i,a,o){if(i<=0)return;let s=Vg(a,o);t.swimming&&(s.x*=ro.speedFactor,s.z*=ro.speedFactor),r.isGliding()&&(s.x*=2.2,s.z*=2.2);let c=s.x||s.z?no.accelerationTime:no.decelerationTime,{x:l,z:u}=t,d=Math.ceil(i/no.maxCollisionStep);t.landing=Math.max(0,t.landing-i);for(let a=0;a<d;a++)!t.lookout&&!t.swimming&&r.update(i/d),zg(t,e,{velocity:n,target:s,response:c,seconds:i/d});t.lookout||(t.elevation=_a(t.x,t.z)),!t.swimming&&!t.airborne&&t.height<=.02&&ht(t.x,t.z)===!1&&Ig(t)&&(t.swimming=!0),t.swimming&&(t.height=Fg,t.airborne=!1,t.landing=0,Zo(t.x,t.z,{obstacles:e,height:0})&&(t.swimming=!1,t.height=0));let f=t.x-l,p=t.z-u;t.speed=Math.hypot(f,p)/i,t.speed>no.movementThreshold&&(t.facing=Es(t.facing,Math.atan2(f,p),Ts(i,no.turnTime)))}function o(e,n=0){r.reset(),Object.assign(t,e,{elevation:_a(e.x,e.z),lookout:!1,sitting:!1,swimming:!1,height:n})}return{player:t,update:a,jump:r.jump,glide:r.glide,boost:r.boost,swim(e){return o(e,Fg),t.swimming=!0,!0},teleport(t,n){let r=n===void 0?0:Math.max(0,n-q-_a(t.x,t.z));return Zo(t.x,t.z,{obstacles:e,height:r})?(o(t,r),!0):!1},respawn(){let e=$o(t,i);e&&o(e)},climb(){let e=(U.outerRadius+U.lanternRadius)/2;Object.assign(t,{...U.center,z:U.center.z+e,elevation:U.platformOffset,lookout:!0}),r.reset()},clear(){n.x=0,n.z=0,t.speed=0},unstuck(){if(t.sitting||t.lookout||t.swimming||t.sailing||Zo(t.x,t.z,{obstacles:e,height:t.height}))return!1;for(let r=.6;r<=4;r+=.6)for(let i=0;i<12;i+=1){let a=i/12*Math.PI*2,o=t.x+Math.cos(a)*r,s=t.z+Math.sin(a)*r;if(Zo(o,s,{obstacles:e,height:t.height}))return t.x=o,t.z=s,n.x=0,n.z=0,!0}return!1}}}var Ug=[`#805b45`,`wood`],Wg=[{x:Vo.notice.x,z:Vo.notice.z,yaw:Math.PI/2,width:1.88,height:1.18,elevation:1.38,kind:`notice`}];function Gg(e){let{canvas:t,context:n}=Dt(176,e===`notice`?112:e===`boat`?55:106),r=t.height;if(n.fillStyle=`#735847`,n.fillRect(0,0,176,r),n.fillStyle=`#b28a63`,n.fillRect(3,3,170,r-6),n.textAlign=`center`,n.textBaseline=`middle`,n.font=`bold 23px "Microsoft YaHei", "PingFang SC", sans-serif`,e===`notice`){n.fillStyle=`#e8cf9f`,n.fillRect(10,9,156,94),n.fillStyle=`#674d3d`,n.fillText(`展览公告栏`,88,29),n.fillStyle=`#bda277`;for(let e of[55,65,75,85])n.fillRect(29,e,e===85?73:118,2);n.fillStyle=`#a46047`,n.fillRect(14,12,5,5),n.fillRect(157,12,5,5)}else n.fillStyle=`#f9e6bb`,n.fillText(e===`boat`?`作品船`:`↑  作品船`,88,e===`boat`?29:23),e===`wayfinding`&&(n.fillRect(14,38,148,2),n.fillText(`↶  展览公告栏`,88,55),n.fillRect(14,70,148,2),n.fillText(`↶  ${ft.title}`,88,88));return Mt(t)}function Kg(e,t){let{x:n,z:r,yaw:i,width:a,height:o,elevation:s,kind:c}=t,l=new f,u=c===`notice`?[-a*.39,a*.39]:[0],d=s+o*.32;for(let t of u)l.add(e.box([t,d/2,-.08],[.15,d,.16],[...Ug]));l.add(e.box([0,s,0],[a+.09,o+.1,.13],[...Ug]));let p=new F(new ye(a,o),new P({map:Gg(c)}));return p.position.set(0,s,.069),l.add(p),l.position.set(n,q,r),l.rotation.y=i,l}function qg(e,t){return Wg.map(n=>{e.add(Kg(t,n));let r=n.width/2+.065,i=Math.abs(Math.cos(n.yaw))*r+.09,a=Math.abs(Math.sin(n.yaw))*r+.09;return[n.x-i,n.x+i,n.z-a,n.z+a]})}var Jg=[...zo,[10.4,22,16.1,19.9],[-49,-27,-20,21]],Yg=1e-5,Xg=Math.PI/2;function Zg(e,t,n){let r=X.boundary;return r.every(([i,a],o)=>{let[s,c]=r[(o+1)%r.length];return(s-i)*(t-a)-(c-a)*(e-i)>=n*Math.hypot(s-i,c-a)})}function Qg(e,t,n){let[r,i,a,o]=X.bounds;return e-n<r||e+n>i||t-n<a||t+n>o||!Zg(e,t,n)||ua(e,t,n)?!0:Jg.some(([r,i,a,o])=>{let s=e-Math.max(r,Math.min(i,e)),c=t-Math.max(a,Math.min(o,t));return Math.hypot(s,c)<n})}function $g(e,t,n){let r=Math.sin(n),i=Math.cos(n);return X.collisionDiscs.every(([n,a])=>!Qg(e+r*n,t+i*n,a))}function e_(e){return X.docks.reduce((t,n)=>t_(e,n)<t_(e,t)?n:t,X.docks[0])}function t_(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}function n_(e,t,n){if(n<=0)return;let r=-Math.max(-1,Math.min(1,t/(n*X.maxTurnRate)))*X.maxBank;e.bank+=(r-e.bank)*Ts(n,X.bankTime)}function r_(e,t,n){let{step:r,ice:i}=n,a=(e,t,n)=>$g(e,t,n)&&!X.collisionDiscs.some(([r,a])=>{let o=e+Math.sin(n)*r,s=t+Math.cos(n)*r;return[[0,0],[a,0],[-a,0],[0,a],[0,-a]].some(([e,t])=>zs(o+e,s+t,i))}),o=t.z*(t.z<0?X.reverseSpeed:X.forwardSpeed*(t.sprint?X.sprint:1)),s=t.z?X.accelerationTime:X.coastingTime;e.speed+=(o-e.speed)*Ts(r,s),e.turn+=(t.x-e.turn)*Ts(r,X.turnTime);let c=Math.min(1,Math.abs(e.speed)/X.forwardSpeed),l=X.minTurnFactor+c*(1-X.minTurnFactor),u=(X.invertSteerWhenReversing&&e.speed<0?e.turn:-e.turn)*X.maxTurnRate*l*r,d=e.yaw+u,f=a(e.x,e.z,d);f&&(e.yaw=d),n_(e,f?u:0,r);let p=Math.sin(e.yaw)*e.speed*r,m=Math.cos(e.yaw)*e.speed*r,h={x:e.x,z:e.z};a(e.x+p,e.z,e.yaw)&&(e.x+=p),a(e.x,e.z+m,e.yaw)&&(e.z+=m),Math.abs(p)+Math.abs(m)>Yg&&t_(h,e)<Yg&&(e.speed=0)}function i_(e,t,n=()=>0){let r=e.map(({id:e,group:t})=>(t.rotation.reorder(`YXZ`),{id:e,group:t,helm:X.helm[e]??{height:X.helmHeight,offset:0},vessel:{x:t.position.x,z:t.position.z,yaw:t.rotation.y+Xg,speed:0,turn:0,bank:0}})),i=r[0],a=e=>{e.group.position.x=e.vessel.x,e.group.position.z=e.vessel.z,e.group.rotation.y=e.vessel.yaw-Xg},o=()=>{let{vessel:e,helm:n}=i;a(i),t.sailing&&Object.assign(t,{x:e.x+Math.sin(e.yaw)*n.offset,z:e.z+Math.cos(e.yaw)*n.offset,facing:e.yaw,height:n.height,speed:0,airborne:!1,landing:0})};function s(e){let t=r.find(t=>t!==i&&t_(t.vessel,e)<=2.4);if(t){let e=X.docks.find(e=>e.boat===t.id)??X.docks[0];Object.assign(t.vessel,{x:e.x,z:e.z,yaw:e.yaw,speed:0,turn:0,bank:0}),a(t)}Object.assign(i.vessel,{x:e.x,z:e.z,yaw:e.yaw,speed:0,turn:0,bank:0}),o()}return{get vessel(){return i.vessel},nearbyDock(){if(t.sailing){let e=e_(i.vessel);return t_(i.vessel,e)<=e.berthRadius?e:null}let e=X.docks.find(e=>t_(t,e.land)<=X.boardingRadius);return e&&r.some(t=>t_(t.vessel,e)<=e.berthRadius)?e:null},toggle(e){if(!t.sailing){let n=r.find(t=>t_(t.vessel,e)<=e.berthRadius);return n&&(i=n,t.sailing=!0,s(e)),null}let n=e_(i.vessel);return t.sailing=!1,s(n),n.land},respawn(){s(e_(i.vessel))},disembark(){t.sailing=!1,s(e_(i.vessel))},startTour(){let e=r.find(e=>e.id===`skiff`)??r[0],n=X.docks[0];return t_(e.vessel,n)>n.berthRadius?!1:(i=e,t.sailing=!0,s(n),!0)},finishTour(e=X.docks[0]){return t.sailing=!1,s(e),e.land},followRoute(e,t){return $g(e.x,e.z,e.yaw)?(n_(i.vessel,e.yaw-i.vessel.yaw,t),Object.assign(i.vessel,e),o(),!0):!1},teleport(e){return $g(e.x,e.z,i.vessel.yaw)?(Object.assign(i.vessel,e,{speed:0,turn:0,bank:0}),o(),!0):!1},update(e,t){r_(i.vessel,e,{step:t,ice:n()}),o()},stop(){i.vessel.speed=0,i.vessel.turn=0,i.vessel.bank=0}}}function a_(e){let t=Number(e),n=t,r=t,i=kt.transitionSeconds;return{setNight(e){Number(e)!==r&&(n=t,r=Number(e),i=0)},step(e){i=Math.min(kt.transitionSeconds,i+e);let a=i/kt.transitionSeconds;return t=n+(r-n)*(a*a*(3-2*a)),t}}}function o_(e,t){let n={particles:!0,snow:!0,islands:!0,residents:!0,scenery:!0,gulls:!0,cloth:!0,shadows:!e,beam:!0,reflections:!0,halos:!0,wake:!e},r=0,i=0,a=0;return{flags:n,simplified:e,get tier(){return a},sample(e){if(!e||a>=At.order.length||(r+=Math.min(e,At.maxSampleSeconds),i++,r<At.sampleSeconds))return;let o=i/r;if(r=0,i=0,!(o>=At.minimumFps)){for(;a<At.order.length&&!n[At.order[a]];)a++;a>=At.order.length||(n[At.order[a]]=!1,t(`${At.noticePrefix}${At.notices[a]}。`),a++)}}}}var s_=2.15,c_=.018,l_=.74,u_=.17;function d_(e){let t=new ye(l_,u_),n=Array.from({length:X.wakeLimit},()=>{let n=new P({color:X.wakeColor,transparent:!0,depthWrite:!1}),r=new F(t,n);return r.rotation.x=-Math.PI/2,r.visible=!1,e.add(r),{mesh:r,remaining:0}}),r=0,i=0;return(e,t,a)=>{if(i+=e,a&&i>=X.wakeInterval&&t.speed>X.wakeMinimumSpeed){let e=n[r++%n.length];e.remaining=X.wakeLife,e.mesh.position.set(t.x-Math.sin(t.yaw)*s_,c_,t.z-Math.cos(t.yaw)*s_),e.mesh.rotation.z=t.yaw,i=0}for(let t of n)if(t.remaining-=e,t.mesh.visible=a&&t.remaining>0,t.mesh.visible){let e=t.remaining/X.wakeLife;t.mesh.material.opacity=e*.58,t.mesh.scale.x=2-e}}}var f_=400,p_=720,m_={high:1,medium:.83,low:.65},h_=2.45,g_=1,__=0,v_=null,y_=.26,b_=.3;function x_(e,t){let n=new Pe(1,1,{magFilter:$e,minFilter:$e,generateMipmaps:!1}),r=new ve,i=new F(new ye(2,2),new P({map:n.texture,depthTest:!1})),a=new ge(-1,1,1,-1,0,1),o=Ng(),s=new D;i.frustumCulled=!1,r.add(i);let c={width:1,height:1},l=t();function u(){let{width:e,height:t}=c,r=m_[l],i=Math.min(p_*r/e,f_*r/t,1);n.setSize(Math.max(g_,Math.round(e*i)),Math.max(g_,Math.round(t*i)))}return{resize(t,n){e.setPixelRatio(1),e.setSize(t,n,!1),Object.assign(c,{width:t,height:n}),u()},draw(i,c,d){let f=t();f!==l&&(l=f,u());let{player:p,align:m}=d;window.__harborPlayer=p,s.set(p.x,q+Y.focusHeight+p.height+p.elevation,p.z),m&&o(c,s,n),e.setRenderTarget(n),e.render(i,c),e.setRenderTarget(null),e.render(r,a)},dispose(){n.dispose(),i.geometry.dispose(),i.material.dispose()}}}function S_(e){let t=new Set,n=new Set,r=new Set;e.traverse(e=>{if(e instanceof k&&e.dispose(),e instanceof F||e instanceof Ke){e instanceof F&&t.add(e.geometry);let i=Array.isArray(e.material)?e.material:[e.material];for(let e of i)n.add(e),`map`in e&&e.map instanceof ke&&r.add(e.map)}}),t.forEach(e=>e.dispose()),n.forEach(e=>e.dispose()),r.forEach(e=>e.dispose()),e.clear()}function C_(e){let t=new AbortController,{signal:n}=t,r=window.matchMedia(`(prefers-reduced-motion: reduce)`),i=/[?&]debug/.test(location.search)?(()=>{let e=document.createElement(`div`);return e.style.cssText=`position:fixed;left:14px;bottom:78px;z-index:9999;background:rgba(20,28,32,.82);color:#f2ead8;font:14px/1.4 ui-monospace,monospace;padding:6px 10px;border-radius:6px;pointer-events:none`,document.body.appendChild(e),e})():null,a=0,o,s=0,c=!1;function l(t){let n=o===void 0?0:(t-o)/1e3,c=Math.min(n,no.maxFrameStep);if(o=t,r.matches||(s+=c),i){let e=window.__harborPlayer;e&&(i.textContent=`x `+e.x.toFixed(2)+`   z `+e.z.toFixed(2))}e(c,s,r.matches,n),a=requestAnimationFrame(l)}function u(){cancelAnimationFrame(a),o=void 0,!c&&!document.hidden&&document.hasFocus()&&(a=requestAnimationFrame(l))}return window.addEventListener(`blur`,u,{signal:n}),window.addEventListener(`focus`,u,{signal:n}),document.addEventListener(`visibilitychange`,u,{signal:n}),{start(){u()},stop(){c=!0,u(),t.abort()}}}function w_(e,t,n){let r=new de,i=e.map(e=>e.frame);return a=>{if(n.player.sailing)return;r.setFromCamera(a,t);let o=r.intersectObjects(i,!0),s=e.find(e=>o[0]?.object.parent===e.frame);if(!s)return;let c=_g(s);yg(n.player,c)&&n.tracker.open(c)}}var T_=[...Up.slice(1),...Wp],E_=2.2,D_=new Map;for(let e of[...Qd,...zc])D_.set(e.join(`,`),E_);function O_(e){return T_.find(t=>t.footprint.every((t,n)=>t===e[n]))?.height}function k_(e,t=[]){let{x:n,z:r}=yt.position,i=y_,a=[n-i,n+i,r-i,r+i];return[...[...Gp,ih.footprint,...Qh,...uf,a,...e].map(e=>({footprint:e,height:io.vaultable.find(t=>t.footprint.every((t,n)=>t===e[n]))?.height??O_(e)??D_.get(e.join(`,`))})),...t]}function A_(e,t,n){let r=bg(e,n),i=t.nearby(e);return r?.kind===`fishing`||r?.kind===`wishing`||r?.kind===`captain`||r?.kind===`lookout`||r?.kind===`sunset`||!i?r:{id:i.resident.id,...i.position,radius:ph.interactRadius,kind:`animal`,label:`${ph.petLabel} ${i.resident.name}`}}function j_(e){let t=Math.hypot(e.x-U.center.x,e.z-U.center.z);return t>=U.lanternRadius&&t<=U.outerRadius}function M_(e,t,n){let{exhibits:r,canvas:i,propObstacles:a,yacht:o,animals:s,obstacles:c,extension:l,seabed:u}=n,{scope:d}=l,{pastimes:f}=n,{fishing:p}=f,m=Sg({open:e.onOpen,leave:e.onLeave}),h=[...Up,ih,...Zd,...$d,f.altar,...a.map(e=>({footprint:e,height:h_}))],g=Hg(c),{player:_}=g,v={riding:!1,home:{x:vp.x,y:vp.top+.09,z:vp.z}},y=[v.home,{x:bf.x,y:bf.top,z:bf.z}],b=e=>y.reduce((t,n)=>Math.hypot(e.x-n.x,e.z-n.z)<Math.hypot(e.x-t.x,e.z-t.z)?n:t,y[0]),x=()=>Math.hypot(_.x-n.helicopter.position.x,_.z-n.helicopter.position.z)<5.5;function S(){let e=b(n.helicopter.position);n.helicopter.position.set(e.x,e.y,e.z),n.helicopter.rotation.y=Math.PI,n.helicopter.visible=!0}let C=()=>!1,w=Ym(_,Bm(c,[...h,...n.flightVolumes,...eg,...Vc]),{change:t=>{e.onFlight(t),v.riding=t&&x(),E.setHeli(v.riding)},notice:e.onFlightNotice,land:e=>{if(j_(e))return C();if(Math.hypot(e.x-Sd.x,e.z-Sd.z)<Sd.size*.58&&e.y>Sd.top-6)return g.teleport(e,Sd.top+.1);if(!Zo(e.x,e.z,{obstacles:c,height:0})){let t=!1;for(let n=.8;n<=4&&!t;n+=.8)for(let r=0;r<12&&!t;r+=1){let i=r/12*Math.PI*2,a=e.x+Math.cos(i)*n,o=e.z+Math.sin(i)*n;if(!Zo(a,o,{obstacles:c,height:0}))continue;let s=Qo(a,o,{obstacles:c,height:e.y});g.teleport({x:a,z:o},q+s),t=!0}return t?!0:g.swim(e)}let t=Qo(e.x,e.z,{obstacles:c,height:e.y});return g.teleport(e,q+t)},recover:g.respawn}),T=i_([{id:`skiff`,group:n.vessel},{id:`yacht`,group:o}],_,()=>l.weather.frame.ice),E=Og(t,h);function ee(e,t){let r=n.helicopter,i=r.userData.rotor,a=r.userData.tailRotor,o=(v.riding?26:3)*Math.min(e,.1);i&&(i.rotation.y+=o),a&&(a.rotation.x+=o*1.7),v.riding?(r.position.set(_.x,q+_.elevation+_.height-W.heli.lift,_.z),r.rotation.y=_.facing+Math.PI,r.visible=!t):r.visible=!0}function te(){if(!v.riding){S(),e.onFlightNotice(W.heli.home);return}v.riding=!1,E.setHeli(!1),w.reset();let t=b(_);S(),g.teleport({x:t.x,z:t.z+3.6}),e.onFlightNotice(W.heli.home)}window.addEventListener(`keydown`,e=>{if(e.code!==`KeyR`)return;let t=b(n.helicopter.position),r=Math.hypot(n.helicopter.position.x-t.x,n.helicopter.position.z-t.z)>.2;(v.riding||r)&&te()}),window.addEventListener(`keydown`,t=>{if(t.code!==`KeyH`||t.repeat)return;let n=g.player;Math.hypot(n.x-zu.x,n.z-zu.z)>zu.size*.62||(g.boost(zu.launch),e.play(`cape`,{pitch:1.35}))});let ne=dc(t),D=xg(r),re=fh({motion:g,orbit:E,sailing:T,onMode:e.onMode,onRequest:e.onActivityRequest,onCue:e.onCue,onNotice:e.onQuality});C=()=>re.act(`lookout`,!1);let ie=!1,O=!1,k=!1,A=0,j=0,M=()=>{N.clear(),e.onSailing(_.sailing)};function ae(){if(w.active||p.active||d.active||A)return null;if(re.mode===`lookout`)return Is(_);if(re.mode===`drive`){let e=T.nearbyDock();return e?{kind:`dock`,id:e.id,label:X.dockPrompt,x:e.x,z:e.z,radius:e.berthRadius}:null}if(re.mode===`sunset`)return{kind:`sunset`,id:`sunset`,label:H.exit,x:_.x,z:_.z,radius:1};if(re.mode)return null;if(Math.hypot(_.x-Xs.telescope.x,_.z-Xs.telescope.z)<2.4){let e=__>.55,t=$s();return{kind:`stargaze`,id:`stargaze`,x:Xs.telescope.x,z:Xs.telescope.z,radius:2.4,label:e?`看星空`:Xs.daytimeLabel,title:e?t.name:`星空`,note:e?t.intro:Xs.daytimeNote}}if(Math.hypot(_.x-qu.x,_.z-qu.z)<2)return{kind:`washer`,id:`firework`,label:`放一束烟花`,title:`海上烟花点`,note:`按 E 放一束，升到灯塔一半高再炸开。`,x:qu.x,z:qu.z,radius:2};if(Math.hypot(_.x-Ku.x,_.z-Ku.z)<2.1&&_.height<5)return{kind:`cloudgate`,id:`tramp-gate`,label:`蹦床传送点`,title:`蹦床传送点`,note:`踩上光圈就能到海上的蹦床。`,x:Ku.x,z:Ku.z,radius:2.1};if(Math.hypot(_.x-zu.x,_.z-zu.z)<zu.size*.55)return{kind:`trampoline`,id:`trampoline`,label:`按 H 开始起蹦`,title:`海上蹦床`,note:`按 H 起跳（弹得比灯塔还高），按 E 回栈桥。`,x:zu.x,z:zu.z,radius:zu.size*.55};if(Math.hypot(_.x-wd.x,_.z-wd.z)<2.1&&_.height<5)return{kind:`cloudgate`,id:`cloud-gate-up`,label:wd.label,title:wd.label,note:`踩上光圈就能升到云上的小教堂。`,x:wd.x,z:wd.z,radius:2.1};if(Math.hypot(_.x-Sd.x,_.z-Sd.z)<Sd.size*.9&&_.elevation+_.height>20)return{kind:`cloudgate`,id:`cloud-gate-down`,label:`返回渔村`,title:`云迁层传输点`,note:`按 E 顺着云缝滑回栈桥。`,x:_.x,z:_.z,radius:2};if(Math.hypot(_.x-Qu.x,_.z-Qu.z)<2.1)return{kind:`washer`,id:`washer`,label:`和洗衣妇说话`,title:`洗衣服的老妇`,note:`她抬头笑笑：「等我把这件捶完。」`,x:Qu.x,z:Qu.z,radius:2.1};if(Math.hypot(_.x-Sd.swing.x,_.z-Sd.swing.z)<1.7&&_.elevation+_.height>20)return{kind:`chair`,id:`sky-swing`,label:_.sitting?`起身`:`坐上花秋千`,x:Sd.swing.x+.35,z:Sd.swing.z,note:String(Cd),radius:1.7};for(let e of[hm.farmer,hm.pilot])if(Math.hypot(_.x-e.x,_.z-e.z)<2.1)return{kind:`washer`,id:`helipad-npc`,label:`和`+e.label+`说话`,title:e.label,note:e.line,x:e.x,z:e.z,radius:3.2};for(let e of[Kl.store,Kl.fortune])if(Math.hypot(_.x-e.x,_.z-(e.z+e.d/2+.9))<1.9){let t=e===Kl.store,n=__>.5;return{kind:`shop`,id:t?`shop-store`:`shop-fortune`,title:e.label,label:`进店看看`,note:t?n?`檐下的灯亮着。店员趴在柜台上打瞌睡，含混地说：「汽水在架子上……自己拿，钱放罐子里。」`:`柜台上摆着冰汽水、饼干和晒干的鱼干。戴红鸭舌帽的店员问你要不要来一瓶。`:n?`算子铺已经打烊，一块木牌挂在门口：「白日再来」。里头只剩一盏灯还亮着。`:`戴墨镜的先生正摆弄水晶球，头也不抬：「坐吧，先说说你最近在愁什么。」`,x:e.x,z:e.z,radius:2}}let e=Hl.trees.reduce((e,t)=>{let n=Math.hypot(_.x-t.x,_.z-Hl.rowZ);return n<2.6&&(!e||n<e.d)?{name:t.name,d:n}:e},null);if(e)return{kind:`pick`,id:`pick-fruit`,label:`摘`+e.name,title:e.name,x:_.x,z:_.z,radius:2.6};if(Hl.coconuts.some(e=>Math.hypot(_.x-e.x,_.z-e.z)<2.8))return{kind:`pick`,id:`pick-coconut`,label:`摘椰子`,title:`椰子`,x:_.x,z:_.z,radius:2.8};let t=kl.beds.find(e=>Math.abs(_.x-e.x)<e.w/2+.6&&Math.abs(_.z-e.z)<e.d/2+.6);if(t){let e=t.crops[0],n=e===`cabbage`?`白菜`:e===`radish`?`萝卜`:e===`chili`?`辣椒`:e===`strawberry`?`草莓`:`西瓜`;return{kind:`pick`,id:`pick-crop`,label:`摘`+n,title:n,x:_.x,z:_.z,radius:1.2}}if(u.nearestDolphin(_.x,_.z))return{kind:`dolphin`,id:`dolphin`,label:`摸摸海豚`,x:_.x,z:_.z,radius:1.2};if(_.swimming&&u.inBed(_.x,_.z))return{kind:`shell`,id:`shell`,label:`捡贝壳`,x:_.x,z:_.z,radius:1.2};let i=A_(_,s,r);if(i?.kind===`fishing`||i?.kind===`wishing`)return i;let a=l.gulls.hotspot(_)??l.residents.hotspot(_);if(a)return a;if(i&&i.kind!==`landmark`)return i;if(Math.hypot(_.x-n.helicopter.position.x,_.z-n.helicopter.position.z)<4.6)return{kind:`heli`,id:`heli`,label:W.heli.label,x:n.helicopter.position.x,z:n.helicopter.position.z,radius:4.6};let o=T.nearbyDock();return o?{kind:`dock`,id:o.id,label:X.boardLabel,x:o.land.x,z:o.land.z,radius:X.boardingRadius}:i}function oe(){let{x:e,z:t}=mt.place;!_.airborne&&g.teleport({x:e,z:t})&&(N.clear(),document.pointerLockElement===i&&document.exitPointerLock(),_.sitting=!0,_.height=.3,_.facing=Math.atan2(mt.float.x-_.x,mt.float.z-_.z),E.aim(null,{yaw:_.facing+Math.PI,pitch:mt.pitch}),i.focus({preventScroll:!0}),p.cast())}function se(){if(k||ie||m.hasOpen())return;if(d.active){d.close();return}if(p.active){f.reel();return}if(re.mode===`sunset`){e.onActivityRequest(`leave-sunset`);return}let t=ae();if(!t)re.mode===`lookout`&&e.onActivityRequest(`leave-lookout`);else if(t.kind===`fishing`)oe();else if(t.kind===`wishing`&&f.chooseWish(),t.kind===`telescope`)document.pointerLockElement===i&&document.exitPointerLock(),d.open().catch(()=>e.onQuality(`望远镜细节暂不可用。`));else if(t.kind===`dock`)e.onActivityRequest(_.sailing?`dock`:`board`);else if(t.kind===`heli`){if(w.active)return;g.clear(),i.focus({preventScroll:!0}),w.toggle(),e.onFlightNotice(W.heli.start)}else if(t.kind===`dolphin`){let t=u.nearestDolphin(_.x,_.z);t&&(u.pet(t),e.play(`greeting`,{pitch:1.18}),e.onQuality(`海豚转了个圈，蹭了蹭你的手。`))}else if(t.kind===`shell`){let t=u.pick(_.x,_.z);if(t){let n=xt(t);e.onQuality(`你从水里摸到了${t}（背包：${t}×${n}）`)}else e.onQuality(`水里晃了晃，什么也没摸到。`)}else if(t.kind===`shop`&&t.id===`shop-store`){let t=ou[Math.floor(Math.random()*ou.length)],n=xt(t);e.onQuality(`你拿了一`+t+`，放进背包（`+t+`×`+n+`）。`)}else if(t.kind===`shop`&&t.id===`shop-fortune`){if(__>.5){e.onQuality(`算子铺已经打烊，门口挂着「白日再来」。`);return}e.onQuality(`先生掐了掐指头：`+su[Math.floor(Math.random()*su.length)])}else if(t.kind!==`trampoline`){if(t.kind===`cloudgate`)t.id===`tramp-gate`?(g.teleport({x:zu.x,z:zu.z},.9),e.onQuality(`光圈把你送到了蹦床上。`)):t.id===`cloud-gate-up`?(g.teleport({x:Sd.x,z:Sd.z+3.5},Sd.top+.15),e.onQuality(`云层把你托了上去。`)):(g.teleport({x:wd.x,z:wd.z},q),e.onQuality(`云缝送你回了栈桥。`));else if(t.kind===`washer`&&t.id===`firework`)v_?.()?(e.play(`wishChime`,{pitch:1.2}),e.onQuality(`烟花升起来了。`)):e.onQuality(`上一束还没放完。`);else if(t.kind===`washer`&&t.id===`npc-farmer`){let t=au[Math.floor(Math.random()*au.length)],n=xt(t);e.onQuality(`果农塞给你一份`+t+`（背包：`+t+`×`+n+`）`)}else if(t.kind===`washer`&&t.id===`npc-pilot`)e.onQuality(iu.pilot.say[0]);else if(t.kind===`washer`){e.play(`greeting`,{pitch:1.05});let t=iu.washer.say[Math.floor(Math.random()*iu.washer.say.length)],n=xt(`洗好的衣裳`);e.onQuality(t+`（背包：洗好的衣裳×`+n+`）`)}else if(t.kind===`pick`){let n=t.title??`东西`,r=xt(n);e.onQuality(`摘到了`+n+`（背包：`+n+`×`+r+`）`)}else if(t.kind===`stargaze`){if(__<=.55){e.onQuality(Xs.daytimeNote);return}d.open({eye:oc,pitch:-.62,pitchLimit:1.2}).catch(()=>e.onQuality(`望远镜细节暂不可用。`))}else if(t.kind===`cow`&&e.onQuality(`挤好了一桶牛奶。`),t.kind===`chair`){let e=g.player;e.sitting?(e.sitting=!1,e.x=t.x+.9,e.z=t.z,e.height=0,e.facing=Math.PI):(e.sitting=!0,e.x=t.x,e.z=t.z,e.height=Number(t.note)||.35,e.facing=Math.PI/2)}else if(t.kind===`gull`)l.gulls.pet(t=>e.play(`gull`,{distance:t}));else if(t.kind===`resident`&&e.play(`greeting`,{pitch:.84+Number(t.id.slice(-1))*.09}),t.kind===`captain`&&e.play(`greeting`,{pitch:.76}),t.kind===`mayor`)e.play(`knock`),j=window.setTimeout(()=>e.play(`knock`),115),A=window.setTimeout(()=>{A=0,m.open(t)},245);else if(t.kind===`lookout`||t.kind===`sunset`)_.airborne||e.onActivityRequest(t.kind);else if(t.kind===`animal`){let t=s.nearby(_);if(t){s.pet(t);let n=t.resident.species;e.play(n===`dog`||n===`lion`?`dog`:`cat`)}}else m.open(t)}}let N=Gh({canvas:i,motion:g,orbit:E,sailing:T,flight:w,canFly:()=>!p.active&&!ie&&!m.hasOpen()&&!k&&!re.mode&&!d.active&&!A,flightEnabled:()=>e.settings().flight,canJump:()=>!p.active&&!ie&&!m.hasOpen()&&!k&&!re.mode,canMove:()=>!g.player.sitting&&!p.active&&!k&&!O&&!d.active&&(re.mode===null||re.mode===`lookout`||re.mode===`drive`),canLook:()=>!k&&!ie&&re.mode!==`tour`,canSteer:()=>!k&&!O&&re.mode===`drive`,sprintEnabled:()=>!O,lockPointer:()=>!p.active&&!ie&&!d.active,leftLock:()=>e.settings().view===`first`&&!p.active&&!ie&&!d.active,specialLook:{active:()=>d.active,look:d.look,zoom:d.zoom},onInteract:se,onPick(e){if(w.active||p.active||ie||m.hasOpen()||re.mode||k)return;let n=yg(_,bt.place)?f.pickWish(e,t):void 0;n?(f.chooseWish(n),m.open(bt.place)):ce(e)}}),ce=w_(r,t,{player:_,tracker:m}),le=N_({motion:g,obstacles:c,sailing:T},D,e=>{w.reset(),E.setFlight(!1),M(),E.setSailing(_.sailing),e===V.id&&(_.facing=V.arrivalYaw+Math.PI,E.center(_.facing)),E.update(_,0,!0)});return{...N,player:_,places:D,sailing:T,flight:w,tracker:m,cameraObstacles:h,activity:re,getInteraction:ae,scope:d,syncHelicopter:ee,heliRiding:()=>v.riding,viewYaw:()=>E.yaw,pastimes:f,stopFishing(){p.stop(),_.sitting=!1,_.height=0,i.focus({preventScroll:!0})},openCatchRecords(){p.active&&(f.showRecords(),m.open(mt.place))},dispose(){N.dispose(),d.close(),window.clearTimeout(A),window.clearTimeout(j)},setPanelOpen(e,t=!1){ie=e,(t&&!O||w.active&&e&&!ie)&&N.clear(),O=t,e&&document.pointerLockElement===i&&document.exitPointerLock()},setTransition(e){k=e,e&&N.clear()},advanceActivity(e){k||re.step(e)},performAction(e){if(w.active||p.active)return!1;let t=matchMedia(`(prefers-reduced-motion: reduce)`).matches,n=re.act(e,t);return n&&(M(),(e!==`sunset`||t)&&E.update(_,0,!0)),n},focusPlace(e){return re.focusAt(D.find(t=>t.hotspot.id===e))},updateFirst(e,t,n){return E.setFirstPerson(t.view===`first`),ne.update(_,E.angles,{enabled:t.view===`first`&&!d.active,step:e,instant:n,bob:t.bob&&!n&&!w.active}),{blend:ne.blend,yaw:ne.heading}},travel(e){return!re.mode&&!p.active&&le(e)}}}function N_(e,t,n){let{motion:r,obstacles:i,sailing:a}=e;return e=>{let o=t.find(t=>t.hotspot.id===e);if(!o||o.requiresBoat&&!r.player.sailing)return!1;let s=o.requiresBoat?(e,t)=>$g(e,t,a.vessel.yaw):(e,t)=>Zo(e,t,{obstacles:i,height:0}),c=Ct(o.hotspot,s);return c?(o.requiresBoat?a.teleport(c):(r.player.sailing&&a.disembark(),r.teleport(c)),n(e),!0):!1}}function P_(e,t,n){let r=0,i=!1,a=!1;window.addEventListener(`keydown`,e=>{e.code===`Space`&&(i=!0)}),window.addEventListener(`keyup`,e=>{e.code===`Space`&&(i=!1)});let{session:o,avatar:s,animate:c,animals:l,forest:u,extension:d,mayor:f,syncActors:p,farm:m,cherryPetals:h,mapleLeaves:g,pandas:_,bambooLeaves:v,stars:y,swordsman:b,seabed:x,shopLife:S,chickens:C,penShelters:w,willows:T,washer:E,arctic:ee,hanfu:te,palacePeople:ne,glide:D,helipadNpcs:re,unstuck:ie,fireworks:O}=n,{player:k,tracker:A,places:j,cameraObstacles:M,sailing:ae,activity:oe,flight:se,pastimes:N}=o,{scene:ce,camera:le,output:ue,canvas:P}=t,de=gg(ce),F=Ag(j,M),fe=a_(e.night),I=o_(e.simplified,e.onQuality),pe=ea(ce,e.simplified),me=d_(ce),he,ge=!1,_e=0,ve=Xm(e.play);return{draw:(t,n,j,M)=>{let ye=e.settings();j||=ye.reduced,o.advanceActivity(oe.mode===`sunset`?Math.min(M,.25):t),o.update(t),k.swimming!==ge&&(ge=k.swimming,e.onFlightNotice(ge?W.ui.swim:W.ui.shore)),k.swimming?(_e+=t,_e>=ro.paddleInterval&&(_e=0,k.speed>no.movementThreshold&&e.play(`swim`,{volume:Math.min(.85,.35+k.speed*.14)}))):_e=0,I.sample(M);let L=fe.step(Math.min(M,.25)),be=oe.dusk,xe=o.updateFirst(t,ye,j),Se=d.weather.update(ye.weather,le,{step:t,quality:ye.quality,tier:I.tier,reduced:j}),Ce=Math.max(Se.rain,Se.snow),we=ye.quality===`low`,Te=j?0:n,Ee=N.update(k,{step:t,frameTime:M,time:Te,night:L,low:we||!I.flags.cloth,reduced:j,weather:ye.weather});o.syncHelicopter(t,xe.blend>.5),s(k,{fishingArm:Ee,settings:ye,rain:Se.rain,first:xe.blend,seconds:t,mounted:o.heliRiding(),reduced:j,simplified:!I.flags.cloth,yaw:xe.yaw,flying:se.active,bank:se.bank}),d.residents.update(k,t,{night:L,rain:Se.rain,snow:Se.snow,reduced:j,limit:we?3:I.flags.residents?1/0:4}),f.update(L,Se.rain,t,j),p(),d.gulls.update(k,{time:Te,step:t,rain:Se.rain,snow:Se.snow,night:L,reduced:j,low:we||!I.flags.gulls},t=>e.play(`gull`,{distance:t})),d.islands.update(Te,{weather:Ce,tier:we?3:I.tier}),d.seaLife.update(Te,{reduced:j||we}),d.chimney.update(t,j||we),m.update(t,{night:L>.5,reduced:j||we}),h.update(t,j||we),g.update(t,j||we),_.update(t,{night:L>.5,reduced:j||we}),v.update(t,j||we),b.update(t,j),y.update(t,{night:L,clear:Se.rain<.2&&Se.snow<.2,reduced:j||we}),x.update(t,j||we),S.update(t,L,j),C.update(t,j||we,Se.rain);let De=i&&!k.sailing&&!k.swimming&&k.airborne;D(De),De&&!a&&(a=!0,e.onQuality(`滑翔中——按住空格保持滑翔，WASD 调整方向。`)),De||(a=!1),k.sitting||k.sailing||k.swimming||ie(),w.update(Se.rain),O.update(t),T.update(t,j),E.update(t,j,L),ee.update(t,L,Se.rain<.2&&Se.snow<.2,j),te.update(t,L,Se.rain<.2&&Se.snow<.2,j),ne.update(t,L,Se.rain<.2&&Se.snow<.2,j),re.update(t,j);let Oe=Se.flash??0;Oe>r+.4&&e.thunder?.(),r=Oe,__=L,d.ambience(k,{mode:oe.mode,speed:ae.vessel.speed,weather:Se,mobile:e.simplified,flightWind:ve(t,se.active,se.speed)}),d.scope.update(L>.5,Ce),c(Te,L,{reflections:I.flags.reflections,dusk:be,reduced:j,weather:Se,bank:j?0:ae.vessel.bank,edgeFog:se.active?Lm(k)*W.edgeFog:0}),pe(Math.max(L*(1-be),be*.86,Ce*.36),Te,{...I.flags,pulse:N.beam}),l.update(k,t,{night:L>.5||Se.rain>.54,reduced:j,scenery:I.flags.scenery}),u(k,be,{trees:I.flags.scenery,shadows:I.flags.shadows}),me(t,ae.vessel,k.sailing&&I.flags.wake&&!j&&!we),A.update(k);let ke=o.getInteraction(),Ae=ke&&`${ke.kind}:${ke.id}`;(Ae??void 0)!==he&&(he=Ae??void 0,de.setHotspot(ke),e.onHotspot(ke)),(ke?.kind===`animal`||ke?.kind===`resident`||ke?.kind===`gull`)&&de.setHotspot(ke),de.setNight(L,I.flags.halos),ue.draw(ce,le,{player:k,align:xe.blend<.35&&!d.scope.active}),e.onHintPosition(de.project(le)),e.onLabels(oe.mode||se.active||N.fishing.active?[]:F(le,k,{width:P.width,height:P.height,elapsed:n}))},setNight:fe.setNight}}function F_({mount:e,onError:t},n,r){let{renderer:{domElement:i},camera:a,output:o}=n,s=()=>{let t=Math.max(g_,e.clientWidth),n=Math.max(g_,e.clientHeight);a.aspect=t/n,a.updateProjectionMatrix(),o.resize(t,n)},c=new ResizeObserver(s),l=new AbortController,{signal:u}=l;return i.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),t()},{signal:u}),window.addEventListener(`blur`,r.clear,{signal:u}),document.addEventListener(`visibilitychange`,r.clear,{signal:u}),i.tabIndex=0,i.setAttribute(`aria-label`,`渔港场景，拖动环绕人物，使用方向键移动`),e.append(i),c.observe(e),s(),()=>{l.abort(),c.disconnect()}}function I_(e,t,n){let{renderer:r,scene:i}=t,a=new Ge(Y.fov,1,Y.near,Y.far),o=x_(r,()=>e.settings().quality);n.push(o.dispose);let s=ta(),c=Lh(i),l=Yp(i,s);oh(i,s);let u=ig(i,s),d=Kh(i,{kit:s,vessel:l.vessel}),f=lg(i,s,e.artworks);n.push(f.dispose);let p=qg(i,s),m=r.domElement,h=Pa(i,s,{play:e.play,notice:e.onQuality,fishing:e.onFishing,landed:t=>{xt(t.name),e.onOpen(mt.place)}}),g=[...f.obstacles,...p],_=[...k_(g,l.treeTops),h.altar],v=Ac(i,s,[..._]),y=Eh({scene:i,kit:s,obstacles:[..._],simplified:e.simplified}),b=Do(i,s,(e,t)=>Zo(e,t,{obstacles:_,height:0,radius:.3})),x=Zc(i),S=rl(i);nl(i,s);let C=vl(i,s,gl(i,s).stalks),w=ml(i),T=ic(i);ac(i,s);let E=Ol(i,s);Fl(i,s),Gl(i,s);let ee=ru(i,s),te=Cu(i,s);Au(i,s);let ne=Pu(i,s),D=Zu(i);v_=()=>D.launch();let re=Ru(i,s),ie=cd(i,s),O=xd(i,s),k=mm(i,s),A=Vf(i,s),j=Dm(i,s),M=Sl(i,s);Pm(i,s);let ae=uc({scene:i,camera:a,kit:s},{obstacles:[..._],animals:y,onChange:e.onScope,setAmbience:e.setAmbience}),oe=[{pose:v.pose,avatar:v.avatar},{pose:M.pose,avatar:M.avatar},...ae.residents.followers].map(e=>({...e,follow:Jo(b_)}));for(let{follow:e}of oe)_.push(e.obstacle);let se=()=>{for(let{pose:e,avatar:t,follow:n}of oe)t.visible?n.move(e):n.hide()};se();let N=M_(e,a,{exhibits:f.exhibits,canvas:m,propObstacles:g,vessel:l.vessel,yacht:l.yacht,helicopter:l.helicopter,animals:y,obstacles:_,extension:ae,flightVolumes:l.flightVolumes,pastimes:h,seabed:E});n.push(N.dispose);let ce=vc(i,s),{draw:le,setNight:ue}=P_(e,{scene:i,camera:a,output:o,canvas:m},{session:N,avatar:ce,forest:u,animals:y,extension:ae,mayor:v,syncActors:se,farm:b,cherryPetals:x,mapleLeaves:S,pandas:C,bambooLeaves:w,stars:T,swordsman:M,seabed:E,shopLife:ee,chickens:te,penShelters:ne,fireworks:D,willows:re,washer:ie,arctic:O,hanfu:k,palacePeople:A,helipadNpcs:j,glide:e=>N.glide(e),unstuck:()=>N.unstuck(),animate(e,t,n){l.animate(e,n.bank),d(e,t,n.reduced,n.weather.rain),c(e,t,n)}}),P=C_(le);n.push(P.stop),n.push(F_({...e,onError(){P.stop(),e.onError()}},{renderer:r,camera:a,output:o},N)),le(0,0,!0,0),P.start();let de;return{...N,setNight:ue,dismissPanel:N.tracker.dismiss,async bakeMap(){let e=await Pt(()=>import(`./harbor-map-bake-BgbywwXI.js`),__vite__mapDeps([3,2,4,5,6,1,7]));return de??=e.captureHarborMap(r,i),de()}}}function L_(e){let t=document.createElement(`canvas`),n=t.getContext(`webgl2`,{antialias:!1,powerPreference:`low-power`});if(!n)throw Error(`WebGL 2 unavailable`);let r=new Ki({canvas:t,context:n}),i=new ve,a=[],o=()=>{for(let e of a.reverse())e();S_(i),r.dispose(),r.forceContextLoss(),t.remove()};try{return{...I_(e,{renderer:r,scene:i},a),focus:()=>t.focus({preventScroll:!0}),dispose:o}}catch(e){throw o(),e}}export{L_ as mountHarbor,la as n,ta as r,fa as t};