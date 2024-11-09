const burgerMenuBtn = document.getElementById("burger-menu");
const burgerCancleBtn = document.getElementById("cancle-menu-button");
const menu = document.getElementById("mobile-nav-items");

const desktopNavButton = document.querySelectorAll(".nav-button-desktop");
const mobileNavButtons = document.querySelectorAll(".mobile-nav-button");

const sections = document.querySelectorAll(".sections-js");

const chatbotMobileBtn = document.getElementById("chatbot-btn");

const mobileBottomNav = document.getElementById("bottom-menu");
const mobileBotBackButton = document.getElementById("bot-back-button");

const getChatbotSection = document.querySelector(".chatbot-section");

const settingsButtons = document.querySelectorAll(".settings-btns");
const settingsMenu = document.querySelectorAll(".settings-menu");
const settingsDropDownSymbole = document.querySelector(".plus");


const lightModeBtn = document.getElementById("light-mode-btn");
const darkModeBtn = document.getElementById("dark-mode-btn");

const unlockChannelBtn = document.getElementById("unlock-channel-btn");
const personalChannelBtns = document.querySelectorAll(".profile-btns");

const postBtns = document.querySelectorAll(".post-btns");
const postSections = document.querySelectorAll(".post-sections");
const addPostButton = document.getElementById("add-a-post-btn");
const postMenu = document.getElementById("post-menu");

const profileSettingsBtns = document.querySelectorAll(".profile-settings-btns");
const personalDashboard = document.getElementById("personal-profile");
const createSections = document.querySelectorAll(".create-sections");
const personalChannelBtn = document.querySelectorAll(".personal-channel-btn");

/* =============== main Dashboard catagories =============== */

const latestUserPost = document.getElementById("latest-posts");
const userPersonalLongFormVideos = document.getElementById("personal-videos");
const personalShortFormVideos = document.getElementById("personal-shorts");
const personalPhotos = document.getElementById("personal-photos");
const personalCommunity = document.getElementById("personal-community");
const personalBio = document.getElementById("my-bio");
const personalBlog = document.getElementById("personal-blogs");

/* each and every input box on the profile nav on the bottom right of the page */

/* ================== Modify channel bio ================== */

const bannerUpload = document.getElementById("bannerUpload");
const bannerPreview = document.getElementById("bannerPreview");
const previewBannerImage = document.getElementById("previewBannerImage");

const profileImageUpload = document.getElementById("profileImageUpload");
const profileImagePreview = document.getElementById("profileImagePreview");
const previewProfileImage = document.getElementById("previewProfileImage");

const bioInput = document.getElementById("chanel-name-input")
const channelDescriptionInput = document.getElementById("description");
const socialLinksContainer = document.getElementById("socialLinksContainer");
const userLocationInput = document.getElementById("location-input");

const profileForm = document.getElementById("profileForm");
const submitProfileChanges = document.getElementById("submit-profile-changes");
const addSocialLinkBtn = document.getElementById("addSocialLinksBtn");

/* ========== Elements To modify on the dashboard ========== */

const dashProfileImage = document.getElementById("profile-image");
const dashBoardBanner = document.getElementById("profile-banner-image");
const dashChannelName =  document.getElementById("channel-header");
const dashLocation = document.getElementById("location");
const dashSocialProof = document.getElementById("dashSocialProof");
const dashDescription = document.getElementById("dashDiscription");

burgerMenuBtn.addEventListener("click", () => {
    menu.classList.remove("-right-96");
    menu.classList.add("right-0");

    burgerMenuBtn.classList.add("hidden");
    burgerCancleBtn.classList.remove("hidden");
    burgerCancleBtn.classList.add("flex");
});

burgerCancleBtn.addEventListener(("click"), () => {
    burgerMenuBtn.classList.remove("hidden");
    burgerMenuBtn.classList.add("flex");
    burgerCancleBtn.classList.add("hidden");
    burgerCancleBtn.classList.remove("flex");

    menu.classList.remove("right-0");
    menu.classList.add("-right-96");
});

/* ======== main navigations =========== */

desktopNavButton.forEach((desktopBtn) => {
    desktopBtn.addEventListener("click", () => {

        desktopNavButton.forEach(btn => {
            btn.classList.remove("is-in-active-state-desktop");
        });

        desktopBtn.classList.add("is-in-active-state-desktop");

        const targetedSectionsThroughDataPage = desktopBtn.getAttribute("data-page");

        sections.forEach((section) => {
            if (section.id === targetedSectionsThroughDataPage) {
                section.classList.remove("hidden");
            }
            else {
                section.classList.add("hidden");
            }
        });
    });
});

