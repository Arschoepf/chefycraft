export default {
    pageTitle: "BlueMap - {map}",
    menu: {
        title: "Menu",
        tooltip: "Menu"
    },
    maps: {
        title: "Kaarten",
        button: "Kaarten",
        tooltip: "Kaartenlijst"
    },
    markers: {
        title: "Markers",
        button: "Markers",
        tooltip: "Markerlijst",
        marker: "marker | markers",
        markerSet: "Markerset | Markersets",
        searchPlaceholder: "Zoek...",
        followPlayerTitle: "Volg Speler"
    },
    settings: {
        title: "Instellingen",
        button: "Instellingen"
    },
    goFullscreen: {
        button: "Volledig scherm modus"
    },
    resetCamera: {
        button: "Camera terugzetten",
        tooltip: "Camera & Positie terugzetten"
    },
    updateMap: {
        button: "Kaart verversen",
        tooltip: "Leeg de kaarten-cache"
    },
    lighting: {
        title: "Belichting",
        dayNightSwitch: {
            tooltip: "Dag/Nacht"
        },
        sunlight: "Zonlicht",
        ambientLight: "Omgevingslicht"
    },
    resolution: {
        title: "Resolutie",
        high: "Hoog (SSAA, x2)",
        normal: "Normaal (Standaard, x1)",
        low: "Laag (Opgeschaald, x0.5)"
    },
    freeFlightControls: {
        title: "Vrije camera",
        mouseSensitivity: "Muis gevoeligheid",
        invertMouseY: "Muis Y omdraaien"
    },
    renderDistance: {
        title: "Renderafstand",
        hiresLayer: "Hires-Laag",
        lowersLayer: "Lowres-Laag"
    },
    theme: {
        title: "Kleurmodus",
        default: "Standaard (Systeem/Browser)",
        dark: "Donker",
        light: "Licht"
    },
    debug: {
        button: "Debug"
    },
    resetAllSettings: {
        button: "Instellingen terugzetten"
    },
    players: {
        title: "Spelers",
        tooltip: "Spelerlijst"
    },
    compass: {
        tooltip: "Kompas / Naar het noorden richten"
    },
    controls: {
        title: "Aanzicht / Besturing",
        perspective: {
            button: "Perspectief",
            tooltip: "Perspectief aanzicht"
        },
        flatView: {
            button: "Plat",
            tooltip: "Orthografisch / Plat aanzicht",
        },
        freeFlight: {
            button: "Vrije vlucht",
            tooltip: "Vrije vlucht / Toeschouwersmodus"
        }
    },
    language: {
        title: "Taal",
    },
    blockTooltip: {
        block: "Blok",
        position: "Positie",
        chunk: "Chunk",
        region: {
            region: "Regio",
            file: "Datum"
        },
        light: {
            light: "Licht",
            sun: "Zon",
            block: "Blok",
        }
    },
    info: {
        title: "Info",
        button: "Info",
        content: `
<img src="assets/logo.png" style="display: block; width: 40%; margin: 3em auto; border-radius: 50%">
<p>
	<h2>Muisbediening:</h2>
	<table>
		<tr><th>Bewegen</th><td><kbd>Linkerklik</kbd> + slepen</td></tr>
		<tr><th>Zoomen</th><td><kbd>Muiswiel</kbd> (scrollen)</td></tr>
		<tr><th>Draaien / Kantelen</th><td><kbd>Rechterklik</kbd> + slepen</td></tr>
	</table>
</p>
<p>
	<h2>Toetsenbordbediening:</h2>
	<table>
		<tr><th>Bewegen</th><td><kbd>wasd</kbd> / <kbd>Pijltjestoetsen</kbd></td></tr>
		<tr><th>Zoomen</th><td>Numeriek toetsenbord: <kbd>+</kbd>/<kbd>-</kbd> of <kbd>Ins</kbd>/<kbd>Home</kbd></td></tr>
		<tr><th>Draaien / Kantelen</th><td><kbd>Alt</kbd> + <kbd>wasd</kbd> / <kbd>Pijltjestoetsen</kbd> of <kbd>Delete</kbd>/<kbd>End</kbd>/<kbd>Page Up</kbd>/<kbd>Page Down</kbd></td></tr>
	</table>
</p>
<p>
	<h2>Aanraakbediening:</h2>
	<table>
		<tr><th>Bewegen</th><td>Aanraken + vegen</td></tr>
		<tr><th>Zoomen</th><td>Met twee vingers aanraken + knijpen</td></tr>
		<tr><th>Draaien / Kantelen</th><td>Met twee vingers aanraken + draaien / naar boven/onder slepen</td></tr>
	</table>
</p>
<br><hr>
<p>
	Deze kaart is met &#9829; door <a href="https://bluecolo.red/bluemap">BlueMap</a> gegenereerd.
</p>
		`
    }
};
