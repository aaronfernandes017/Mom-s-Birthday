'use strict';
const Progress=(()=>{
 const key=DEV_MODE?'goaBirthdayAdventure_dev_v1':'goaBirthdayAdventure_v1';
 const empty=()=>({completed:[],intro:false,ending:false,discoveries:[]}); let state=empty(), storageOK=true, simulated=null;
 try{const raw=JSON.parse(localStorage.getItem(key)||'null');if(raw&&typeof raw==='object'){state={completed:Array.isArray(raw.completed)?[...new Set(raw.completed.filter(n=>Number.isInteger(n)&&LEVELS.some(l=>l.id===n)))]:[],intro:raw.intro===true,ending:raw.ending===true,discoveries:Array.isArray(raw.discoveries)?[...new Set(raw.discoveries.filter(id=>typeof EGGS!=='undefined'&&EGGS.some(e=>e.id===id)))]:[]};}}catch(e){storageOK=false;}
 function save(){try{localStorage.setItem(key,JSON.stringify(state));}catch(e){storageOK=false;}return storageOK;}
 function today(){if(DEV_MODE&&simulated)return simulated;const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');}
 function status(l,date=today(),done=state.completed){if(l.id===28&&date<l.date)return 'future';if(l.id===28&&LEVELS.slice(0,27).some(x=>!done.includes(x.id)))return 'blocked';if(done.includes(l.id))return 'completed';if(date<l.date)return 'future';if(LEVELS.slice(0,LEVELS.indexOf(l)).some(x=>!done.includes(x.id)))return 'blocked';return 'playable';}
 function complete(l){if(status(l)!=='playable')return false;state.completed.push(l.id);if(l.id===28)state.ending=true;save();return true;}
 return {key,get state(){return state;},get storageOK(){return storageOK;},today,status,complete,save,discover(id){if(!EGGS.some(e=>e.id===id))return;if(!state.discoveries.includes(id))state.discoveries.push(id);save();},introduce(){state.intro=true;save();},simulate(d){if(DEV_MODE)simulated=d||null;},setCompleted(ids){if(DEV_MODE){state.completed=ids.filter(id=>LEVELS.some(l=>l.id===id));state.ending=state.completed.includes(28);save();}},reset(){if(DEV_MODE){state=empty();save();}}};
})();