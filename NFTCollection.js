// Step 1: Create a variable to hold your NFTs
let studentNFTs = [];  //creates an empty array to store all the NFT (Non-Fungible Token)

// Step 2: Define the mintNFT function
function mintNFT(name, course,uid, cgpa) {
    // Create an NFT object using the parameters for its metadata
    const nft = {
        name: name,
        course: course, // new object called nft is created
        uid: uid,
        cgpa: cgpa
    };
    // Store the NFT object in the array
    studentNFTs.push(nft);
}

// Step 3: Define the listNFTs function
function listNFTs() {
    // Iterate through the array of NFTs and print their metadata
    studentNFTs.forEach((nft, index) => {
        console.log(`Student NFT ${index + 1}:`);
        console.log(`  Name: ${nft.name}`);
        console.log(`  Major: ${nft.course}`);
        console.log(`  uid: ${nft.uid}`);
        console.log(`  CGPA: ${nft.cgpa}`);
        console.log('-------------------');
    });
}

// Step 4: Define the getTotalSupply function
function getTotalSupply() {
    // Return the total number of NFTs created
    return studentNFTs.length;
}

// Step 5: Call your functions below this line

// Mint some sample student NFTs
mintNFT("Khushal", "Computer Science", 70056 , 8.57);
mintNFT("Yashvi", "Information Security", 70018 , 8.6);

// List all the student NFTs
listNFTs();

// Print the total number of student NFTs minted
console.log(`Total Student NFTs Minted: ${getTotalSupply()}`);
