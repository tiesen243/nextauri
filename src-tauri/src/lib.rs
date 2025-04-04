#[tauri::command]
fn halo(name: &str) -> String {
    format!("Halo, {}!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![halo])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

