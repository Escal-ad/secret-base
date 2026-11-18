import * as T from "three";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
// bake/canvas-stub.ts
function makeContext() {
	const proxy = new Proxy({}, {
		get(store, key) {
			if (key in store) return store[key];
			const fn = () => proxy;
			store[key] = fn;
			return fn;
		},
		set(store, key, value) {
			store[key] = value;
			return true;
		}
	});
	return proxy;
}
function makeCanvas$1(width, height) {
	return {
		width,
		height,
		getContext: () => makeContext(),
		toDataURL: () => ""
	};
}
var documentStub = { createElement(tag) {
	if (tag === "canvas") return makeCanvas$1(1, 1);
	return {
		style: {},
		appendChild() {},
		addEventListener() {}
	};
} };
var scope = globalThis;
if (!scope.document) scope.document = documentStub;
if (!scope.window) scope.window = globalThis;
// src/pixel_harbor/harbor_materials.ts
var TILE_SIZE = 64;
function seededRandom(seed) {
	return () => {
		seed = Math.imul(seed, 1664525) + 1013904223 >>> 0;
		return seed / 4294967296;
	};
}
function makeCanvas(width, height) {
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const context = canvas.getContext("2d");
	if (!context) throw new Error("无法生成像素纹理");
	return {
		canvas,
		context
	};
}
function pixelTexture(canvas) {
	const texture = new T.CanvasTexture(canvas);
	texture.colorSpace = T.SRGBColorSpace;
	texture.magFilter = T.NearestFilter;
	texture.minFilter = T.NearestFilter;
	texture.generateMipmaps = false;
	return texture;
}
function paintTile(pattern) {
	const { canvas, context } = makeCanvas(TILE_SIZE, TILE_SIZE);
	const random = seededRandom(67);
	context.fillStyle = "#dacaba";
	context.fillRect(0, 0, TILE_SIZE, TILE_SIZE);
	if (pattern === "brick" || pattern === "roof") {
		const height = pattern === "brick" ? 12 : 8;
		const width = pattern === "brick" ? 22 : 12;
		for (let y = 0; y < TILE_SIZE; y += height) for (let x = -width + y / height % 2 * (width / 2); x < TILE_SIZE; x += width) {
			context.fillStyle = [
				"#fff7e2",
				"#ebdeca",
				"#e9d8c6",
				"#c3b1a9"
			][Math.floor(random() * 4)];
			context.fillRect(x + 1, y + 1, width - 1, height - 1);
			context.fillStyle = "#fdf1d7";
			context.fillRect(x + 1, y + 1, width - 2, 1);
		}
	} else {
		context.fillStyle = pattern === "grass" ? "#ede8cf" : "#ebd5be";
		context.fillRect(0, 0, TILE_SIZE, TILE_SIZE);
		for (let index = 0; index < 55; index++) {
			context.fillStyle = [
				"#fdf1d7",
				"#d6c7aa",
				"#c4b39f"
			][Math.floor(random() * 3)];
			context.fillRect(random() * TILE_SIZE | 0, random() * TILE_SIZE | 0, pattern === "wood" ? 3 + random() * 21 | 0 : 1 + random() * 4 | 0, 1);
		}
		if (pattern === "wood") {
			context.fillStyle = "#ab9688";
			context.fillRect(0, 0, TILE_SIZE, 2);
			context.fillRect(0, 32, TILE_SIZE, 1);
		}
	}
	return pixelTexture(canvas);
}
function createMaterials() {
	const tiles = /* @__PURE__ */ new Map();
	const materials = /* @__PURE__ */ new Map();
	function surface(color, pattern) {
		const key = color + (pattern ?? "");
		const cached = materials.get(key);
		if (cached) return cached;
		if (pattern && !tiles.has(pattern)) tiles.set(pattern, paintTile(pattern));
		const material = new T.MeshLambertMaterial({
			color,
			map: pattern ? tiles.get(pattern) : null
		});
		materials.set(key, material);
		return material;
	}
	return surface;
}
// src/pixel_harbor/harbor_glow.ts
function markHarborGlow(mesh, type) {
	mesh.userData.harborGlow = type;
	return mesh;
}
// src/pixel_harbor/harbor_exploration_config.ts
var LOOKOUT = {
	id: "lighthouse",
	title: "灯塔岬角",
	action: "登塔",
	exit: "下塔",
	position: {
		x: 6.7,
		z: -19.42
	},
	center: {
		x: 6.7,
		z: -21.55
	},
	platformOffset: 8.965,
	outerRadius: 1.83,
	lanternRadius: .7,
	exitRadius: 1.75,
	minPitch: -.55,
	maxPitch: 1.1,
	startPitch: .3,
	arrivalFacing: 0,
	distance: 4.9,
	minDistance: 2.5,
	maxDistance: 6.5,
	entryFadeMs: 350,
	landmarkIds: [
		"portfolio",
		"notice",
		"eval",
		"mayor",
		"sunset"
	],
	restoreView: "返回全景",
	note: "待填写"
};
var KEEPER = {
	id: "keeper",
	title: "守塔人",
	action: "查看守塔人小屋",
	note: "待填写",
	house: {
		x: -8,
		z: -21
	},
	clearRadius: 2.7,
	signHeight: 4.45,
	hotspot: {
		z: -19.15,
		radius: 2
	}
};
var VILLAGE = {
	id: "upper-village",
	title: "后村林径",
	action: "查看后村林径",
	note: "待填写",
	position: {
		x: 8.95,
		z: 24.85
	},
	arrivalYaw: Math.PI / 2,
	radius: 1.5,
	ramp: [
		8.35,
		10.8,
		20.1,
		23.45
	],
	terrace: [
		-30,
		12,
		23.05,
		46
	],
	upperY: 2,
	maxAddedArea: 1600,
	maxNewInstances: 160,
	maxNewTrees: 48,
	forestLodDistance: 23,
	forestLimitDistance: 42
};
var SUNSET = {
	id: "sunset",
	title: "落日观景点",
	action: "坐下看落日",
	exit: "结束观景",
	position: {
		x: -46.7,
		z: -6.62
	},
	seat: {
		x: -47.92,
		z: -7.15
	},
	sign: {
		x: -46.6,
		z: -8.86
	},
	seatedElevation: .19,
	radius: 1.75,
	direction: [
		.93,
		.107,
		-.36
	],
	duration: 25,
	maxSunY: .107,
	minSunY: -.025,
	pitch: .1,
	reducedPitch: .1,
	distance: 3.15,
	cameraSideAngle: .35,
	aimDistance: 28,
	aimHeight: 1.85,
	sunsetZenith: "#816a9d",
	sunsetHorizon: "#ffc28e",
	sunsetHaze: "#bc8190",
	sunsetLight: "#ffc38d",
	sunsetAmbient: "#cea4c3",
	sunsetAmbientPower: 1.27,
	sunsetMainPower: 1.08,
	sunsetLightHeight: 1.1,
	duskFog: .014,
	fadeMs: 240,
	note: "待填写",
	caption: ""
};
// src/pixel_harbor/harbor_models.ts
function createModelKit() {
	const surface = createMaterials();
	const cube = new T.BoxGeometry();
	function box(position, size, paint) {
		const mesh = new T.Mesh(cube, surface(...paint));
		mesh.position.set(...position);
		mesh.scale.set(...size);
		return mesh;
	}
	function cylinder(position, shape, paint) {
		const mesh = new T.Mesh(new T.CylinderGeometry(...shape), surface(...paint));
		mesh.position.set(...position);
		return mesh;
	}
	function beam(ends, width, paint) {
		const from = new T.Vector3(...ends[0]);
		const to = new T.Vector3(...ends[1]);
		const axis = to.clone().sub(from);
		const mesh = box(from.lerp(to, .5).toArray(), [
			width,
			axis.length(),
			width
		], paint);
		mesh.quaternion.setFromUnitVectors(T.Object3D.DEFAULT_UP, axis.normalize());
		return mesh;
	}
	return {
		box,
		cylinder,
		beam,
		surface
	};
}
function makeHouse(kit, colors, size) {
	const group = new T.Group();
	const [width, height, depth] = size;
	const { box, surface } = kit;
	const rise = width * .31;
	group.add(box([
		0,
		height / 2,
		0
	], size, [colors.wall, "brick"]));
	const gable = new T.Shape();
	gable.moveTo(-width / 2, 0);
	gable.lineTo(width / 2, 0);
	gable.lineTo(0, rise);
	const attic = new T.Mesh(new T.ExtrudeGeometry(gable, {
		depth,
		bevelEnabled: false
	}), surface(colors.wall));
	attic.position.set(0, height, -depth / 2);
	group.add(attic);
	for (const side of [-1, 1]) {
		const slope = Math.atan2(rise, width / 2);
		const roof = box([
			side * width * .25,
			height + rise / 2,
			0
		], [
			Math.hypot(width / 2, rise) + .42,
			.16,
			depth + .48
		], [colors.roof, "roof"]);
		roof.rotation.z = -side * slope;
		group.add(roof);
		const windowX = side * width * .29;
		const windowZ = -depth / 2 - .035;
		group.add(box([
			windowX,
			height * .62,
			windowZ
		], [
			.79,
			.82,
			.11
		], [colors.trim]));
		for (const pane of [-.15, .15]) group.add(markHarborGlow(box([
			windowX + pane,
			height * .62,
			windowZ - .065
		], [
			.24,
			.58,
			.035
		], ["#e6b879"]), "window"));
	}
	group.add(box([
		0,
		height * .29,
		-depth / 2
	], [
		.76,
		height * .58,
		.14
	], ["#455854", "wood"]));
	group.add(box([
		width * .22,
		height + rise * .75,
		depth * .25
	], [
		.4,
		1.15,
		.45
	], ["#835e58", "brick"]));
	return group;
}
function addLanternGallery(group, kit, height) {
	const { box, beam, cylinder } = kit;
	const red = ["#a74338", "roof"];
	const metal = ["#544b49"];
	group.add(cylinder([
		0,
		height,
		0
	], [
		LOOKOUT.outerRadius,
		1.04,
		.25,
		12
	], red));
	group.add(markHarborGlow(cylinder([
		0,
		height + .36,
		0
	], [
		.61,
		.64,
		.57,
		12
	], ["#fff1ad"]), "lighthouse"));
	group.add(cylinder([
		0,
		height + .71,
		0
	], [
		.86,
		.86,
		.15,
		12
	], red));
	group.add(cylinder([
		0,
		height + 1.04,
		0
	], [
		.21,
		.83,
		.53,
		12
	], red));
	group.add(cylinder([
		0,
		height + 1.34,
		0
	], [
		.06,
		.19,
		.1,
		10
	], red));
	group.add(box([
		0,
		height + 1.47,
		0
	], [
		.077,
		.23,
		.077
	], metal));
	for (let index = 0; index < 12; index++) {
		const angle = index * Math.PI / 6;
		const next = angle + Math.PI / 6;
		const x = Math.cos(angle);
		const z = Math.sin(angle);
		group.add(box([
			x * .62,
			height + .4,
			z * .62
		], [
			.07,
			.62,
			.07
		], metal));
		const rail = LOOKOUT.outerRadius - .067;
		group.add(box([
			x * rail,
			height + .37,
			z * rail
		], [
			.06,
			.54,
			.06
		], metal));
		for (const y of [height + .36, height + .62]) group.add(beam([[
			x * rail,
			y,
			z * rail
		], [
			Math.cos(next) * rail,
			y,
			Math.sin(next) * rail
		]], .045, metal));
	}
}
function makeLighthouse(kit) {
	const group = new T.Group();
	const { box, cylinder } = kit;
	const stripeHeight = 1.7;
	group.add(cylinder([
		0,
		.13,
		0
	], [
		1.46,
		1.55,
		.26,
		12
	], ["#ada191", "brick"]));
	for (let index = 0; index < 5; index++) {
		const bottom = 1.23 - index * .092;
		const color = index % 2 === 0 ? "#eee4cc" : "#ba5147";
		const y = .24 + (index + .5) * stripeHeight;
		group.add(cylinder([
			0,
			y,
			0
		], [
			bottom - .092,
			bottom,
			stripeHeight,
			12
		], [color, "brick"]));
		if (index > 0) {
			group.add(box([
				0,
				y + .22,
				bottom - .004
			], [
				.39,
				.59,
				.1
			], ["#886e65"]));
			group.add(box([
				0,
				y + .22,
				bottom + .057
			], [
				.25,
				.45,
				.05
			], ["#f0c583"]));
		}
	}
	group.add(box([
		0,
		.85,
		1.18
	], [
		.65,
		1.36,
		.17
	], ["#52605a", "wood"]));
	addLanternGallery(group, kit, 8.84);
	return group;
}
function makeHull(kit, color) {
	const outline = new T.Shape();
	outline.moveTo(-2.05, -.64);
	outline.lineTo(.85, -.78);
	outline.lineTo(1.65, -.55);
	outline.lineTo(2.48, 0);
	outline.lineTo(1.65, .55);
	outline.lineTo(.85, .78);
	outline.lineTo(-2.05, .64);
	outline.closePath();
	const group = new T.Group();
	const bands = [
		{
			y: .08,
			height: .15,
			scale: .86,
			paint: ["#774942", "wood"]
		},
		{
			y: .23,
			height: .31,
			scale: .96,
			paint: ["#e5d9bd", "wood"]
		},
		{
			y: .54,
			height: .12,
			scale: 1,
			paint: [color, "wood"]
		}
	];
	for (const { y, height, scale, paint } of bands) {
		const hull = new T.Mesh(new T.ExtrudeGeometry(outline, {
			depth: height,
			bevelEnabled: false
		}), kit.surface(paint[0], paint[1]));
		hull.rotation.x = -Math.PI / 2;
		hull.position.y = y;
		hull.scale.set(scale, scale, 1);
		group.add(hull);
	}
	return group;
}
function makeBoat(kit, color) {
	const group = makeHull(kit, color);
	const { box, beam, cylinder } = kit;
	group.add(box([
		-.53,
		1.01,
		0
	], [
		1.02,
		.83,
		1.02
	], ["#f3dfc1", "wood"]));
	group.add(box([
		-.53,
		1.48,
		0
	], [
		1.2,
		.15,
		1.22
	], [color]));
	for (const side of [-1, 1]) {
		group.add(box([
			-.49,
			1.18,
			side * .53
		], [
			.7,
			.32,
			.045
		], ["#587981"]));
		group.add(box([
			-.48,
			1.18,
			side * .56
		], [
			.055,
			.35,
			.035
		], ["#ecd8b6"]));
		const fender = cylinder([
			-1.18,
			.43,
			side * .72
		], [
			.19,
			.19,
			.12,
			10
		], ["#465456"]);
		fender.rotation.x = Math.PI / 2;
		group.add(fender);
	}
	group.add(box([
		0,
		1.17,
		0
	], [
		.05,
		.32,
		.67
	], ["#688890"]));
	group.add(beam([[
		.78,
		.66,
		0
	], [
		.51,
		2.56,
		0
	]], .074, ["#8c6b51"]));
	group.add(box([
		.37,
		2.43,
		0
	], [
		.31,
		.19,
		.045
	], ["#c97155"]));
	group.add(box([
		1.38,
		.77,
		.17
	], [
		.48,
		.24,
		.45
	], ["#c08a58", "wood"]));
	group.add(cylinder([
		.85,
		.74,
		-.28
	], [
		.24,
		.3,
		.16,
		8
	], ["#668c76", "grass"]));
	return group;
}
// src/harbor_pastimes/harbor-pastimes-config.ts
var FISH_STAND = {
	x: -6.9,
	z: -1.74
};
var WISH_STAND = {
	x: 5.7,
	z: -16.6
};
var WISH_ALTAR = {
	x: WISH_STAND.x + .9,
	z: WISH_STAND.z - .38
};
var FISHING = {
	place: {
		id: "fishing",
		kind: "fishing",
		...FISH_STAND,
		radius: .6,
		label: "钓鱼"
	},
	title: "钓鱼点",
	blurb: "在栈桥边抛竿，浮漂下沉时收竿。",
	anchor: [
		FISH_STAND.x,
		1.9,
		FISH_STAND.z
	],
	float: {
		x: -6.85,
		z: -3.55
	},
	castSeconds: .58,
	reelSeconds: .28,
	waitSeconds: [3, 10],
	responseSeconds: 1.5,
	storageKey: "pixel_harbor_catches",
	pitch: .54,
	ui: {
		casting: "正在抛竿…",
		waiting: "留意水面上的浮漂",
		reeling: "正在收竿…",
		bite: "咬钩了！按 E 或点击收竿",
		miss: "鱼跑了",
		reel: "收竿",
		recast: "再抛一竿",
		record: "渔获记录",
		exit: "结束钓鱼",
		result: "钓到了！",
		empty: "还没有钓到过渔获。",
		openBottle: "打开瓶中信",
		pending: "待填写",
		readError: "无法读取渔获记录，本次仍可钓鱼。",
		writeError: "浏览器未能保存本次渔获记录。"
	},
	pool: [
		{
			id: "mullet",
			name: "鲻鱼",
			rarity: "常见",
			icon: "fish",
			note: "",
			weight: 44,
			night: .85,
			rain: 1,
			snow: .8
		},
		{
			id: "sardine",
			name: "沙丁鱼",
			rarity: "常见",
			icon: "fish",
			note: "",
			weight: 30,
			night: 1,
			rain: 1.2,
			snow: 1
		},
		{
			id: "sea-bass",
			name: "海鲈",
			rarity: "少见",
			icon: "fish",
			note: "",
			weight: 13,
			night: 1.7,
			rain: 1.4,
			snow: .85
		},
		{
			id: "shell",
			name: "贝壳",
			rarity: "常见",
			icon: "shell",
			note: "",
			weight: 9,
			night: 1,
			rain: 1.15,
			snow: 1.3
		},
		{
			id: "bottle",
			name: "瓶中信",
			rarity: "稀有",
			icon: "bottle",
			note: "",
			letter: "",
			weight: 4,
			night: 1.6,
			rain: 1.2,
			snow: 1.6
		}
	]
};
var WISHING = {
	place: {
		id: "wishing",
		kind: "wishing",
		...WISH_STAND,
		radius: 1.06,
		label: "许愿"
	},
	title: "许愿台",
	blurb: "点亮一盏纸灯。愿望只保存在本浏览器。",
	anchor: [
		WISH_ALTAR.x,
		2.7,
		WISH_ALTAR.z
	],
	altar: WISH_ALTAR,
	altarWidth: .78,
	altarHeight: 1.1,
	storageKey: "pixel_harbor_wishes",
	maxCharacters: 30,
	maxRecords: 20,
	lights: {
		retained: 4,
		flying: 2,
		flightSeconds: 13,
		fadeSeconds: 1.25,
		beamSeconds: 2.5,
		drift: {
			x: 8,
			y: 5.2,
			z: 9
		}
	},
	ui: {
		privacy: "仅保存在本浏览器，不会上传",
		prompt: "写下一句愿望",
		release: "放飞纸灯",
		saved: "纸灯已升空",
		records: "我的愿望",
		lights: "读最近的纸灯",
		empty: "还没有保存愿望。",
		delete: "删除这条",
		clear: "清空愿望",
		pendingClear: "清空本浏览器里的所有愿望？",
		confirmClear: "确认清空",
		cancel: "取消",
		close: "关闭",
		readError: "无法读取以前的愿望，本次仍可许愿。",
		writeError: "浏览器未能保存此次改动，本次访问仍可查看。"
	},
	examples: []
};
// src/pixel_harbor/eval_station_config.ts
var MEBIBYTE = 1048576;
var VIDEO_LIMIT_MIB = 25;
var evalStation = {
	title: "评测站",
	prompt: "查看评测站",
	disclosure: "演示数据，所有数字由工作台按演示数据实时计算，不代表真实项目数据",
	introduction: "用公开数据复现视频评测流程的演示。详细说明待填写。",
	introTitle: "简介",
	modulesTitle: "评测模块",
	resourcesTitle: "资料",
	modulePlaceholder: "模块说明待填写",
	sourcePlaceholder: "来源标签待填写",
	thumbnailPlaceholder: "缩略图待提供",
	resourcePlaceholder: "演示资料待填写",
	videoLabel: "播放演示录屏",
	videoLoading: "正在加载演示录屏…",
	videoError: "无法读取演示录屏，请检查文件路径后重试。",
	videoTooLarge: `演示录屏超过 ${VIDEO_LIMIT_MIB} MiB 上限。`,
	workbenchLabel: "打开视频数据评测工作台",
	modules: [
		{
			id: "caption",
			title: "视频 Caption",
			description: "",
			thumbnail: "",
			source: null,
			links: []
		},
		{
			id: "t2v",
			title: "T2V 评测",
			description: "",
			thumbnail: "",
			source: null,
			links: []
		},
		{
			id: "world-model",
			title: "世界模型评测",
			description: "",
			thumbnail: "",
			source: null,
			links: []
		}
	],
	workbenchUrl: "",
	methods: [],
	video: {
		src: "",
		poster: "",
		maxBytes: VIDEO_LIMIT_MIB * MEBIBYTE
	}
};
// src/pixel_harbor/harbor_sailing_config.ts
var SAILING = {
	forwardSpeed: 6,
	reverseSpeed: 2.3,
	accelerationTime: .85,
	coastingTime: 1.16,
	turnTime: .31,
	maxTurnRate: 1.72,
	minTurnFactor: .32,
	invertSteerWhenReversing: false,
	maxBank: .14,
	bankTime: .28,
	bounds: [
		-70,
		100,
		-70,
		60
	],
	boundary: [
		[-68, -30],
		[-50, -64],
		[52, -64],
		[94, -42],
		[98, -6],
		[80, 46],
		[48, 58],
		[-48, 58],
		[-68, 28]
	],
	sprint: 1.38,
	berthGrip: .39,
	dockPrompt: "靠岸",
	collisionDiscs: [
		[-1.36, .76],
		[0, .8],
		[1.55, .69]
	],
	berthRadius: 2.1,
	boardingRadius: 1.55,
	helmHeight: .05,
	wakeLimit: 14,
	wakeLife: .85,
	wakeInterval: .11,
	wakeColor: "#a2cfcb",
	wakeMinimumSpeed: .62,
	docks: [
		{
			id: "south-dock",
			title: "南湾码头",
			note: "绿船初始停泊处。",
			x: -.3,
			z: 8.8,
			yaw: Math.PI / 2 + .13,
			land: {
				x: -.3,
				z: 11.42
			},
			berthRadius: 2.1
		},
		{
			id: "pier-dock",
			title: "栈桥泊位",
			note: "绿船可在此靠泊。",
			x: -4.55,
			z: -5.15,
			yaw: Math.PI / 2,
			land: {
				x: -4.55,
				z: -1.7
			},
			berthRadius: 2.1
		},
		{
			id: "east-dock",
			title: "东堤码头",
			note: "南湾东侧的石堤，可在此靠岸与上下船。",
			x: 16,
			z: 15.35,
			yaw: Math.PI / 2 - .06,
			land: {
				x: 16,
				z: 17.9
			},
			berthRadius: 5.6
		}
	],
	boardLabel: "上船",
	dockLabel: "下船",
	requiredLabel: "需乘船前往"
};
[
	{
		id: "sea-east",
		kind: "sea",
		title: "东侧浮标",
		label: "查看东侧浮标",
		x: 17,
		z: -6,
		radius: 3.5
	},
	{
		id: "sea-north",
		kind: "sea",
		title: "北湾浮标",
		label: "查看北湾浮标",
		x: 23,
		z: -12,
		radius: 3.5
	},
	{
		id: "sea-shoal",
		kind: "sea",
		title: "外湾浮标",
		label: "查看外湾浮标",
		x: 30,
		z: -3,
		radius: 3.5
	}
].map((place) => ({
	...place,
	kind: "sea",
	note: "地点介绍待填写"
}));
// src/pixel_harbor/harbor_profile.ts
var PROFILE_UI = {
	id: "mayor",
	title: "村长小屋",
	action: "查看村长小屋",
	anchor: [
		-22.6,
		3.25,
		-3
	],
	position: {
		x: -21.7,
		z: -3
	},
	radius: 2.15,
	tabs: {
		intro: "简介",
		projects: "项目",
		contact: "联系"
	},
	placeholder: "待填写",
	copyEmail: "复制邮箱",
	copySuccess: "邮箱已复制",
	copyFailure: "无法自动复制，请选择邮箱手动复制。",
	visitProject: "带我去",
	download: "下载简历 PDF",
	resumeMissing: "简历 PDF 待填写或文件缺失",
	diagnostics: "待填写资料",
	fieldLabels: {
		name: "姓名",
		role: "目标岗位",
		tagline: "一句话简介",
		biography: "简介段落",
		avatar: "头像",
		skills: "技能关键词",
		email: "邮箱",
		resumePdf: "简历 PDF",
		links: "链接列表",
		projects: "项目卡片"
	}
};
// src/pixel_harbor/harbor_captain_config.ts
var CAPTAIN = {
	id: "captain",
	title: "船夫",
	action: "交谈",
	position: {
		x: 1.02,
		z: 12.29
	},
	radius: 1.9,
	appearance: {
		hair: "#655d57",
		shirt: "#426d78",
		trousers: "#58483d",
		hat: false
	},
	anchor: [
		1.02,
		2.68,
		12.29
	],
	facing: 2.86,
	wavePeriod: 13,
	waveLength: 1.6,
	letterMs: 28,
	visitedKey: "pixel_harbor_visited",
	storageReadError: "无法读取已访问地点，本次会话仍会记录。",
	storageWriteError: "浏览器未保存已访问地点，本次会话仍会记录。",
	unvisitedPrefix: "你还没去过：",
	noRecommendation: "你已经访问过这些地点。",
	placeholder: "待填写",
	travelLabel: "带我去",
	backLabel: "返回",
	guidePlaces: [
		"mayor",
		"portfolio",
		"notice",
		"eval",
		"lighthouse",
		"sunset",
		"upper-village"
	],
	note: "",
	placeDescriptions: {},
	dialogue: {
		root: {
			id: "root",
			text: "",
			options: [
				{
					text: "乘船游览",
					next: "root",
					action: "tour"
				},
				{
					text: "自己开船",
					next: "root",
					action: "drive"
				},
				{
					text: "介绍一下这里",
					next: "guide",
					action: "open"
				},
				{
					text: "先逛逛",
					next: "root",
					action: "close"
				}
			]
		},
		guide: {
			id: "guide",
			text: "",
			options: [{
				text: "返回",
				next: "root",
				action: "open"
			}]
		}
	}
};
// src/harbor_expansion/harbor-hill-config.ts
var HILL = {
	id: "west-hill",
	title: "后山林径",
	action: "查看后山林径",
	position: {
		x: -44.1,
		z: -6.2
	},
	radius: 1.55,
	riseFrom: -27,
	summitAt: -44,
	maxSlope: .33,
	footprints: [
		[
			-33,
			-24.6,
			-12.3,
			-8.4
		],
		[
			-39,
			-32,
			-12.3,
			-4.5
		],
		[
			-46,
			-38,
			-8.9,
			-3
		],
		[
			-49,
			-45,
			-9.7,
			-2.45
		]
	],
	trail: [
		[-24.5, -10.5],
		[-27, -10.5],
		[-31.5, -10.5],
		[-35.8, -10.7],
		[-36.1, -6.25],
		[-41.2, -5.65],
		[-44, -6],
		[-46.7, -6.62]
	],
	trailWidth: 1.25,
	treeCount: 34,
	treeSeed: 776,
	stairRuns: [
		2,
		3,
		5
	],
	treadCount: 4,
	treadWidth: 1.1,
	treadDepth: .21,
	treadHeight: .08,
	railOffset: .94,
	railHeight: .78,
	railThickness: .1,
	railEndGap: .72,
	caption: "待填写"
};
function hillElevation(x, z) {
	if (!HILL.footprints.some(([west, east, north, south]) => x >= west && x <= east && z >= north && z <= south)) return 0;
	return Math.max(0, Math.min(HILL.riseFrom - HILL.summitAt, HILL.riseFrom - x) * HILL.maxSlope);
}
// src/pixel_harbor/harbor_terrain.ts
var DECK = .65;
var VILLAGE_PATHS = [VILLAGE.ramp, VILLAGE.terrace];
if (VILLAGE_PATHS.reduce((area, [left, right, near, far]) => area + (right - left) * (far - near), 0) > VILLAGE.maxAddedArea) throw new RangeError("后村地形超出配置的面积上限");
function groundElevation(x, z) {
	const hill = hillElevation(x, z);
	if (hill) return hill;
	const [left, right, near, far] = VILLAGE.ramp;
	if (x >= left && x <= right && z >= near && z <= far) return (VILLAGE.upperY - DECK) * Math.min(1, (z - near) / (VILLAGE.terrace[2] - near));
	const [minX, maxX, minZ, maxZ] = VILLAGE.terrace;
	return x >= minX && x <= maxX && z >= minZ && z <= maxZ ? VILLAGE.upperY - DECK : 0;
}
var PIER = [
	-13,
	10,
	-2.55,
	2.55
];
var LANDING = [
	10,
	17,
	-3.65,
	3.65
];
var WEST_BANK = [
	-30,
	-12,
	-21,
	22
];
var HEADLAND = [
	-17,
	8,
	-25,
	-12
];
var SOUTH_QUAY = [
	-18,
	11,
	11,
	25
];
var WALKABLE = [
	PIER,
	LANDING,
	WEST_BANK,
	HEADLAND,
	SOUTH_QUAY,
	[
		10.4,
		22,
		16.1,
		19.9
	],
	...[[
		36.6,
		49.4,
		-22.4,
		-13.6
	], [
		46.9,
		69.1,
		39.7,
		54.3
	]],
	...VILLAGE_PATHS,
	...HILL.footprints
];
VILLAGE.position, SUNSET.position, HILL.position;
var HARBOR_DESTINATIONS = {
	fishing: FISHING.place,
	wishing: WISHING.place,
	portfolio: {
		kind: "portfolio",
		id: "portfolio",
		label: "查看作品集",
		x: 4.8,
		z: -1.05,
		radius: 2.4
	},
	notice: {
		kind: "notice",
		id: "notice",
		label: "查看公告",
		x: -15.8,
		z: -1.9,
		radius: 2.5
	},
	eval: {
		kind: "eval",
		id: "eval",
		label: evalStation.prompt,
		x: -10.8,
		z: 14.95,
		radius: 2.2
	},
	mayor: {
		kind: "mayor",
		id: PROFILE_UI.id,
		label: PROFILE_UI.action,
		...PROFILE_UI.position,
		radius: PROFILE_UI.radius
	},
	lookout: {
		kind: "lookout",
		id: LOOKOUT.id,
		label: LOOKOUT.action,
		...LOOKOUT.position,
		radius: LOOKOUT.exitRadius
	},
	sunset: {
		kind: "sunset",
		id: SUNSET.id,
		label: SUNSET.action,
		...SUNSET.position,
		radius: SUNSET.radius
	},
	village: {
		kind: "landmark",
		id: VILLAGE.id,
		label: VILLAGE.title,
		...VILLAGE.position,
		radius: VILLAGE.radius,
		note: VILLAGE.note
	},
	captain: {
		kind: "captain",
		id: CAPTAIN.id,
		label: CAPTAIN.action,
		...CAPTAIN.position,
		radius: CAPTAIN.radius
	},
	hill: {
		kind: "landmark",
		id: HILL.id,
		label: HILL.title,
		...HILL.position,
		radius: HILL.radius,
		note: HILL.caption
	},
	keeper: {
		kind: "landmark",
		id: KEEPER.id,
		label: KEEPER.action,
		x: KEEPER.house.x,
		z: KEEPER.hotspot.z,
		radius: KEEPER.hotspot.radius,
		note: KEEPER.note
	}
};
[...SAILING.docks.map((dock) => ({
	id: dock.id,
	...dock.land,
	radius: SAILING.boardingRadius,
	label: dock.title,
	note: dock.note
}))];
function contains([minX, maxX, minZ, maxZ], x, z) {
	return x >= minX && x <= maxX && z >= minZ && z <= maxZ;
}
function buildWaterGrid() {
	const xCuts = [...new Set(WALKABLE.flatMap(([minX, maxX]) => [minX, maxX]))].sort((a, b) => a - b);
	const zCuts = [...new Set(WALKABLE.flatMap(([, , minZ, maxZ]) => [minZ, maxZ]))].sort((a, b) => a - b);
	const cells = [];
	for (let column = 1; column < xCuts.length; column++) for (let row = 1; row < zCuts.length; row++) {
		const cell = [
			xCuts[column - 1],
			xCuts[column],
			zCuts[row - 1],
			zCuts[row]
		];
		const [left, right, near, far] = cell;
		if (!WALKABLE.some((area) => contains(area, (left + right) / 2, (near + far) / 2))) cells.push(cell);
	}
	return {
		bounds: [
			xCuts[0],
			xCuts.at(-1),
			zCuts[0],
			zCuts.at(-1)
		],
		cells
	};
}
buildWaterGrid();
// src/pixel_harbor/harbor_village_plan.ts
var TERRACE = {
	seed: 841,
	count: 4,
	baseZ: 23.5,
	stride: 5.3,
	rise: 1.52,
	rows: 5,
	startX: -23,
	widthStep: 6.8,
	width: 39,
	depth: 21
};
function makeTerraces() {
	const random = seededRandom(TERRACE.seed);
	return Array.from({ length: TERRACE.count }, (_, tier) => {
		const z = TERRACE.baseZ + tier * TERRACE.stride;
		return {
			tier,
			y: VILLAGE.upperY + tier * TERRACE.rise,
			z,
			lots: Array.from({ length: TERRACE.rows }, (_, index) => {
				return {
					x: TERRACE.startX + TERRACE.widthStep * index + random() * 1.5,
					house: tier < TERRACE.count - 1 && (index + tier) % TERRACE.rows !== 0 ? {
						width: 3.2 + random(),
						height: 2.2 + random(),
						color: (index + tier) % 4
					} : void 0,
					treeScale: 1.15 + random() * .85
				};
			})
		};
	});
}
var VILLAGE_TERRACES = makeTerraces();
function houseFootprint(x, z, width) {
	return [
		x - width / 2,
		x + width / 2,
		z - 1.7,
		z + 1.7
	];
}
var TERRACE_HOUSES = VILLAGE_TERRACES.flatMap(({ y, z, lots }) => lots.flatMap(({ x, house }) => house ? [{
	footprint: houseFootprint(x, z + 2.3, house.width),
	base: y,
	height: house.height + house.width * .31
}] : []));
var TERRACE_TRUNKS = VILLAGE_TERRACES[0].lots.map(({ x, treeScale }) => {
	const radius = .16 * treeScale;
	return [
		x + 2.8 - radius,
		x + 2.8 + radius,
		VILLAGE_TERRACES[0].z + 2.7 - radius,
		VILLAGE_TERRACES[0].z + 2.7 + radius
	];
});
VILLAGE_TERRACES.slice(1).map(({ tier, y, z }) => {
	const width = TERRACE.width - tier * 2.8;
	return {
		footprint: [
			-9 - width / 2,
			-9 + width / 2,
			z - .5,
			z + 20.5
		],
		base: 0,
		height: y
	};
});
// src/pixel_harbor/harbor_new_landmarks.ts
var TRAIL$1 = ["#b28b63", "wood"];
var RAIL$1 = ["#88664e", "wood"];
var BENCH_RADIUS = .56;
var RAIL_DEPTH = .12;
var SIGN_COLOR = "#8a694c";
var SIGN_TEXT = "#fff0d4";
var RAILS = [{
	x: -18,
	near: 23.3,
	far: VILLAGE.terrace[3]
}, {
	x: VILLAGE.terrace[1],
	near: 24,
	far: VILLAGE.terrace[3]
}];
var RAMP_RAILS = [VILLAGE.ramp[0], VILLAGE.ramp[1]].map((x) => [
	x - RAIL_DEPTH / 2,
	x + RAIL_DEPTH / 2,
	VILLAGE.ramp[2],
	VILLAGE.terrace[2]
]);
function nameplate(text, position, yaw) {
	const { canvas, context } = makeCanvas(144, 35);
	context.fillStyle = SIGN_COLOR;
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = SIGN_TEXT;
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.font = "bold 19px \"Microsoft YaHei\", sans-serif";
	context.fillText(text, canvas.width / 2, canvas.height / 2);
	const sign = new T.Mesh(new T.PlaneGeometry(1.38, .34), new T.MeshBasicMaterial({
		map: pixelTexture(canvas),
		side: T.DoubleSide
	}));
	sign.position.set(...position);
	sign.rotation.y = yaw;
	return sign;
}
function addTrail$1(group, kit) {
	const [left, right, start] = VILLAGE.ramp;
	const high = VILLAGE.terrace[2];
	const climb = VILLAGE.upperY - DECK;
	const rise = Math.atan2(climb, high - start);
	const ramp = kit.box([
		(left + right) / 2,
		DECK + climb / 2 - .07,
		(high + start) / 2
	], [
		right - left,
		.14,
		Math.hypot(climb, high - start) + .1
	], TRAIL$1);
	ramp.rotation.x = -rise;
	group.add(ramp);
	for (const x of [left, right]) {
		group.add(kit.beam([[
			x,
			DECK + .45,
			start
		], [
			x,
			VILLAGE.upperY + .45,
			high
		]], RAIL_DEPTH, RAIL$1));
		group.add(kit.box([
			x,
			DECK + .22,
			start
		], [
			.15,
			.48,
			.16
		], RAIL$1));
		group.add(kit.box([
			x,
			VILLAGE.upperY + .22,
			high
		], [
			.15,
			.48,
			.16
		], RAIL$1));
	}
	group.add(kit.box([
		-4.05,
		VILLAGE.upperY + .012,
		23.75
	], [
		27.8,
		.024,
		1.2
	], ["#b29b7d", "brick"]));
	for (const { x, near, far } of RAILS) {
		group.add(kit.beam([[
			x,
			VILLAGE.upperY + .49,
			near
		], [
			x,
			VILLAGE.upperY + .49,
			far
		]], RAIL_DEPTH, RAIL$1));
		for (const z of [
			near,
			(near + far) / 2,
			far
		]) group.add(kit.box([
			x,
			VILLAGE.upperY + .26,
			z
		], [
			.15,
			.53,
			.16
		], RAIL$1));
	}
	group.add(nameplate(VILLAGE.title, [
		9.62,
		2.35,
		23.65
	], Math.PI));
}
function addBench(group, kit) {
	const bench = new T.Group();
	bench.add(kit.box([
		0,
		.37,
		0
	], [
		1.03,
		.1,
		.42
	], TRAIL$1));
	bench.add(kit.box([
		0,
		.68,
		-.18
	], [
		1.03,
		.25,
		.08
	], RAIL$1));
	for (const side of [-1, 1]) bench.add(kit.box([
		side * .42,
		.25,
		0
	], [
		.1,
		.5,
		.37
	], RAIL$1));
	bench.position.set(SUNSET.seat.x, DECK + groundElevation(SUNSET.seat.x, SUNSET.seat.z), SUNSET.seat.z);
	bench.rotation.y = Math.atan2(SUNSET.direction[0], SUNSET.direction[2]);
	group.add(bench);
	const { x, z } = SUNSET.sign;
	const floor = groundElevation(x, z);
	group.add(nameplate(SUNSET.title, [
		x,
		floor + 1.56,
		z
	], -.7));
	group.add(kit.box([
		x,
		floor + 1.1,
		z
	], [
		.13,
		.92,
		.13
	], RAIL$1));
}
function addHarborLandmarks(world, kit) {
	const group = new T.Group();
	addTrail$1(group, kit);
	addBench(group, kit);
	group.add(nameplate(PROFILE_UI.title, [
		-22.57,
		2.48,
		-3
	], Math.PI / 2));
	group.add(nameplate(KEEPER.title, [
		KEEPER.house.x,
		DECK + KEEPER.signHeight,
		KEEPER.house.z - .4
	], 0));
	world.add(group);
}
[
	(SUNSET.seat.x - BENCH_RADIUS, SUNSET.seat.x + BENCH_RADIUS, SUNSET.seat.z - BENCH_RADIUS, SUNSET.seat.z + BENCH_RADIUS),
	(SUNSET.sign.x - .1, SUNSET.sign.x + .1, SUNSET.sign.z - .1, SUNSET.sign.z + .1),
	...RAILS.map(({ x, near, far }) => [
		x - RAIL_DEPTH,
		x + RAIL_DEPTH,
		near,
		far
	]),
	...RAMP_RAILS
];
// src/harbor_expansion/harbor-hill.ts
var GRASS = "#819471";
var ROCK = "#8c8878";
var TRAIL = "#b7a384";
var RAIL = "#896a50";
var PATH_CLEARANCE = .016;
var PATH_THICKNESS = .06;
function surface(x, z) {
	return DECK + hillElevation(x, z);
}
function makeSlope(kit, footprint) {
	const [left, right, near, far] = footprint;
	const points = [
		[left, near],
		[right, near],
		[right, far],
		[left, far]
	];
	const vertices = points.flatMap(([x, z]) => [
		x,
		surface(x, z),
		z
	]).concat(points.flatMap(([x, z]) => [
		x,
		-.72,
		z
	]));
	const mesh = new T.BufferGeometry();
	mesh.setAttribute("position", new T.Float32BufferAttribute(vertices, 3));
	mesh.setAttribute("uv", new T.Float32BufferAttribute([
		0,
		0,
		1,
		0,
		1,
		1,
		0,
		1,
		0,
		0,
		1,
		0,
		1,
		1,
		0,
		1
	], 2));
	mesh.setIndex([
		0,
		2,
		1,
		0,
		3,
		2,
		0,
		1,
		5,
		0,
		5,
		4,
		1,
		2,
		6,
		1,
		6,
		5,
		2,
		3,
		7,
		2,
		7,
		6,
		3,
		0,
		4,
		3,
		4,
		7
	]);
	mesh.addGroup(0, 6, 0);
	mesh.addGroup(6, 24, 1);
	mesh.computeVertexNormals();
	return new T.Mesh(mesh, [kit.surface(GRASS, "grass"), kit.surface(ROCK, "brick")]);
}
var summitCells = HILL.footprints.flatMap(([left, right, near, far]) => {
	const cuts = [
		left,
		...[HILL.summitAt, HILL.riseFrom].filter((x) => x > left && x < right),
		right
	];
	return cuts.slice(1).map((x, index) => [
		cuts[index],
		x,
		near,
		far
	]);
});
function plants() {
	const random = seededRandom(HILL.treeSeed);
	return Array.from({ length: HILL.treeCount }, (_, index) => {
		const [left, right, near, far] = HILL.footprints[index % HILL.footprints.length];
		return {
			x: left + (right - left) * (.08 + random() * .84),
			z: index % 2 === 0 ? near + .48 : far - .48,
			size: .8 + random() * .45
		};
	}).filter(({ x, z }) => Math.hypot(x + 47.1, z + 7.8) > 2.1);
}
var TREES = plants();
function railEnds(from, to) {
	const yaw = Math.atan2(to[0] - from[0], to[2] - from[2]);
	const ox = Math.cos(yaw) * HILL.railOffset, oz = -Math.sin(yaw) * HILL.railOffset;
	function cap([x, , z], offset) {
		const px = x + ox + Math.sin(yaw) * offset, pz = z + oz + Math.cos(yaw) * offset;
		return [
			px,
			surface(px, pz) + HILL.railHeight,
			pz
		];
	}
	return [cap(from, HILL.railEndGap), cap(to, -HILL.railEndGap)];
}
function squareFootprint(x, z, radius) {
	return [
		x - radius,
		x + radius,
		z - radius,
		z + radius
	];
}
var HILL_OBSTACLES = [...TREES.map(({ x, z }) => squareFootprint(x, z, .14)), ...HILL.stairRuns.flatMap((index) => {
	const [x, z] = HILL.trail[index - 1], [u, v] = HILL.trail[index];
	return railEnds([
		x,
		0,
		z
	], [
		u,
		0,
		v
	]).map(([px, , pz]) => squareFootprint(px, pz, HILL.railThickness / 2));
})];
var HILL_TREE_PARTS = [
	[
		.62,
		.24,
		1.24,
		"#725440"
	],
	[
		1.39,
		.92,
		.77,
		"#5d7764"
	],
	[
		1.89,
		.63,
		.41,
		"#79906e"
	]
];
TREES.flatMap(({ x, z, size }) => HILL_TREE_PARTS.map(([y, width, height]) => ({
	footprint: squareFootprint(x, z, width * size / 2),
	base: surface(x, z) + (y - height / 2) * size,
	height: height * size
})));
function addTrees(group, kit) {
	const bone = new T.Object3D();
	for (const [y, width, height, color] of HILL_TREE_PARTS) {
		const box = kit.box([
			0,
			0,
			0
		], [
			1,
			1,
			1
		], [color]);
		const mesh = new T.InstancedMesh(box.geometry, box.material, TREES.length);
		TREES.forEach(({ x, z, size }, index) => {
			bone.position.set(x, surface(x, z) + y * size, z);
			bone.scale.set(width * size, height * size, width * size);
			bone.updateMatrix();
			mesh.setMatrixAt(index, bone.matrix);
		});
		group.add(mesh);
	}
}
function addStairRun(kit, [from, to]) {
	const group = new T.Group();
	const dx = to[0] - from[0], dz = to[2] - from[2];
	const yaw = Math.atan2(dx, dz);
	for (let index = 1; index <= HILL.treadCount; index++) {
		const progress = index / (HILL.treadCount + 1);
		const x = from[0] + dx * progress, z = from[2] + dz * progress;
		const tread = kit.box([
			x,
			surface(x, z),
			z
		], [
			HILL.treadWidth,
			HILL.treadHeight,
			HILL.treadDepth
		], [ROCK, "brick"]);
		tread.rotation.y = yaw;
		group.add(tread);
	}
	const caps = railEnds(from, to);
	const [start, end] = caps;
	group.add(kit.beam([start, end], HILL.railThickness, [RAIL, "wood"]));
	for (const [x, y, z] of caps) group.add(kit.box([
		x,
		y - HILL.railHeight / 2,
		z
	], [
		HILL.railThickness,
		HILL.railHeight,
		HILL.railThickness
	], [RAIL, "wood"]));
	return group;
}
function addTrail(group, kit) {
	for (let index = 1; index < HILL.trail.length; index++) {
		const [x, z] = HILL.trail[index - 1];
		const [u, v] = HILL.trail[index];
		const from = [
			x,
			surface(x, z) + PATH_CLEARANCE,
			z
		];
		const to = [
			u,
			surface(u, v) + PATH_CLEARANCE,
			v
		];
		const road = kit.beam([from, to], HILL.trailWidth, [TRAIL, "brick"]);
		road.scale.z = PATH_THICKNESS;
		road.rotateY(Math.PI / 2);
		group.add(road);
		if (HILL.stairRuns.some((run) => run === index)) group.add(addStairRun(kit, [from, to]));
		const px = x + .52;
		const pz = z - .91;
		const py = surface(px, pz);
		group.add(kit.box([
			px,
			py + .49,
			pz
		], [
			.11,
			.98,
			.11
		], [RAIL]));
		if (index % 2) group.add(markHarborGlow(kit.box([
			px,
			py + 1.04,
			pz
		], [
			.19,
			.2,
			.19
		], ["#f2c48b"]), "street"));
	}
}
function addHarborHill(group, kit) {
	for (const footprint of summitCells) group.add(makeSlope(kit, footprint));
	addTrees(group, kit);
	addTrail(group, kit);
	const { canvas, context } = makeCanvas(128, 32);
	context.fillStyle = RAIL;
	context.fillRect(0, 0, 128, 32);
	context.fillStyle = "#fff0d4";
	context.font = "bold 19px sans-serif";
	context.textAlign = "center";
	context.fillText(HILL.title, 64, 23);
	const sign = new T.Mesh(new T.PlaneGeometry(1.12, .28), new T.MeshBasicMaterial({
		map: pixelTexture(canvas),
		side: T.DoubleSide
	}));
	sign.position.set(-24.8, DECK + 1.26, -11.88);
	sign.rotation.y = Math.PI / 2;
	group.add(sign, kit.box([
		-24.8,
		DECK + .61,
		-11.88
	], [
		.12,
		1.22,
		.12
	], [RAIL]));
}
// src/pixel_harbor/harbor_world.ts
var TIMBER = ["#805843", "wood"];
var STONE = ["#ad9e8d", "brick"];
var ROPE = ["#ceb28a"];
var POST_STEP = 2.65;
function pierPosts([start, end, left, right]) {
	const posts = [];
	for (let x = start + .35; x < end; x += POST_STEP) posts.push([x, left + .1], [x, right - .1]);
	return posts;
}
function slab(kit, area, paint) {
	const [minX, maxX, minZ, maxZ] = area;
	return kit.box([
		(minX + maxX) / 2,
		DECK - .48,
		(minZ + maxZ) / 2
	], [
		maxX - minX,
		.96,
		maxZ - minZ
	], paint);
}
function addPier(group, kit, area) {
	const [start, end, left, right] = area;
	const random = seededRandom(113);
	const centerZ = (left + right) / 2;
	const plankCount = Math.ceil((end - start) / .37);
	const plankWidth = (end - start) / plankCount;
	for (let index = 0; index < plankCount; index++) {
		const x = start + (index + .5) * plankWidth;
		const color = [
			"#a07655",
			"#b48b65",
			"#ba916b",
			"#a57b5c"
		][Math.floor(random() * 4)];
		const split = centerZ + (index % 3 - 1) * .62;
		for (const [from, to] of [[left, split], [split + .023, right]]) group.add(kit.box([
			x,
			DECK - .08,
			(from + to) / 2
		], [
			plankWidth - .014,
			.16,
			to - from
		], [color, "wood"]));
	}
	for (const z of [left + .1, right - .1]) group.add(kit.box([
		(start + end) / 2,
		.44,
		z
	], [
		end - start,
		.24,
		.2
	], TIMBER));
	for (const [x, z] of pierPosts(area)) {
		group.add(kit.box([
			x,
			.34,
			z
		], [
			.31,
			1.91,
			.33
		], TIMBER));
		group.add(kit.box([
			x,
			.96,
			z
		], [
			.345,
			.15,
			.36
		], ROPE));
		group.add(kit.box([
			x,
			1.31,
			z
		], [
			.35,
			.09,
			.36
		], ["#91674c", "wood"]));
	}
}
function addLantern(group, kit, [x, , z]) {
	group.add(kit.box([
		x,
		DECK + 1.18,
		z
	], [
		.105,
		2.36,
		.105
	], ["#595655"]));
	group.add(kit.box([
		x,
		DECK + 2.36,
		z + .24
	], [
		.105,
		.1,
		.54
	], ["#595655"]));
	group.add(markHarborGlow(kit.box([
		x,
		DECK + 2.25,
		z + .47
	], [
		.24,
		.22,
		.24
	], ["#efc481"]), "street"));
	group.add(kit.box([
		x,
		DECK + 2.41,
		z + .47
	], [
		.33,
		.1,
		.34
	], ["#595655"]));
}
function addTree(group, kit, [x, y, z], scale) {
	const tree = new T.Group();
	tree.name = "harbor-tree";
	tree.add(kit.box([
		0,
		.75,
		0
	], [
		.27,
		1.5,
		.28
	], TIMBER));
	tree.add(kit.box([
		0,
		1.23,
		0
	], [
		1.67,
		.57,
		1.42
	], ["#547262", "grass"]));
	tree.add(kit.box([
		.04,
		1.68,
		.02
	], [
		1.26,
		.42,
		1.16
	], ["#6d8868", "grass"]));
	tree.add(kit.box([
		.1,
		1.98,
		.04
	], [
		.77,
		.31,
		.82
	], ["#88966e", "grass"]));
	tree.position.set(x, y, z);
	tree.scale.setScalar(scale);
	group.add(tree);
}
function addRock(group, kit, [x, y, z], size) {
	const rock = kit.cylinder([
		x,
		y,
		z
	], [
		.69,
		1,
		1,
		6
	], ["#888a83", "brick"]);
	rock.scale.set(...size);
	rock.rotation.y = x;
	group.add(rock);
}
function addBuoy(group, kit, [x, y, z], color) {
	group.add(kit.cylinder([
		x,
		y,
		z
	], [
		.22,
		.29,
		.27,
		8
	], [color]));
	group.add(kit.cylinder([
		x,
		y + .17,
		z
	], [
		.09,
		.15,
		.12,
		8
	], ["#f0cd8b"]));
}
function addShore(group, kit) {
	const random = seededRandom(251);
	group.add(slab(kit, WEST_BANK, ["#c3a983", "grass"]));
	group.add(slab(kit, HEADLAND, ["#91a079", "grass"]));
	group.add(slab(kit, SOUTH_QUAY, STONE));
	group.add(slab(kit, [
		10.4,
		22,
		16.1,
		19.9
	], STONE));
	group.add(kit.box([
		-10,
		DECK - .012,
		12.2
	], [
		31,
		.026,
		2.4
	], ["#c7b299", "brick"]));
	group.add(kit.box([
		-14,
		DECK - .012,
		-13.1
	], [
		3.7,
		.025,
		10.1
	], ["#c8b591", "brick"]));
	for (let index = 0; index < 18; index++) {
		addRock(group, kit, [
			-13 + index * 1.21,
			.18,
			-11.7 + random() * .26
		], [
			.54 + random() * .44,
			.48 + random() * .75,
			.64
		]);
		addRock(group, kit, [
			11.4 + index * .66,
			.12,
			15.95
		], [
			.55,
			.57,
			.62
		]);
	}
	for (let index = 0; index < 16; index++) {
		addRock(group, kit, [
			8.25 + random(),
			.23,
			-12.4 - index * .83
		], [
			.67,
			.74,
			.69
		]);
		const x = -28 + random() * 2.6, z = -19 + index * 2.57, size = .9 + random() * .65;
		if (z < -12.3 || z > -8.4) addTree(group, kit, [
			x,
			DECK,
			z
		], size);
	}
}
var HOUSE_COLORS = [
	{
		wall: "#d0a16b",
		roof: "#97685e",
		trim: "#f1dbc2"
	},
	{
		wall: "#c28b79",
		roof: "#6b7880",
		trim: "#f3ddbd"
	},
	{
		wall: "#a9af94",
		roof: "#836c6a",
		trim: "#f0d7b3"
	},
	{
		wall: "#abc1c0",
		roof: "#926556",
		trim: "#ecd4af"
	}
];
function placeHouse(group, kit, options) {
	const house = makeHouse(kit, HOUSE_COLORS[options.color], options.size);
	house.name = "harbor-house";
	house.position.set(...options.position);
	house.rotation.y = options.yaw ?? 0;
	group.add(house);
}
function addVillage(group, kit) {
	placeHouse(group, kit, {
		position: [
			-3,
			DECK,
			17.5
		],
		size: [
			6.3,
			3.05,
			4.4
		],
		color: 0
	});
	placeHouse(group, kit, {
		position: [
			6,
			DECK,
			19.2
		],
		size: [
			3.9,
			2.55,
			4.1
		],
		color: 3
	});
	placeHouse(group, kit, {
		position: [
			-8,
			DECK,
			-21
		],
		size: [
			4.7,
			2.6,
			3.7
		],
		color: 2,
		yaw: Math.PI
	});
	placeHouse(group, kit, {
		position: [
			-24.7,
			DECK,
			-3
		],
		size: [
			4.4,
			2.43,
			4
		],
		color: 1,
		yaw: -Math.PI / 2
	});
	for (const { tier, y, z, lots } of VILLAGE_TERRACES) {
		group.add(kit.box([
			-9,
			y - 2.4,
			z + 10
		], [
			39 - tier * 2.8,
			4.8,
			21
		], ["#8a9b76", "grass"]));
		const span = tier === 0 ? VILLAGE.ramp[0] + 28 : 38 - tier * 2.8;
		const mid = tier === 0 ? (VILLAGE.ramp[0] - 28) / 2 : -9;
		group.add(kit.box([
			mid,
			y - .62,
			z - .49
		], [
			span,
			1.24,
			.55
		], STONE));
		for (const { x, house, treeScale } of lots) {
			if (house) placeHouse(group, kit, {
				position: [
					x,
					y,
					z + 2.3
				],
				size: [
					house.width,
					house.height,
					3.4
				],
				color: house.color
			});
			addTree(group, kit, [
				x + 2.8,
				y,
				z + 2.7
			], treeScale);
		}
	}
}
function addNetRack(group, kit) {
	const x = 3;
	const z = 14.3;
	for (const offset of [-1.2, 1.2]) group.add(kit.box([
		x + offset,
		1.52,
		z
	], [
		.13,
		1.74,
		.13
	], TIMBER));
	group.add(kit.box([
		x,
		2.28,
		z
	], [
		2.55,
		.13,
		.14
	], TIMBER));
	for (let index = 0; index <= 12; index++) {
		const start = 1.89 + index * .185;
		group.add(kit.beam([[
			start,
			2.22,
			z
		], [
			start + .07,
			1.26,
			z
		]], .023, ["#93a291"]));
	}
	for (let row = 0; row < 6; row++) group.add(kit.box([
		x,
		1.3 + row * .17,
		z
	], [
		2.29,
		.025,
		.026
	], ["#93a291"]));
	for (const offset of [
		-.82,
		.55,
		.98
	]) addBuoy(group, kit, [
		x + offset,
		1.29,
		z
	], "#c58d58");
}
function addDockProps(group, kit) {
	addNetRack(group, kit);
	for (const [x, z] of [
		[-1.2, 2.34],
		[9, -2.34],
		[16.4, 2.69],
		[-13.4, -14.9],
		[-10.5, 13.4]
	]) addLantern(group, kit, [
		x,
		DECK,
		z
	]);
	for (const [x, z] of [
		[-8, -2.05],
		[13.8, 3.12],
		[0, 12.2],
		[-6.9, 15.9],
		[-21, 2.6]
	]) {
		group.add(kit.box([
			x,
			.91,
			z
		], [
			.65,
			.52,
			.61
		], ["#bc8a59", "wood"]));
		group.add(kit.box([
			x,
			1.19,
			z
		], [
			.68,
			.08,
			.64
		], TIMBER));
		addBuoy(group, kit, [
			x - .46,
			.81,
			z
		], "#bd6951");
	}
	for (const [x, z] of [
		[.6, 2.23],
		[11.9, 2.95],
		[-16, 9.1]
	]) {
		group.add(kit.cylinder([
			x,
			.99,
			z
		], [
			.35,
			.31,
			.68,
			9
		], TIMBER));
		for (const y of [.78, 1.18]) group.add(kit.cylinder([
			x,
			y,
			z
		], [
			.355,
			.355,
			.08,
			9
		], ["#69645c"]));
	}
	const coil = new T.Mesh(new T.TorusGeometry(.28, .048, 4, 12), kit.surface(...ROPE));
	coil.rotation.x = -Math.PI / 2;
	coil.position.set(1.8, DECK + .055, -1.6);
	group.add(coil);
	group.add(kit.beam([[
		3.22,
		1.02,
		-2.45
	], [
		4.54,
		.67,
		-4.45
	]], .034, ROPE));
}
function addPowerLines(group, kit) {
	const x = -21.6;
	for (const z of [
		-11,
		-3.9,
		3.2
	]) {
		group.add(kit.box([
			x,
			2.6,
			z
		], [
			.19,
			3.9,
			.2
		], TIMBER));
		group.add(kit.box([
			x,
			4.21,
			z
		], [
			.85,
			.12,
			.15
		], TIMBER));
	}
	for (const dx of [-.33, .33]) for (const z of [-11, -3.9]) {
		const wireX = x + dx;
		const midpoint = [
			wireX,
			4,
			z + 3.55
		];
		group.add(kit.beam([[
			wireX,
			4.31,
			z
		], midpoint], .028, ["#646059"]));
		group.add(kit.beam([midpoint, [
			wireX,
			4.31,
			z + 7.1
		]], .028, ["#646059"]));
	}
}
function addWestCoast(group, kit) {
	const sand = ["#c1a784", "grass"];
	for (const [z, length] of [[-7.2, 9.4], [6.8, 8.1]]) {
		group.add(kit.box([
			-11.74,
			.14,
			z
		], [
			1.15,
			.39,
			length
		], sand));
		group.add(kit.box([
			-12.05,
			.27,
			z
		], [
			.92,
			.43,
			length - 1.4
		], sand));
	}
}
function batchBlocks(group) {
	const buckets = /* @__PURE__ */ new Map();
	group.updateMatrixWorld(true);
	group.traverse((object) => {
		if (!(object instanceof T.Mesh) || object.geometry.type !== "BoxGeometry") return;
		const material = object.material;
		const key = `${material.id}:${object.userData.harborGlow ?? ""}`;
		const bucket = buckets.get(key);
		if (bucket) bucket.blocks.push(object);
		else buckets.set(key, {
			material,
			blocks: [object]
		});
	});
	for (const { material, blocks } of buckets.values()) {
		if (blocks.length < 2) continue;
		const batch = new T.InstancedMesh(blocks[0].geometry, material, blocks.length);
		if (blocks[0].userData.harborGlow) {
			batch.userData.harborGlow = blocks[0].userData.harborGlow;
			batch.userData.glowPoints = blocks.map((block) => new T.Vector3().setFromMatrixPosition(block.matrixWorld));
		}
		blocks.forEach((block, index) => {
			batch.setMatrixAt(index, block.matrixWorld);
			block.removeFromParent();
		});
		group.add(batch);
	}
}
var BOAT_VESSEL_ID = "vessel";
function addBoats(scene, kit) {
	const boats = [
		{
			id: "north-shore",
			point: [
				4.8,
				.035,
				-5
			],
			yaw: -.12,
			size: 1.22,
			color: "#537984"
		},
		{
			id: BOAT_VESSEL_ID,
			point: [
				-.3,
				.025,
				8.8
			],
			yaw: .13,
			size: 1,
			color: "#65866e"
		},
		{
			id: "east-shoal",
			point: [
				42,
				.03,
				-8
			],
			yaw: .62,
			size: .75,
			color: "#7a827d"
		},
		{
			id: "outer-cay",
			point: [
				64,
				.03,
				-26
			],
			yaw: -.28,
			size: .8,
			color: "#9c785b"
		}
	];
	const built = boats.map(({ id, point, yaw, size, color }) => {
		const boat = makeBoat(kit, color);
		boat.name = `harbor-boat-${id}`;
		boat.position.set(point[0], point[1], point[2]);
		boat.rotation.y = yaw;
		boat.scale.setScalar(size);
		scene.add(boat);
		return boat;
	});
	return {
		boats: built,
		vessel: built[boats.findIndex((boat) => boat.id === BOAT_VESSEL_ID)] ?? built[0],
		bases: boats.map((boat) => boat.point)
	};
}
var HARBOR_STRUCTURES = [
	{
		footprint: [
			5.15,
			8.25,
			-23.1,
			-20
		],
		height: 10.4
	},
	{
		footprint: [
			-10.4,
			-5.6,
			-22.9,
			-19.1
		],
		height: 4.3
	},
	{
		footprint: [
			-6.2,
			.2,
			15.2,
			19.8
		],
		height: 5.2
	},
	{
		footprint: [
			4,
			8,
			17.1,
			21.3
		],
		height: 3.9
	},
	{
		footprint: [
			-26.9,
			-22.5,
			-5.3,
			-.7
		],
		height: 3.9
	}
];
TERRACE_HOUSES.map((house) => ({
	footprint: house.footprint,
	height: (house.base ?? VILLAGE.upperY) - VILLAGE.upperY + house.height
}));
var WORLD_OBSTACLES = [
	...HARBOR_STRUCTURES.map((structure) => structure.footprint),
	...TERRACE_HOUSES.map((house) => house.footprint),
	...TERRACE_TRUNKS,
	...HILL_OBSTACLES,
	[
		-30,
		VILLAGE.ramp[0],
		22.74,
		23.29
	],
	[
		-30,
		-25,
		-21,
		-12.32
	],
	[
		-30,
		-25,
		-8.38,
		22
	],
	[
		1.7,
		4.3,
		14.16,
		14.44
	],
	[
		-8.8,
		-7.67,
		-2.39,
		-1.73
	],
	[
		13.02,
		14.15,
		2.8,
		3.45
	],
	[
		-.78,
		.35,
		11.87,
		12.53
	],
	[
		-7.7,
		-6.56,
		15.57,
		16.23
	],
	[
		-21.8,
		-20.66,
		2.27,
		2.93
	],
	[
		.24,
		.96,
		1.87,
		2.55
	],
	[
		11.54,
		12.26,
		2.59,
		3.31
	],
	[
		-16.36,
		-15.64,
		8.74,
		9.46
	],
	[
		-1.29,
		-1.11,
		2.27,
		2.43
	],
	[
		8.91,
		9.09,
		-2.43,
		-2.27
	],
	[
		16.32,
		16.48,
		2.61,
		2.77
	],
	[
		-13.48,
		-13.32,
		-14.98,
		-14.82
	],
	[
		-10.58,
		-10.42,
		13.32,
		13.48
	],
	[
		-21.71,
		-21.49,
		-11.11,
		-10.89
	],
	[
		-21.71,
		-21.49,
		-4.01,
		-3.79
	],
	[
		-21.71,
		-21.49,
		3.09,
		3.31
	]
];
function getFlightVolumes(world) {
	const volumes = [];
	const box = new T.Box3();
	world.traverse((object) => {
		if (object.name !== "harbor-tree" && object.name !== "harbor-house" && object.name !== "harbor-tower") return;
		box.setFromObject(object);
		const { min, max } = box;
		volumes.push({
			footprint: [
				min.x,
				max.x,
				min.z,
				max.z
			],
			base: min.y,
			height: max.y - min.y
		});
	});
	return volumes;
}
for (const [x, z] of [...pierPosts(PIER), ...pierPosts(LANDING)]) WORLD_OBSTACLES.push([
	x - .18,
	x + .18,
	z - .18,
	z + .18
]);
function addEastDockFittings(group, kit) {
	for (const x of [
		13,
		16,
		19
	]) {
		group.add(kit.cylinder([
			x,
			DECK + .3,
			16.62
		], [
			.11,
			.13,
			.6,
			8
		], ["#6d6154"]));
		group.add(kit.box([
			x,
			DECK + .6,
			16.62
		], [
			.26,
			.07,
			.26
		], ["#8a7a68"]));
	}
	group.add(kit.box([
		16,
		DECK + .04,
		16.34
	], [
		11,
		.12,
		.22
	], TIMBER));
}
function collectTreeTops(world) {
	const box = new T.Box3();
	const tops = [];
	world.traverse((object) => {
		if (object.name !== "harbor-tree") return;
		box.setFromObject(object);
		const inset = .14;
		const centerX = (box.min.x + box.max.x) / 2;
		const centerZ = (box.min.z + box.max.z) / 2;
		const height = box.max.y - DECK - groundElevation(centerX, centerZ);
		if (height < .8 || box.max.x - box.min.x < inset * 3) return;
		tops.push({
			footprint: [
				box.min.x + inset,
				box.max.x - inset,
				box.min.z + inset,
				box.max.z - inset
			],
			height,
			supportOnly: true
		});
	});
	return tops;
}
function addWorld(scene, kit = createModelKit()) {
	const staticWorld = new T.Group();
	addShore(staticWorld, kit);
	addEastDockFittings(staticWorld, kit);
	addPier(staticWorld, kit, PIER);
	addPier(staticWorld, kit, LANDING);
	addVillage(staticWorld, kit);
	addDockProps(staticWorld, kit);
	addPowerLines(staticWorld, kit);
	addWestCoast(staticWorld, kit);
	addHarborHill(staticWorld, kit);
	const tower = makeLighthouse(kit);
	tower.name = "harbor-tower";
	tower.position.set(6.7, DECK, -21.55);
	staticWorld.add(tower);
	for (const [x, z, color] of [
		[
			17,
			-6,
			"#c97959"
		],
		[
			23,
			-12,
			"#d1ab63"
		],
		[
			14,
			9,
			"#bf7154"
		],
		[
			30,
			-3,
			"#cfac62"
		]
	]) addBuoy(staticWorld, kit, [
		x,
		.18,
		z
	], color);
	addHarborLandmarks(staticWorld, kit);
	const flightVolumes = getFlightVolumes(staticWorld);
	const treeTops = collectTreeTops(staticWorld);
	batchBlocks(staticWorld);
	scene.add(staticWorld);
	const { boats, vessel, bases } = addBoats(scene, kit);
	const animate = (elapsed, bank) => {
		boats.forEach((boat, index) => {
			if (boat !== vessel) {
				const base = bases[index];
				const radius = 3.2 + index * .8;
				const angle = elapsed * .16 + index * 1.7;
				boat.position.x = base[0] + Math.cos(angle) * radius;
				boat.position.z = base[2] + Math.sin(angle) * radius;
				boat.rotation.y = -angle + Math.PI * .5;
			}
			boat.position.y = .033 + Math.sin(elapsed * 1.41 + index) * .043;
			boat.rotation.z = Math.sin(elapsed * .96 + index * .71) * .025;
			boat.rotation.x = Math.sin(elapsed * .88 + index * .65) * .045 + (boat === vessel ? bank : 0);
		});
	};
	return {
		animate,
		vessel,
		flightVolumes,
		treeTops
	};
}
// src/pixel_harbor/eval_station_model.ts
var BOOTH_X = HARBOR_DESTINATIONS.eval.x;
var BOOTH_Z = 17.35;
var HALF_WIDTH = 1.8;
var CANVAS_WIDTH = 112;
var CANVAS_HEIGHT = 40;
var POSTS = [-1, 1];
BOOTH_X - HALF_WIDTH, BOOTH_X + HALF_WIDTH;
function makeStationSign() {
	const { canvas, context } = makeCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	context.fillStyle = "#755440";
	context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	context.fillStyle = "#ac875e";
	context.fillRect(3, 3, 106, 34);
	context.fillStyle = "#fff0c9";
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.font = "bold 22px \"Microsoft YaHei\", \"PingFang SC\", sans-serif";
	context.fillText(evalStation.title, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
	const mesh = new T.Mesh(new T.PlaneGeometry(1.72, .59), new T.MeshBasicMaterial({ map: pixelTexture(canvas) }));
	mesh.position.set(0, 2, -1.52);
	mesh.rotation.y = Math.PI;
	return markHarborGlow(mesh, "station");
}
function addEvalStation(scene, kit) {
	const booth = new T.Group();
	const { box } = kit;
	booth.add(box([
		0,
		.12,
		0
	], [
		3.6,
		.24,
		2.88
	], ["#9a7153", "wood"]));
	booth.add(box([
		0,
		1.1,
		1.23
	], [
		3.34,
		1.8,
		.2
	], ["#bdad88", "wood"]));
	booth.add(box([
		0,
		.71,
		-1.12
	], [
		3.38,
		.87,
		.58
	], ["#9c7457", "wood"]));
	booth.add(box([
		0,
		1.17,
		-1.15
	], [
		3.52,
		.12,
		.64
	], ["#cda77b", "wood"]));
	for (const side of POSTS) {
		for (const end of POSTS) booth.add(box([
			1.56 * side,
			1.2,
			1.17 * end
		], [
			.17,
			2.4,
			.17
		], ["#765848", "wood"]));
		const awning = box([
			side * .82,
			2.42,
			0
		], [
			1.9,
			.16,
			3.05
		], ["#6b8279", "roof"]);
		awning.rotation.z = -.22 * side;
		booth.add(awning);
	}
	booth.add(box([
		-.84,
		1.25,
		-1.16
	], [
		.44,
		.09,
		.29
	], ["#d8c8a2"]));
	booth.add(makeStationSign());
	booth.position.set(BOOTH_X, DECK, BOOTH_Z);
	scene.add(booth);
}
// src/pixel_harbor/harbor_forest_config.ts
var FOREST = {
	clusters: [
		{
			x: -15.75,
			z: -24.1,
			seed: 311,
			total: 7,
			radius: .76
		},
		{
			x: -10,
			z: -20.45,
			seed: 591,
			total: 6,
			radius: 1.1
		},
		{
			x: -15.4,
			z: 25.2,
			seed: 427,
			total: 6,
			radius: 1.18
		}
	],
	treeFoot: .18,
	trunk: "#765743",
	lower: "#58766a",
	upper: "#728d72",
	shadowColor: "#272f3c",
	shadowDay: .12,
	shadowDusk: .25,
	shadowLength: 1,
	shadowLong: 3.65,
	shadowWidth: .42
};
// src/pixel_harbor/harbor_forest.ts
var ACTIVE_INSTANCES_PER_TREE = 4;
function growForest() {
	let available = Math.min(VILLAGE.maxNewTrees, Math.floor(VILLAGE.maxNewInstances / ACTIVE_INSTANCES_PER_TREE));
	return FOREST.clusters.map((cluster) => {
		const random = seededRandom(cluster.seed);
		const count = Math.min(cluster.total, available);
		available -= count;
		const trees = Array.from({ length: count }, (_, index) => {
			const angle = index * Math.PI * 2 / count;
			const spread = cluster.radius * (.65 + random() * .35);
			const x = cluster.x + Math.cos(angle) * spread;
			const z = cluster.z + Math.sin(angle) * spread;
			return {
				x,
				z,
				y: DECK + groundElevation(x, z),
				size: .74 + random() * .34
			};
		}).filter(({ x, z }) => Math.hypot(x - KEEPER.house.x, z - KEEPER.house.z) > KEEPER.clearRadius);
		return {
			...cluster,
			trees
		};
	});
}
var clusters = growForest();
clusters.flatMap((cluster) => cluster.trees.map(({ x, z, size }) => {
	const radius = FOREST.treeFoot * size;
	return [
		x - radius,
		x + radius,
		z - radius,
		z + radius
	];
}));
var FOREST_CANOPY = {
	radius: .62,
	base: 1.42,
	top: 2.88
};
clusters.flatMap((cluster) => cluster.trees.flatMap(({ x, y, z, size }) => {
	const trunk = FOREST.treeFoot * size, canopy = FOREST_CANOPY.radius * size;
	return [{
		footprint: [
			x - trunk,
			x + trunk,
			z - trunk,
			z + trunk
		],
		base: y,
		height: FOREST_CANOPY.base * size
	}, {
		footprint: [
			x - canopy,
			x + canopy,
			z - canopy,
			z + canopy
		],
		base: y + FOREST_CANOPY.base * size,
		height: (FOREST_CANOPY.top - FOREST_CANOPY.base) * size
	}];
}));
function treeBatch(kit, trees, spec) {
	const prototype = kit.box([
		0,
		0,
		0
	], spec.size, [spec.color]);
	const mesh = new T.InstancedMesh(prototype.geometry, prototype.material, trees.length);
	const node = new T.Object3D();
	trees.forEach((tree, index) => {
		node.position.set(tree.x, tree.y + spec.y * tree.size, tree.z);
		node.scale.set(...spec.size.map((side) => side * tree.size));
		node.updateMatrix();
		mesh.setMatrixAt(index, node.matrix);
	});
	return mesh;
}
function growChunk(group, kit, trees, detailed) {
	group.add(treeBatch(kit, trees, {
		y: .83,
		size: [
			.23,
			1.66,
			.24
		],
		color: FOREST.trunk
	}));
	group.add(treeBatch(kit, trees, {
		y: 1.96,
		size: [
			1.23,
			1.07,
			1.15
		],
		color: FOREST.lower
	}));
	if (detailed) group.add(treeBatch(kit, trees, {
		y: 2.62,
		size: [
			.79,
			.51,
			.72
		],
		color: FOREST.upper
	}));
}
function addTreeShadows(scene) {
	const trees = clusters.flatMap((cluster) => cluster.trees);
	const material = new T.MeshBasicMaterial({
		color: FOREST.shadowColor,
		transparent: true,
		depthWrite: false
	});
	const shadows = new T.InstancedMesh(new T.PlaneGeometry(1, 1), material, trees.length);
	shadows.frustumCulled = false;
	scene.add(shadows);
	const node = new T.Object3D();
	const [sunX, , sunZ] = SUNSET.direction;
	let previous = -1;
	return (dusk, enabled) => {
		shadows.visible = enabled;
		if (!enabled || dusk === previous) return;
		previous = dusk;
		const length = T.MathUtils.lerp(FOREST.shadowLength, FOREST.shadowLong, dusk);
		material.opacity = T.MathUtils.lerp(FOREST.shadowDay, FOREST.shadowDusk, dusk);
		node.rotation.set(-Math.PI / 2, 0, Math.atan2(-sunZ, sunX));
		trees.forEach(({ x, y, z, size }, index) => {
			const stretch = length * size;
			node.position.set(x - sunX * stretch / 2, y + .018, z - sunZ * stretch / 2);
			node.scale.set(stretch, FOREST.shadowWidth * size, 1);
			node.updateMatrix();
			shadows.setMatrixAt(index, node.matrix);
		});
		shadows.instanceMatrix.needsUpdate = true;
	};
}
function addHarborForest(scene, kit) {
	const shadows = addTreeShadows(scene);
	const chunks = clusters.map((cluster) => {
		const near = new T.Group();
		const far = new T.Group();
		growChunk(near, kit, cluster.trees, true);
		growChunk(far, kit, cluster.trees, false);
		scene.add(near, far);
		return {
			x: cluster.x,
			z: cluster.z,
			near,
			far
		};
	});
	return (position, dusk, effects) => {
		shadows(dusk, effects.shadows);
		for (const chunk of chunks) {
			const distance = Math.hypot(position.x - chunk.x, position.z - chunk.z);
			chunk.near.visible = distance < VILLAGE.forestLodDistance;
			chunk.far.visible = effects.trees && !chunk.near.visible && distance < VILLAGE.forestLimitDistance;
		}
	};
}
// src/harbor_expansion/harbor-island-config.ts
var ISLANDS = {
	count: 8,
	sides: 13,
	detailedSides: 28,
	seed: 6322,
	positions: [
		[
			43,
			-18,
			8,
			4
		],
		[
			96,
			-6,
			17,
			10
		],
		[
			119,
			21,
			20,
			12
		],
		[
			58,
			47,
			13,
			6
		],
		[
			11,
			84,
			17,
			8
		],
		[
			-81,
			41,
			23,
			14
		],
		[
			-94,
			-30,
			19,
			11
		],
		[
			-5,
			-97,
			18,
			10
		]
	],
	routes: [
		[
			57,
			-34,
			68,
			-27
		],
		[
			64,
			17,
			81,
			23
		],
		[
			52,
			-61,
			79,
			-66
		],
		[
			40,
			57,
			51,
			62
		]
	]
};
// src/harbor_expansion/harbor-islands.ts
function islandShape(kit, island, index, detail) {
	const [x, z, width, height] = island;
	const points = detail ? ISLANDS.detailedSides : ISLANDS.sides;
	const random = seededRandom(ISLANDS.seed + index);
	const irregular = Array.from({ length: points }, () => .72 + random() * .36);
	const layers = [
		[
			-.17,
			1,
			"#b1ae9d"
		],
		[
			.07,
			.92,
			"#a79783"
		],
		[
			.29,
			.78,
			"#8d8d78"
		],
		[
			.61,
			.54,
			"#758e7d"
		],
		[
			.87,
			.23,
			"#677e73"
		]
	];
	const vertices = layers.flatMap(([lift, scale], ring) => irregular.flatMap((radius, i) => {
		const angle = i / points * Math.PI * 2;
		const ridge = .8 + .2 * Math.cos(angle * 2 + index) + .1 * Math.sin(angle * 3);
		return [
			x + Math.cos(angle) * radius * width * scale + ring * .09 * width,
			lift * height * ridge,
			z + Math.sin(angle) * radius * width * scale * .65
		];
	}));
	const indexList = [], mesh = new T.BufferGeometry();
	for (let ring = 1; ring < layers.length; ring++) {
		const start = indexList.length;
		for (let i = 0; i < points; i++) {
			const n = (i + 1) % points, a = (ring - 1) * points + i, b = (ring - 1) * points + n, c = ring * points + i, d = ring * points + n;
			indexList.push(a, c, b, b, c, d);
		}
		if (ring === layers.length - 1) {
			const center = vertices.length / 3;
			vertices.push(x + width * .25, height, z);
			for (let i = 0; i < points; i++) indexList.push(ring * points + i, center, ring * points + (i + 1) % points);
		}
		mesh.addGroup(start, indexList.length - start, ring - 1);
	}
	mesh.setAttribute("position", new T.Float32BufferAttribute(vertices, 3));
	mesh.setIndex(indexList);
	mesh.computeVertexNormals();
	return new T.Mesh(mesh, layers.slice(0, -1).map(([, , color]) => kit.surface(color)));
}
function makeIsland(kit, island, index, detail = false) {
	const group = new T.Group();
	group.add(islandShape(kit, island, index, detail));
	const [x, z, w, h] = island;
	if (detail || index < 4) {
		const cottage = makeHouse(kit, {
			wall: "#d9b085",
			roof: "#826059",
			trim: "#e9d6bc"
		}, [
			2.3,
			1.5,
			1.9
		]);
		cottage.position.set(x + w * .58, h * .3, z + 1.6);
		group.add(cottage);
		const base = kit.cylinder([
			x + w * .62,
			h * .24,
			z - 1.25
		], [
			.35,
			.54,
			2.4,
			7
		], ["#e4d3b9"]);
		const roof = kit.cylinder([
			x + w * .62,
			h * .24 + 1.1,
			z - 1.25
		], [
			.13,
			.62,
			.46,
			7
		], ["#aa6557"]);
		group.add(base, roof, kit.box([
			x + w * .65,
			.15,
			z + 4
		], [
			2.7,
			.28,
			1.2
		], ["#92765f"]));
		const leaves = kit.box([
			0,
			0,
			0
		], [
			1,
			1,
			1
		], ["#6d866f"]);
		const trees = new T.InstancedMesh(leaves.geometry, leaves.material, detail ? 14 : 5);
		const stem = new T.Object3D();
		for (let i = 0; i < trees.count; i++) {
			stem.position.set(x + w * .31 + Math.cos(i * 2.4) * w * .33, h * .51 + Math.sin(i * .8) * h * .1, z + Math.sin(i * 2.4) * w * .29);
			stem.scale.set(.88, 1.38, .89);
			stem.updateMatrix();
			trees.setMatrixAt(i, stem.matrix);
		}
		group.add(trees);
	}
	return group;
}
function addHarborIslands(scene, kit) {
	const islands = ISLANDS.positions.slice(0, ISLANDS.count).map((site, index) => {
		const group = makeIsland(kit, site, index);
		scene.add(group);
		return {
			id: `island-${index}`,
			object: group,
			position: new T.Vector3(site[0], site[3] * .68, site[1])
		};
	});
	const ships = ISLANDS.routes.map((route, index) => {
		const ship = makeBoat(kit, [
			"#697e8b",
			"#b27e63",
			"#738b78",
			"#a68c5e"
		][index]);
		ship.scale.setScalar(.86);
		const lamp = markHarborGlow(kit.box([
			.36,
			1.8,
			0
		], [
			.15,
			.16,
			.14
		], ["#f4d397"]), "street");
		lamp.userData.movingGlow = true;
		ship.add(lamp);
		scene.add(ship);
		return {
			id: `distant-ship-${index}`,
			object: ship,
			route
		};
	});
	return {
		islands,
		ships,
		update(time, state) {
			ships.forEach(({ object }, i) => {
				const [cx, cz, width] = ISLANDS.positions[i % ISLANDS.positions.length];
				const radius = width * .9 + 2.6;
				const angle = time * .16 + i * 1.3;
				object.position.set(cx + Math.cos(angle) * radius, .04 + Math.sin(time + i) * .03, cz + Math.sin(angle) * radius);
				object.rotation.y = -angle + Math.PI * .5;
				object.visible = i === 0 || state.weather < .45 && state.tier < 3;
			});
			islands.forEach(({ object }, i) => {
				object.visible = state.tier < 3 || i % 2 === 0;
			});
		}
	};
}
// src/harbor_expansion/harbor-map-config.ts
var MAP = {
	west: -82,
	east: 106,
	north: -78,
	south: 68,
	pixels: 900,
	near: .5,
	height: 52
};
// bake/bake.ts
var RES = 1;
var RAY_TOP = 80;
var OUT = resolve("public/terrain.json");
function buildScene() {
	const scene = new T.Scene();
	const kit = createModelKit();
	addWorld(scene, kit);
	addEvalStation(scene, kit);
	addHarborForest(scene, kit);
	addHarborIslands(scene, kit);
	scene.updateMatrixWorld(true);
	return scene;
}
function main() {
	const started = Date.now();
	const scene = buildScene();
	const { west, east, north, south } = MAP;
	const cols = Math.ceil((east - west) / RES);
	const rows = Math.ceil((south - north) / RES);
	const raycaster = new T.Raycaster();
	const origin = new T.Vector3();
	const down = new T.Vector3(0, -1, 0);
	const heights = new Array(cols * rows).fill(-1);
	let land = 0;
	for (let row = 0; row < rows; row++) {
		const z = north + (row + .5) * RES;
		for (let col = 0; col < cols; col++) {
			const x = west + (col + .5) * RES;
			origin.set(x, RAY_TOP, z);
			raycaster.set(origin, down);
			raycaster.far = 100;
			const hit = raycaster.intersectObjects(scene.children, true)[0];
			if (hit) {
				heights[row * cols + col] = Math.round(hit.point.y * 100) / 100;
				land++;
			}
		}
		if (row % 20 === 0) process.stdout.write(`  扫描中 ${row}/${rows}\r`);
	}
	const payload = {
		bounds: [
			west,
			east,
			north,
			south
		],
		res: RES,
		cols,
		rows,
		heights
	};
	mkdirSync(dirname(OUT), { recursive: true });
	writeFileSync(OUT, JSON.stringify(payload));
	const size = (JSON.stringify(payload).length / 1024).toFixed(0);
	console.log(`\n完成：${cols}×${rows} 格，命中 ${land} 格陆地，输出 ${size} KB，耗时 ${((Date.now() - started) / 1e3).toFixed(1)} s`);
}
main();
export {};
