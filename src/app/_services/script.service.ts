import { Injectable } from '@angular/core';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { IAssetData } from "../helpers/types";
import { apiGetAccountAssets } from "../helpers/api";
import { getChainData } from "../helpers/utils";
import { IInternalEvent } from "@walletconnect/types";
import {Router} from '@angular/router';

interface IAppState {
  connector: WalletConnect | null;
  fetching: boolean;
  connected: boolean;
  chainId: number;
  showModal: boolean;
  pendingRequest: boolean;
  uri: string;
  accounts: string[];
  address: string;
  result: any | null;
  assets: IAssetData[];
}

const INITIAL_STATE: IAppState = {
  connector: null,
  fetching: false,
  connected: false,
  chainId: 1,
  showModal: false,
  pendingRequest: false,
  uri: "",
  accounts: [],
  address: "",
  result: null,
  assets: [],
};


@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  header = false
  showHeader = JSON.parse(localStorage.getItem("Header"))
  activechain;
  address;
  tokenName;
  balance;
  constructor(private _router:Router) { }

  showHeaders(){
    this.header = true
    localStorage.setItem("Header",JSON.stringify(this.header))
    this.showHeader = JSON.parse(localStorage.getItem("Header"))
  }

  clearHeader(){
    console.log(JSON.parse(localStorage.getItem("Header")));
    
    this.header = false
    this.showHeader = false
    localStorage.removeItem("Header")
  }
  
  public state: IAppState = {
    ...INITIAL_STATE,
  };

  public walletConnectInit = async () => {
    // bridge url
    const bridge = "https://bridge.walletconnect.org";

    // create new connector
    const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });

    this.state.connector = connector ;
    // check if already connected
    if (!connector.connected) {
      // create new session
      await connector.createSession();
    }
    // subscribe to events
    await this.subscribeToEvents();
  }

  public subscribeToEvents = () => {
    const connector = this.state.connector;

    if (!connector) {
      return;
    }

    connector.on("session_update", async (error, payload) => {
      console.log(`connector.on("session_update")`);

      if (error) {
        throw error;
      }

      const { chainId, accounts } = payload.params[0];
      this.onSessionUpdate(accounts, chainId);
    });

    connector.on("connect", (error, payload) => {
      console.log(`connector.on("connect")`);
      const activeChain = this.state.connector.chainId ? getChainData(this.state.connector.chainId).name : null;
      this.activechain = activeChain
      const address = this.state.connector.accounts[0];
      this.address = address
      
      if (error) {
        throw error;
      }

      this.onConnect(payload);
    });

    connector.on("disconnect", (error, payload) => {
      console.log(`connector.on("disconnect")`);

      if (error) {
        throw error;
      }

      this.onDisconnect();
    });

    if (connector.connected) {
      const { chainId, accounts } = connector;
      const address = accounts[0];
      this.state.connected = true,
      this.state.chainId,
      this.state.accounts,
      this.state.address,
      
      this.onSessionUpdate(accounts, chainId);
    }

    this.state.connector = connector;
  };
  
  public killSession = async () => {
    const connector = this.state.connector;
    if (connector) {
      connector.killSession();
    }
    this.resetApp();
    this._router.navigateByUrl("/index");
  };

  public resetApp = async () => {
    this.state = { ...INITIAL_STATE };
  };
   
  public onConnect = async (payload: IInternalEvent) => {
    const { chainId, accounts } = payload.params[0];
    const address = accounts[0];
    this.state.connected = true;
    this.state.chainId;
    this.state.accounts;
    this.state.address;

    this.getAccountAssets();
  };

  public onDisconnect = async () => {
    this.resetApp();
  };

  public onSessionUpdate = async (accounts: string[], chainId: number) => {
    const address = accounts[0];
    await this.state.chainId, this.state.accounts, this.state.address
    await this.getAccountAssets();
  };

  public getAccountAssets = async () => {
    const address = this.state.accounts[0];
    const chainId = this.state.chainId;
    this.state.fetching =  true;
    try {
      // get account balances
      const assets = await apiGetAccountAssets(address, chainId);
      
      this.state.fetching = false;
      this.state.address;
      this.state.assets;
      
      this.tokenName = assets[0].name
      this.balance = assets[0].balance
      
    } 
    catch (error) {
      console.error(error);
      this.state.fetching = false;
    }
  }

  public toggleModal = () => this.state.showModal = !this.state.showModal;

}
