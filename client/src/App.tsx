import { formatEther, formatUnits } from '@ethersproject/units';
import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core';
import React from 'react';

function App() {
  const { activateBrowserWallet, account, deactivate } = useEthers()
  const etherBalance = useEtherBalance(account);
  const tknBalance = useTokenBalance("0x8198f5d8F8CfFE8f9C413d98a0A55aEB8ab9FbB7", account);

  return (
    <div>
      <div>
        {!account ? <button onClick={() => activateBrowserWallet()}>Connect</button> : <button onClick={() => deactivate()}>Disconnect</button>}
      </div>
      {account && <p>Account: {account}</p>}
      {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
      {tknBalance && <p>TKN balance: {formatUnits(tknBalance, 18)} TKN</p>}
    </div>
  )
}

export default App;