mobileNavButtons.forEach(mobileBtns => {
    mobileBtns.addEventListener("click", () => {

        mobileNavButtons.forEach(btn => {
            btn.classList.remove("is-in-active-state");
        });
        mobileBtns.classList.add("is-in-active-state");

        const targetedSectionsThroughDataPage = mobileBtns.getAttribute("data-page");

        sections.forEach((section) => {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start' 
            });

            if (section.id === targetedSectionsThroughDataPage) {
                section.classList.remove("hidden");
            }
            else {
                section.classList.add("hidden");
            }

            if (mobileBottomNav.classList.contains("hidden")) {
                mobileBottomNav.classList.remove("hidden");
            }
            
        });
    });
});

chatbotMobileBtn.addEventListener("click", () => {
    mobileBottomNav.classList.remove("flex");
    mobileBottomNav.classList.add("hidden");

    getChatbotSection.classList.remove("hidden");
});

mobileBotBackButton.addEventListener("click", () => {
    getChatbotSection.classList.add("hidden");

    if (sections[0].classList.contains("hidden")) {
        sections[0].classList.remove("hidden");
    }

    mobileBottomNav.classList.remove("hidden");
    mobileBottomNav.classList.add("flex");
});

/* ============== Settings btn  =================== */
settingsButtons.forEach((settingsBtn) => {
    settingsBtn.addEventListener("click", () => {
        const getTargetedSettings = settingsBtn.getAttribute("data-page");

        settingsMenu.forEach((menu) => {
            if (menu.id === getTargetedSettings) {
                menu.classList.toggle("hidden");
            }
        });
    });
});

// Function to toggle personal channel buttons
const togglePersonalChannel = (display) => {
    personalChannelBtns.forEach(btn => {
        btn.classList.toggle("hidden", !display);
        btn.classList.toggle("flex", display);
    });
}

// Event listener for checkbox click
unlockChannelBtn.addEventListener("change", () => {
    const isChecked = unlockChannelBtn.checked;
    
    // Toggle button visibility based on checkbox state
    togglePersonalChannel(isChecked);

    // Save the checkbox state to localStorage
    localStorage.setItem("personalChannelVisible", isChecked);
});

/* ======================== inside the channel ==================================== */


// Initially hide the menu and apply scale-0
// Initial setup: Add the hidden class and scale/opacity classes
postMenu.classList.add("scale-0", "opacity-0", "transition-scale", "hidden");

// Toggle function to expand and collapse nav
addPostButton.addEventListener("click", () => {
    bioInput.value = "";
    bioInput.value = "";
    channelDescriptionInput.value = "";
    userLocationInput.value = "";
    
    if (postMenu.classList.contains("hidden")) {
        // Remove hidden to start the transition and show the menu
        postMenu.classList.remove("hidden");
        
        // Force reflow to ensure the transition starts
        postMenu.offsetHeight; 

        // Apply visible scale and opacity classes
        postMenu.classList.remove("scale-0", "opacity-0");
        postMenu.classList.add("scale-100", "opacity-100");
    } else {
        // Transition back to hidden
        postMenu.classList.remove("scale-100", "opacity-100");
        postMenu.classList.add("scale-0", "opacity-0");

        // Add event listener to wait for the transition to end, then add hidden
        postMenu.addEventListener("transitionend", function handleTransitionEnd() {
            postMenu.classList.add("hidden"); // Add hidden once transition is complete
            postMenu.removeEventListener("transitionend", handleTransitionEnd); // Clean up event listener
        });
    }
});


postBtns.forEach((postBtn) => {
    postBtn.addEventListener("click", () => {
        
        postBtns.forEach((btn) => {
            btn.classList.remove("active-status-post"); 
        });

        postBtn.classList.add("active-status-post");

        const getTargetAttribute = postBtn.getAttribute("data-page");

        postSections.forEach((sections) => {
            if (sections.id === getTargetAttribute) {
                sections.classList.remove("hidden");
            }
            else {
                sections.classList.add("hidden");
            }
        });
        
    });
});

profileSettingsBtns.forEach((settingBtns) => {
    settingBtns.addEventListener("click", () => {
        profileSettingsBtns.forEach((btns) => {
            personalDashboard.classList.add("hidden", "overflow-none");

            if (btns.classList.contains("is-in-active-state-desktop")) {
                btns.classList.remove("is-in-active-state-desktop");
            }
        });
        settingBtns.classList.add("is-in-active-state-desktop");

        // looping over each section that allows users to create something wether image or post
        const targetedSectionsThroughDataPage = settingBtns.getAttribute("data-page");

        createSections.forEach((sections) => {
            if (sections.id === targetedSectionsThroughDataPage) {
                sections.classList.remove("hidden");
            }
            else {
                sections.classList.add("hidden");
            }
        });

    });
});

