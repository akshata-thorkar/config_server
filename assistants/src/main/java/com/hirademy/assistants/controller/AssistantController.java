package com.hirademy.assistants.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.hirademy.assistants.entity.Assistant;
import com.hirademy.assistants.service.AssistantService;

@RestController
@RequestMapping("/assistant")
public class AssistantController {
	@Autowired
    private AssistantService assistantService;

    @PostMapping
    public ResponseEntity<Assistant> createAssistant(@RequestBody Assistant assistant) {
        Assistant createdAssistant = assistantService.createAssistant(assistant);
        return new ResponseEntity<>(createdAssistant, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Assistant> getAssistantById(@PathVariable("id") Long id) {
        Assistant assistant = assistantService.getAssistantById(id);
        return new ResponseEntity<>(assistant, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Assistant> updateAssistant(@PathVariable("id") Long id, @RequestBody Assistant assistantDetails) {
        Assistant updatedAssistant = assistantService.updateAssistant(id, assistantDetails);
        return new ResponseEntity<>(updatedAssistant, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAssistant(@PathVariable("id") Long id) {
        assistantService.deleteAssistant(id);
        return ResponseEntity.ok().build();
    }

}
