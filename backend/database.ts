
import admin from 'firebase-admin';
import serviceAccount from './securitytxt-scanner-a8b7b00b1117.json';


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


const addSite = (url: string, rank = 0, wellKnownSecuritytxt: string, mainSecuritytxt: string, reach = 'unknown') => {
    // add all provided site information AND a timestamp
}

const getStoredSiteInformationByUrl = (url : string) => {
    // return only stored information by the URL. Do NOT perform query
}

const getStoredSiteInformationByRank = (rank : number) => {
    // return only stored information by the Alexa rank. Do NOT perform query
}

const getStoreSitesBySecuritytxt = (which = ['main', '.well-known'], exclusive = false) => {
    // returns all sites with specific security.txt
    // by default returns all sites, regardless of path
    // change which to dictate which paths should be included
    // if exclusive is false and only one path is included, all sites with included path will be returned, even if other path is not included
    // if exclusive is true and only one path is included, sites with *only* the included will be returned

}