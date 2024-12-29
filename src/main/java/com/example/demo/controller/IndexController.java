package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
	
	@GetMapping("/")
	public String Inicio(Model model) {
		model.addAttribute("titulo", "Inicio");		
		return "index";
		
	}
	
	@GetMapping("/contact")
	public String Contact(Model model) {
		model.addAttribute("titulo", "Contacto");		
		return "contact";
		
	}	
	
	@GetMapping("/catalogo")
	public String Catalogo(Model model) {
		model.addAttribute("titulo", "Catálogo");		
		return "catalogo";
		
	}	
	
	@GetMapping("/about")
	public String About(Model model) {
		model.addAttribute("titulo","Sobre nosotros");		
		return "about";		
		
	}
	
	@GetMapping("/chatbot")
	public String Chatbot(Model model) {
		model.addAttribute("titulo","Chatbot");		
		return "chatbot";		
		
	}	
	
	@GetMapping("/login")
	public String Login(Model model) {
		model.addAttribute("titulo","Inicio de Sesión");		
		return "login";		
		
	}	
	
}