personalChannelBtn.forEach((personalChanelBtn) => {
    personalChanelBtn.addEventListener("click", () => {
        if (personalDashboard.classList.contains("hidden")) {
            personalDashboard.classList.remove("hidden");
            createSections.forEach((sections) => {
                if (!sections.classList.contains("hidden")) {
                    sections.classList.add("hidden");
                }
            });
            profileSettingsBtns.forEach((buttons) => {
                if(buttons.classList.contains("is-in-active-state-desktop")) {
                    buttons.classList.remove("is-in-active-state-desktop");
                }
            });

        }
    })
})

/* ==================== Profile Form Logic ==================== */

profileForm.addEventListener("onsubmit", (e) => {
    e.preventDefault();

});

submitProfileChanges.addEventListener("click", () => {
    const userInput = bioInput.value;
    const channelDesc = channelDescriptionInput.value;
    const userLocation = userLocationInput.value;

    dashChannelName.textContent = `${userInput}`;
    dashDescription.textContent = `${channelDesc}`;
    dashLocation.textContent = `${userLocation}`;

    // Check if an image file is uploaded
    if (bannerUpload.files && bannerUpload.files[0]) {
        const file = bannerUpload.files[0];
        
        // Use FileReader to read the file as a Base64 string
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64Image = e.target.result;

            // Update dashBoardBanner with the uploaded image
            dashBoardBanner.src = base64Image;

            // Optionally, save the image to Local Storage
            localStorage.setItem("profileBannerImage", base64Image);
        };

        // Read the file as a Data URL (Base64)
        reader.readAsDataURL(file);
    };

    if (profileImageUpload.files && profileImageUpload.files[0]) {
        const profileImageFile = profileImageUpload.files[0];
        
        // Use FileReader to read the file as a Base64 string
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64Image = e.target.result;

            // Update dashBoardBanner with the uploaded image
            profileImageUpload.src = base64Image;

            // Optionally, save the image to Local Storage
            localStorage.setItem("profileImage", base64Image);
        };

        // Read the file as a Data URL (Base64)
        reader.readAsDataURL(profileImageFile);
    };
    
});

const createNewContainer = () => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.classList.add("text-gray-600", "font-medium");
    input.classList.add("w-full", "px-4", "py-2", "border", "rounded-md", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "mb-2");
    input.placeholder = "https://your-social-link.com";

    socialLinksContainer.append(label, input);
};

addSocialLinkBtn.addEventListener("click", createNewContainer);

// Check localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    // Retrieve stored visibility state from localStorage
    const storedVisibility = localStorage.getItem("personalChannelVisible") === "true";

    // Set checkbox state and button visibility
    unlockChannelBtn.checked = storedVisibility;
    togglePersonalChannel(storedVisibility);

    /* profile banners and dashboard */
    const savedImage = localStorage.getItem("profileBannerImage");
    const savedProfileImage = localStorage.getItem("profileImage");
    if (savedImage && savedProfileImage) {
        // If an image exists in Local Storage, display it
        dashBoardBanner.src = savedImage;
        dashProfileImage.src = savedProfileImage;
    }
});

/* ===================== Updating photo on form submission ============================= */

// Function to preview the photo
const previewPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
        const previewImage = document.getElementById('previewImage');
        previewImage.src = URL.createObjectURL(file);
        
        // Show the preview section
        document.getElementById('photoPreview').classList.remove('hidden');
    }
}

// Function to remove the photo preview
const removePhotoPreview = () => {
    document.getElementById('photoPreview').classList.add('hidden');
    document.getElementById('photoUpload').value = ""; // Clear the file input
}

// Function to handle form submission
document.getElementById('uploadForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the title value
    const title = document.querySelector('#title').value.trim();
    console.log(title);
    
    // Get the uploaded photo
    const photoUpload = document.getElementById('photoUpload').files[0];
    
    // Create a URL for the uploaded photo so it can be previewed
    const photoURL = URL.createObjectURL(photoUpload);
    
    // Create an HTML structure for the new photo entry
    const newPhotoItem = document.createElement('li');
    newPhotoItem.classList.add("mb-4", "p-4", "border", "rounded-lg", "shadow-sm", "bg-white");
    
    newPhotoItem.innerHTML = `
        <h3 class="text-lg font-semibold text-gray-800">${title}</h3>
        <img src="${photoURL}" alt="${title}" class="w-full rounded-md mt-2">
    `;
    
    // Append the new photo item to the photos list
    document.getElementById('personal-photos').appendChild(newPhotoItem);
    
    // Clear the form and preview
    document.getElementById('uploadForm').reset();
    removePhotoPreview();

    // Show the photos section if it's hidden
    document.getElementById('photos-section').classList.remove('hidden');
});



