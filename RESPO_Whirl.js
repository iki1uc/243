export function RESPO_WHIRL(truth){
    const whirl = truth.whirl; // dein WHIRL-Objekt
}
PQ_HISTORY.push(currentPQState);
RESPO_LOG.push(whirl);
NC_LOG.push(ncState);
TMP.axis = truth.time6d.vector;
truth.whirl = WHIRL;
truth.pqHistory = PQ_HISTORY;
truth.respoLog = RESPO_LOG;
truth.ncLog = NC_LOG;
truth.tmpAxis = TMP;
ctx.fillText("WHIRL seq: " + truth.whirl.seq, 20, 40);
ctx.fillText("TMP B: " + truth.tmpAxis.B, 20, 80);
ctx.fillText("PQ_HISTORY len: " + truth.pqHistory.length, 20, 120);
const truth = await PALAISE_RESPO.truth("BEN");

// hier Runtime-Daten einfügen
const whirl = truth.whirl;
const pqHistory = truth.pqHistory;
const respoLog = truth.respoLog;
const ncLog = truth.ncLog;
const tmpAxis = truth.tmpAxis;
PQ‑Root < 100 → PALAISE_RESPO
PQ‑Root 100–199 → RESPO_ARG_SCAN
PQ‑Root 200–299 → RESPO_Whirl
PQ‑Root ≥ 300 → RESPO_Whirl + NC_HUB_ALL
