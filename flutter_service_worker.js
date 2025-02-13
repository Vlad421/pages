'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2f98c201c888d754f13b2bb31cca3a38",
"assets/AssetManifest.bin.json": "197be9cf5f0d7ecaf9fc70d85becb4a2",
"assets/AssetManifest.json": "68cd0ee14175fd815c90968c58e0f8fc",
"assets/assets/images/flags/ad.png": "82bdd3ec2a2e7540d21afef7d2a88379",
"assets/assets/images/flags/ae.png": "c362a48bb3f3fef78b6dddf4933c7288",
"assets/assets/images/flags/af.png": "68f49f554498944e8062d615273ed161",
"assets/assets/images/flags/ag.png": "8c40ec82cafe770f16ec4db116f19866",
"assets/assets/images/flags/ai.png": "4c7af861871e1ea02bffd30a9d49c27e",
"assets/assets/images/flags/al.png": "aa68ba689852dad3665f919209858bab",
"assets/assets/images/flags/am.png": "de91f7e18abcbbec217c1b8a3e2cf97f",
"assets/assets/images/flags/ao.png": "a0dec8512a39ad0a259916e9f4eb47db",
"assets/assets/images/flags/aq.png": "833b3b3cb87dd64721fb510ef8ab3b20",
"assets/assets/images/flags/ar.png": "56142c4003dac9d683ac09e816eecbe5",
"assets/assets/images/flags/as.png": "13d646f7f4c0cafd85082ce6178a177c",
"assets/assets/images/flags/at.png": "0da862c3c5976dbec3a85f5e268d0443",
"assets/assets/images/flags/au.png": "789d91cedd2ed1c71e0ea0f3d06ffd2f",
"assets/assets/images/flags/aw.png": "902743953ea343f2094c787a7a8cb9ce",
"assets/assets/images/flags/ax.png": "996baf8c14cd086b9031dfecd0f4b228",
"assets/assets/images/flags/az.png": "0660d7fdfd33eac7b92040662d6cb12e",
"assets/assets/images/flags/ba.png": "d61768b9420d669ab24f887b613cc753",
"assets/assets/images/flags/bb.png": "9459fda5e69908af05151fdb0a24f512",
"assets/assets/images/flags/bd.png": "9822db5d3cc37f75da60c2c98552142a",
"assets/assets/images/flags/be.png": "c8d1c850f9b9c2cb7e523af97616141f",
"assets/assets/images/flags/bf.png": "a3eb175906c3c8d96410393a01f898af",
"assets/assets/images/flags/bg.png": "371ccf8ab5dd22e290ebb4ec81e42523",
"assets/assets/images/flags/bh.png": "50d0f1e0a69f9c2dc9373ced30a70b13",
"assets/assets/images/flags/bi.png": "e54c6f0448906b07d391fb5bb7764310",
"assets/assets/images/flags/bj.png": "c2ccff32ba57dc41b7808e4c9f3b3007",
"assets/assets/images/flags/bl.png": "c7bfe3f4305c0b3b5b5d51e63db5829a",
"assets/assets/images/flags/bm.png": "ede1179f02e6800e87318e3620eb4e72",
"assets/assets/images/flags/bn.png": "490e32c127ab5c89a8facd1903fe381a",
"assets/assets/images/flags/bo.png": "48e03dc639c5478941d69bb3af317894",
"assets/assets/images/flags/bq.png": "34d771bd3a8b8a3d8884aea79a0fb7ef",
"assets/assets/images/flags/br.png": "59c1443355b657251411d14226c7694f",
"assets/assets/images/flags/bs.png": "ed1473e1a0e17655a79432f092eecbdb",
"assets/assets/images/flags/bt.png": "e99f4661dbab52f1d2ef2141cfe151c9",
"assets/assets/images/flags/bv.png": "b345378357262a331f2254175392b653",
"assets/assets/images/flags/bw.png": "a73e8623ec2cd2788a53878134b0c767",
"assets/assets/images/flags/by.png": "5d86fa624fa212997d76e6aaf53400fb",
"assets/assets/images/flags/bz.png": "070caf763390b08f42c8bb2407dc0848",
"assets/assets/images/flags/ca.png": "0a867d3850f151347bdcf48c254d30a5",
"assets/assets/images/flags/cc.png": "7925c4ec4de18ab59574e1c11d644ed1",
"assets/assets/images/flags/cd.png": "94d596621872c0bc551b85a29e48120b",
"assets/assets/images/flags/cf.png": "126ade05bc2dbfbb7e67af315529b816",
"assets/assets/images/flags/cg.png": "71bb1aed32a80520a3cd0cbca27aa30e",
"assets/assets/images/flags/ch.png": "aa5e8c0bac32072689f5eb9d6b27371e",
"assets/assets/images/flags/ci.png": "c348127bc73dfbcf5783973ad10eebfe",
"assets/assets/images/flags/ck.png": "4b4b21f469a4f2e3f7a5ea67e78e557a",
"assets/assets/images/flags/cl.png": "abd70b12a4478de3d941ed273cb75f16",
"assets/assets/images/flags/cm.png": "b761835f6a7fa44f2d29488640397986",
"assets/assets/images/flags/cn.png": "a53d3c460d9a31113699d1900b954911",
"assets/assets/images/flags/co.png": "20d66a8b1fb573ef0665d3fd1762b943",
"assets/assets/images/flags/cr.png": "49411cb9b30325719978d93d0311cfc6",
"assets/assets/images/flags/cu.png": "e3e37292dcca8710296060ff19133d1e",
"assets/assets/images/flags/cv.png": "214116ac2ab9e9026ca052ad55b10422",
"assets/assets/images/flags/cw.png": "dcd9c0634d406b3917e4953af3056187",
"assets/assets/images/flags/cx.png": "c456baa4e2ce03a348c52e2b755f7ea0",
"assets/assets/images/flags/cy.png": "3d6b6794f71c5bce89fbc1e99b00b634",
"assets/assets/images/flags/cz.png": "5003d5df0697dc5f8b50b97f53eb7fb6",
"assets/assets/images/flags/de.png": "9a73305fe90dfa1cbd81240c5b2d809c",
"assets/assets/images/flags/dj.png": "74f26257c3e9b3b1dda010720f89b59c",
"assets/assets/images/flags/dk.png": "93a237148f6c204ba0f329b7196bf41d",
"assets/assets/images/flags/dm.png": "a7e9ef9850faa79b25c584fe6d8d684d",
"assets/assets/images/flags/do.png": "12fad2c03c77d376ae4de8483c7c1c54",
"assets/assets/images/flags/dz.png": "fbfb9893245e7f6b3ce736f0d9f81ad7",
"assets/assets/images/flags/ec.png": "0583d43ae3d7c8c2e0a1084391269fdf",
"assets/assets/images/flags/ee.png": "afed28e428552c0cc969f2e648aff55e",
"assets/assets/images/flags/eg.png": "29cef1fda84469b2c719ab5d3e2b7c55",
"assets/assets/images/flags/eh.png": "cf79ce7d8a209d58a134c912b0f2eb60",
"assets/assets/images/flags/er.png": "3f23c7a1b196ad47ff87e9657f72b434",
"assets/assets/images/flags/es.png": "2cf6535a8049e37e53a4c0d55978ce7b",
"assets/assets/images/flags/et.png": "0444018babd0c22c85086bce7681ddce",
"assets/assets/images/flags/fi.png": "4c47c43fb8f0ab246658679421530851",
"assets/assets/images/flags/fj.png": "f24afe177bed2fa4b3d6d9afcb1a32f4",
"assets/assets/images/flags/fk.png": "94bb03bb69ca504be53a917de6b325d9",
"assets/assets/images/flags/fm.png": "30834ad28f2a5681c6fe2281cebedc0f",
"assets/assets/images/flags/fo.png": "ee6b052d7435708fb6e28086139916a5",
"assets/assets/images/flags/fr.png": "b5eb05dbde98d34d2a070f6349955156",
"assets/assets/images/flags/ga.png": "4f6076bb952d65122a8678aa8667ae59",
"assets/assets/images/flags/gb-eng.png": "9f9980bac5a8cfe8f6ec2830e887759e",
"assets/assets/images/flags/gb-nir.png": "11e4dd372d076b3da2fd3e47883912b7",
"assets/assets/images/flags/gb-sct.png": "d4175b2e00a9f0e220c9fe17759de151",
"assets/assets/images/flags/gb-wls.png": "00456c59bc197ae123464824dff0c0c4",
"assets/assets/images/flags/gb.png": "5f94d206a4956ec58c461b2520f12887",
"assets/assets/images/flags/gd.png": "cb190d41af8ecee9204b75eae0c6fa48",
"assets/assets/images/flags/ge.png": "eb96e6150971acd564f3d5bf000bef19",
"assets/assets/images/flags/gf.png": "c473ee215ee65ac069cc1091f1eefbca",
"assets/assets/images/flags/gg.png": "ec18d3a3edbc8204027e5853a821a299",
"assets/assets/images/flags/gh.png": "ea91b7fae037f880e17e95724b92a705",
"assets/assets/images/flags/gi.png": "18136ce64ef55db5e528665a83fa7e2c",
"assets/assets/images/flags/gl.png": "74eb1cfbbfdb6afcdfb665f45cb74324",
"assets/assets/images/flags/gm.png": "c98c0f73b42772c400899a3c8daa9c48",
"assets/assets/images/flags/gn.png": "b36b8a91e876b1d9b11d020c81a2b806",
"assets/assets/images/flags/gp.png": "531c5797b328b784e0e4be4ca25535f3",
"assets/assets/images/flags/gq.png": "50fae53d0c4ab0565a0b3b7a7b30bbbc",
"assets/assets/images/flags/gr.png": "aca4f16e46a7057a8f8eea1609a38932",
"assets/assets/images/flags/gs.png": "1177f35a6a2e75b9f6ff446b68e8d0d6",
"assets/assets/images/flags/gt.png": "176a03c8e61994bd982f5fcae451eeb4",
"assets/assets/images/flags/gu.png": "49da1bcaa7b99c55ca95bfdf5ed2aa23",
"assets/assets/images/flags/gw.png": "590a98fc4ec95fc57638bb8d2f1673d4",
"assets/assets/images/flags/gy.png": "a39ae0357e9716d6304a0e4084ae69bd",
"assets/assets/images/flags/hk.png": "0d1f048e068feddb0c0145475431cc40",
"assets/assets/images/flags/hm.png": "e7fb35d1b5a5b0c34f385059f889796f",
"assets/assets/images/flags/hn.png": "f0260c0fe91b5f14fd0cfec805842d35",
"assets/assets/images/flags/hr.png": "20f4ee2a7889932d77e5b6e0e2aadc42",
"assets/assets/images/flags/ht.png": "80fc2f36c59412125d454e054a3e4da6",
"assets/assets/images/flags/hu.png": "dc14b69c6933e8f2beb73eea8c8d3f83",
"assets/assets/images/flags/id.png": "8564c14457cf4507c99ec0dee8b8d245",
"assets/assets/images/flags/ie.png": "aa473202f5325dfba0eaf6e63c297400",
"assets/assets/images/flags/il.png": "0bcfb7cbb81044443d17dd2f38af526f",
"assets/assets/images/flags/im.png": "a618a14382bea98ef7378d1678a2846c",
"assets/assets/images/flags/in.png": "e203ca253e6ba376792431e189272f38",
"assets/assets/images/flags/io.png": "d5ef91fd5c1a0f4fcf05b5b1c0cd56a6",
"assets/assets/images/flags/iq.png": "e570ea3d3dbf1e031a7644d8bab05809",
"assets/assets/images/flags/ir.png": "fd75b2c2702d3ee9460d8f5cb1a0379d",
"assets/assets/images/flags/is.png": "d714ec97303b3f048b962a3309d31cee",
"assets/assets/images/flags/it.png": "cbe2033073d45af5754dedd748748fbb",
"assets/assets/images/flags/je.png": "a592d9edb5118fa2b46162ddcfbc07be",
"assets/assets/images/flags/jm.png": "375fba96c6afba484d5485089ae7a1a9",
"assets/assets/images/flags/jo.png": "5bb6e81a1538991aad97ad530371ad80",
"assets/assets/images/flags/jp.png": "eb3f13bf501370e330dde8751578a0c5",
"assets/assets/images/flags/ke.png": "2a359d13093a99fada5696423fcc628f",
"assets/assets/images/flags/kg.png": "4235ad0306ea26efe43f91450560cfde",
"assets/assets/images/flags/kh.png": "f20f81a6f5b064f1db6a81a9ff554aca",
"assets/assets/images/flags/ki.png": "f3dcdd4a6afe8503b4c3c3d327435cfc",
"assets/assets/images/flags/km.png": "1948e28c3019b323295ea621d72122dd",
"assets/assets/images/flags/kn.png": "2589e80455e396b8af490f2147a8a50f",
"assets/assets/images/flags/kp.png": "5e4c2a092e699d2647995653d4337c8e",
"assets/assets/images/flags/kr.png": "ef43a3484c511e7289c6f3f41b2e08fa",
"assets/assets/images/flags/kw.png": "2b270487d2ba9ed450148294a0d05205",
"assets/assets/images/flags/ky.png": "06e1ac58b71af8a76983f3de69a08e20",
"assets/assets/images/flags/kz.png": "b86816c7fcdcc8c162dddb5dab08e963",
"assets/assets/images/flags/la.png": "5ee925aa2e0df08fc341ce482ebd48f2",
"assets/assets/images/flags/lb.png": "d5cee6fdc757b88b2d317a9bcee3537d",
"assets/assets/images/flags/lc.png": "a17e92522521dde045c04f22652dc408",
"assets/assets/images/flags/li.png": "beb79aaa518fe75e0a04b7176f4e02c7",
"assets/assets/images/flags/lk.png": "2f9a2ac3f394f3bc3923a15807e9d1e9",
"assets/assets/images/flags/lr.png": "645977a4f85d58801aa747af1c91daae",
"assets/assets/images/flags/ls.png": "8219768f20e575edcac92d0c30ce7dfe",
"assets/assets/images/flags/lt.png": "66cfef6ba8fa4b57229cb270cab8e829",
"assets/assets/images/flags/lu.png": "bebe3a048414dba51e5c73cefaf04586",
"assets/assets/images/flags/lv.png": "c3338fc6ce4d1d45d8cc0faaa3c15244",
"assets/assets/images/flags/ly.png": "8c690f412b6338e5d2685c9d0731cd61",
"assets/assets/images/flags/ma.png": "b6cc4ffe7733e150b655f31c7fe1eaf4",
"assets/assets/images/flags/mc.png": "7a0527d5dde3fe27b0369f32f898d2a1",
"assets/assets/images/flags/md.png": "80d85acfa6a5663aa076012f7a207249",
"assets/assets/images/flags/me.png": "4d2c1d33d3d7c71ef8d792930244a786",
"assets/assets/images/flags/mf.png": "b5eb05dbde98d34d2a070f6349955156",
"assets/assets/images/flags/mg.png": "24bf6b1eb9737dc683a26082cc2f1dbc",
"assets/assets/images/flags/mh.png": "94782b82d5c64b1d115ceb81b2e77f27",
"assets/assets/images/flags/mk.png": "d628f7b8b7361d4fb439d715f140b945",
"assets/assets/images/flags/ml.png": "138003509b46c2026801e90c2fbc42fc",
"assets/assets/images/flags/mm.png": "0d5c42cc4262e91d9bac33f4e40f8de7",
"assets/assets/images/flags/mn.png": "6a2dcefe75418f07501a5d532cbab6da",
"assets/assets/images/flags/mo.png": "e9b97e2ebecc6ee5fd4d4456296a24be",
"assets/assets/images/flags/mp.png": "48c64e10977b124242706a9a95894eb4",
"assets/assets/images/flags/mq.png": "5511c470914f2cf9fbb4d530316d97b3",
"assets/assets/images/flags/mr.png": "699b5c379c9444d771291e7f1e7f0b16",
"assets/assets/images/flags/ms.png": "795fd52aef90dc06ae186c74fbd68afc",
"assets/assets/images/flags/mt.png": "f2930d9db402c3865b6ce4008663897b",
"assets/assets/images/flags/mu.png": "d6c6ea0131f6b6aba98549c7386f4fd7",
"assets/assets/images/flags/mv.png": "e9eec8ebd02da1c105981da549b8fe18",
"assets/assets/images/flags/mw.png": "bd2c536370ea8eca901fca7bde8125d3",
"assets/assets/images/flags/mx.png": "f49c253f6c679452bc129040ccd7106b",
"assets/assets/images/flags/my.png": "e788bc83af68c6bf5dd46061accbf66d",
"assets/assets/images/flags/mz.png": "f2fb77a3c77360205e3f8ca1bdf34382",
"assets/assets/images/flags/na.png": "126ce35c34e7eb5b79596725a0c2e59a",
"assets/assets/images/flags/nc.png": "36ed925f3a4a2cd7110d172a35e75efb",
"assets/assets/images/flags/ne.png": "abe5a8fb86fbf3f388a0b939a6a735aa",
"assets/assets/images/flags/nf.png": "bf2c6bdd3ac93ad9e497cfdb2cdef0dc",
"assets/assets/images/flags/ng.png": "ad6b7e1a7f92fefb97cbcb43f7ca9f91",
"assets/assets/images/flags/ni.png": "e79ffb148a0d50cc21107ef7b65ea833",
"assets/assets/images/flags/nl.png": "9b9e203f2a89656be804f5beafd3dc7a",
"assets/assets/images/flags/no.png": "b345378357262a331f2254175392b653",
"assets/assets/images/flags/np.png": "5ea7dee19a153c6a8b94160cbd14d95e",
"assets/assets/images/flags/nr.png": "de97b82e769fc38c22ddd0b0e53f924a",
"assets/assets/images/flags/nu.png": "e4dc59f0683a79b3000630f8bc8601f5",
"assets/assets/images/flags/nz.png": "e691dbc6ee3504dcd470b694fb0e5c15",
"assets/assets/images/flags/om.png": "7fc165e81bf45c1e0e14305c2c80a302",
"assets/assets/images/flags/pa.png": "9ce7698cf67e1d33c27f48c22ffbc35c",
"assets/assets/images/flags/pe.png": "6c75d1db7dbcdbdc076bbb1c9a3a3717",
"assets/assets/images/flags/pf.png": "4bead573d2e7833c0f5b72aeae7b4cf6",
"assets/assets/images/flags/pg.png": "55ac6c379945bf8ed038435a76618da0",
"assets/assets/images/flags/ph.png": "d99d30f15160f7fa062a83257bb943f4",
"assets/assets/images/flags/pk.png": "c392443661734652fe3c2c2f16625bea",
"assets/assets/images/flags/pl.png": "7b8a0298dac0a7f273d5e6b741f8038f",
"assets/assets/images/flags/pm.png": "9a9752853623f971b6f1c363fe102a80",
"assets/assets/images/flags/pn.png": "d335be48993293c17c540d44e6817ecf",
"assets/assets/images/flags/pr.png": "92f4cb8f1ec9bba729bf427244114be6",
"assets/assets/images/flags/ps.png": "332fbf603225331ae5f546a6100139e1",
"assets/assets/images/flags/pt.png": "f6bd6b43c6c1b21ec9751f0896620762",
"assets/assets/images/flags/pw.png": "6e5e021f740dee8be1bbae3d64bd972f",
"assets/assets/images/flags/py.png": "8ea287ad5568660d061011d5fdbadbc1",
"assets/assets/images/flags/qa.png": "0fb975cbf85958745d0a7fce41ecca01",
"assets/assets/images/flags/re.png": "ff2f0b79886986081d712b36313acd39",
"assets/assets/images/flags/ro.png": "e4e658137520dbed718e562196c48558",
"assets/assets/images/flags/rs.png": "7babb03f4de1b4670a1e663b10639510",
"assets/assets/images/flags/ru.png": "e12e90c4c73e8d71b024965836d6dd1f",
"assets/assets/images/flags/rw.png": "13dadc409be16172314ab1c8a7306d21",
"assets/assets/images/flags/sa.png": "4d7979a756bacb027ff29883324c5154",
"assets/assets/images/flags/sb.png": "78644a3b72b92683023efede968ac67f",
"assets/assets/images/flags/sc.png": "03177021c60ea369ad1bba986c4e61e3",
"assets/assets/images/flags/sd.png": "bfc636cae70757f878d0c7cae90beb23",
"assets/assets/images/flags/se.png": "dd335492517e98b2c4a2f0615575d42f",
"assets/assets/images/flags/sg.png": "e2e3c45c7e74db203b60a09c2c669f04",
"assets/assets/images/flags/sh.png": "a5d83e1456eac4fc2c06b3587178a12c",
"assets/assets/images/flags/si.png": "c579ccbca408893c48de1ceb452e2a35",
"assets/assets/images/flags/sj.png": "b345378357262a331f2254175392b653",
"assets/assets/images/flags/sk.png": "c27309250426a469a401be135596b562",
"assets/assets/images/flags/sl.png": "383b04e6c47f1ae5784a65978286f392",
"assets/assets/images/flags/sm.png": "82b24587ae8db506ff17813452d33269",
"assets/assets/images/flags/sn.png": "a34aca8242ebc735fc3b406145913693",
"assets/assets/images/flags/so.png": "954b7872282686832793eb997b185361",
"assets/assets/images/flags/sr.png": "3cdd89577b2860176498c83ecc3f5c08",
"assets/assets/images/flags/ss.png": "5fba6210bb5a78cc05c7dc09435b8f50",
"assets/assets/images/flags/st.png": "af14fc6995d96e8a89c962b3a6539ea3",
"assets/assets/images/flags/sv.png": "eb50fb2ed24759a5e84d45615d31f662",
"assets/assets/images/flags/sx.png": "89a1c23e16d4a07f124ae3b60a8386b7",
"assets/assets/images/flags/sy.png": "fbd50a4fb60d089ee23f7383f49c7412",
"assets/assets/images/flags/sz.png": "dcb4f667bf4f86fd494092211a4587fd",
"assets/assets/images/flags/tc.png": "3fad2047ba594f391a77f31af726cbcd",
"assets/assets/images/flags/td.png": "645ba70f08c716144006376cb83bf4da",
"assets/assets/images/flags/tf.png": "fc105b0e3aefad54729bd66b2c2e8468",
"assets/assets/images/flags/tg.png": "8d3ad25a599d833a6ac1595762e3d124",
"assets/assets/images/flags/th.png": "599e8425d8312c1fec3f946aa07a965a",
"assets/assets/images/flags/tj.png": "d4c6a661d3731f73962886d633314dc2",
"assets/assets/images/flags/tk.png": "c5ab85426b6fc6a875fab02a92c2a9cc",
"assets/assets/images/flags/tl.png": "7b0fbc8527cf41eb027d447f36d3301e",
"assets/assets/images/flags/tm.png": "0639f9ba34d9817be96fbb71dab53909",
"assets/assets/images/flags/tn.png": "09a79d707ded1f2ee9426c0d1046145e",
"assets/assets/images/flags/to.png": "270f5451e23dd0be1c42df6441385b11",
"assets/assets/images/flags/tr.png": "efc404696847e89247e832e34b993296",
"assets/assets/images/flags/tt.png": "b343882c706efc19d3feb90d1995ff5e",
"assets/assets/images/flags/tv.png": "1724c5a1acd9e9425e500656f0d8a892",
"assets/assets/images/flags/tw.png": "da965d707edb49e22e036b69ffe7fb22",
"assets/assets/images/flags/tz.png": "8ed93dc82eee4b79eb7b0d39f1d9ffa9",
"assets/assets/images/flags/ua.png": "0e7ca8fad047dee2af16e2d9bd338ad3",
"assets/assets/images/flags/ug.png": "4a3767cfc59b0b1f5e01b424f4c3f23b",
"assets/assets/images/flags/um.png": "6d51a2d0d59ce5ca96c3b2f805692591",
"assets/assets/images/flags/us.png": "6d51a2d0d59ce5ca96c3b2f805692591",
"assets/assets/images/flags/uy.png": "b8fbe511196391dad29a539660c101f6",
"assets/assets/images/flags/uz.png": "664e9f13fe97e249487fb2652ba6fb84",
"assets/assets/images/flags/va.png": "ee68cb2cbc979450f767015ac92b2b3c",
"assets/assets/images/flags/vc.png": "34805cff08027ca2ded86d8e6a67cab0",
"assets/assets/images/flags/ve.png": "752eb520e248bb2cbf94cc1b4a820fce",
"assets/assets/images/flags/vg.png": "7c32c6e0c6ef51a99e10a11e38c17ade",
"assets/assets/images/flags/vi.png": "511785d9aa48bd550ec314691037a3b2",
"assets/assets/images/flags/vn.png": "aa961c933ad33a783e7baa13bc5c1441",
"assets/assets/images/flags/vu.png": "913a1b73bec6905d0220945be2e18f20",
"assets/assets/images/flags/wf.png": "b8aa03cf236ad227a4039d5a95f2df49",
"assets/assets/images/flags/ws.png": "1e032cbf1776849f20f3be6319ab1906",
"assets/assets/images/flags/xk.png": "5dde0cabd17650ea673056ec11a374b7",
"assets/assets/images/flags/ye.png": "2ccfe1c77d5cdea2ac6ad7c25847490c",
"assets/assets/images/flags/yt.png": "a67ad807a3453e00b6b6b6ef2add6075",
"assets/assets/images/flags/za.png": "d43547a2cd7da4c9f4bca61404c43934",
"assets/assets/images/flags/zm.png": "bde40d12836212a7d8351356a01c3c32",
"assets/assets/images/flags/zw.png": "134740cacd7961df3d2629c830b3da3e",
"assets/assets/images/moon.png": "4b9df777bb6d6027de094bfa53b30a35",
"assets/assets/images/sun.png": "2de9add7fc1249c52733d690d2031ff5",
"assets/assets/json/data.json": "a8265aa99b1776634b2d8ba37c0f27d4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7ca3e6083fb2ba3100be76b3bfd25c9c",
"assets/NOTICES": "3deab946a3b9213f7421d43fcb7928f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "b386cb084631663e76070863fea36b46",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "36e29bc7a9621f9257eee22ae296eb98",
"/": "36e29bc7a9621f9257eee22ae296eb98",
"main.dart.js": "9d0650e85e8f7875f1ca3dc57391c4e4",
"manifest.json": "d6a493e1c4d804499f8603d3f88eda81",
"version.json": "d3d252550fd21b67da95a3493b1020db"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
