import erc721Abi from "../src/erc721Abi";
import { useState } from "react";
import styles from "../styles/create.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, Icon, TextArea, Button, Divider } from "semantic-ui-react";
import { useRouter } from "next/router";
import { create } from "ipfs-http-client";

export default function createNFT({ caver, web3, account, walletType, newErc721addr, newKip17addr }) {
  const [fileUrl, updateFileUrl] = useState(``);

  const [nftDesc, setNftDesc] = useState("");
  const [nftName, setNftName] = useState("");
  const [isMint, setIsMint] = useState(false);
  const [image, setImage] = useState(null);
  const router = useRouter();

  const client = create("https://ipfs.infura.io:5001/api/v0");

  const moveToHome = () => {
    router.push("/");
  };
  const onChange = async (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const createNewNFT = async () => {
    let tokenContract;
    let newTokenId;

    if (walletType === "eth") {
      tokenContract = await new web3.eth.Contract(erc721Abi, newErc721addr, {
        from: account,
      });
      tokenContract.options.address = newErc721addr;
      newTokenId = await tokenContract.methods.mintNFT(account, fileUrl).send();
    } else {
      tokenContract = await new caver.klay.Contract(erc721Abi, newKip17addr, {
        from: account,
      });
      tokenContract.options.address = newKip17addr;
      newTokenId = await tokenContract.methods.mintNFT(account, fileUrl).send({ from: account, gas: 0xf4240 });
    }
    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();

    setIsMint(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.createContainer}>
        <div className={styles.mainContainer}>
          <div>
            <h1>NFT 민팅</h1>
            <span className={styles.grayFont}>
              <span style={{ fontSize: "10px" }} className={styles.require}>
                *
              </span>{" "}
              학교생활의 인증이 될 새로운 NFT를 생성해주세요
            </span>
          </div>
          <Divider />
          <div>
            <p className={styles.contentFont}>
              Image{" "}
              <span style={{ fontSize: "16px" }} className={styles.require}>
                *
              </span>
            </p>
            <p className={styles.grayFont}>이미지, 비디오, 오디오 또는 3D 모델 파일. 최대 사이즈: 100 MB</p>
            <div className={styles.selectFile}>
              <label for="fileInput">
                {image ? <img for="fileInput" src={image} alt="preview image" className={styles.selectedImage} /> : <Icon name="file image outline" size="huge" />}
              </label>
              <input type="file" name="file" onChange={onChange} id="fileInput" />
            </div>
            <br></br>
            <div>{fileUrl ? <div>IPFS Link: {fileUrl}</div> : ""}</div>
          </div>
          <br></br>
          <div className={styles.contentContainer}>
            <p className={styles.contentFont}>
              외부 링크{" "}
              <span style={{ fontSize: "16px" }} className={styles.require}>
                *
              </span>
            </p>
            <Input
              placeholder="세부 정보 페이지로 이동할 수 있는 URL을 입력해주세요"
              fluid
              size="big"
              onChange={(e) => {
                setNftName(e.target.value);
              }}
            />
          </div>
          <div className={styles.contentContainer}>
            <p className={styles.contentFont}>설명</p>
            <TextArea
              placeholder="세부 정보 페이지로 이동할 수 있는 URL을 입력해주세요"
              style={{ minHeight: 100, width: "100%", borderColor: " rgba(0,0,0,0.6)" }}
              onChange={(e) => {
                setNftDesc(e.target.value);
              }}
            />
          </div>
          <div className={styles.contentContainer}>
            <p className={styles.contentFont}>
              Account{" "}
              <span style={{ fontSize: "16px" }} className={styles.require}>
                *
              </span>
            </p>
            <p className={styles.contentValue}>{account ? account : <p style={{ color: "#b91528", fontWeight: "600" }}>Please connect Account first!!</p>}</p>
          </div>
          {/* <div>
            <input type="checkbox" name="number" value="1">1</input>
            <input type="checkbox" name="number" value="1">2</input>
            <input type="checkbox" name="number" value="1">3</input>
          </div> */}
          <div className={styles.contentContainer}>
            <p className={styles.contentFont}>
              Block Address{" "}
              <span style={{ fontSize: "16px" }} className={styles.require}>
                *
              </span>
            </p>
            <p className={styles.contentValue}>
              {newErc721addr ? newErc721addr : newKip17addr ? <p style={{ color: "#b91528", fontWeight: "600" }}>Please connect Block Address first!!</p> : ""}
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <Button size="big" icon labelPosition="left" onClick={moveToHome}>
              <Icon name="arrow left" />
              Go Home
            </Button>
            <Button size="big" content="Create NFT" primary onClick={createNewNFT} />
          </div>
          <div className={styles.contentContainer}>
            {" "}
            {isMint ? (
              <p className={styles.completedContainer}>
                <Icon name="check" size="big" />
                Completed Create!!
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