/* ========================= video ============================== */

// Function to preview video before upload
const previewVideo = (event) => {
    const videoFile = event.target.files[0];
    if (videoFile) {
        const videoURL = URL.createObjectURL(videoFile);
        const videoPreview = document.getElementById('videoPreview');
        document.getElementById('videoSource').src = videoURL;
        videoPreview.classList.remove('hidden');
        videoPreview.querySelector('video').load();
    }
}

// Function to remove video preview
const removePreview = () => {
    const videoPreview = document.getElementById('videoPreview');
    videoPreview.classList.add('hidden');
    document.getElementById('videoSource').src = '';
    document.getElementById('videoUpload').value = ''; // Clear the file input
}

document.getElementById('submit-btn').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve the title and description
    const title = document.getElementById('title').value.trim();
    const description = document.querySelectorAll('#title')[1].value.trim(); // Accessing the second title field (for description)

    // Get the uploaded video file
    const videoFile = document.getElementById('videoUpload').files[0];

    // Create a URL for the uploaded video
    const videoURL = URL.createObjectURL(videoFile);

    // Create a new list item for the video entry
    const newVideoItem = document.createElement('li');
    newVideoItem.classList.add("mt-5", "p-4", "border", "rounded-lg", "shadow-sm", "bg-white");

    // Set the inner HTML to include the title, description, and video
    newVideoItem.innerHTML = `
        <h3 class="text-lg font-semibold text-gray-800">${title.value}</h3>
        <p class="text-gray-600">${description.value}</p>
        <video controls class="w-full rounded-md mt-2">
            <source src="${videoURL}" type="${videoFile.type}">
            Your browser does not support the video tag.
        </video>
    `;

    // Append the new video item to the list
    document.getElementById('personal-videos').appendChild(newVideoItem);

    // Clear the form and preview
    document.getElementById('uploadForm').reset();
    removePreview();

    // Show the videos section if hidden
    document.getElementById('videos-section').classList.remove('hidden');
});



/* ========================= Blog ============================== */

document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const contentInput = document.getElementById("content");
    const imagesInput = document.getElementById("images");
    const updatePreviewButton = document.getElementById("updatePreview");
    const postBlogButton = document.getElementById("postBlog");
    const previewTitle = document.getElementById("previewTitle");
    const previewAuthor = document.getElementById("previewAuthor");
    const previewContent = document.getElementById("previewContent");
    const previewImagesContainer = document.getElementById("previewImages");
    const imagePreviewContainer = document.getElementById("imagePreviewContainer");
    const personalBlogsList = document.getElementById("personal-blogs");

    // Function to preview images when selected
    const handleImagePreview = (files, container) => {
        container.innerHTML = ""; // Clear any existing previews
        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imgElement = document.createElement("img");
                imgElement.src = e.target.result;
                imgElement.alt = "Selected image";
                imgElement.classList.add("h-24", "w-24", "object-cover", "rounded-md", "border", "border-gray-300", "mr-2", "mb-2");
                container.appendChild(imgElement);
            };
            reader.readAsDataURL(file);
        });
    }

    // Update preview section dynamically
    const updatePreview = () => {
        previewTitle.textContent = titleInput.value || "Blog Title Preview";
        previewAuthor.textContent = `Author: ${authorInput.value || "Preview Author"}`;
        previewContent.textContent = contentInput.value || "Blog content preview will appear here...";
        handleImagePreview(imagesInput.files, previewImagesContainer); // Preview selected images
    }

    // Event listener for the Update Preview button
    updatePreviewButton.addEventListener("click", updatePreview);

    // Function to create a new blog entry and display it in #personal-blogs
    const addBlogPost = () => {
        const blogTitle = titleInput.value;
        const blogAuthor = authorInput.value;
        const blogContent = contentInput.value;

        if (!blogTitle || !blogAuthor || !blogContent) {
            alert("Please fill out all fields before posting your blog.");
            return;
        }

        // Create a new blog entry element
        const blogEntry = document.createElement("li");
        blogEntry.classList.add("p-4", "border", "border-gray-300", "rounded-lg", "mb-4", "bg-white");

        // Add title, author, and content
        blogEntry.innerHTML = `
            <h3 class="text-xl font-bold">${blogTitle}</h3>
            <p class="text-sm text-gray-600">Author: ${blogAuthor}</p>
            <p class="text-gray-700">${blogContent}</p>
            <div class="flex flex-wrap mt-2" id="postedImages"></div>
        `;

        // Insert selected images into the blog entry
        const postedImagesContainer = blogEntry.querySelector("#postedImages");
        handleImagePreview(imagesInput.files, postedImagesContainer);

        // Append blog entry to the list
        personalBlogsList.appendChild(blogEntry);

        // Reset form fields and preview
        titleInput.value = "";
        authorInput.value = "";
        contentInput.value = "";
        imagesInput.value = null;
        imagePreviewContainer.innerHTML = ""; // Clear image preview container
        previewImagesContainer.innerHTML = ""; // Clear preview section images
        updatePreview();
    }

    // Event listener to post the blog when the Post Blog button is clicked
    postBlogButton.addEventListener("click", addBlogPost);

    // Update image preview when images are selected
    imagesInput.addEventListener("change", () => {
        handleImagePreview(imagesInput.files, imagePreviewContainer);
    });
});


