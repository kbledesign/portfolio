$(function () {
	var preLoadImages = [
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FModel%5FFair?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FModel%5FTan?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FModel%5FDark?scl=1",
		"Shades are inspired by the airy cool tones of the sunrise, in a range of finishes from satin to shimmer",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FProduct?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FProduct?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FShade?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FModel%5FFair?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FModel%5FMed?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FModel%5FTan?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FModel%5FDark?scl=1",
		"Shades are inspired by the rich warm tones of the sunset, in a range of finishes from satin to shimmer",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FProduct?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FProduct?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FShade?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FModel%5FFair?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FModel%5FMed?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FModel%5FTan?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FModel%5FDark?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FProduct?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FProduct?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FShade?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FModel%5FFair?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FModel%5FMed?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FModel%5FTan?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FModel%5FDark?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FProduct?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FProduct?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FShade?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FModel%5FFair?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FModel%5FMed?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FModel%5FTan?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FModel%5FDark?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FProduct?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FProduct?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FShade?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FModel%5FFair?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FModel%5FMed?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FModel%5FTan?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FModel%5FDark?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FProduct?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FProduct?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FShade?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEp%5FHailey?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEp%5FEyeshadow?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEp%5FBlush?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEp%5FLipstick?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FCircle%5FShade%5FDawn?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FCircle%5FShade%5FDusk?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Tablet%5FCircle%5FShade%5FDawn?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Tablet%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Tablet%5FCircle%5FShade%5FDusk?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Tablet%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Tablet%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Tablet%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FProduct?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Tablet%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Tablet%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FCircle%5FShade%5FDawn?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FCircle%5FShade%5FDusk?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FModel%5FFair%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FModel%5FMed%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FModel%5FTan%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FModel%5FDark%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FModel%5FFair%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FModel%5FMed%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FModel%5FTan%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FModel%5FDark%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FProduct%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FModel%5FFair%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FModel%5FMed%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FModel%5FTan%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FModel%5FDark%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FModel%5FFair%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FModel%5FMed%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FModel%5FTan%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FModel%5FDark%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FModel%5FFair%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FModel%5FMed%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FModel%5FTan%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FModel%5FDark%5Fv1?scl=1",
		"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FModel%5FFair%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FModel%5FMed%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FModel%5FTan%5Fv1?scl=1", "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FModel%5FDark%5Fv1?scl=1"
	];

	for (let i = 0; i < preLoadImages.length; i++) {
		var imgObject = new Image();
		imgObject.src = preLoadImages[i];
	}

	var shade1 = {
		dawn: {
			fair:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FModel%5FFair?scl=1",
			medium:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FModel%5FMed?scl=1",
			tan:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FModel%5FTan?scl=1",
			dark:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FModel%5FDark?scl=1",
			prodName: "Dawn",
			prodDesc:
				"Shades are inspired by the airy cool tones of the sunrise, in a range of finishes from satin to shimmer",
			masterImg:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FProduct%5Fv1?scl=1",
			masterImg2:
				"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FProduct%5Fv1?scl=1",
			masterImgHover:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FShade?scl=1",
			sku: "US92131",
			mfair: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FModel%5FFair%5Fv1?scl=1",
			mmed: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FModel%5FMed%5Fv1?scl=1",
			mtan: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FModel%5FTan%5Fv1?scl=1",
			mdark: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F01%5FDawn%5FModel%5FDark%5Fv1?scl=1",
		},
		dusk: {
			fair:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FModel%5FFair?scl=1",
			medium:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FModel%5FMed?scl=1",
			tan:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FModel%5FTan?scl=1",
			dark:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FModel%5FDark?scl=1",
			prodName: "Dusk",
			prodDesc:
				"Shades are inspired by the rich warm tones of the sunset, in a range of finishes from satin to shimmer",
			masterImg:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FProduct%5Fv1?scl=1",
			masterImg2:
				"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FProduct%5Fv1?scl=1",
			masterImgHover:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FShade?scl=1",
			sku: "US92130",
			mfair: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FModel%5FFair%5Fv1?scl=1",
			mmed: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FModel%5FMed%5Fv1?scl=1",
			mtan: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FModel%5FTan%5Fv1?scl=1",
			mdark: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F02%5FPALETTE%5F02%5FDusk%5FModel%5FDark%5Fv1?scl=1",
		}
	};
	var shade2 = {
		hex_Mauve: {
			fair:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FModel%5FFair?scl=1",
			medium:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FModel%5FMed?scl=1",
			tan:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FModel%5FTan?scl=1",
			dark:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FModel%5FDark?scl=1",
			prodName: "Mauve Sunrise",
			masterImg:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FProduct%5Fv1?scl=1",
			masterImg2:
				"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FProduct%5Fv1?scl=1",
			masterImgHover:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FShade?scl=1",
			sku: "US92136",
			mfair: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FModel%5FFair%5Fv1?scl=1",
			mmed: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FModel%5FMed%5Fv1?scl=1",
			mtan: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FModel%5FTan%5Fv1?scl=1",
			mdark: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F01%5FMauveSunrise%5FModel%5FDark%5Fv1?scl=1",
		},
		hex_Pink: {
			fair:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FModel%5FFair?scl=1",
			medium:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FModel%5FMed?scl=1",
			tan:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FModel%5FTan?scl=1",
			dark:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FModel%5FDark?scl=1",
			prodName: "Pink Sky",
			masterImg:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FProduct%5Fv1?scl=1",
			masterImg2:
				"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FProduct%5Fv1?scl=1",
			masterImgHover:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FShade?scl=1",
			sku: "US92135",
			mfair: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FModel%5FFair%5Fv1?scl=1",
			mmed: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile_BB_EP_03_Blush_02_PinkSky_Model_Med_v1??scl=1",
			mtan: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FModel%5FTan%5Fv1?scl=1",
			mdark: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F02%5FPinkSky%5FModel%5FDark%5Fv1?scl=1",
		},
		hex_Coral: {
			fair:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FModel%5FFair?scl=1",
			medium:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FModel%5FMed?scl=1",
			tan:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FModel%5FTan?scl=1",
			dark:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FModel%5FDark?scl=1",
			prodName: "Coral Cloud",
			masterImg:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FProduct%5Fv1?scl=1",
			masterImg2:
				"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FProduct%5Fv1?scl=1",
			masterImgHover:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FShade?scl=1",
			sku: "US92134",
			mfair: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FModel%5FFair%5Fv1?scl=1",
			mmed: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FModel%5FMed%5Fv1?scl=1",
			mtan: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FModel%5FTan%5Fv1?scl=1",
			mdark: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F03%5FCoralCloud%5FModel%5FDark%5Fv1?scl=1",
		},
		hex_Blurred: {
			fair:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FModel%5FFair?scl=1",
			medium:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FModel%5FMed?scl=1",
			tan:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FModel%5FTan?scl=1",
			dark:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FModel%5FDark?scl=1",
			prodName: "Blurred Buff",
			masterImg:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FProduct%5Fv1?scl=1",
			masterImg2:
				"//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FProduct%5Fv1?scl=1",
			masterImgHover:
				"//assets.bareminerals.com/is/image/BareEscentuals/Desktop%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FShade?scl=1",
			sku: "US92137",
			mfair: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FModel%5FFair%5Fv1?scl=1",
			mmed: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FModel%5FMed%5Fv1?scl=1",
			mtan: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FModel%5FTan%5Fv1?scl=1",
			mdark: "//assets.bareminerals.com/is/image/BareEscentuals/Mobile%5FBB%5FEP%5F03%5FBlush%5F04%5FBlurredBuff%5FModel%5FDark%5Fv1?scl=1",
		}
	};


	$(".shade_box div.shademaster").click(function () {
		$(".shademaster").css("border", "2px solid #fff");
		$(this).css("border", "3px solid #000");

		let masterSku = $(this).attr("data-master-sku");
		$(".range1Img img").attr("src", shade1[masterSku].fair);

		$("div.range1 div.p1_prod")
			.css("background-image", "url(" + shade1[masterSku].masterImg2 + ")")
			.attr("data-sku-image", shade1[masterSku].masterImg2);



		if (
			window.innerWidth < 560
		) {
			$("div.range1 div.p1_fair").attr("data-sku-image", shade1[masterSku].mfair);
			$("div.range1 div.p1_med").attr("data-sku-image", shade1[masterSku].mmed);
			$("div.range1 div.p1_tan").attr("data-sku-image", shade1[masterSku].mtan);
			$("div.range1 div.p1_dark").attr("data-sku-image", shade1[masterSku].mdark);
		} else {
			$("div.range1 div.p1_fair").attr("data-sku-image", shade1[masterSku].fair);
			$("div.range1 div.p1_med").attr("data-sku-image", shade1[masterSku].medium);
			$("div.range1 div.p1_tan").attr("data-sku-image", shade1[masterSku].tan);
			$("div.range1 div.p1_dark").attr("data-sku-image", shade1[masterSku].dark);
		}



		$(".range_master_prod img")
			.attr("src", shade1[masterSku].masterImg)
			.attr("data-hover", shade1[masterSku].masterImgHover)
			.attr("data-hover-original", shade1[masterSku].masterImg);

		$("img#imgFirst").attr("src", shade1[masterSku].masterImg2);

		$(".range_1_cont .headline").html(shade1[masterSku].prodName);
		$(".range_1_cont .description").html(shade1[masterSku].prodDesc);

		$(".range1_item").removeClass("selected");
		$(".range1 .p1_fair").addClass("selected");

		$(".range_1_cont span[data-sku-variant]").html(shade1[masterSku].prodName);

		$(".product_shade_result_id").attr("value", shade1[masterSku].sku);

		$("button.remove-from-cart").html("Add to bag").attr("class", "add-to-cart-global trackMe tealium-promo-button")
	});

	$(".shade_box_2 div.hex").click(function () {
		$(".hex").css("border", "2px solid #fff");
		$(this).css("border", "3px solid #000");

		let masterSku = $(this).attr("data-master-sku");
		$(".range2Img img").attr("src", shade2[masterSku].fair);

		$("div.range2 div.p1_prod")
			.css("background-image", "url(" + shade2[masterSku].masterImg2 + ")")
			.attr("data-sku-image", shade2[masterSku].masterImg2);




		if (
			window.innerWidth < 560
		) {
			$("div.range2 div.p1_fair").attr("data-sku-image", shade2[masterSku].mfair);
			$("div.range2 div.p1_med").attr("data-sku-image", shade2[masterSku].mmed);
			$("div.range2 div.p1_tan").attr("data-sku-image", shade2[masterSku].mtan);
			$("div.range2 div.p1_dark").attr("data-sku-image", shade2[masterSku].mdark);
		} else {
			$("div.range2 div.p1_fair").attr("data-sku-image", shade2[masterSku].fair);
			$("div.range2 div.p1_med").attr("data-sku-image", shade2[masterSku].medium);
			$("div.range2 div.p1_tan").attr("data-sku-image", shade2[masterSku].tan);
			$("div.range2 div.p1_dark").attr("data-sku-image", shade2[masterSku].dark);
		}


		$(".range_master_prod2 img")
			.attr("src", shade2[masterSku].masterImg)
			.attr("data-hover", shade2[masterSku].masterImgHover)
			.attr("data-hover-original", shade2[masterSku].masterImg);

		$("img#imgSecond").attr("src", shade2[masterSku].masterImg2);

		$(".range_2_cont .headline").html(shade2[masterSku].prodName);

		$(".range2_item").removeClass("selected");
		$(".range2 .p1_fair").addClass("selected");

		$(".range_2_cont span[data-sku-variant]").html(shade2[masterSku].prodName);

		$(".product_shade_result_id2").attr("value", shade2[masterSku].sku);
		$("button.remove-from-cart").html("Add to bag").attr("class", "add-to-cart-global trackMe tealium-promo-button")

	});

	$("div.range1_item").click(function () {
		let thisImage = $(this).attr("data-sku-image");
		$(".range1Img img, img#imgFirst").attr("src", thisImage);

		$(".range1_item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("div.range2_item").click(function () {
		let thisImage = $(this).attr("data-sku-image");
		$(".range2Img img, img#imgSecond").attr("src", thisImage);

		$(".range2_item").removeClass("selected");
		$(this).addClass("selected");
	});

	$(".shade_box div.shademaster.dawn").trigger("click");
	$(".shade_box_2 div.hex.hex_Mauve").trigger("click");

	$(".sliderContCarousel").slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 100000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		cssEase: "linear",
		ariaLive: "polite",
		ariaAtomic: "true"
	});


	if (
		window.innerWidth < 560
	) {
		$("#section_1 .slick_2").slick({
			dots: true,
			autoplay: true,
			autoplaySpeed: 100000,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: false,
			cssEase: "linear",
			ariaLive: "polite",
			ariaAtomic: "true"
		});
	}


	if (
		window.innerWidth < 560
	) {
		$(".range_select .p1_prod").trigger("click");
	}

	$("h1.clp-title").remove();

	$("img.hayl_vid, .play-button-wrapper").click(function () {
		$(".video-container").html(
			'<iframe class="trackMe" class="wow bounceInUp" width="560" height="315" src="//www.youtube.com/embed/h2nk1cMu9ik?rel=0&autoplay=0&enablejsapi=1&showinfo=1" frameborder="0" allow="autoplay"></iframe>'
		);
	});

	$(".down-button-circle").click(function () {
		window.scrollBy(0, 600);
	});

	$('.cont_box_new_a').css("display", "block")
	let foo = 1;
	setInterval(function () {
		switch (foo) {
			case 1:
				$('.cont_box_new_a').css("display", "block");
				$('.cont_box_new_b').css("display", "none");
				$('.cont_box_new_c').css("display", "none");
				foo = 2;
				break;
			case 2:
				$('.cont_box_new_a').css("display", "none");
				$('.cont_box_new_b').css("display", "block");
				$('.cont_box_new_c').css("display", "none");
				foo = 3;
				break;
			case 3:
				$('.cont_box_new_a').css("display", "none");
				$('.cont_box_new_b').css("display", "none");
				$('.cont_box_new_c').css("display", "block");
				foo = 1;
				break;

			default:
				$('.cont_box_new_a').css("display", "block");
				$('.cont_box_new_b').css("display", "none");
				$('.cont_box_new_c').css("display", "none");
		}
	}, 2500);

	var analytics_links = $("[data-kb-tracking] .trackMe");
	var varIndex = 3400;
	var pagePath = window.location.pathname;

	for (var i = 0; i < analytics_links.length; i++) {
		var thisParent = $("[data-kb-tracking] .trackMe")
			.eq(i)
			.closest("[data-kb-tracking]")
			.attr("id");
		$("[data-kb-tracking] .trackMe")
			.eq(i)
			.attr({
				"data-button-id": varIndex
			})
			.addClass("tealium-promo-button");
		$("[data-kb-tracking] .trackMe")
			.eq(i)
			.wrap(
				"<span class='tealium-offers-container'><span class='tealium-offers' tealium-offers-promo-id='" +
				thisParent +
				"' tealium-offers-promo-name='" +
				pagePath +
				"' tealium-offers-promo-creative='cta_" +
				i +
				"' tealium-offers-promo-position='" +
				varIndex +
				"'></span></span>"
			);
		varIndex++;
	}

	$("#bounceandblur .slick-prev").html(
		'<svg xmlns="//www.w3.org/2000/svg" width="30" height="50px" viewBox="0 0 260.859 500"><path d="M2.546,241.406L155.53,7.197c2.895-4.461,7.84-7.164,13.158-7.193h73.508c8.721-0.113,15.881,6.863,15.994,15.583 c0.041,3.192-0.887,6.323-2.66,8.979l-142.809,216.84c-3.548,5.311-3.548,12.234,0,17.544l141.579,216.667 c4.748,7.312,2.668,17.093-4.646,21.841c-2.535,1.646-5.488,2.528-8.512,2.545h-71.229c-5.315-0.029-10.264-2.73-13.158-7.19 L2.546,258.602C-0.848,253.371-0.848,246.635,2.546,241.406z"/></svg>'
	);

	$("#bounceandblur .slick-next").html(
		'<svg xmlns="//www.w3.org/2000/svg" width="30" height="50px" viewBox="0 0 260.859 500"><path d="M255.646,258.6L102.662,492.809c-2.895,4.461-7.84,7.164-13.158,7.193H15.996c-8.721,0.112-15.881-6.863-15.994-15.583c-0.041-3.192,0.887-6.323,2.66-8.979L145.47,258.6c3.548-5.311,3.548-12.235,0-17.544L3.891,24.388C-0.857,17.076,1.223,7.295,8.537,2.547c2.535-1.646,5.488-2.528,8.512-2.545h71.229c5.315,0.029,10.264,2.73,13.158,7.19l154.21,234.211C259.04,246.634,259.04,253.371,255.646,258.6z"/> </svg>'
	);
});
