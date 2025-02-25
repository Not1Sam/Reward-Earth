import React, { useState, useEffect } from "react";
import { Scanner } from '@yudiel/react-qr-scanner';
import SlidingPanel from "react-sliding-side-panel";
import { BsQrCodeScan } from "react-icons/bs";
import "react-sliding-side-panel/lib/index.css";
import "../styles/QrScan.css";

const Scan = () => {
    const [qrPanel, SetQrPanel] = useState(false);
    const [qrData, SetQrData] = useState(null);

    useEffect(() => {
        if (qrPanel) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [qrPanel]);

    return (
        <div>
            <div className="qr-code" onClick={() => SetQrPanel(true)}>
                <BsQrCodeScan size={35} color="var(--text-color)" />
            </div>
            <SlidingPanel
                panelClassName="qr-panel"
                type={'bottom'}
                isOpen={qrPanel}
                size={50}
                backdropClicked={() => SetQrPanel(false)}
            >
                <div className="qr-scan">
                    <div className="camera-view">
                        <Scanner
                            onScan={(result) => {
                                console.log("Scanned QR Code:", result.rawValue);
                                SetQrData(result.rawValue);
                            }}
                            onError={(error) => console.error(error)}
                            constraints={{ facingMode: "environment" }}
                            style={{ width: "100%" }}
                        />
                    </div>
                    {qrData && (
                        <div className="qr-data">
                            <h3>Scanned QR Code Data:</h3>
                            <p>{qrData}</p>
                        </div>
                    )}
                </div>
            </SlidingPanel>
        </div>
    );
};

export default Scan;