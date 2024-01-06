<?php
$folder = "C:/Users/tesle/OneDrive/Documents/Resume/V3"; // Replace with the actual folder path
$files = scandir($folder);

echo "<ul>";
foreach ($files as $file) {
    if ($file != "." && $file != "..") {
        echo "<li>$file</li>";
    }
}
echo "</ul>";
?>