/* ==================================================== Community ======================================= */

// Function to add tags dynamically
const tagsContainer = document.getElementById("tagsContainer");
const addTagButton = document.querySelector("#tagsContainer + button");

addTagButton.addEventListener("click", () => {
    const newTagInput = document.createElement("input");
    newTagInput.type = "text";
    newTagInput.placeholder = "e.g., Nature, Exploration";
    newTagInput.classList.add("w-full", "px-4", "py-2", "border", "rounded-md", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "mb-2");
    tagsContainer.appendChild(newTagInput);
});

// Image preview for upload
const imageUpload = document.getElementById("imageUpload");
const imagePreview = document.getElementById("imagePreview");
const previewImage = document.getElementById("previewImage");

const previewCommunityImage = (event) => {
    const file = event.target.files[0];
    if (file) {
        previewCommunityImage.src = URL.createObjectURL(file);
        imagePreview.classList.remove("hidden");
    }
}

imagePreview.querySelector("button").addEventListener("click", () => {
    imageUpload.value = ""; // Clear file input
    imagePreview.classList.add("hidden");
    previewCommunityImage.src = ""; // Reset image preview
});

// Handle form submission
document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const postTitle = document.getElementById("postTitle").value.trim();
    const postDescription = document.getElementById("postDescription").value.trim();

    // Get tag values
    const tags = Array.from(tagsContainer.querySelectorAll("input[type='text']"))
        .map(input => input.value.trim())
        .filter(tag => tag !== "");

    // Get image if uploaded
    const file = imageUpload.files[0];
    // ternary operator if file is true  then create an object otherwise objects null
    const imageUrl = file ? URL.createObjectURL(file) : null;

    // Validate title and description
    if (!postTitle || !postDescription) {
        alert("Please fill out the title and description.");
        return;
    }

    // Create a new list item for the community post
    const newPostItem = document.createElement("li");
    newPostItem.classList.add("mb-4", "p-4", "border", "rounded-lg", "shadow-sm", "bg-white");

    // Add content to the new post item
    newPostItem.innerHTML = `
        <h3 class="text-lg font-semibold text-gray-800">${postTitle}</h3>
        <p class="text-gray-600 mb-2">${postDescription}</p>
        ${imageUrl ? `<img src="${imageUrl}" class="w-full rounded-md mb-4" alt="Post image">` : ""}
        <div class="flex flex-wrap gap-2">
            ${tags.map(tag => `<span class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">${tag}</span>`).join("")}
        </div>
    `;

    // Append the new post item to the community list
    document.getElementById("personal-community").appendChild(newPostItem);

    // Reset the form and preview
    document.getElementById("postForm").reset();
    imagePreview.classList.add("hidden");
    previewCommunityImage.src = ""; // Clear preview image
    tagsContainer.innerHTML = ""; // Clear all tag inputs except the original

    // Show the community section if hidden
    document.getElementById("community-section").classList.remove("hidden");
});

/* =============================== explorer blog post ================================ */
document.querySelectorAll(".blog-post-trend-btn").forEach((trendBtns) => {
    trendBtns.addEventListener("click", () => {
        document.querySelectorAll(".blog-post-trend-btn").forEach((btns) => {
            btns.classList.remove("border");
        });
        trendBtns.classList.add("border");
    })
});
